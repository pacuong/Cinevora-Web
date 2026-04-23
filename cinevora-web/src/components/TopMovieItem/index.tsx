type Movie = {
  name: string;
  time: string;
  image: string;
};

type TopMovieItemProps = {
  movie: Movie;
};

const TopMovieItem = ({ movie }: TopMovieItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-100 p-2 transition hover:bg-slate-50">
      <img src={movie.image} alt={movie.name} className="h-14 w-14 rounded-md object-cover" />

      <div className="min-w-0 flex-1">
        <div className="truncate text-[15px] font-semibold text-slate-800">{movie.name}</div>
        <div className="text-sm text-slate-500">Admin</div>
      </div>

      <div className="text-sm text-slate-400">{movie.time}</div>
    </div>
  );
};

export default TopMovieItem;