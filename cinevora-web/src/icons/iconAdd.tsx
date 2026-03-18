import { IconStrokeProps } from "@/src/interfaces/icon";

const AddIcon = ({
  size = 24,
  strokeWidth = 1.5,
  className = "",
}: IconStrokeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <circle cx="12" cy="12" r="10" opacity="0.5" stroke="currentColor" />
      <path d="M15 12H9M12 9V15" strokeLinecap="round" />
    </svg>
  );
};

export default AddIcon;
