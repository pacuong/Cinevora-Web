import SectionCard from "../SectionCard";
import MiniBarChart from "../MiniBarChart";

const MiniChartSection = () => {
  return (
    <SectionCard title="Top Phim Được Xem Nhiều Nhất" action="Xem tất cả">
      <MiniBarChart />
    </SectionCard>
  );
};

export default MiniChartSection;