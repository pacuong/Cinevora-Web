import { SeatCinemaProps } from "@/src/interfaces/seat";
import fetchApi from "@/src/services/fetchApi";
import { useAuthSlice } from "@/src/stores/useAuth";

interface SeatResponse {
  id: number;
  seatKey: string;
  rowLabel: string;
  seatType: "standard" | "vip" | "couple";
  status: string;
  isActive: boolean;
  price: number;
}

export const getSeatsByShowtimeId = async (
  showtimeId: number,
): Promise<SeatCinemaProps[]> => {
  const token = useAuthSlice.getState().userAuthentication?.accessToken;
  if (!token) {
    throw new Error("Missing access token");
  }

  const { data } = await fetchApi.get<SeatResponse[]>(
    `/showtimes/${showtimeId}/seats`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const grouped = data.reduce((acc, seat) => {
    const row = acc.find((r) => r.label === seat.rowLabel);

    const mappedSeat = {
      keys: seat.seatKey,
      type: seat.seatType,
      price: seat.price,
      isPlaced: seat.status !== "available",
    };

    if (!row) {
      acc.push({
        label: seat.rowLabel,
        isVip: seat.seatType === "vip",
        seats: [mappedSeat],
      });
    } else {
      row.seats.push(mappedSeat);
    }

    return acc;
  }, [] as SeatCinemaProps[]);

  return grouped;
};
