import { IconBaseProps } from "@/src/interfaces/icon";

const HistoryIcon = ({ size = 24, className = "" }: IconBaseProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d="M413 99a221.83 221.83 0 0 0-313-.76V49H70v105h105V124h-58.4A191.8 191.8 0 0 1 256 63.92c105.91 0 192.08 86.17 192.08 192.08S361.91 448.08 256 448.08 63.92 361.91 63.92 256H34A222 222 0 0 0 413 413a222 222 0 0 0 0-314Z" />
    </svg>
  );
};

export default HistoryIcon;
