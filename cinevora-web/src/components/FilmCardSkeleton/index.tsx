const FilmCardSkeleton = () => {
  return (
    <div className='movie-card-list lg:justify-center animate-pulse'>
      <div className='movie-card w-[138px] md:w-[220px] lg:w-[264px]'>
        {/* Poster */}
        <div
          className='
            w-full
            h-[221px]
            md:h-[340px]
            lg:h-[385px]
            rounded-md
            bg-gray-60
          '
        />

        <div className='mt-5 space-y-4'>
          <div className='h-[18.85px] md:h-[17.27px] bg-gray-60 rounded' />
          <div className='flex justify-center gap-2'>
            <div className='h-[15.4px] w-[90px] bg-gray-60 rounded' />
            <div className='h-[15.4px] w-[90px] bg-gray-60 rounded-md' />
          </div>
          <div className='h-7 md:!h-[15.4px] w-[100%] bg-gray-60 rounded' />

          <div className='flex justify-center gap-2'>
            <div className='h-10 w-[90px] bg-gray-60 rounded-md' />
            <div className='h-10 w-[90px] bg-gray-60 rounded-md' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCardSkeleton;
