type StatCardProps = {
  title: string;
  value: string;
  subText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  subTextColor: string;
};

const StatCard = ({
  title,
  value,
  subText,
  icon: Icon,
  iconBg,
  iconColor,
  subTextColor,
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-[#eef0f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon className={`h-7 w-7 ${iconColor}`} />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-1 text-[22px] font-bold leading-none text-slate-900">
            {value}
          </h3>
          <p className={`mt-2 text-sm font-medium ${subTextColor}`}>{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;