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

export interface AddShowtimeFormValues {
  poster: string;
  movieId: string;
  cinemaId: string;
  roomId: string;
  showDate: string;
  showTime: string;
  format: string;
  subtitle: string;
  language: string;
  note: string;
  status: string;
}

export interface AddShowtimeProps {
  onAddShowtime: (data: AddShowtimeFormValues) => void;
}
