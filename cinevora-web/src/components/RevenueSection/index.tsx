import RevenueChart from "../RevenueChart";
import SectionCard from "../SectionCard";

const RevenueSection = () => {
  return (
    <SectionCard title="Thống Kê Doanh Thu" action="Xem tất cả">
      <RevenueChart />
    </SectionCard>
  );
};

export default RevenueSection;