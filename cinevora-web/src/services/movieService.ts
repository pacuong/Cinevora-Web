import { MovieCardProps, MovieFromBE } from "@/src/interfaces/movieCard";
import fetchApi from "./fetchApi";
import { MovieSchedule } from "@/src/interfaces/movieSchedule";

export const getNowShowingMovies = async () => {
  const { data } = await fetchApi.get<MovieCardProps[]>("/movies");
  return data.filter((movie) => movie.status === "now_showing");
};

export const getUpComingMovies = async () => {
  const { data } = await fetchApi.get<MovieCardProps[]>("/movies");
  return data.filter((movie) => movie.status === "upcoming");
};

export const getMovieById = async (slug: string) => {
  const res = await fetchApi.get(`/movies/${slug}`);
  return res.data;
};

//TODO:
export const getMovieScheduleById = async (
  movieId: string,
): Promise<MovieSchedule> => {
  const { data } = await fetchApi.get<MovieSchedule>(`/movies/${movieId}`);
  return data;
};

export const getAllMovieSchedules = async (): Promise<MovieSchedule[]> => {
  const { data } = await fetchApi.get<MovieSchedule[]>("/movies");
  return data;
};
