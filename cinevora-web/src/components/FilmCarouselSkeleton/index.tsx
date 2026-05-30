import FilmCardSkeleton from "@/src/components/FilmCardSkeleton";

const FilmCarouselSkeleton = () => {
  return (
    <div className='w-[315px] md:w-[720px] lg:w-[1140px] mx-auto'>
      <div className='flex gap-4 overflow-hidden'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className='
              flex-[0_0_40%]
              md:flex-[0_0_calc(100%/3)]
              lg:flex-[0_0_25%]
            '
          >
            <FilmCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmCarouselSkeleton;
