"use client";

import { getNowShowingMovies } from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useListNowMovies = () => {
  const {
    data,
    isError: isErrorNowMovies,
    isLoading: isLoadingNowShowingMovies,
  } = useQuery({
    queryKey: ["nowShowingMovies"],
    queryFn: getNowShowingMovies,
  });

  const nowShowingMovies = data?.map((movie, index) => ({
    ...movie,
    rating: (index % 3) + 1,
  }));

  return { nowShowingMovies, isErrorNowMovies, isLoadingNowShowingMovies };
};
