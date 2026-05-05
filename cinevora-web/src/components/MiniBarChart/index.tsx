import { barChart } from "@/src/constants/adminDashboardData";

const MiniBarChart = () => {
  const max = Math.max(...barChart);
  const labels = ["Avatar 2", "Doctor Strange 2", "Spider-Man NMA", "Fast Punious 9", "Fast Furious 9"];

  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <div className="mb-2 flex h-[150px] items-end gap-4 border-b border-slate-200 px-2 pt-3">
        {barChart.map((item, index) => (
          <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
            <div
              className="w-full max-w-[48px] rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400"
              style={{ height: `${(item / max) * 115}px` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2 text-center text-[11px] leading-4 text-slate-600">
        {labels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>
    </div>
  );
};

export default MiniBarChart;