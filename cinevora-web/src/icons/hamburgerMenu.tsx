interface HamburgerMenuProps {
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const HamburgerMenu = ({
  className,
  onClick,
  width = 25,
  height = 30,
}: HamburgerMenuProps) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="none"
    >
      <path d="M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z" />
    </svg>
  );
};

export default HamburgerMenu;
