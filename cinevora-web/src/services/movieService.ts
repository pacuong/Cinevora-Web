import { MovieCardProps } from "@/src/components/common/movieCard";
import fetchApi from "./fetchApi";
import { MovieSchedule } from "@/src/interfaces/movieSchedule";

export const getNowShowingMovies = async () => {
  const { data } = await fetchApi.get<MovieCardProps[]>("/movieList");
  return data.filter((movie) => movie.isUpComming === true);
};

export const getUpComingMovies = async () => {
  const { data } = await fetchApi.get<MovieCardProps[]>("/movieList");
  return data.filter((movie) => movie.isUpComming === false);
};

export const getMovieById = async (id: string) => {
  const res = await fetchApi.get(`/movieList/${id}`);
  return res.data;
};

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
