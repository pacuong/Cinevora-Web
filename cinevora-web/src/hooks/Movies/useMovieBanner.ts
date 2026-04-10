"use client";

import { getMovieBanner } from "@/src/services/slideService";
import { useQuery } from "@tanstack/react-query";

export const useListMovieBanner = () => {
  const {
    data: movieBanner = [],
    isError: isErrorBanner,
    isLoading: isLoadingBanner,
  } = useQuery({
    queryKey: ["nowShowingBanner"],
    queryFn: getMovieBanner,
  });

  return { movieBanner, isErrorBanner, isLoadingBanner };
};
