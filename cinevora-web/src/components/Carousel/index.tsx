import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MovieCardProps } from "@/src/components/common/movieCard";
import MovieCardItem from "@/src/components/common/movieCard/MovieCardItem";

interface MovieCarouselProps {
  movies: MovieCardProps[];
  className?: string;
}

const MovieCarousel = ({ movies, className = "" }: MovieCarouselProps) => {
  const autoplay = Autoplay({
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [autoplay],
  );

  return (
    <div
      className={`embla w-[315px] md:w-[720px] lg:w-[1140px] mx-auto  ${className}`}
    >
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="
                embla__slide
                flex-[0_0_40%]
                md:flex-[0_0_calc(100%/3)]
                lg:flex-[0_0_25%]
              "
            >
              <MovieCardItem isHoverMovie movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
