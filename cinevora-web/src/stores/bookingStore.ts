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

  setMovie: (movie: BookingMovie) => void;
  setDate: (date: string) => void;
  setShowtime: (showtime: Showtime) => void;
  setSelectedSeats: (seats: string[]) => void;
  resetBooking: () => void;
}

export const useBookingStore = createWithEqualityFn<BookingState>()(
  persist(
    (set) => ({
      movie: null,
      selectedDate: null,
      selectedShowtime: null,
      selectedSeats: [],

      setMovie: (movie) => set({ movie }),
      setDate: (date) => set({ selectedDate: date }),
      setShowtime: (showtime) => set({ selectedShowtime: showtime }),
      setSelectedSeats: (selectedSeats) => set({ selectedSeats }),

      resetBooking: () =>
        set({
          movie: null,
          selectedDate: null,
          selectedShowtime: null,
          selectedSeats: [],
        }),
    }),
    {
      name: 'booking-storage',
      storage: createJSONStorage(() => localStorage),
    }
  ),
  shallow
);