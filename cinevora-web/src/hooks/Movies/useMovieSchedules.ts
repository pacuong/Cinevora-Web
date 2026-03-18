"use client";

import {
  getAllMovieSchedules,
  getMovieScheduleById,
} from "@/src/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useMovieSchedules = () => {
  const {
    data = [],
    isLoading: isLoadingSchedule,
    isError: isErrorSchedule,
  } = useQuery({
    queryKey: ["movieSchedules"],
    queryFn: getAllMovieSchedules,
  });

  return { scheduleMovie: data, isLoadingSchedule, isErrorSchedule };
};

export const useMovieSchedule = (movieId: string | null, enabled: boolean) => {
  return useQuery({
    queryKey: ["movieSchedule", movieId],
    queryFn: () => getMovieScheduleById(movieId as string),
    enabled: !!movieId && enabled,
  });
};
