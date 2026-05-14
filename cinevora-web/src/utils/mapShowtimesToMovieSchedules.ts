import { MovieSchedule } from "@/src/interfaces/movieSchedule";
import { ShowtimeFromBE } from "@/src/services/showtimeService";

const getDateKey = (dateStr: string) => {
  return new Date(dateStr).toISOString().slice(0, 10);
};

const getTime = (dateStr: string) => {
  return new Date(dateStr).toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const mapShowtimesToMovieSchedules = (
  showtimes: ShowtimeFromBE[],
): MovieSchedule[] => {
  const movieMap = new Map<string, MovieSchedule>();

  showtimes.forEach((showtime) => {
    const movieId = String(showtime.movieId);
    const dateKey = getDateKey(showtime.startTime);

    if (!movieMap.has(movieId)) {
      movieMap.set(movieId, {
        id: movieId,
        title: showtime.movieTitle,
        age: "P",
        posterUrl: "/images/no-poster.png",
        releaseDate: "",
        schedules: {},
      });
    }

    const movie = movieMap.get(movieId);
    if (!movie) return;

    if (!movie.schedules[dateKey]) {
      movie.schedules[dateKey] = [];
    }

    movie.schedules[dateKey].push({
      id: showtime.id,
      time: getTime(showtime.startTime),
      room: showtime.roomName,
    });
  });

  return Array.from(movieMap.values());
};