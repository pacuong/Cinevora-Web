import { IconStrokeProps } from "@/src/interfaces/icon";

export interface ChevronProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const ChevronRight = ({
  size = 70,
  strokeWidth = 4,
  className = "",
}: IconStrokeProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 22 24"
      fill="none"
      stroke="white"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export default ChevronRight;
