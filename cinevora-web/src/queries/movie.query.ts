import { getMovieApiById, getMovies } from "@/src/services/movieService";
import { queryOptions } from "@tanstack/react-query";

export const movieDetailQuery = (movieId: number) =>
  queryOptions({
    queryKey: ["movie", movieId],

    queryFn: () => getMovieApiById(movieId),

    staleTime: 1000 * 60 * 5,
  });

export const moviesQuery = queryOptions({
  queryKey: ["movies"],

  queryFn: getMovies,

  staleTime: 1000 * 60 * 5,
});
