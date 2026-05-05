import { IconStrokeProps } from "@/src/interfaces/icon";

const CheckCircleFill = ({ size = 24, className = "" }: IconStrokeProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.03 10.03a.75.75 0 0 0-1.06-1.06L10.5 13.44l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2c.29.29.77.29 1.06 0l5-5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25a10.75 10.75 0 1 0 0 21.5a10.75 10.75 0 0 0 0-21.5zM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0z"
      />
    </svg>
  );
};

export default CheckCircleFill;
