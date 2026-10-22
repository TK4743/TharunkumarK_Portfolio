import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const RAW_SVG_URL = 'https://raw.githubusercontent.com/Tharun4743/Tharun4743/main/assets/contribution-chart.svg';

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
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
      )
      .on('error', reject);
  });
}

async function syncContributions() {
  console.log('[sync-contributions] Fetching latest contribution chart SVG from GitHub...');
  
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
        headers: { 'User-Agent': 'Tharunkumar-Portfolio-Sync' }
      });
      if (!cdnRes.ok) throw new Error(`HTTP ${cdnRes.status}`);
      svgText = await cdnRes.text();
      console.log('[sync-contributions] Successfully retrieved contribution-chart.svg from jsDelivr CDN.');
    } catch (cdnErr) {
      console.warn(`[sync-contributions] CDN fetch failed (${cdnErr.message}). Checking local fallback...`);
      const localSvgPath = path.resolve(__dirname, '../../Tharun4743/assets/contribution-chart.svg');
      if (fs.existsSync(localSvgPath)) {
        svgText = fs.readFileSync(localSvgPath, 'utf8');
        console.log('[sync-contributions] Using local Tharun4743/assets/contribution-chart.svg');
      } else {
        throw new Error('No remote, CDN, or local contribution-chart.svg available.');
      }
    }
  }

  // Fetch exact daily tooltip counts and total from GitHub contributions page
  let realDateCounts = {};
  let totalLiveContributions = 3078;
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
  // Update svgText with real counts and titles before saving
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

  // 1. Save to public/contribution-chart.svg
  const publicSvgPath = toAbsolute('public/contribution-chart.svg');
  fs.writeFileSync(publicSvgPath, svgText, 'utf8');
  console.log(`[sync-contributions] Updated ${publicSvgPath} with verified per-cell counts (${(Buffer.byteLength(svgText) / 1024).toFixed(1)} KB)`);

  // 2. Parse Months
  const monthRegex = /<text x="([^"]+)" y="12" class="month-text">([^<]+)<\/text>/g;
  const months = [];
  let m;
  while ((m = monthRegex.exec(svgText)) !== null) {
    months.push({
      x: parseFloat(m[1]),
      label: m[2],
    });
  }

  // 3. Parse Cells & Enrich with exact GitHub telemetry
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

  console.log(`[sync-contributions] Extracted ${months.length} month labels and ${cells.length} contribution cells.`);

  const nonZero = cells.filter((c) => c.count > 0);
  const totalContribs = totalLiveContributions || cells.reduce((sum, c) => sum + c.count, 0);
  console.log(`[sync-contributions] Total Contributions (53w): ${totalContribs} across ${nonZero.length} active days.`);

  // 4. Generate src/contributionData.ts
  const dataTsContent = `// Auto-generated 53-week contribution data extracted from native SVG visualizer
// Last synced: ${new Date().toISOString()}
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

export const TOTAL_CONTRIBUTIONS = ${totalContribs};

export const CONTRIBUTION_MONTHS: ContributionMonth[] = ${JSON.stringify(months, null, 2)};

export const CONTRIBUTION_CELLS: ContributionCell[] = ${JSON.stringify(cells, null, 2)};
`;

  const dataTsPath = toAbsolute('src/contributionData.ts');
  fs.writeFileSync(dataTsPath, dataTsContent, 'utf8');
  console.log(`[sync-contributions] Updated ${dataTsPath} successfully.`);
}

syncContributions().catch((err) => {
  console.error('[sync-contributions] Failed:', err);
  process.exit(1);
});
