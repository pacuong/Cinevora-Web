import OfferHoverOverlay from "@/src/components/common/offerHoverOverlay";
import Image from "next/image";

export interface OfferItem {
  id: number;
  image: string;
  alt: string;
  titlePromotion: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface OffersSectionProps {
  highlight: Highlight;
  topImages: OfferItem[];
  gridImages: OfferItem[];
}

const OffersSection = ({
  highlight,
  topImages,
  gridImages,
}: OffersSectionProps) => {
  return (
    <div className="flex flex-col gap-10 py-21 w-[315px] md:w-[720px] lg:w-[1140px]">
      <h1 className="uppercase font-saira font-bold text-lg text-blue-80 md:text-4xl text-center">
        khuyến mãi & ưu đãi
      </h1>

      <div className="flex flex-col gap-10 md:flex-row md:gap-5">
        <div className="w-full border border-gray-10 h-[170px] lg:h-[260px]">
          <h2 className="uppercase font-saira font-bold text-base text-orange-100 mb-6 p-2 lg:p-10">
            {highlight.title}
          </h2>
          <p className="font-saira text-gray-70 px-2 lg:px-10">
            {highlight.description}
          </p>
        </div>

        <div className="flex w-full justify-between gap-5">
          {topImages.map((item) => (
            <div
              key={item.id}
              className="relative group w-full h-[152px] md:h-[170px] lg:h-[260px] "
            >
              <Image
                className="object-cover"
                src={item.image}
                alt={item.alt}
                fill
              />
              <OfferHoverOverlay title={item.titlePromotion} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 h-[314px] md:grid-cols-4 ">
        {gridImages.map((item) => (
          <div
            key={item.id}
            className="relative group w-full h-full md:h-[170px] lg:h-[260px] "
          >
            <Image
              className="object-cover"
              src={item.image}
              alt={item.alt}
              fill
            />
            <OfferHoverOverlay title={item.titlePromotion} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
