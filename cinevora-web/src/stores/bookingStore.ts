import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { persist, createJSONStorage } from "zustand/middleware";
import { Showtime } from "@/src/interfaces/movieSchedule";

interface BookingMovie {
  title: string;
  posterUrl: string;
  releaseDate: string;
}

export interface SelectedSeat {
  id: number;
  key: string;
  type: "standard" | "vip" | "couple";
  price: number;
}

interface BookingState {
  movie: BookingMovie | null;
  selectedDate: string | null;
  selectedShowtime: Showtime | null;

  selectedSeats: SelectedSeat[];

  expiresAt: number | null;

  setMovie: (movie: BookingMovie) => void;
  setDate: (date: string) => void;
  setShowtime: (showtime: Showtime) => void;

  setSelectedSeats: (seats: SelectedSeat[]) => void;

  clearSeatSelection: () => void;

  resetBooking: () => void;
}

const TTL = 10 * 60 * 1000;

export const useBookingStore = createWithEqualityFn<BookingState>()(
  persist(
    (set) => ({
      movie: null,
      selectedDate: null,
      selectedShowtime: null,

      selectedSeats: [],

      expiresAt: null,

      setMovie: (movie) => set({ movie }),

      setDate: (date) => set({ selectedDate: date }),

      setShowtime: (showtime) =>
        set({
          selectedShowtime: showtime,
        }),

      setSelectedSeats: (selectedSeats) =>
        set({
          selectedSeats,
          expiresAt: Date.now() + TTL,
        }),

      clearSeatSelection: () =>
        set({
          selectedSeats: [],
          expiresAt: null,
        }),

      resetBooking: () =>
        set({
          movie: null,
          selectedDate: null,
          selectedShowtime: null,
          selectedSeats: [],
          expiresAt: null,
        }),
    }),
    {
      name: "booking-storage",
      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        const now = Date.now();

        if (state.expiresAt && now > state.expiresAt) {
          state.clearSeatSelection();
        }
      },
    },
  ),
  shallow,
);
