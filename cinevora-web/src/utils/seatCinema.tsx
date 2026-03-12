import { SeatCinemaProps } from "@/src/constants/seat";

export const mergeRowsWithPlacedSeats = (
  rows: SeatCinemaProps[],
  placedSeatKeys?: string[],
): SeatCinemaProps[] => {
  if (!placedSeatKeys || placedSeatKeys.length === 0) return rows;

  return rows.map((row) => ({
    ...row,
    seats: row.seats.map((seat) => ({
      ...seat,
      isPlaced: placedSeatKeys.includes(seat.keys),
    })),
  }));
};