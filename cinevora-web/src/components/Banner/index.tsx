"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { Swiper as SwiperType } from "swiper";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import BorderGlow from "@/src/icons/borderGlow";
import AddIcon from "@/src/icons/iconAdd";
import ChevronLeft from "@/src/icons/chevronLeft";
import ChevronRight from "@/src/icons/ChevronRight";
import ButtonComponent from "@/src/components/common/button";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  title?: string;
}

interface BannerProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export const Banner: React.FC<BannerProps> = ({
  slides,
  autoPlayInterval = 6000,
}) => {
  const { isMobile, isTablet } = useCustomDevice();
  const iconSize = isMobile ? 14 : isTablet ? 30 : 50;
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
  const middleIndex = 2;
  const centerThumbnail = (realIndex: number) => {
    if (!thumbSwiper) return;

    const total = slides.length;
    const target = (realIndex + total - middleIndex) % total;

    thumbSwiper.slideToLoop(target, 300);
  };

  const handleThumbnailClick = (index: number) => {
    if (!swiperRef.current) return;

    swiperRef.current.slideToLoop(index, 600);

    setTimeout(() => {
      centerThumbnail(index);
    });
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const real = swiper.realIndex;
    setCurrentIndex(real);
    setTimeout(() => {
      centerThumbnail(real);
    }, 30);
  };

  return (
    <div className="mx-auto w-[315px] md:w-[720px] lg:w-[1140px] flex flex-col bg-black-50">
      <div className="relative bg-black overflow-hidden cursor-pointer">
        <Swiper
          modules={[Navigation, Autoplay, Thumbs]}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          autoplay={{ delay: autoPlayInterval, disableOnInteraction: false }}
          loop={true}
          thumbs={{ swiper: thumbSwiper }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="h-[112px] md:h-[257px] lg:h-[407px]">
                <Image
                  fill
                  src={slide.image}
                  alt={slide.title || `Slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <ButtonComponent
          className="!hidden lg:!flex absolute top-1/2 -translate-y-1/2 left-15 z-20 transition-all duration-300"
          onClick={handlePrev}
          variant="circle"
          name={<ChevronLeft />}
        />

        <ButtonComponent
          className="!hidden lg:!flex absolute top-1/2 -translate-y-1/2 right-15 z-20 transition-all duration-300"
          onClick={handleNext}
          name={<ChevronRight />}
          variant="circle"
        />
      </div>
      <div className="relative overflow-hidden bg-black-100 mb-5 p-2 md:p-5">
        {/* TODO:  */}
        <Swiper
          modules={[Navigation, Thumbs]}
          onSwiper={setThumbSwiper}
          loop={true}
          slidesPerView={5}
          spaceBetween={10}
          centeredSlides={false}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;

            return (
              <SwiperSlide
                key={slide.id}
                className="!h-[100px] flex-none"
                onClick={() => handleThumbnailClick(index)}
              >
                <div
                  className={[
                    "relative w-full pb-[56%] overflow-hidden group",
                    "transition-all duration-300 h-[100px]",
                    isActive
                      ? "opacity-100 grayscale-0 z-10 hover:opacity-50"
                      : "opacity-50 hover:opacity-50",
                  ].join(" ")}
                >
                  <Image
                    fill
                    src={slide.image}
                    alt={slide.title || `Slide ${index}`}
                    className="absolute top-0 left-0 object-cover transition-all duration-300"
                  />
                  <BorderGlow
                    strokeWidth={5}
                    color={"#ff8800"}
                    opacity={0.5}
                    className={[
                      "absolute inset-0 w-full h-full transition-all duration-300",
                      isActive
                        ? "opacity-100 group-hover:opacity-0"
                        : "opacity-0",
                    ].join(" ")}
                  />
                  <BorderGlow
                    strokeWidth={5}
                    color={"white"}
                    opacity={0.5}
                    className={[
                      "absolute inset-0 w-full h-full transition-all duration-300",
                      "opacity-0 group-hover:opacity-100",
                    ].join(" ")}
                  />
                  <div
                    className={[
                      "absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300",
                      isActive
                        ? "opacity-40 group-hover:opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    ].join(" ")}
                  >
                    <AddIcon
                      size={iconSize}
                      strokeWidth={1.5}
                      className="text-white-100"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
