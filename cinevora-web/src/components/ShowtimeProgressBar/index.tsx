type Props = {
  value: number;
};

const ShowtimeProgressBar = ({ value }: Props) => {
  return (
    <div className="h-2 w-[86px] overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-violet-600"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ShowtimeProgressBar;