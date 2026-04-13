interface BannerSkeletonProps {
  thumbnailCount?: number;
}

const BannerSkeleton = ({ thumbnailCount = 5 }: BannerSkeletonProps) => {
  return (
    <div className="mx-auto w-[315px] md:w-[720px] lg:w-[1140px] flex flex-col bg-black-50">
      <div className="relative bg-black overflow-hidden">
        <div className="relative h-[112px] md:h-[257px] lg:h-[407px] animate-pulse bg-gray-60" />

        <div className="absolute top-1/2 -translate-y-1/2 left-15 z-20 hidden lg:flex">
          <div className="w-21 h-21 rounded-full animate-pulse bg-gray-50" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-15 z-20 hidden lg:flex">
          <div className="w-21 h-21 rounded-full animate-pulse bg-gray-50" />
        </div>
      </div>

      <div className="relative overflow-hidden bg-black-100 mb-5 p-2 md:p-5">
        <div className="flex gap-[10px]">
          {Array.from({ length: thumbnailCount }).map((_, index) => (
            <div
              key={index}
              className="relative flex-1 aspect-video overflow-hidden group"
            >
              <div
                className={[
                  "w-full h-full rounded-sm animate-pulse bg-gray-60 transition-all duration-300",
                ].join(" ")}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 md:w-12 md:h-12 lg:w-17 lg:h-17 rounded-full animate-pulse bg-gray-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
