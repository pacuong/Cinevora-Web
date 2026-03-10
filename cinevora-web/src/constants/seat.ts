export interface Seat {
  keys: string;
  isPlaced?: boolean;
}

export interface SeatCinemaProps {
  label: string;
  isVip: boolean;
  seats: Seat[];
}

export const rows: SeatCinemaProps[] = [
  {
    label: 'A',
    isVip: false,
    seats: [
      { keys: 'A1' },
      { keys: 'A2' },
      { keys: 'A3' },
      { keys: 'A4' },
      { keys: 'A5' },
      { keys: 'A6' },
      { keys: 'A7' },
      { keys: 'A8' },
      { keys: 'A9' },
      { keys: 'A10' },
    ],
  },
  {
    label: 'B',
    isVip: false,
    seats: [
      { keys: 'B1' },
      { keys: 'B2' },
      { keys: 'B3' },
      { keys: 'B4' },
      { keys: 'B5' },
      { keys: 'B6' },
      { keys: 'B7' },
      { keys: 'B8' },
      { keys: 'B9' },
      { keys: 'B10' },
    ],
  },
  {
    label: 'C',
    isVip: false,
    seats: [
      { keys: 'C1' },
      { keys: 'C2' },
      { keys: 'C3' },
      { keys: 'C4' },
      { keys: 'C5' },
      { keys: 'C6' },
      { keys: 'C7' },
      { keys: 'C8' },
      { keys: 'C9' },
      { keys: 'C10' },
    ],
  },
  {
    label: 'D',
    isVip: true,
    seats: [
      { keys: 'D1' },
      { keys: 'D2' },
      { keys: 'D3' },
      { keys: 'D4' },
      { keys: 'D5' },
      { keys: 'D6' },
      { keys: 'D7' },
      { keys: 'D8' },
      { keys: 'D9' },
      { keys: 'D10' },
    ],
  },
  {
    label: 'E',
    isVip: true,
    seats: [
      { keys: 'E1' },
      { keys: 'E2' },
      { keys: 'E3' },
      { keys: 'E4' },
      { keys: 'E5' },
      { keys: 'E6' },
      { keys: 'E7' },
      { keys: 'E8' },
      { keys: 'E9' },
      { keys: 'E10' },
    ],
  },
  {
    label: 'F',
    isVip: true,
    seats: [
      { keys: 'F1' },
      { keys: 'F2' },
      { keys: 'F3' },
      { keys: 'F4' },
      { keys: 'F5' },
      { keys: 'F6' },
      { keys: 'F7' },
      { keys: 'F8' },
      { keys: 'F9' },
      { keys: 'F10' },
    ],
  },
];