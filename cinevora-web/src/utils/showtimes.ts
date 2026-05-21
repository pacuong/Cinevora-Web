import { ShowtimeFromBE } from "@/src/services/showtimeService";

export type ShowtimeStatus = "Đang mở bán" | "Hết vé";

export type ShowtimeApiStatus = "open" | "sold_out";

export type MovieScheduleSlot = {
  time: string;
  room: string;
  totalSeats: number;
  soldSeats: number;
};

export type MovieShowtimeFromDb = {
  id: string;
  title: string;
  age: string;
  posterUrl: string;
  duration: number;
  schedules: Record<string, MovieScheduleSlot[]>;
};

export type ShowtimeItem = {
  id: string;
  movieTitle: string;
  ageLabel: string;
  duration: string;
  room: string;
  seats: string;
  date: string;
  day: string;
  time: string;
  sold: string;
  soldPercent: number;
  status: ShowtimeStatus;
  image: string;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const getVietnameseDay = (dateStr: string) => {
  const date = new Date(dateStr);
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  return days[date.getDay()];
};

const formatTime = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const mapApiStatusToUiStatus = (status: ShowtimeApiStatus): ShowtimeStatus => {
  switch (status) {
    case "sold_out":
      return "Hết vé";
    case "open":
      return "Đang mở bán";
  }
};

const getShowtimeStatus = (
  soldSeats: number,
  totalSeats: number,
): ShowtimeStatus => {
  if (soldSeats >= totalSeats) return "Hết vé";
  return "Đang mở bán";
};

export const mapShowtimesToItems = (
  showtimes: ShowtimeFromBE[],
): ShowtimeItem[] => {
  return showtimes.map((showtime) => ({
    id: showtime.id.toString(),
    movieTitle: showtime.movieTitle,
    ageLabel: "P",
    duration: "",
    room: `Phòng ${showtime.roomName}`,
    seats: "",
    date: formatDate(showtime.startTime),
    day: getVietnameseDay(showtime.startTime),
    time: formatTime(showtime.startTime),
    sold: "0 vé",
    soldPercent: 0,
    status: mapApiStatusToUiStatus(showtime.status),
    image: "/images/no-poster.png",
  }));
};

export const mapMoviesToShowtimeItems = (
  movies: MovieShowtimeFromDb[],
): ShowtimeItem[] => {
  return movies.flatMap((movie) =>
    Object.entries(movie.schedules).flatMap(([date, slots]) =>
      slots.map((slot, index) => {
        const soldPercent =
          slot.totalSeats > 0
            ? Math.round((slot.soldSeats / slot.totalSeats) * 100)
            : 0;

        return {
          id: `${movie.id}-${date}-${slot.room}-${index}`,
          movieTitle: movie.title,
          ageLabel: movie.age,
          duration: `${movie.duration} phút`,
          room: `Phòng ${slot.room}`,
          seats: `${slot.totalSeats} ghế`,
          date: formatDate(date),
          day: getVietnameseDay(date),
          time: slot.time,
          sold: `${slot.soldSeats} / ${slot.totalSeats}`,
          soldPercent,
          status: getShowtimeStatus(slot.soldSeats, slot.totalSeats),
          image: movie.posterUrl,
        };
      }),
    ),
  );
};