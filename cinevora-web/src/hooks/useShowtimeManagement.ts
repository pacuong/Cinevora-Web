import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createShowtime,
  deleteShowtime,
  getShowtimeById,
  getShowtimesAdmin,
  ShowtimeFromBE,
  updateShowtime,
} from "@/src/services/showtimeService";
import { mapShowtimesToItems } from "@/src/utils/showtimes";
import { AddShowtimeFormValues } from "@/src/interfaces/movieSchedule";

export const SHOWTIME_MANAGEMENT_QUERY_KEY = ["showtime-management"];

export const useShowtimeManagement = () => {
  const queryClient = useQueryClient();

  const showtimesQuery = useQuery({
    queryKey: SHOWTIME_MANAGEMENT_QUERY_KEY,
    queryFn: async () => {
      const data = await getShowtimesAdmin();
      return mapShowtimesToItems(data);
    },
  });

  const getShowtimeDetailMutation = useMutation({
    mutationFn: async (id: string) => {
      return getShowtimeById(Number(id));
    },
  });

  const createShowtimeMutation = useMutation({
    mutationFn: async (data: AddShowtimeFormValues) => {
      const payload = {
        movieId: Number(data.movieId),
        showtimes: [
          {
            roomId: Number(data.roomId),
            startTime: `${data.showDate}T${data.startTime}:00`,
            status: data.status as "open" | "sold_out",
            priceStandard: Number(data.priceStandard),
            priceVip: Number(data.priceVip),
            priceCouple: data.priceCouple
              ? Number(data.priceCouple)
              : undefined,
          },
        ],
      };

      return createShowtime(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHOWTIME_MANAGEMENT_QUERY_KEY,
      });
    },
  });

  const updateShowtimeMutation = useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: ShowtimeFromBE["id"];
      data: AddShowtimeFormValues;
    }) => {
      const payload = {
        roomId: Number(data.roomId),
        startTime: `${data.showDate}T${data.startTime}:00`,
        status: data.status as "open" | "sold_out",
        priceStandard: Number(data.priceStandard),
        priceVip: Number(data.priceVip),
        priceCouple: data.priceCouple
          ? Number(data.priceCouple)
          : undefined,
      };

      return updateShowtime(id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHOWTIME_MANAGEMENT_QUERY_KEY,
      });
    },
  });

  const deleteShowtimeMutation = useMutation({
    mutationFn: async (id: string) => {
      return deleteShowtime(Number(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHOWTIME_MANAGEMENT_QUERY_KEY,
      });
    },
  });

  return {
    showtimeList: showtimesQuery.data ?? [],
    isLoading: showtimesQuery.isLoading,
    isError: showtimesQuery.isError,

    getShowtimeDetailMutation,
    createShowtimeMutation,
    updateShowtimeMutation,
    deleteShowtimeMutation,
  };
};