import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const RAW_SVG_URL = 'https://raw.githubusercontent.com/Tharun4743/Tharun4743/main/assets/contribution-chart.svg';

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
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    svgText = await res.text();
  } catch (err) {
    console.warn(`[sync-contributions] Could not fetch from remote (${err.message}). Checking local fallback...`);
    const localSvgPath = path.resolve(__dirname, '../../../Tharun4743/assets/contribution-chart.svg');
    if (fs.existsSync(localSvgPath)) {
      svgText = fs.readFileSync(localSvgPath, 'utf8');
      console.log('[sync-contributions] Using local Tharun4743/assets/contribution-chart.svg');
    } else {
      throw new Error('No remote or local contribution-chart.svg available.');
    }
  }

  // 1. Save to public/contribution-chart.svg
  const publicSvgPath = toAbsolute('public/contribution-chart.svg');
  fs.writeFileSync(publicSvgPath, svgText, 'utf8');
  console.log(`[sync-contributions] Updated ${publicSvgPath} (${(Buffer.byteLength(svgText) / 1024).toFixed(1)} KB)`);

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

  // 3. Parse Cells
  const rectRegex = /<rect class="day level-(\d+)"[^>]*?x="([^"]+)" y="([^"]+)"[^>]*?data-date="([^"]+)" data-count="(\d+)"(?:><title>([^<]+)<\/title>)?/g;
  const cells = [];
  while ((m = rectRegex.exec(svgText)) !== null) {
    const level = parseInt(m[1], 10);
    const x = parseFloat(m[2]);
    const y = parseFloat(m[3]);
    const date = m[4];
    const count = parseInt(m[5], 10);
    const title = m[6] || `${count} contribution${count === 1 ? '' : 's'} on ${date}`;
    cells.push({ level, x, y, date, count, title });
  }

  console.log(`[sync-contributions] Extracted ${months.length} month labels and ${cells.length} contribution cells.`);

  const nonZero = cells.filter((c) => c.count > 0);
  const totalContribs = cells.reduce((sum, c) => sum + c.count, 0);
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
