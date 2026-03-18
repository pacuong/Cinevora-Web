import { ChevronProps } from "@/src/icons/ChevronRight";

const ChevronLeft = ({
  className = "",
  size = 70,
  strokeWidth = 4,
}: ChevronProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 26 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="white"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

export default ChevronLeft;
