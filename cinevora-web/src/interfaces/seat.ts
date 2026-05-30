export interface Seat {
  id: number;
  keys: string;
  type: "standard" | "vip" | "couple";
  price: number;
  isPlaced?: boolean;
}

export interface SeatCinemaProps {
  label: string;
  isVip: boolean;
  seats: Seat[];
}
