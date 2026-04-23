import { lineChart, months } from "@/src/constants/adminDashboardData";

const RevenueChart = () => {
  const maxValue = Math.max(...lineChart);

  const points = lineChart
    .map((value, index) => {
      const x = 30 + index * 46;
      const y = 210 - (value / maxValue) * 150;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `30,210 ${points} ${30 + (lineChart.length - 1) * 46},210`;

  return (
    <div className="overflow-hidden rounded-lg bg-slate-50">
      <svg viewBox="0 0 560 230" className="h-[170px] w-full md:h-[190px]">
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`h-${i}`}
            x1="30"
            y1={30 + i * 45}
            x2="540"
            y2={30 + i * 45}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {months.slice(0, 11).map((_, i) => {
          const x = 30 + i * 46;

          return (
            <line
              key={`v-${i}`}
              x1={x}
              y1="20"
              x2={x}
              y2="210"
              stroke="#edf2f7"
              strokeWidth="1"
            />
          );
        })}

        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <polygon points={areaPoints} fill="url(#areaFill)" />
        <polyline fill="none" stroke="#38bdf8" strokeWidth="3" points={points} />

        {lineChart.map((value, index) => {
          const cx = 30 + index * 46;
          const cy = 210 - (value / maxValue) * 150;

          return (
            <g key={index}>
              <circle cx={cx} cy={cy} r="4" fill="#38bdf8" />

              {index === 9 ? (
                <>
                  <rect x={cx - 22} y={cy - 45} rx="6" ry="6" width="44" height="24" fill="#475569" />
                  <text x={cx} y={cy - 29} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">
                    415M
                  </text>
                </>
              ) : null}
            </g>
          );
        })}

        <text x="8" y="32" fontSize="11" fill="#6b7280">400M</text>
        <text x="8" y="77" fontSize="11" fill="#6b7280">300M</text>
        <text x="8" y="122" fontSize="11" fill="#6b7280">200M</text>
        <text x="8" y="167" fontSize="11" fill="#6b7280">100M</text>
        <text x="20" y="212" fontSize="11" fill="#6b7280">0</text>

        {months.slice(0, 11).map((month, i) => (
          <text
            key={month + i}
            x={30 + i * 46}
            y="225"
            textAnchor="middle"
            fontSize="11"
            fill="#6b7280"
          >
            {month}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default RevenueChart;