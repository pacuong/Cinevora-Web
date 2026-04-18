import { MovieBanner } from "@/src/interfaces/movieCard";
import fetchApi from "@/src/services/fetchApi";

export const getMovieBanner = async () => {
  const response = await fetchApi.get<MovieBanner[]>("/movies");
  return response.data;
};
