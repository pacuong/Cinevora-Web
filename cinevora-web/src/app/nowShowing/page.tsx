"use client";

import MovieCard from "@/src/components/common/movieCard";
import ShowtimeScheduleModal from "@/src/components/ShowtimeScheduleModal";
import { useListNowMovies } from "@/src/hooks/Movies/useListNowMovies";
import { useBookingStore } from "@/src/stores/bookingStore";
import { useState } from "react";

const NowShowingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const { movies = [], isLoadingMovie, isErrorMovie } = useListNowMovies();
  const setMovie = useBookingStore((s) => s.setMovie);

  if (isErrorMovie) return <div>Lỗi tải dữ liệu</div>;

  const handleBooking = (movie: {
    id: string;
    title: string;
    posterUrl: string;
    releaseDate: string;
  }) => {
    setMovie({
      title: movie.title,
      posterUrl: movie.posterUrl,
      releaseDate: movie.releaseDate,
    });
    setSelectedMovieId(movie.id);
    setOpenModal(true);
  };

  return (
    <div>
      <div className="pt-[40px] mb-[25px] md:pt-[55px] lg:pt-[40px] lg:mb-[35px]">
        <h2 className="tracking-tight uppercase font-bold font-saira text-[25px] md:text-[32px] lg:text-[24px]">
          phim đang chiếu
        </h2>
      </div>

      {isLoadingMovie ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div>
          <MovieCard
            movies={movies}
            onBooking={handleBooking}
            isShowOnlyBookBtn
            isShowGenre
            isShowDuration
            isShowBtn
          />
        </div>
      )}

      <ShowtimeScheduleModal
        isModalOpen={openModal}
        setIsModalOpen={setOpenModal}
        movieId={selectedMovieId}
      />
    </div>
  );
};

export default NowShowingPage;
