"use client";

import { getMovieById } from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useMoviesId = (id: string) => {
  const {
    data: movieDetail,
    isError: isErrorMovieDetail,
    isLoading: isLoadingMovie,
  } = useQuery({
    queryKey: ["movie-detail", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Không tìm thấy phim");
      }

      return getMovieById(id);
    },
  });

  return { movieDetail, isErrorMovieDetail, isLoadingMovie };
};
