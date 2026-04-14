export interface MovieCardProps {
  id: string;
  title: string;
  rating?: number;
  ageRating: string;
  posterUrl: string;
  releaseDate: string;
  director?: string;
  actor?: string;
  genre?: string;
  duration?: number;
  language?: string;
  rated?: string;
  description?: string;
  isUpComming?: boolean;
}
