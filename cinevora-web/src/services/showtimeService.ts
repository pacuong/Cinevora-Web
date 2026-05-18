import { ShowtimeDto } from "@/src/interfaces/api/movieScheduleApi";
import fetchApi from "@/src/services/fetchApi";

export const getShowtimesByMovieId = async (
  movieId: number,
): Promise<ShowtimeDto[]> => {
  const { data } = await fetchApi.get("/showtimes", {
    params: {
      movieId,
    },
  });

  return data;
};

export const getShowtimes = async (): Promise<ShowtimeDto[]> => {
  const { data } = await fetchApi.get("/showtimes");

  return data;
};
