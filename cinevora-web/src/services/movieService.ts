import { MovieCardProps, CreateMoviePayload} from "@/src/interfaces/movieCard";
import fetchApi from "./fetchApi";
import { MovieScheduleInfoDto } from "@/src/interfaces/api/movieScheduleApi";

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

export const getMovieApiById = async (
  movieId: number,
): Promise<MovieScheduleInfoDto> => {
  const { data } = await fetchApi.get(`/movies/${movieId}`);
  return data;
};

export const getMovies = async (): Promise<MovieScheduleInfoDto[]> => {
  const { data } = await fetchApi.get("/movies");

  return data;
};

export const deleteMovie = async (id: number) => {
  await fetchApi.delete(`/movies/${id}`);
};
