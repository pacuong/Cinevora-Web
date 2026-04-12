"use client";

import MovieCard from "@/src/components/common/movieCard";
import ShowtimeScheduleModal from "@/src/components/ShowtimeScheduleModal";
import { useListUpComingMovies } from "@/src/hooks/Movies/useListUpComingMovies";
import { useState } from "react";
import MovieCardSkeleton from "../common/movieCard/MovieCardSkeleton";

const UpComingWrapper = () => {
  const [openShowtime, setOpenShowtime] = useState(false);
  const { movies = [], isErrorMovie, isLoadingMovie } = useListUpComingMovies();

  if (isErrorMovie) return <div>Lỗi tải dữ liệu</div>;

  const handleBooking = () => {
    setOpenShowtime(true);
  };

  return (
    <div className="ml-6">
      <div className="pt-[40px] mb-[25px] md:pt-[55px] lg:pt-[40px] lg:mb-[35px] min-w-[355px] md:max-w-[574px] lg:min-w-[980px] mx-auto ">
        <h2 className="tracking-tight uppercase font-bold font-saira text-[25px] md:text-[32px] lg:text-[24px]">
          phim sắp chiếu
        </h2>
      </div>

      {isLoadingMovie ? (
        <MovieCardSkeleton count={10} />
      ) : (
        <MovieCard
          movies={movies}
            isShowOnlyBookBtn
            onBooking={handleBooking}
            isShowGenre
            isShowBtn
        />
      )}
      
      <ShowtimeScheduleModal
        isModalOpen={openShowtime}
        setIsModalOpen={setOpenShowtime}
      />
    </div>
  );
};

export default UpComingWrapper;
