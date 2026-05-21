export type MovieApiStatus = "now_showing" | "upcoming" | "ended";
export type AgeRating = "P" | "C13" | "C16" | "C18";

export interface GenreFromBE {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
}
export interface CreateMoviePayload {
  title: string;
  posterUrl: string;
  description?: string;
  duration: number;
  director?: string;
  ageRating: AgeRating;
  status?: MovieApiStatus;
  releaseDate: string;
  genreIds?: number[];
}

export interface MovieCardProps {
  id: number;
  title: string;
  slug: string;
  posterUrl: string;
  trailerUrl: string;
  description: string;
  duration: number;
  director: string;
  actor: string;
  language: string;
  ageRating: string;
  rating: number;
  rated: string;
  status: MovieApiStatus;
  releaseDate: string;
  endDate: string;
  avgRating: number | null;
  createdAt: string;
  genres: GenreFromBE[];
}

export interface MovieFromBE {
  id: number;
  title: string;
  slug: string;
  posterUrl: string;
  trailerUrl: string;
  description: string;
  duration: number;
  director: string;
  actor: string;
  language: string;
  ageRating: string;
  rating: number;
  rated: string;
  status: MovieApiStatus;
  releaseDate: string;
  endDate: string;
  avgRating: number | null;
  createdAt: string;
  genres: GenreFromBE[];
}

export interface MovieBanner {
  id: string;
  slug: string;
  bannerUrl: string;
  title: string;
}
export interface AddMovieForm {
  title: string;
  director: string;
  actor: string;
  language: string;
  genres: string[];
  duration: number | string;
  releaseDate: string;
  description: string;
  status: string;
  poster: string;
}

export interface AddMoviesProps {
  onAddMovie: (data: AddMovieForm) => void;
}
