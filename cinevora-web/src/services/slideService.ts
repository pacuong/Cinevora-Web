import fetchApi from "@/src/services/fetchApi";

interface MovieBanner {
  id: string;
  posterBanner: string;
  title: string;
}

export const getMovieBanner = async () => {
  const response = await fetchApi.get<MovieBanner[]>("/movieList");
  return response.data;
};
