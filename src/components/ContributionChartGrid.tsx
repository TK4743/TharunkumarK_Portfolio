import React, { useMemo } from 'react';
import { CONTRIBUTION_CELLS, CONTRIBUTION_MONTHS } from '../contributionData';

interface ContributionChartGridProps {
  primaryColor: string;
  className?: string;
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

export const ContributionChartGrid: React.FC<ContributionChartGridProps> = ({
  primaryColor,
  className = '',
}) => {
  const { r, g, b } = useMemo(() => hexToRgb(primaryColor), [primaryColor]);

  const ramp = useMemo(() => {
    return [
      '#ebedf0',
      `rgba(${r}, ${g}, ${b}, 0.28)`,
      `rgba(${r}, ${g}, ${b}, 0.55)`,
      `rgba(${r}, ${g}, ${b}, 0.80)`,
      `rgba(${r}, ${g}, ${b}, 1.00)`,
    ];
  }, [r, g, b]);

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
        {CONTRIBUTION_MONTHS.map((m, idx) => (
          <text key={idx} x={m.x} y={12} className="chart-month-text">
            {m.label}
          </text>
        ))}
      </g>

      {/* Weekday Labels */}
      <g className="weekdays">
        <text x={4} y={40.5} className="chart-wday-text">Mon</text>
        <text x={4} y={65.5} className="chart-wday-text">Wed</text>
        <text x={4} y={90.5} className="chart-wday-text">Fri</text>
      </g>

      {/* Contribution Grid (53 Weeks x 7 Days) */}
      <g className="grid">
        {CONTRIBUTION_CELLS.map((cell, idx) => {
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
