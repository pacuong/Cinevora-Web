import fetchApi from "./fetchApi";
import { ShowtimeDto } from "@/src/interfaces/api/movieScheduleApi";

export type ShowtimeStatus = "open" | "sold_out";

export interface CreateShowtimePayload {
  movieId: number;
  showtimes: {
    roomId: number;
    startTime: string;
    status?: ShowtimeStatus;
    priceStandard: number;
    priceVip: number;
    priceCouple?: number;
  }[];
}

export interface ShowtimeFromBE {
  id: number;
  movieId: number;
  movieTitle: string;
  roomId: number;
  roomName: string;
  startTime: string;
  endTime: string;
  status: ShowtimeStatus;
  priceStandard: number;
  priceVip: number;
  priceCouple: number | null;
  createdAt: string;
  updatedAt: string;
}

export const getShowtimes = async (): Promise<ShowtimeDto[]> => {
  const { data } = await fetchApi.get("/showtimes");

  return data;
};

export const getShowtimesAdmin = async (): Promise<ShowtimeFromBE[]> => {
  const { data } = await fetchApi.get<ShowtimeFromBE[]>("/showtimes");
  return data;
};

export const createShowtime = async (payload: CreateShowtimePayload) => {
  const { data } = await fetchApi.post("/showtimes", payload);
  return data;
};

export const getShowtimeById = async (id: number): Promise<ShowtimeFromBE> => {
  const { data } = await fetchApi.get<ShowtimeFromBE>(`/showtimes/${id}`);
  return data;
};

export const updateShowtime = async (
  id: number,
  payload: {
    roomId?: number;
    startTime?: string;
    status?: "open" | "sold_out";
    priceStandard?: number;
    priceVip?: number;
    priceCouple?: number;
  },
): Promise<ShowtimeFromBE> => {
  const { data } = await fetchApi.patch<ShowtimeFromBE>(
    `/showtimes/${id}`,
    payload,
  );
  return data;
};

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

export const deleteShowtime = async (id: number): Promise<void> => {
  await fetchApi.delete(`/showtimes/${id}`);
};

