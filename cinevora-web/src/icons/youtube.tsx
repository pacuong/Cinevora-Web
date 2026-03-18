import { ChevronProps } from "@/src/icons/ChevronRight";

const YoutubeIcon = ({ size = 20, className = "" }: ChevronProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 38.519c-1.171 0-11.525-.022-14.481-.815a6.474 6.474 0 0 1-4.574-4.574c-.807-3.007-.815-8.872-.815-9.12s.009-6.113.815-9.12a6.484 6.484 0 0 1 4.575-4.575c2.955-.793 13.309-.816 14.48-.816s11.525.022 14.482.815a6.481 6.481 0 0 1 4.574 4.574v.001h.001c.805 3.007.813 8.871.813 9.119s-.009 6.113-.814 9.12a6.48 6.48 0 0 1-4.576 4.575c-2.955.793-13.309.816-14.48.816z"
        fill="currentColor"
      />
      <path
        d="M20.887 29.986a1 1 0 0 1-1-1v-9.953a.998.998 0 0 1 1.5-.866l8.619 4.977a1 1 0 0 1 0 1.732l-8.619 4.977a1.012 1.012 0 0 1-.5.133z"
        fill="white-100"
      />
    </svg>
  );
};

export default YoutubeIcon;
