import { ShowtimeStatus } from "@/src/utils/showtimes";

type Props = {
  status: ShowtimeStatus;
};

const ShowtimeStatusBadge = ({ status }: Props) => {
  const styleMap: Record<ShowtimeStatus, string> = {
    "Đang mở bán": "bg-emerald-100 text-emerald-600",
    "Hết vé": "bg-rose-100 text-rose-500",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${styleMap[status]}`}
    >
      {status}
    </span>
  );
};

export default ShowtimeStatusBadge;