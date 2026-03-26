import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Showtime {
  time: string;
}

interface BookingMovie {
  title: string;
  posterUrl: string;
  releaseDate: string;
}

interface BookingState {
  movie: BookingMovie | null;
  selectedDate: string | null;
  selectedShowtime: Showtime | null;
  selectedSeats: string[];
  expiresAt: number | null;

  setMovie: (movie: BookingMovie) => void;
  setDate: (date: string) => void;
  setShowtime: (showtime: Showtime) => void;
  setSelectedSeats: (seats: string[]) => void;
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

      setMovie: (movie) =>
        set({ movie, expiresAt: Date.now() + TTL }),

      setDate: (date) =>
        set({ selectedDate: date, expiresAt: Date.now() + TTL }),

      setShowtime: (showtime) =>
        set({ selectedShowtime: showtime, expiresAt: Date.now() + TTL }),

      setSelectedSeats: (selectedSeats) =>
        set({ selectedSeats, expiresAt: Date.now() + TTL }),

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
      name: 'booking-storage',
      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        const now = Date.now();

        if (state.expiresAt && now > state.expiresAt) {
          state.resetBooking();
        }
      },
    }
  ),
  shallow
);