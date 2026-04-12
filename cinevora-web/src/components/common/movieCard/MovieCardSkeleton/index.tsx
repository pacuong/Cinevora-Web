const MovieCardSkeleton = ({ count = 10 }: { count?: number }) => {
  return (
    <div className="min-w-[355px] md:max-w-[574px] lg:min-w-[980px] mx-auto mb-[50px]">
      <div className="movie-card-list md:gap-[27px] lg:gap-[66px] !px-[0px] !pt-0">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="w-[163px] md:w-[173px] lg:w-[195px] !mb-[20px] lg:!mb-[10px]"
          >
            <div className="animate-pulse">
              <div className="w-[163px] md:w-[173px] lg:w-[195px] h-[251px] md:h-[281px] lg:h-[281px] bg-gray-300 rounded-[8px]" />

              <div className="px-[8px] lg:px-8 pt-3">
                <div className="h-4 bg-gray-300 rounded w-[80%] mb-3" />
                <div className="h-4 bg-gray-300 rounded w-[60%] mb-3" />
                <div className="h-4 bg-gray-300 rounded w-[70%] mb-4" />

                <div className="flex gap-2">
                  <div className="h-8 bg-gray-300 rounded-full w-[70px]" />
                  <div className="h-8 bg-gray-300 rounded-full w-[80px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCardSkeleton;