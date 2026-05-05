import { IconStrokeProps } from "@/src/interfaces/icon";

const CloseIcon = ({
  size = 24,
  strokeWidth = 2,
  className = "",
}: IconStrokeProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <line x1="17" y1="7" x2="7" y2="17" />
    </svg>
  );
};

export default CloseIcon;