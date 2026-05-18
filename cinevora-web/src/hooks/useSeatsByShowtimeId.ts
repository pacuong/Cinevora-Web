import { useQuery } from "@tanstack/react-query";
import { getSeatsByShowtimeId } from "@/src/services/seatService";

export const useSeatsByShowtimeId = (showtimeId?: number) => {
  const {
    data: seatRows = [],
    isError: isErrorSeat,
    isLoading: isLoadingSeat,
  } = useQuery({
    queryKey: ["seats", showtimeId],
    queryFn: () => getSeatsByShowtimeId(Number(showtimeId)),
    enabled: Boolean(showtimeId),
  });

  return {
    seatRows,
    isErrorSeat,
    isLoadingSeat,
  };
};
