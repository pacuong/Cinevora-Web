import Link from "next/link";

const MovieDetailSkeleton = () => {
  return (
    <div className="lg:flex lg:justify-center">
      <div className="pt-4 mx-4 md:mt-10 md:mx-9 lg:mx-0">
        <div className="flex items-start md:items-center gap-4 w-full mb-8 lg:hidden">
          <div className="flex-1 h-[27px] md:h-[33px] bg-gray-40 rounded animate-pulse" />
          <div className="w-[74px] h-[29px] md:w-[105px] md:h-[45px] px-6 bg-gray-40 rounded-full animate-pulse" />
        </div>

        <div>
          <div className="md:flex lg:justify-center">
            <div className="flex-shrink-0">
              <div className="w-[195px] h-[265px] lg:h-[281px] bg-gray-40 rounded animate-pulse md:mr-15" />
              <div className="mt-5 mb-13 ml-4 flex gap-4">
                <div className="h-[22px] w-[68px] px-5 bg-gray-40 rounded animate-pulse" />
                <div className="h-[22px] w-[68px] px-5 bg-gray-40 rounded animate-pulse" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="hidden lg:flex items-center gap-4 lg:min-w-[800px] w-full mb-8">
                <div className="flex-1 h-[33px] bg-gray-40 rounded animate-pulse" />
                <div className="h-10 px-8 bg-gray-40 rounded-full animate-pulse lg:w-[105px] lg:h-[45px]" />
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
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="movie-tab md:py-[10px] md:px-[25px] h-[34] md:h-[48] w-[80] md:w-[111] bg-gray-40 rounded animate-pulse"
              />
            ))}
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
