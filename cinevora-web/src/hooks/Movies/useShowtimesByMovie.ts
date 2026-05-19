import {
  showtimeByMovieQuery,
  showtimesQuery,
} from "@/src/queries/showtime.query";
import { useQuery } from "@tanstack/react-query";

export const useShowtimesByMovie = (movieId?: number, enabled = true) => {
  return useQuery({
    ...showtimeByMovieQuery(movieId!),
    enabled: !!movieId && enabled,
  });
};

export const useShowtimes = () => {
  return useQuery(showtimesQuery);
};
