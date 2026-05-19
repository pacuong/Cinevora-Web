import {
  MovieScheduleInfoDto,
  ShowtimeDto,
} from "@/src/interfaces/api/movieScheduleApi";
import { MovieSchedule, Showtime } from "@/src/interfaces/movieSchedule";

const VIETNAM_TIME_ZONE = "Asia/Ho_Chi_Minh";

const formatScheduleDate = (isoDate: string): string => {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: VIETNAM_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(isoDate));
};

const formatScheduleTime = (isoDate: string): string => {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: VIETNAM_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(isoDate));
};

const createMovieMap = (
  movies: MovieScheduleInfoDto[],
): Map<number, MovieScheduleInfoDto> => {
  return new Map(movies.map((movie) => [movie.id, movie]));
};

const createShowtime = (showtime: ShowtimeDto): Showtime => {
  return {
    time: formatScheduleTime(showtime.startTime),
    room: showtime.roomName,
    roomId: showtime.roomId,
    showtimeId: showtime.id,
  };
};

export const toMovieSchedules = (
  movies: MovieScheduleInfoDto[],
  showtimes: ShowtimeDto[],
): MovieSchedule[] => {
  const movieMap = createMovieMap(movies);
  const scheduleMap = new Map<string, MovieSchedule>();

  showtimes.forEach((showtime) => {
    const movie = movieMap.get(showtime.movieId);

    if (!movie) {
      return;
    }

    const movieId = String(movie.id);
    const scheduleDate = formatScheduleDate(showtime.startTime);

    const currentMovieSchedule = scheduleMap.get(movieId) ?? {
      id: movieId,
      title: movie.title,
      age: movie.ageRating,
      posterUrl: movie.posterUrl,
      schedules: {},
    };

    currentMovieSchedule.schedules[scheduleDate] ??= [];
    currentMovieSchedule.schedules[scheduleDate].push(createShowtime(showtime));

    scheduleMap.set(movieId, currentMovieSchedule);
  });

  return Array.from(scheduleMap.values());
};

export const toMovieSchedule = (
  movie: MovieScheduleInfoDto,
  showtimes: ShowtimeDto[],
): MovieSchedule => {
  const movieSchedule: MovieSchedule = {
    id: String(movie.id),
    title: movie.title,
    age: movie.ageRating,
    posterUrl: movie.posterUrl,
    schedules: {},
  };

  showtimes.forEach((showtime) => {
    if (showtime.movieId !== movie.id) {
      return;
    }

    const scheduleDate = formatScheduleDate(showtime.startTime);

    movieSchedule.schedules[scheduleDate] ??= [];
    movieSchedule.schedules[scheduleDate].push(createShowtime(showtime));
  });

  return movieSchedule;
};
