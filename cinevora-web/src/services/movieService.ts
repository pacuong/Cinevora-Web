import { MovieCardProps} from "@/src/interfaces/movieCard";
import fetchApi from "./fetchApi";
import { MovieSchedule } from "@/src/interfaces/movieSchedule";

export const getMovieList = async (page = 1, limit = 5) => {
  const response = await fetchApi.get<MovieCardProps[]>("/movieList", {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  const total = Number(response.headers["x-total-count"] || 0);

  return {
    data: response.data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

export const getNowShowingMovies = async () => {
  const { data } = await fetchApi.get<MovieCardProps[]>("/movies");
  return data.filter((movie) => movie.status === "now_showing");
};

export const getUpComingMovies = async () => {
  const { data } = await fetchApi.get<MovieCardProps[]>("/movieList");
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

export const deleteMovie = async (id: string) => {
  await fetchApi.delete(`/movieList/${id}`);
};