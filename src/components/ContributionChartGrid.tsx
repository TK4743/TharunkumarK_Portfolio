import React, { useMemo, useState, useEffect } from 'react';
import {
  CONTRIBUTION_CELLS,
  CONTRIBUTION_MONTHS,
  ContributionCell,
  ContributionMonth,
} from '../contributionData';

interface ContributionSyncStats {
  total: number;
  isLive: boolean;
  activeDays: number;
}

interface ContributionChartGridProps {
  primaryColor: string;
  className?: string;
  onSyncStatus?: (stats: ContributionSyncStats) => void;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let clean = (hex || '#059669').replace('#', '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  const num = parseInt(clean, 16);
  if (isNaN(num)) return { r: 5, g: 150, b: 105 };
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function parseContributionSvg(svgText: string): {
  cells: ContributionCell[];
  months: ContributionMonth[];
} | null {
  try {
    const monthRegex = /<text x="([^"]+)" y="12" class="month-text">([^<]+)<\/text>/g;
    const months: ContributionMonth[] = [];
    let m: RegExpExecArray | null;
    while ((m = monthRegex.exec(svgText)) !== null) {
      months.push({ x: parseFloat(m[1]), label: m[2] });
    }

    const rectRegex =
      /<rect class="day level-(\d+)"[^>]*?x="([^"]+)" y="([^"]+)"[^>]*?data-date="([^"]+)" data-count="(\d+)"(?:><title>([^<]+)<\/title>)?/g;
    const cells: ContributionCell[] = [];
    while ((m = rectRegex.exec(svgText)) !== null) {
      const level = parseInt(m[1], 10);
      const x = parseFloat(m[2]);
      const y = parseFloat(m[3]);
      const date = m[4];
      const count = parseInt(m[5], 10);
      const title = m[6] || `${count} contribution${count === 1 ? '' : 's'} on ${date}`;
      cells.push({ level, x, y, date, count, title });
    }

    if (cells.length > 0) {
      return { cells, months: months.length > 0 ? months : CONTRIBUTION_MONTHS };
    }
  } catch (err) {
    console.warn('[ContributionChartGrid] SVG parse warning:', err);
  }
  return null;
}

export const ContributionChartGrid: React.FC<ContributionChartGridProps> = ({
  primaryColor,
  className = '',
  onSyncStatus,
}) => {
  const [cells, setCells] = useState<ContributionCell[]>(CONTRIBUTION_CELLS);
  const [months, setMonths] = useState<ContributionMonth[]>(CONTRIBUTION_MONTHS);
  const [isLive, setIsLive] = useState(false);

  const { r, g, b } = useMemo(() => hexToRgb(primaryColor), [primaryColor]);

  const ramp = useMemo(() => {
    // Enhanced high-contrast dark color ramp
    // Level 0: Clean slate-200 base for clear distinction on light backgrounds
    // Level 1: Well-pigmented visible tone (45% opacity)
    // Level 2: Rich, vibrant medium-high activity (72% opacity)
    // Level 3: Deep saturated primary (92% opacity)
    // Level 4: Maximum darkness & saturation (28% deeper than base primary)
    const dR = Math.max(0, Math.round(r * 0.72));
    const dG = Math.max(0, Math.round(g * 0.72));
    const dB = Math.max(0, Math.round(b * 0.72));

    return [
      '#e2e8f0',
      `rgba(${r}, ${g}, ${b}, 0.45)`,
      `rgba(${r}, ${g}, ${b}, 0.72)`,
      `rgba(${r}, ${g}, ${b}, 0.92)`,
      `rgb(${dR}, ${dG}, ${dB})`,
    ];
  }, [r, g, b]);

  // Live GitHub dynamic sync on client mount
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchLiveContributions = async () => {
      // 1. Primary remote live source (GitHub Actions automatic sync)
      const primaryUrl = `https://raw.githubusercontent.com/Tharun4743/Tharun4743/main/assets/contribution-chart.svg?t=${Date.now()}`;
      // 2. Local fallback static asset
      const fallbackUrl = `/contribution-chart.svg?t=${Date.now()}`;

      const tryFetch = async (url: string) => {
        const res = await fetch(url, {
          signal: controller.signal,
          headers: { 'Cache-Control': 'no-cache' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.text();
      };

      try {
        let svgText = '';
        try {
          svgText = await tryFetch(primaryUrl);
        } catch {
          svgText = await tryFetch(fallbackUrl);
        }

        const parsed = parseContributionSvg(svgText);
        if (parsed && isMounted) {
          setCells(parsed.cells);
          if (parsed.months.length > 0) {
            setMonths(parsed.months);
          }
          setIsLive(true);

          if (onSyncStatus) {
            const total = parsed.cells.reduce((acc, c) => acc + c.count, 0);
            const activeDays = parsed.cells.filter((c) => c.count > 0).length;
            onSyncStatus({ total, isLive: true, activeDays });
          }
        }
      } catch (err) {
        if (isMounted) {
          // If network fetch fails, report stats from initial fallback cells
          if (onSyncStatus) {
            const total = CONTRIBUTION_CELLS.reduce((acc, c) => acc + c.count, 0);
            const activeDays = CONTRIBUTION_CELLS.filter((c) => c.count > 0).length;
            onSyncStatus({ total, isLive: false, activeDays });
          }
        }
      }
    };

    fetchLiveContributions();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [onSyncStatus]);

  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 706.5 123.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none max-w-full ${className}`}
      style={{
        transition: 'all 0.3s ease',
      }}
      aria-label="GitHub 53-Week Contribution Activity Heatmap"
      role="img"
    >
      <style>{`
        .chart-month-text { font: 600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; fill: #64748b; }
        .chart-wday-text { font: 600 9px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; fill: #64748b; }
        .chart-cell { shape-rendering: geometricPrecision; transition: fill 0.25s ease, stroke 0.2s ease, transform 0.15s ease; cursor: pointer; }
        .chart-cell:hover { stroke: ${primaryColor}; stroke-width: 1.5px; }
      `}</style>

      {/* Month Labels */}
      <g className="months">
        {months.map((m, idx) => (
          <text key={idx} x={m.x} y={12} className="chart-month-text">
            {m.label}
          </text>
        ))}
      </g>

      {/* Weekday Labels */}
      <g className="weekdays">
        <text x={4} y={40.5} className="chart-wday-text">
          Mon
        </text>
        <text x={4} y={65.5} className="chart-wday-text">
          Wed
        </text>
        <text x={4} y={90.5} className="chart-wday-text">
          Fri
        </text>
      </g>

      {/* Contribution Grid (53 Weeks x 7 Days) */}
      <g className="grid">
        {cells.map((cell, idx) => {
          const fill = ramp[cell.level] || ramp[0];
          return (
            <rect
              key={idx}
              className={`chart-cell level-${cell.level}`}
              width={10}
              height={10}
              x={cell.x}
              y={cell.y}
              rx={2}
              ry={2}
              fill={fill}
              data-date={cell.date}
              data-count={cell.count}
            >
              <title>{cell.title}</title>
            </rect>
          );
        })}
      </g>
    </svg>
  );
};

export default ContributionChartGrid;
