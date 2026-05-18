import { SeatCinemaProps } from "@/src/interfaces/seat";

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
