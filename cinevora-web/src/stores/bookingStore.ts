import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

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
  setMovie: (movie: BookingMovie) => void;
  setDate: (date: string) => void;
  setShowtime: (showtime: Showtime) => void;
  resetBooking: () => void;
}

export const useBookingStore = createWithEqualityFn<BookingState>(
  (set) => ({
    movie: null,
    selectedDate: null,
    selectedShowtime: null,

    setMovie: (movie) => set({ movie }),
    setDate: (date) => set({ selectedDate: date }),
    setShowtime: (showtime) => set({ selectedShowtime: showtime }),

    resetBooking: () =>
      set({
        movie: null,
        selectedDate: null,
        selectedShowtime: null,
      }),
  }),
  shallow,
);