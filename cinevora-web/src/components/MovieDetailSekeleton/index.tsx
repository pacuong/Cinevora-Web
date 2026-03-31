import Link from "next/link";

const MovieDetailSkeleton = () => {
  return (
    <div className="lg:flex lg:justify-center">
      <div className="pt-4 mx-4 md:mt-10 md:mx-9 lg:mx-0">
        <div className="flex items-start md:items-center gap-4 w-full mb-8 lg:hidden">
          <div className="flex-1 h-[27px] md:h-[33px] bg-gray-40 rounded animate-pulse" />
          <button
            className="
              shrink-0 lg:hidden
              text-[13px] p-0 pt-[3px] pb-[5px] px-[13px]
              md:py-[10px] md:px-[23px] md:text-[16px]
              whitespace-nowrap bg-black-70 text-white-100 uppercase rounded-full
            "
          >
            Đặt vé
          </button>
        </div>

        <div>
          <div className="md:flex lg:justify-center">
            <div className="flex-shrink-0">
              <div className="w-[195px] h-[265px] lg:h-[281px] bg-gray-40 rounded animate-pulse md:mr-15" />
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
            <div className="flex-1 min-w-0">
              <div className="hidden lg:flex items-center gap-4 lg:min-w-[800px] w-full mb-8">
                <div className="flex-1 h-[33px] bg-gray-40 rounded animate-pulse" />
                <button
                  className="
                      shrink-0
                      text-[13px] p-0 pt-[3px] pb-[5px] px-[13px]
                      md:py-[10px] md:px-[23px] md:text-[16px]
                      whitespace-nowrap bg-black-70 text-white-100 uppercase rounded-full
                    "
                >
                  Đặt vé
                </button>
              </div>
              <ul className="space-y-4">
                {Array.from({ length: 7 }).map((_, index) => (
                  <li key={index} className="detail-list flex gap-6">
                    <div className="w-[22%] md:w-[17%] lg:w-[12%] h-[24px] bg-gray-40 rounded animate-pulse" />
                    <div className="flex-1 h-[24px] bg-gray-40 rounded animate-pulse" />
                  </li>
                ))}
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
          <div className="space-y-3">
            <div className="h-20 w-full bg-gray-40 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
