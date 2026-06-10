import DashboardStats from "../DashboardStats";
import MiniChartSection from "../MiniChartSection";
import RecentActivitiesSection from "../RecentActivitiesSection";
import RevenueSection from "../RevenueSection";
import TopMoviesSection from "../TopMoviesSection";

const AdminWrapper = () => {
  return (
    <div className=" bg-[#f3f5f9] p-4 md:p-6">
      <div className="mx-auto">
        <h1 className="mb-10 text-2xl font-bold text-slate-800 md:text-[22px]">
          Trang Quản Trị Cinevora
        </h1>

        <DashboardStats />

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RevenueSection />
          </div>

          <div>
            <TopMoviesSection />
          </div>

          <div className="xl:col-span-2">
            <RecentActivitiesSection />
          </div>

          <div>
            <MiniChartSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWrapper;