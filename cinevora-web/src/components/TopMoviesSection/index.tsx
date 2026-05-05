import { topMovies } from "@/src/constants/adminDashboardData";
import SectionCard from "../SectionCard";
import TopMovieItem from "../TopMovieItem";

const TopMoviesSection = () => {
  return (
    <SectionCard title="Top Phim Được Xem Nhiều Nhất" action="Xem tất cả" className="h-full">
      <div className="space-y-3">
        {topMovies.map((movie, index) => (
          <TopMovieItem key={`${movie.name}-${index}`} movie={movie} />
        ))}
      </div>
    </SectionCard>
  );
};

export default TopMoviesSection;