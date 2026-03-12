import ButtonComponent from "@/src/components/common/button";

interface OfferHoverOverlayProps {
  title: string;
  onClick?: () => void;
}

const OfferHoverOverlay = ({ title }: OfferHoverOverlayProps) => {
  return (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
      <div className="absolute inset-0 bg-orange-90/70"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full text-center">
          <h3 className="uppercase font-saira font-bold text-xs lg:text-lg text-white-100 mb-5 px-10 line-clamp-4">
            {title}
          </h3>
          <ButtonComponent
            className="text-xs lg:text-lg !px-5 lg:!p-10 uppercase"
            variant="outlinePill"
            name="Chi tiết"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferHoverOverlay;
