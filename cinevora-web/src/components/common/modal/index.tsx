import { Modal } from "antd";
import type { ReactNode } from "react";
export interface ModalProps {
  title: string | ReactNode;
  context: string | ReactNode;
  className?: string;
  titleColor?: string;
  modalWidth?: string;
  name?: string;
  variant?: "link" | "default" | "outline" | "badge" | "circle";
  modalClassName?: string;
  isModalOpen?: boolean;
  setIsModalOpen: (open: boolean) => void;
  onClickMovie?: () => void;
}

const ModalComponent = ({
  title,
  context,
  className,
  titleColor,
  modalWidth,
  modalClassName,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title={<span className={titleColor}>{title}</span>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        rootClassName={modalClassName}
        width={modalWidth}
        className={className}
      >
        {context}
      </Modal>
    </div>
  );
};
export default ModalComponent;
