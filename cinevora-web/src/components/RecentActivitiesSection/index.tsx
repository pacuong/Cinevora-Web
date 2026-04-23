import { recentActivities } from "@/src/constants/adminDashboardData";
import SectionCard from "../SectionCard";
import ActivityItem from "../ActivityItem";

const RecentActivitiesSection = () => {
  return (
    <SectionCard title="Hoạt Động Gần Đây" action="Xem tất cả">
      <div className="space-y-3">
        {recentActivities.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))}
      </div>
    </SectionCard>
  );
};

export default RecentActivitiesSection;