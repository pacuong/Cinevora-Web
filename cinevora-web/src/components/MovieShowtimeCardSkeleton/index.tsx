const MovieShowtimeCardSkeleton = () => {
  return (
    <div className="lg:w-[1310px] mx-auto">
      <div className="h-[84px] bg-white-100 flex items-center px-10">
        <div className="h-[27px] w-[117px] bg-gray-40 animate-pulse rounded" />
      </div>
      <div className="py-17 bg-white-100 h-[394px] md:h-[256px]">
        <div className="px-10">
          <div className="bg-gray-40 rounded animate-pulse h-[36px] w-[170px]" />
        </div>
        <div className="font-saira text-center text-xl mt-2 mb-10">
          <div className="h-[33px] w-52 mx-auto bg-gray-40 rounded animate-pulse" />
        </div>
        <div className="flex flex-wrap justify-center md:flex-nowrap lg:justify-between gap-5 m-auto w-[300px] md:w-[600px] lg:w-[700px]">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="w-[80px] h-[59px] bg-gray-40 border rounded animate-pulse"
            />
          ))}
        </div>
      </div>
      <div className="h-[36px] bg-white-100 px-10 flex items-center">
        <div className="h-[36px] w-[170px] bg-gray-40 rounded animate-pulse" />
      </div>
      <div className="px-10 overflow-y-scroll h-[300px] md:overflow-y-hidden md:h-auto mb-17">
        <div className="max-w-[1106px] mx-auto">
          <div className="mt-10 px-7">
            <div className="uppercase text-sm font-bold mb-9">
              <div className="h-[24px] w-40 bg-gray-40 rounded animate-pulse" />
            </div>
            <div className="flex flex-col lg:flex-row ml-6">
              <div className="flex-shrink-0 mb-5">
                <div className="w-[117px] h-[166px] bg-gray-40 rounded animate-pulse" />
              </div>
              <div className="lg:px-20">
                <button className="showtime-card cursor-pointer mb-5 w-[115px] h-[78px] bg-gray-40 border border-gray-50 rounded p-0 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieShowtimeCardSkeleton;
