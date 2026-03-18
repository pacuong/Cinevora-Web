"use client";

import { getNowShowingMovies } from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useListNowMovies = () => {
  const {
    data: movies,
    isError: isErrorMovie,
    isLoading: isLoadingMovie,
  } = useQuery({
    queryKey: ["nowShowingMovies"],
    queryFn: getNowShowingMovies,
  });

  return { movies, isErrorMovie, isLoadingMovie };
};
