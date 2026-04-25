export type MovieApiStatus = "now_showing" | "upcoming" | "ended";

export interface MovieCardProps {
  id: string;
  title: string;
  rating?: number;
  ageRating: string;
  posterUrl: string;
  releaseDate: string;
  genre: string;
  duration: number;
  rated: string;
  director: string;
  actor?: string;
  language?: string;
  description?: string;
  status: MovieApiStatus;
}

export interface AddMovieForm {
  title: string;
  director: string;
  genres: string;
  duration: number | string;
  releaseDate: string;
  description: string;
  status: string;
  poster: string;
}

export interface AddMoviesProps {
  onAddMovie: (data: AddMovieForm) => void;
}
