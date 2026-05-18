import {
  getShowtimes,
  getShowtimesByMovieId,
} from "@/src/services/showtimeService";
import { queryOptions } from "@tanstack/react-query";

export const showtimeByMovieQuery = (movieId: number) =>
  queryOptions({
    queryKey: ["showtimes", movieId],

    queryFn: () => getShowtimesByMovieId(movieId),

    staleTime: 1000 * 30,
  });

export const showtimesQuery = queryOptions({
  queryKey: ["showtimes"],

  queryFn: getShowtimes,

  staleTime: 1000 * 30,
});
