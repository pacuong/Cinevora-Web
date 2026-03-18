import { MovieSchedule } from "@/src/interfaces/movieSchedule";

export const MOVIE_SHOWTIME_CARDS: MovieSchedule[] = [
  {
    id: "1",
    title: "Avatar 1",
    age: "C13",
    posterUrl: "/src/assets/images/ai_men.jpg",
    schedules: {
      "2026-01-15": [
        { time: "18:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
        { time: "12:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
        { time: "18:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
      ],
      "2026-01-16": [{ time: "17:00 - 19:30", room: "03" }],
    },
  },
  {
    id: "2",
    title: "Avatar 2",
    age: "C18",
    posterUrl: "/src/assets/images/avatar_banner.jpg",
    schedules: {
      "2026-01-16": [
        { time: "18:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
        { time: "12:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
        { time: "18:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
      ],
      "2026-01-17": [{ time: "17:00 - 19:30", room: "03" }],
    },
  },
  {
    id: "3",
    title: "Avatar 3",
    age: "P",
    posterUrl: "/src/assets/images/tdm.jpg",
    schedules: {
      "2026-01-18": [
        { time: "18:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
        { time: "12:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
        { time: "18:00 - 20:30", room: "01" },
        { time: "20:45 - 23:15", room: "02" },
      ],
      "2026-01-15": [{ time: "17:00 - 19:30", room: "03" }],
    },
  },
];
