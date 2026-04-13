"use client";

import { getNowShowingMovies } from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useListNowMovies = () => {
  const {
    data: nowShowingMovies,
    isError: isErrorMovie,
    isLoading: isLoadingNowShowingMovies,
  } = useQuery({
    queryKey: ["nowShowingMovies"],
    queryFn: getNowShowingMovies,
  });

  return { nowShowingMovies, isErrorMovie, isLoadingNowShowingMovies };
};
