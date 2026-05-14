import { MovieCardProps, CreateMoviePayload} from "@/src/interfaces/movieCard";
import fetchApi from "./fetchApi";
import { MovieSchedule } from "@/src/interfaces/movieSchedule";

export const getMovieList = async (page = 1, limit = 5) => {
  const response = await fetchApi.get<MovieCardProps[]>("/movies", {
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
  const { data } = await fetchApi.get<MovieCardProps[]>("/movies");
  return data.filter((movie) => movie.status === "upcoming");
};

export const getMovieById = async (slug: string) => {
  const res = await fetchApi.get(`/movies/${slug}`);
  return res.data;
};

export const createMovie = async (
  payload: CreateMoviePayload,
): Promise<MovieCardProps> => {
  const { data } = await fetchApi.post<MovieCardProps>("/movies", payload);
  return data;
};

export const updateMovie = async (
  id: number,
  payload: CreateMoviePayload,
): Promise<MovieCardProps> => {
  const { data } = await fetchApi.put<MovieCardProps>(`/movies/${id}`, payload);
  return data;
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

export const deleteMovie = async (id: number) => {
  await fetchApi.delete(`/movies/${id}`);
};