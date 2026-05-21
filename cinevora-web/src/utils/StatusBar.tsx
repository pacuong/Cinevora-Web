type UserStatus = "Hoạt động" | "Đã khóa";

type StatusBadgeProps = {
  status: UserStatus;
};

const StatusBar = ({ status }: StatusBadgeProps) => {
  const styleMap: Record<UserStatus, string> = {
    "Hoạt động": "bg-emerald-100 text-emerald-600",
    "Đã khóa": "bg-rose-100 text-rose-500",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${styleMap[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBar;