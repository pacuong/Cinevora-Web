"use client";

import { useState } from "react";
import { Card, Tag } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PAGEURL from "@/src/constants/pageUrl";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import { getTagColor } from "@/src/utils/getTagColor";
import { renderMedal } from "@/src/utils/renderMedal";

const { Meta } = Card;

export interface MovieCardProps {
  id: string;
  title: string;
  rating?: number;
  ageRating: string;
  posterUrl: string;
  releaseDate: string;
  director?: string;
  actor?: string;
  genre?: string;
  duration: number;
  language?: string;
  rated: string;
  description?: string;
  isUpComming?: boolean;
}

interface MovieListProps {
  movies: MovieCardProps[];
  isShowGenre?: boolean;
  isShowOnlyBookBtn?: boolean;
  isHoverMovie?: boolean;
  isShowDuration?: boolean;
  isShowBtn?: boolean;
  className?: string;
  onBooking?: (movie: {
    id: string;
    title: string;
    posterUrl: string;
    releaseDate: string;
  }) => void;
  onTrailer?: () => void;
}

const MovieCard = ({
  movies,
  isShowGenre = false,
  isShowOnlyBookBtn = false,
  isHoverMovie,
  className,
  onBooking,
  onTrailer,
  isShowDuration,
  isShowBtn,
}: MovieListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { isDesktop } = useCustomDevice();
  const isLaptop = isDesktop;
  const router = useRouter();

  const handleNavigateDetail = (id: string) => {
    router.push(`${PAGEURL.DETAIL_PAGE}/${id}`);
  };

  const handleCardClick = (index: number) => {
    if (!isLaptop && !isShowGenre && !isShowOnlyBookBtn) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <div className="min-w-[355px] md:max-w-[574px] lg:min-w-[980px] mx-auto mb-[50px]">
      <div
        className={`movie-card-list ${isLaptop ? "is-laptop" : ""} ${className || ""} md:gap-[27px] lg:gap-[66px] !px-[0px] !pt-0`}
      >
        {movies.map((movie, index) => {
          const isActive = activeIndex === index;

          return (
            <Card
              key={`${movie.title}-${index}`}
              className={`movie-card ${isActive ? "active" : ""} w-[163px] md:w-[173px] lg:w-[195px] !shadow-none !mb-[20px] lg:!mb-[10px]`}
              onClick={() => {
                handleCardClick(index);
              }}
              variant="borderless"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleNavigateDetail(movie.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavigateDetail(movie.id);
                  }
                }}
                className={`poster-wrapper ${isHoverMovie ? "lg:after:bg-orange-overlay" : ""}`}
              >
                {movie.rating && (
                  <div className="movie-medal">{renderMedal(movie.rating)}</div>
                )}

                <img
                  draggable={false}
                  alt={movie.title}
                  src={movie.posterUrl}
                  className="movie-poster !sepia-0 object-cover w-[163px] md:w-[173px] lg:h-[281px] h-[251px] md:h-[281px] lg:w-[195px]"
                />
              </div>

              <div className="px-[8px] lg:px-8">
                <Meta
                  title={
                    <Link
                      href={`${PAGEURL.DETAIL_PAGE}/${movie.id}`}
                      className="movie-title tracking-tight !text-black-100 font-saira !text-[14px] md:!text-[15px] lg:text-[14px]"
                    >
                      {movie.title} ({movie.rated})
                    </Link>
                  }
                  description={
                    <div className="movie-info">
                      {isShowGenre && (
                        <div className="text-black-100 tracking-tight truncate uppercase !text-[13px] font-saira md:text-xs lg:text-sm">
                          thể loại: {movie.genre || "—"}
                        </div>
                      )}

                      {isShowDuration && (
                        <div className="movie-meta tracking-tight text-black-100 !text-[13px] font-saira uppercase">
                          {movie.duration} phút |
                          <Tag
                            color={getTagColor(movie.ageRating)}
                            className="!text-[18px] font-bold border-0 !bg-white-100 p-0 md:text-xs lg:text-sm"
                          >
                            {movie.ageRating}
                          </Tag>
                        </div>
                      )}

                      <div className="movie-date tracking-tight text-black-100 !text-[13px] font-saira uppercase md:text-xs lg:text-sm">
                        khởi chiếu: {movie.releaseDate}
                      </div>
                      {isShowBtn && (
                        <div
                          className={`movie-buttons !mt-[20px] md:!h-auto ${
                            isShowGenre || isShowOnlyBookBtn
                              ? "always-visible md:items-center"
                              : isLaptop
                                ? "hover-mode"
                                : isActive
                                  ? "visible"
                                  : ""
                          }`}
                        >
                          {!isShowOnlyBookBtn && (
                            <button
                              className="uppercase btn-trailer text-[10px] md:text-xs lg:text-sm 
                              py-[2px] px-4 md:py-[3px] md:px-[10px] lg:py-[4px] lg:px-[12px]"
                              onClick={onTrailer}
                            >
                              trailer
                            </button>
                          )}

                          <button
                            className="uppercase hover:!transform-none !bg-[#0e1d2f] !rounded-full lg:hover:!bg-orange-70 font-bold font-saira btn-trailer md:!text-[13px] lg:text-sm
                            !px-[5px] md:!py-[5px] md:!px-[10px]"
                            onClick={() => {
                              onBooking?.({
                                id: movie.id,
                                title: movie.title,
                                posterUrl: movie.posterUrl,
                                releaseDate: movie.releaseDate,
                              });
                            }}
                          >
                            đặt vé
                          </button>
                        </div>
                      )}
                    </div>
                  }
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
