import { MovieStatus, statusMap } from "@/src/utils/statusBadge";

type StatusBadgeProps = {
  status: MovieStatus;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${statusMap[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;