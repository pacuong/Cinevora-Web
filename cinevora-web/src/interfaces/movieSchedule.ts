export interface Showtime {
  time: string;
  room: string;
}

export interface MovieSchedule {
  id: string;
  title: string;
  age?: string;
  posterUrl: string;
  schedules: Record<string, Showtime[]>;
}

export interface MovieShowtimeCardProps {
  title: string;
  age?: string;
  className?: string;
  posterUrl: string;
  showtimes: Showtime[];
  onSelectShowtime?: (showtime: Showtime) => void;
}