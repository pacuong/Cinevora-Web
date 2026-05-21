export interface Showtime {
  id?: number;
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
export interface AddShowtimeFormValues {
  poster: string;
  movieId: string;
  cinemaId?: string;
  roomId: string;
  showDate: string;
  showTime: string;
  startTime: string;
  endTime: string;
  note: string;
  status: string;
  priceStandard: string;
  priceVip: string;
  priceCouple: string;
}
export interface AddShowtimeProps {
  onAddShowtime: (data: AddShowtimeFormValues) => void;
}
