import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const RAW_SVG_URL = 'https://raw.githubusercontent.com/Tharun4743/Tharun4743/main/assets/contribution-chart.svg';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

function fetchJson(url, token = '') {
  return new Promise((resolve, reject) => {
    const headers = {
      'User-Agent': 'Tharunkumar-Portfolio-Sync',
      'Accept': 'application/vnd.github.v3+json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const req = https.get(
      url,
      { headers },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        });
      }
    );

    req.on('error', reject);
    req.setTimeout(8000, () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve(data));
      }
    );
    req.on('error', reject);
    req.setTimeout(8000, () => {
      req.destroy();
      reject(new Error('HTML request timed out'));
    });
  });
}

async function syncContributions() {
  console.log('[sync-contributions] Starting comprehensive GitHub telemetry sync...');

  // 1. Read existing stats fallback if available
  let prevStats = {
    followers: 31,
    repos: 31,
    commits: 5421,
    totalContributions: 5630,
  };

  const gitStatsJsonPath = toAbsolute('public/git-stats.json');
  if (fs.existsSync(gitStatsJsonPath)) {
    try {
      const parsedPrev = JSON.parse(fs.readFileSync(gitStatsJsonPath, 'utf8'));
      if (parsedPrev.commits) prevStats.commits = parsedPrev.commits;
      if (parsedPrev.repos) prevStats.repos = parsedPrev.repos;
      if (parsedPrev.followers) prevStats.followers = parsedPrev.followers;
      if (parsedPrev.totalContributions) prevStats.totalContributions = parsedPrev.totalContributions;
    } catch {
      // ignore
    }
  }

  // 2. Fetch User Profile Data (Public Repos & Followers)
  let liveRepos = prevStats.repos;
  let liveFollowers = prevStats.followers;
  try {
    console.log('[sync-contributions] Fetching user profile from GitHub API...');
    const userData = await fetchJson('https://api.github.com/users/Tharun4743', GITHUB_TOKEN);
    if (typeof userData.public_repos === 'number') {
      liveRepos = userData.public_repos;
    }
    if (typeof userData.followers === 'number') {
      liveFollowers = userData.followers;
    }
    console.log(`[sync-contributions] User profile: repos=${liveRepos}, followers=${liveFollowers}`);
  } catch (err) {
    console.warn(`[sync-contributions] User profile fetch failed (${err.message}). Using fallback: repos=${liveRepos}, followers=${liveFollowers}`);
  }

  // 3. Fetch Lifetime Commits Total Count
  let liveCommits = prevStats.commits;
  try {
    console.log('[sync-contributions] Fetching commit count from GitHub Search API...');
    const commitsData = await fetchJson('https://api.github.com/search/commits?q=author:Tharun4743', GITHUB_TOKEN);
    if (typeof commitsData.total_count === 'number' && commitsData.total_count > 0) {
      liveCommits = commitsData.total_count;
    }
    console.log(`[sync-contributions] Lifetime commits count: ${liveCommits}`);
  } catch (err) {
    console.warn(`[sync-contributions] Commits fetch failed (${err.message}). Using fallback: commits=${liveCommits}`);
  }

  // 4. Fetch Latest Contribution Chart SVG
  console.log('[sync-contributions] Fetching latest contribution chart SVG...');
  let svgText = '';
  try {
    const res = await fetch(RAW_SVG_URL, {
      headers: {
        'User-Agent': 'Tharunkumar-Portfolio-Sync',
        'Cache-Control': 'no-cache',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    svgText = await res.text();
  } catch (err) {
    console.warn(`[sync-contributions] Could not fetch from GitHub raw (${err.message}). Trying jsDelivr CDN...`);
    try {
      const cdnRes = await fetch('https://cdn.jsdelivr.net/gh/Tharun4743/Tharun4743@main/assets/contribution-chart.svg', {
        headers: { 'User-Agent': 'Tharunkumar-Portfolio-Sync' },
      });
      if (!cdnRes.ok) throw new Error(`HTTP ${cdnRes.status}`);
      svgText = await cdnRes.text();
      console.log('[sync-contributions] Successfully retrieved contribution-chart.svg from jsDelivr CDN.');
    } catch (cdnErr) {
      console.warn(`[sync-contributions] CDN fetch failed (${cdnErr.message}). Checking local fallback...`);
      const localSvgPath = toAbsolute('public/contribution-chart.svg');
      if (fs.existsSync(localSvgPath)) {
        svgText = fs.readFileSync(localSvgPath, 'utf8');
        console.log('[sync-contributions] Using existing public/contribution-chart.svg');
      } else {
        throw new Error('No remote, CDN, or local contribution-chart.svg available.');
      }
    }
  }

  // 5. Scrape Exact Daily Tooltip Counts and Total from GitHub Profile Contributions Page
  let realDateCounts = {};
  let totalLiveContributions = prevStats.totalContributions || 5630;
  try {
    const html = await fetchHtml('https://github.com/users/Tharun4743/contributions');
    if (html) {
      const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g;
      const tdRegex = /<td[^>]*data-date="([^"]+)"[^>]*id="([^"]+)"/g;

      const idToDate = {};
      let match;
      while ((match = tdRegex.exec(html)) !== null) {
        idToDate[match[2]] = match[1];
      }

      while ((match = tooltipRegex.exec(html)) !== null) {
        const id = match[1];
        const text = match[2].trim();
        const date = idToDate[id];
        if (date) {
          const countMatch = text.match(/^(\d+)\s+contribution/i);
          const count = countMatch ? parseInt(countMatch[1], 10) : 0;
          realDateCounts[date] = { count, text };
        }
      }

      const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
      if (totalMatch) {
        totalLiveContributions = parseInt(totalMatch[1].replace(/,/g, ''), 10);
      } else {
        const sum = Object.values(realDateCounts).reduce((acc, d) => acc + d.count, 0);
        if (sum > 0) totalLiveContributions = sum;
      }
      console.log(`[sync-contributions] Scraped ${Object.keys(realDateCounts).length} daily tooltip counts. Live Total: ${totalLiveContributions}`);
    }
  } catch (err) {
    console.warn(`[sync-contributions] Could not scrape GitHub tooltips (${err.message}). Using SVG counts.`);
  }

  // Update SVG with real counts and titles before saving
  if (Object.keys(realDateCounts).length > 0) {
    svgText = svgText.replace(
      /<rect class="day level-(\d+)"([^>]*?)data-date="([^"]+)" data-count="(\d+)"([^>]*?)><title>[^<]+<\/title><\/rect>/g,
      (match, level, pre, date, oldCount, post) => {
        const real = realDateCounts[date];
        const count = real !== undefined ? real.count : oldCount;
        const title = real !== undefined ? real.text : `${count} contribution${count === 1 ? '' : 's'} on ${date}`;
        return `<rect class="day level-${level}"${pre}data-date="${date}" data-count="${count}"${post}><title>${title}</title></rect>`;
      }
    );
  }

  // 6. Save to public/contribution-chart.svg
  const publicSvgPath = toAbsolute('public/contribution-chart.svg');
  fs.writeFileSync(publicSvgPath, svgText, 'utf8');
  console.log(`[sync-contributions] Updated ${publicSvgPath} (${(Buffer.byteLength(svgText) / 1024).toFixed(1)} KB)`);

  // 7. Parse Month Labels
  const monthRegex = /<text x="([^"]+)" y="12" class="month-text">([^<]+)<\/text>/g;
  const months = [];
  let m;
  while ((m = monthRegex.exec(svgText)) !== null) {
    months.push({
      x: parseFloat(m[1]),
      label: m[2],
    });
  }

  // 8. Parse Cell Rectangles & Enrich with exact GitHub telemetry
  const rectRegex = /<rect class="day level-(\d+)"[^>]*?x="([^"]+)" y="([^"]+)"[^>]*?data-date="([^"]+)" data-count="(\d+)"(?:><title>([^<]+)<\/title>)?/g;
  const cells = [];
  while ((m = rectRegex.exec(svgText)) !== null) {
    const level = parseInt(m[1], 10);
    const x = parseFloat(m[2]);
    const y = parseFloat(m[3]);
    const date = m[4];
    const rawCount = parseInt(m[5], 10);
    const real = realDateCounts[date];
    const count = real !== undefined ? real.count : rawCount;
    const title = real !== undefined ? real.text : (m[6] || `${count} contribution${count === 1 ? '' : 's'} on ${date}`);
    cells.push({ level, x, y, date, count, title });
  }

  const nonZero = cells.filter((c) => c.count > 0);
  const totalContribs = totalLiveContributions || cells.reduce((sum, c) => sum + c.count, 0);
  console.log(`[sync-contributions] Total Contributions (53w): ${totalContribs} across ${nonZero.length} active days.`);

  const nowIso = new Date().toISOString();

  // 9. Save public/git-stats.json (zero rate-limit dynamic endpoint for clients)
  const gitStatsData = {
    followers: liveFollowers,
    repos: liveRepos,
    commits: liveCommits,
    totalContributions: totalContribs,
    activeDays: nonZero.length,
    lastSynced: nowIso,
  };
  fs.writeFileSync(gitStatsJsonPath, JSON.stringify(gitStatsData, null, 2), 'utf8');
  console.log(`[sync-contributions] Updated ${gitStatsJsonPath} with:`, gitStatsData);

  // 10. Generate src/contributionData.ts
  const dataTsContent = `// Auto-generated 53-week contribution data & GitHub live statistics
// Last synced: ${nowIso}
export interface ContributionCell {
  level: number;
  x: number;
  y: number;
  date: string;
  count: number;
  title: string;
}

export interface ContributionMonth {
  x: number;
  label: string;
}

export interface GitStats {
  followers: number;
  repos: number;
  commits: number;
  totalContributions: number;
  activeDays: number;
  lastSynced: string;
}

export const GITHUB_STATS: GitStats = ${JSON.stringify(gitStatsData, null, 2)};

export const TOTAL_CONTRIBUTIONS = ${totalContribs};

export const CONTRIBUTION_MONTHS: ContributionMonth[] = ${JSON.stringify(months, null, 2)};

export const CONTRIBUTION_CELLS: ContributionCell[] = ${JSON.stringify(cells, null, 2)};
`;

  const dataTsPath = toAbsolute('src/contributionData.ts');
  fs.writeFileSync(dataTsPath, dataTsContent, 'utf8');
  console.log(`[sync-contributions] Updated ${dataTsPath} successfully.`);
}

syncContributions().catch((err) => {
  console.warn('[sync-contributions] Telemetry sync skipped on CI (using cached data):', err.message);
  process.exit(0);
});
