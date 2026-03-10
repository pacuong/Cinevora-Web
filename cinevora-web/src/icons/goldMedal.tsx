interface GoldMedalProps {
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  rank?: number;
}

const GoldMedal = ({ className, onClick, width = 30, height = 40, rank }: GoldMedalProps) => {
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
        d='M9.73795 18.8436L12.9511 20.6987L6.42625 32L4.55349 27.8233L9.73795 18.8436Z'
        fill='#CE4444'
      />
      <path
        d='M9.73795 18.8436L6.52483 16.9885L0 28.2898L4.55349 27.8233L9.73795 18.8436Z'
        fill='#983535'
      />
      <path
        d='M14.322 18.8436L11.1088 20.6987L17.6337 32L19.5064 27.8233L14.322 18.8436Z'
        fill='#983535'
      />
      <path
        d='M14.322 18.8436L17.5351 16.9885L24.0599 28.2898L19.5064 27.8233L14.322 18.8436Z'
        fill='#CE4444'
      />
      <circle cx='11.93' cy='11.06' r='11.06' fill='url(#grad1)' />
      <circle cx='11.93' cy='11.06' r='8.63' fill='#C09525' />
      <text
        x='11.93'
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
          id='grad1'
          x1='11.18'
          y1='4.03'
          x2='12.68'
          y2='31.96'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC600' />
          <stop offset='1' stopColor='#FFDE69' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GoldMedal;