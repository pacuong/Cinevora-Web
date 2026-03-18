"use client";

import { getUpComingMovies } from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useListUpComingMovies = () => {
  const {
    data: movies,
    isError: isErrorMovie,
    isLoading: isLoadingMovie,
  } = useQuery({
    queryKey: ["upComingMovies"],
    queryFn: getUpComingMovies,
  });

  return { movies, isErrorMovie, isLoadingMovie };
};
