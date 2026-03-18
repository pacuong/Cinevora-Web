import { IconBaseProps } from "@/src/interfaces/icon";

const LockIcon = ({ size = 24, className = "" }: IconBaseProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 44h24c2.2 0 4-1.8 4-4V22c0-2.2-1.8-4-4-4H18v-4c0-3.309 2.691-6 6-6s6 2.691 6 6h4c0-5.514-4.486-10-10-10S14 8.486 14 14v4h-2c-2.2 0-4 1.8-4 4v18c0 2.2 1.8 4 4 4Z" />
      <circle cx="24" cy="28" fill="#fff" />
    </svg>
  );
};

export default LockIcon;
