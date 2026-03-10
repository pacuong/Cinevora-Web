import BronzeMedal from "@/src/icons/bronzeMedal";
import GoldMedal from "@/src/icons/goldMedal";
import SilverMedal from "@/src/icons/silverMedal";

export const renderMedal = (rating?: number) => {
  const medalClass = 'w-12 md:w-[38px] lg:w-[46px] h-16 md:h-[50px] lg:h-[60px]';

  switch (rating) {
    case 1:
      return <GoldMedal className={medalClass} rank={rating} />;
    case 2:
      return <SilverMedal className={medalClass} rank={rating} />;
    case 3:
      return <BronzeMedal className={medalClass} rank={rating} />;
    default:
      return null;
  }
};