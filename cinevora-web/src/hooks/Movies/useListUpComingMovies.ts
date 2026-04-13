"use client";

import { getUpComingMovies } from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useListUpComingMovies = () => {
  const {
    data: upComingMovies,
    isError: isErrorMovie,
    isLoading: isLoadingUpComingMovies,
  } = useQuery({
    queryKey: ["upComingMovies"],
    queryFn: getUpComingMovies,
  });

  return { upComingMovies, isErrorMovie, isLoadingUpComingMovies };
};
