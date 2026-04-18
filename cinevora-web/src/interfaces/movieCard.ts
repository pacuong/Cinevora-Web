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
  rated: string;
  rating: number;
  status: string;
  releaseDate: string;
  endDate: string;
  avgRating: number | null;
  createdAt: string;
  genres: GenreFromBE[];
}

export interface GenreFromBE {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
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
  status: string;
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
