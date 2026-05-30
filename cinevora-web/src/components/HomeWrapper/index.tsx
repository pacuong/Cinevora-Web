"use client";

import { Banner } from "@/src/components/Banner";
import BannerSkeleton from "@/src/components/BannerSkeleton";
import MovieCarousel from "@/src/components/Carousel";
import ButtonComponent from "@/src/components/common/button";
import FilmCarouselSkeleton from "@/src/components/FilmCarouselSkeleton";
import OffersSection from "@/src/components/OffersSection";
import TransactionHistory from "@/src/components/TransactionHistory";
import { useListNowMovies } from "@/src/hooks/Movies/useListNowMovies";
import { useListUpComingMovies } from "@/src/hooks/Movies/useListUpComingMovies";
import { useListMovieBanner } from "@/src/hooks/Movies/useMovieBanner";
import { offersData } from "@/src/mocks/offersData";
import { useState } from "react";

const HomeWrapper = () => {
  const [isUpComming, setIsUpComming] = useState(false);
  const { movieBanner, isLoadingBanner, isErrorBanner } = useListMovieBanner();
  const {
    nowShowingMovies = [],
    isLoadingNowShowingMovies,
    isErrorNowMovies,
  } = useListNowMovies();
  const {
    upComingMovies = [],
    isLoadingUpComingMovies,
    isErrorUpComingMovies,
  } = useListUpComingMovies();
  const movies = isUpComming ? upComingMovies : nowShowingMovies;

  const isLoading = isUpComming
    ? isLoadingUpComingMovies
    : isLoadingNowShowingMovies;
  const isMovieError = isUpComming ? isErrorUpComingMovies : isErrorNowMovies;
  const handleNowShowing = () => {
    setIsUpComming(true);
  };

  const handleComingSoon = () => {
    setIsUpComming(false);
  };

  return (
    <>
      {/* <TransactionHistory /> */}
      <div className='bg-blue-100'>
        {isLoadingBanner || isErrorBanner ? (
          <BannerSkeleton />
        ) : (
          <Banner slides={movieBanner} />
        )}
        <div className='cinema-gradient-bg'>
          <div className='flex justify-center mx-auto gap-5 pt-10 pb-15 w-[315px] md:w-[720px] lg:w-[1140px]'>
            <ButtonComponent
              onClick={handleComingSoon}
              className={` h-13
          !text-s md:!text-xl lg:!text-3xl
          !px-5 !py-8 md:!px-8 md:!py-12
          transition-all duration-300
          ${!isUpComming ? "!bg-orange-100 !border-orange-100" : ""}
        `}
              variant='outline'
              name='phim đang chiếu'
            />

            <ButtonComponent
              onClick={handleNowShowing}
              className={` h-13
          !text-s md:!text-xl lg:!text-3xl
          !px-5 !py-8 md:!px-8 md:!py-12
          transition-all duration-300
          ${isUpComming ? "!bg-orange-100 !border-orange-100" : ""}
        `}
              variant='outline'
              name='phim sắp chiếu'
            />
          </div>
          {isLoading || isMovieError ? (
            <FilmCarouselSkeleton />
          ) : (
            <MovieCarousel movies={movies} />
          )}
        </div>
      </div>
      <div className='bg-white-70 flex justify-center'>
        <OffersSection
          highlight={offersData.highlight}
          topImages={offersData.topImages}
          gridImages={offersData.gridImages}
        />
      </div>
    </>
  );
};

export default HomeWrapper;
