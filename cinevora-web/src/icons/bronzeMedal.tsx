interface BronzeMedalProps {
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  rank?: number;
}

const BronzeMedal = ({ className, onClick, width = 30, height = 40, rank }: BronzeMedalProps) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox='-3.5 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* TODO: update currentColors */}
      <path
        d='M9.73779 18.8436L12.9509 20.6987L6.42609 32L4.55333 27.8234L9.73779 18.8436Z'
        fill='#AA75CB'
      />
      <path
        d='M9.73779 18.8436L6.52467 16.9885L0 28.2899L4.55333 27.8234L9.73779 18.8436Z'
        fill='#73488D'
      />
      <path
        d='M14.3218 18.8436L11.1087 20.6987L17.6335 32L19.5062 27.8234L14.3218 18.8436Z'
        fill='#73488D'
      />
      <path
        d='M14.3218 18.8436L17.5349 16.9885L24.0597 28.2899L19.5062 27.8234L14.3218 18.8436Z'
        fill='#AA75CB'
      />
      <circle cx='12.02' cy='11.06' r='11.06' fill='#DC9E42' />
      <circle cx='12.02' cy='11.06' r='8.63' fill='url(#gradBronze)' />
      <text
        x='12.02'
        y='14'
        textAnchor='middle'
        fontSize='10'
        fontWeight='bold'
        fill='white'
        fontFamily='Arial, sans-serif'
      >
        {rank}
      </text>
      <defs>
        <linearGradient
          id='gradBronze'
          x1='12.02'
          y1='2.40'
          x2='12.02'
          y2='19.71'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C47C2B' />
          <stop offset='1' stopColor='#A0521D' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BronzeMedal;