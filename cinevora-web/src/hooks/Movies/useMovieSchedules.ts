"use client";

import { useMovieById, useMovies } from "@/src/hooks/Movies/useMoviesId";
import {
  useShowtimes,
  useShowtimesByMovie,
} from "@/src/hooks/Movies/useShowtimesByMovie";
import {
  toMovieSchedule,
  toMovieSchedules,
} from "@/src/mappers/movieScheduleMapper";
import { useMemo } from "react";

export const useMovieSchedule = (movieId?: number | null, enabled = true) => {
  const movieQuery = useMovieById(movieId ?? undefined, enabled);

  const showtimeQuery = useShowtimesByMovie(movieId ?? undefined, enabled);

  const movieSchedule = useMemo(() => {
    if (!movieQuery.data || !showtimeQuery.data) {
      return null;
    }

    return toMovieSchedule(movieQuery.data, showtimeQuery.data);
  }, [movieQuery.data, showtimeQuery.data]);

  return {
    movieSchedule,

    isLoading: movieQuery.isLoading || showtimeQuery.isLoading,

    isError: movieQuery.isError || showtimeQuery.isError,
  };
};

export const useMovieSchedules = () => {
  const moviesQuery = useMovies();

  const showtimesQuery = useShowtimes();

  const movieSchedules = useMemo(() => {
    if (!moviesQuery.data || !showtimesQuery.data) {
      return [];
    }

    return toMovieSchedules(moviesQuery.data, showtimesQuery.data);
  }, [moviesQuery.data, showtimesQuery.data]);

  return {
    scheduleMovie: movieSchedules,

    isLoadingSchedule: moviesQuery.isLoading || showtimesQuery.isLoading,

    isErrorSchedule: moviesQuery.isError || showtimesQuery.isError,
  };
};
