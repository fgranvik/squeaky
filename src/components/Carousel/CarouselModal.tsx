import React from "react";
import styles from "./CarouselModal.module.css";
import Carousel from "./Carousel";

import { ReactComponent as CloseMark } from "../../images/icons/x-mark.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: JSX.Element[];
  startItem?: number;
}

export const CarouselModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  items,
  startItem,
}) => {
  if (!isOpen) return null;

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      tabIndex={0}
      aria-modal="true"
      aria-labelledby="carousel-modal-title"
    >
      <div className={styles.modalContent} onClick={handleContentClick}>
        <div className={styles.closeButton}>
          <CloseMark
            name="close"
            color="white"
            onClick={onClose}
            aria-label="close"
          />
        </div>
        <Carousel
          carouselItems={items}
          startItem={startItem}
          singleSlide={true}
          showNavigation={true}
          showMagnify={false}
        />
      </div>
    </div>
  );
};
