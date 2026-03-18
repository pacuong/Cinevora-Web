import { ChevronProps } from "@/src/icons/ChevronRight";

interface BorderGlowProps extends ChevronProps {
  color?: string;
  opacity?: number;
}

const BorderGlow = ({
  strokeWidth = 2,
  className = "",
  color = "white",
  opacity = 0.6,
}: BorderGlowProps) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        rx="4"
        fill="none"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth={strokeWidth}
        filter="url(#glow)"
      />
    </svg>
  );
};

export default BorderGlow;
