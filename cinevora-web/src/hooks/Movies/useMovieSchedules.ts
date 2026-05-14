"use client";

import { getShowtimes } from "@/src/services/showtimeService";
import { mapShowtimesToMovieSchedules } from "@/src/utils/mapShowtimesToMovieSchedules";
import { useQuery } from "@tanstack/react-query";

export const useMovieSchedules = () => {
  const {
    data = [],
    isLoading: isLoadingSchedule,
    isError: isErrorSchedule,
  } = useQuery({
    queryKey: ["movieSchedules"],
    queryFn: async () => {
      const showtimes = await getShowtimes();
      return mapShowtimesToMovieSchedules(showtimes);
    },
  });

  return { scheduleMovie: data, isLoadingSchedule, isErrorSchedule };
};

export const useMovieSchedule = (movieId: string | null, enabled: boolean) => {
  return useQuery({
    queryKey: ["movieSchedule", movieId],
    enabled: !!movieId && enabled,
    queryFn: async () => {
      const showtimes = await getShowtimes();
      const movies = mapShowtimesToMovieSchedules(showtimes);

      return movies.find((movie) => movie.id === movieId) ?? null;
    },
  });
};