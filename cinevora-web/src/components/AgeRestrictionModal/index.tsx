import ButtonComponent from "@/src/components/common/button";
import ModalComponent from "@/src/components/common/modal";
import { MovieAgeValue } from "@/src/constants/movieAgeValue";

export type MovieAgeClassification = "P" | "C13" | "C16" | "C18";
interface AgeRestrictionModalProps {
  ageClassification: MovieAgeClassification;
  open: boolean;
  onClose: () => void;
  onAgree: () => void;
}

const AgeRestrictionModal = ({
  ageClassification,
  open,
  onClose,
  onAgree,
}: AgeRestrictionModalProps) => {
  if (ageClassification === "P") return null;
  const AgeText: Record<
    Exclude<MovieAgeClassification, "P">,
    string
  > = MovieAgeValue;
  const handleAgree = () => {
    onAgree();
  };
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <ModalComponent
      title="Cảnh báo"
      className="!w-[480px] ageRating-modal"
      isModalOpen={open}
      setIsModalOpen={handleOpenChange}
      context={
        <div className="border-t border-red-80 flex flex-col items-center pb-10">
          <p className="font-mont font-semibold mt-7 mb-12 text-black-100">
            Phim cấm phổ biến đến khán giả dưới {AgeText[ageClassification]}{" "}
            tuổi
          </p>
          <ButtonComponent
            onClick={handleAgree}
            className="!rounded-sm"
            name="Tôi đồng ý"
            buttonType="submit"
          />
        </div>
      }
    />
  );
};

export default AgeRestrictionModal;
