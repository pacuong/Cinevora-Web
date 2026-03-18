import { ChevronProps } from "@/src/icons/ChevronRight";

const FacebookIcon = ({ size = 20, className = "" }: ChevronProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 3H13C11.343 3 10 4.343 10 6V8H8V11H10V21H13V11H15L16 8H13V6C13 5.448 13.448 5 14 5H16V3H15Z" />
    </svg>
  );
};

export default FacebookIcon;
