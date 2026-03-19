"use client";

import ShowtimeScheduleModal from "@/src/components/ShowtimeScheduleModal";
import { useMoviesId } from "@/src/hooks/Movies/useMoviesId";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const DetailPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const movieId = Array.isArray(id) ? id[0] : id;
  const { movieDetail, isErrorMovieDetail, isLoadingMovie } = useMoviesId(
    movieId || "",
  );

  if (isLoadingMovie) {
    return <div>Đang tải phim...</div>;
  }

  if (isErrorMovieDetail || !movieDetail) {
    return <div>Phim không tồn tại</div>;
  }

  const {
    title,
    ageRating,
    posterUrl,
    director,
    isUpComming,
    actor,
    genre,
    releaseDate,
    duration,
    language,
    rated,
    description,
  } = movieDetail;

  const handleBookTicket = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="pt-4 md:mt-10 md:mx-5">
        <div className="flex items-start md:items-center gap-4 w-full mb-8">
          <h3
            className="
              flex-1 min-w-0 lg:hidden
              text-[18px] md:text-[22px] font-saira uppercase font-bold
              break-words whitespace-normal
            "
          >
            {title} ({ageRating})
          </h3>

          <button
            className="
              shrink-0 lg:hidden
              text-[13px] p-0 pt-[3px] pb-[5px] px-[13px]
              md:py-[10px] md:px-[23px] md:text-[16px]
              whitespace-nowrap bg-black-70 text-white-100 uppercase rounded-full
            "
            onClick={handleBookTicket}
          >
            Đặt vé
          </button>
        </div>

        <div>
          <div className="md:flex md:justify-between lg:justify-center">
            <div>
              <img
                className="w-[195px] h-[265px] lg:h-[281px] object-cover md:mr-15"
                src={posterUrl}
                alt="avatar 3"
              />

              <div className="mt-5 mb-13 ml-4">
                <button className="mr-5 p-0 px-5 text-[14px] bg-blue-20 text-white-100 rounded">
                  Thích 0
                </button>
                <button className="px-4 text-[14px] p-0 bg-blue-20 rounded">
                  <Link className="text-white-100" href="">
                    Chia sẻ
                  </Link>
                </button>
              </div>
            </div>

            <div>
              <div className="sm:hidden md:hidden lg:flex items-start gap-4 lg:min-w-[795px] w-full mb-8">
                <h3
                  className="
                      flex-1 min-w-0
                      text-[18px] md:text-[22px] font-saira uppercase font-bold
                      break-words whitespace-normal
                    "
                >
                  {title} ({ageRating})
                </h3>
                <button
                  className="
                      shrink-0
                      text-[13px] p-0 pt-[3px] pb-[5px] px-[13px]
                      md:py-[10px] md:px-[23px] md:text-[16px]
                      whitespace-nowrap bg-black-70 text-white-100 uppercase rounded-full
                    "
                  onClick={handleBookTicket}
                >
                  Đặt vé
                </button>
              </div>

              <ul>
                <li className="detail-list">
                  <span className="label">Đạo diễn:</span>
                  <span className="value">{director}</span>
                </li>

                <li className="detail-list">
                  <span className="label">Diễn viên:</span>
                  {isUpComming && <span className="value">{actor}</span>}
                </li>

                <li className="detail-list">
                  <span className="label">Thể loại:</span>
                  <span className="value">{genre}</span>
                </li>

                <li className="detail-list">
                  <span className="label">Khởi chiếu:</span>
                  <span className="value">{releaseDate}</span>
                </li>

                <li className="detail-list">
                  <span className="label">Thời lượng:</span>
                  {isUpComming && (
                    <span className="value">{duration} phút</span>
                  )}
                </li>

                <li className="detail-list">
                  <span className="label">Ngôn ngữ:</span>
                  <span className="value">{language}</span>
                </li>

                <li className="detail-list">
                  <span className="label">Rated:</span>
                  {isUpComming && (
                    <span className="value">
                      <span className="rated">{rated.split(" - ")[0]}</span>
                      {" - "}
                      {rated.split(" - ")[1].toUpperCase()}
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-4 my-15">
            <button
              className={`movie-tab bg-orange-100 !border-0 md:font-saira md:text-[18px] md:py-[10px] md:px-[25px]`}
            >
              Chi tiết
            </button>

            <button
              className={`movie-tab md:font-saira md:mx-[10px] md:text-[18px] md:py-[10px] md:px-[25px]`}
              disabled
            >
              Trailer
            </button>

            <button
              className={`movie-tab md:font-saira md:text-[18px] md:py-[10px] md:px-[25px]`}
              disabled
            >
              Đánh giá
            </button>
          </div>

          <p className="w-full text-[15px] mb-10">{description}</p>
        </div>
      </div>

      <ShowtimeScheduleModal
        isModalOpen={openModal}
        setIsModalOpen={setOpenModal}
      />
    </>
  );
};

export default DetailPage;
