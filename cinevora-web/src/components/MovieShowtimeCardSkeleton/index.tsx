"use client";

import {
  TIME_MOVIE_MB,
  TIME_MOVIE_PC,
  TIME_MOVIE_TL,
} from "@/src/constants/timeMovie";
import { useCustomDevice } from "@/src/hooks/deviceDetect";

const MovieShowtimeCardSkeleton = () => {
  const { isMobile, isTablet } = useCustomDevice();
  const buttonCount = isMobile
    ? TIME_MOVIE_MB
    : isTablet
      ? TIME_MOVIE_TL
      : TIME_MOVIE_PC;
  return (
    <div className="lg:w-[1310px] mx-auto">
      <div className="px-10 overflow-y-scroll h-[300px] md:overflow-y-hidden md:h-auto mb-17">
        <div className="max-w-[1106px] mx-auto">
          <div className="mt-10 px-7">
            <div className="uppercase text-sm font-bold mb-9">
              <div className="h-[24px] w-40 bg-gray-40 rounded animate-pulse" />
            </div>
            <div className="flex flex-col lg:flex-row ml-6">
              <div className="flex-shrink-0 mb-5">
                <div className="w-[117px] h-[166px] bg-gray-40 animate-pulse" />
              </div>
              <div className="lg:px-20 w-full md:w-1/2">
                {Array.from({ length: buttonCount }).map((_, index) => (
                  <button
                    key={index}
                    className="mb-5 w-[115px] h-[78px] !p-0 !bg-gray-40 !border-none !shadow-none !hover:bg-gray-40 
                    !hover:border-none !focus:border-none !focus:outline-none !focus:ring-0 !active:bg-gray-40 !rounded-none animate-pulse pointer-events-none"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieShowtimeCardSkeleton;
