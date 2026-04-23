import { MovieCardProps } from "../interfaces/movieCard";
import { MovieStatus } from "./statusBadge";

export type MovieItem = {
  id: string;
  title: string;
  director: string;
  genre: string;
  duration: string;
  releaseDate: string;
  status: MovieStatus;
  image: string;
};

export const mapApiStatusToUiStatus = (
  status: MovieCardProps["status"],
): MovieStatus => {
  switch (status) {
    case "now_showing":
      return "Đang chiếu";
    case "upcoming":
      return "Sắp chiếu";
    case "ended":
      return "Ngừng chiếu";
    default:
      return "Ngừng chiếu";
  }
};

export const mapMovieToItem = (movie: MovieCardProps): MovieItem => ({
  id: movie.id,
  title: movie.title,
  director: movie.director,
  genre: movie.genre,
  duration: `${movie.duration} phút`,
  releaseDate: movie.releaseDate,
  status: mapApiStatusToUiStatus(movie.status),
  image: movie.posterUrl,
});