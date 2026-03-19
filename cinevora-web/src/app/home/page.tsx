'use client';

import { Banner } from '@/src/components/Banner';
import MovieCarousel from '@/src/components/Carousel';
import ButtonComponent from '@/src/components/common/button';
import OffersSection from '@/src/components/OffersSection';
import { MOCK_MOVIES } from '@/src/mocks/movieCard';
import { offersData } from '@/src/mocks/offersData';
import { slides } from '@/src/mocks/slides';
import { useState } from 'react';

const HomePage = () => {
  const [active, setActive] = useState(false);
  const handleNowShowing = () => setActive(true);
  const handleComingSoon = () => setActive(false);
  return (
    <>
      <div className='bg-blue-100 '>
        <Banner slides={slides} />
        <div className='cinema-gradient-bg'>
          <div className='flex justify-center mx-auto gap-5 pt-10 pb-15 w-[315px] md:w-[720px] lg:w-[1140px]'>
            <ButtonComponent
              onClick={handleComingSoon}
              className={`
                !text-s md:!text-xl lg:!text-3xl
                !px-5 !py-8 md:!px-8 md:!py-12
                transition-all duration-300
                ${!active ? '!bg-orange-100 !border-orange-100' : ''}
              `}
              variant='outline'
              name='phim đang chiếu'
            />
            <ButtonComponent
              onClick={handleNowShowing}
              className={`
                !text-s md:!text-xl lg:!text-3xl
                !px-5 !py-8 md:!px-8 md:!py-12
                transition-all duration-300
                ${active ? '!bg-orange-100 !border-orange-100' : ''}
              `}
              variant='outline'
              name='phim đang chiếu'
            />
          </div>
          <MovieCarousel movies={MOCK_MOVIES} />
        </div>
      </div>
      <div className='bg-white-70 flex justify-center'>
        <OffersSection
          highlight={offersData.highlight}
          topImages={offersData.topImages}
          gridImages={offersData.gridImages}
        />
      </div>
    </>
  );
};

export default HomePage;