import { LucideIcon } from "lucide-react";

type Activity = {
  icon: LucideIcon;
  text: string;
  time: string;
  color: string;
};

type ActivityItemProps = {
  activity: Activity;
};

const ActivityItem = ({ activity }: ActivityItemProps) => {
  const Icon = activity.icon;

  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-100 p-3 transition hover:bg-slate-50">
      <div className={`rounded-md p-2 text-white ${activity.color}`}>
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[16px] text-slate-700">
          <span className="font-semibold"></span>{" "}
          {activity.text.replace(/^Admin\\s/, "")}
        </div>
        <div className="text-sm text-slate-400">Admin</div>
      </div>

      <div className="whitespace-nowrap text-sm text-slate-400">
        {activity.time}
      </div>
    </div>
  );
};

export default ActivityItem;