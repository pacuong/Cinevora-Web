'use client'

import { useState } from "react";
import { Card, Tag } from "antd";
import type { MovieCardProps } from "..";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import { getTagColor } from "@/src/utils/getTagColor";
import { renderMedal } from "@/src/utils/renderMedal";

const { Meta } = Card;

interface MovieCardItemProps {
  movie: MovieCardProps;
  isShowGenre?: boolean;
  isShowOnlyBookBtn?: boolean;
  isHoverMovie?: boolean;
  className?: string;
  onBooking?: () => void;
  onTrailer?: () => void;
}

const MovieCardItem = ({
  movie,
  isShowGenre = false,
  isShowOnlyBookBtn = false,
  isHoverMovie,
  className,
  onBooking,
  onTrailer,
}: MovieCardItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const { isDesktop } = useCustomDevice();
  const isLaptop = isDesktop;

  const handleCardClick = () => {
    if (!isLaptop && !isShowGenre && !isShowOnlyBookBtn) {
      setIsActive((prev) => !prev);
    }
  };

  return (
    <div
      className={`movie-card-list ${isLaptop ? "is-laptop" : ""} ${
        className || ""
      } lg:justify-center`}
    >
      <Card
        className={`movie-card ${isActive ? "active" : ""} w-[138px] md:w-[220px] lg:w-[264px]`}
        onClick={handleCardClick}
        variant="borderless"
      >
        <div
          className={`poster-wrapper ${isHoverMovie ? "lg:after:bg-orange-overlay" : ""}`}
        >
          {movie.rating && (
            <div className="movie-medal">{renderMedal(movie.rating)}</div>
          )}

          <img
            draggable={false}
            alt={movie.title}
            src={movie.posterUrl}
            className="movie-poster w-full h-[221px] md:h-[340px] lg:h-[385px]"
          />
        </div>

        <Meta
          title={
            <span className="movie-title truncate uppercase text-[10px] md:text-xs lg:text-[14px]">
              {movie.title}
            </span>
          }
          description={
            <div className="movie-info">
              {isShowGenre && (
                <div className="movie-genre uppercase truncate text-[10px] md:text-xs lg:text-sm">
                  thể loại: {movie.genre || "—"}
                </div>
              )}

              <div className="movie-meta uppercase">
                {movie.duration} phút{" "}
                <Tag
                  color={getTagColor(movie.ageRating)}
                  className="movie-tag text-[10px] md:text-xs lg:text-sm"
                >
                  {movie.ageRating}
                </Tag>
              </div>

              <div className="movie-date uppercase text-[10px] md:text-xs lg:text-sm">
                khởi chiếu {movie.releaseDate}
              </div>

              <div
                className={`movie-buttons ${
                  isShowGenre || isShowOnlyBookBtn
                    ? "always-visible"
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
                  className="uppercase btn-trailer text-[10px] md:text-xs lg:text-sm
                             py-[2px] px-4 md:py-[3px] md:px-[10px] lg:py-[4px] lg:px-[12px]"
                  onClick={onBooking}
                >
                  đặt vé
                </button>
              </div>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default MovieCardItem;
