export interface Showtime {
  time: string;
  roomId: number;
  room: string;
  showtimeId: number;
}

export interface MovieSchedule {
  id: string;
  title: string;
  age?: string;
  posterUrl: string;
  schedules: Record<string, Showtime[]>;
  releaseDate?: string;
}

export interface MovieShowtimeCardProps {
  title: string;
  age?: string;
  className?: string;
  posterUrl: string;
  releaseDate?: string;
  selectedDate: string;
  showtimes: Showtime[];
  onSelectShowtime?: (showtime: Showtime) => void;
}
