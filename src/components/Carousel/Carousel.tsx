import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";
import { CarouselModal } from "./CarouselModal";

import { ReactComponent as ChevronLeft } from "../../images/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../images/icons/chevron-right.svg";
import { ReactComponent as MagnifyingGlass } from "../../images/icons/magnifying-glass.svg";

interface CarouselProps {
  carouselItems: JSX.Element[];
  singleSlide?: boolean;
  showMagnify?: boolean;
  showNavigation?: boolean;
  startItem?: number;
  itemsToShow?: number;
}

interface ModalState {
  isOpen: boolean;
  startItem: number;
}

interface CarouselItemProps {
  [key: string]: unknown;
  order: number;
  className?: string;
  onClick?: () => void;
  testId?: string;
  displayItems: number;
}

const CarouselItem: React.FC<PropsWithChildren<CarouselItemProps>> = ({
  children,
  testId,
  className,
  order,
  displayItems,
  onClick,
}) => {
  return (
    <div
      data-test-id={testId}
      className={className}
      onClick={onClick}
      style={
        {
          "--itemOrder": order,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({
  carouselItems,
  singleSlide = false,
  showMagnify = true,
  showNavigation = true,
  startItem = 0,
  itemsToShow = 3,
}) => {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const [currentItem, setCurrentItem] = useState(startItem);
  const [displayItems, setDisplayItems] = useState(itemsToShow);

  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    isOpen: false,
    startItem: 0,
  });
  const [modalCarousel, setModalCarousel] = useState<JSX.Element[]>([]);

  const transitionSpeed = 500;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const itemsClones = [...carouselItems, ...carouselItems];

    const itemsWithKeys = itemsClones.map((item, index) =>
      React.cloneElement(item, { key: index })
    );

    if (!singleSlide) {
      rotateArray(itemsWithKeys, -1);
    }

    setItems(itemsWithKeys);
    setModalCarousel(itemsWithKeys);

    const updateDisplayItems = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setDisplayItems(1);
      } else if (width < 900) {
        setDisplayItems(2);
      } else {
        setDisplayItems(itemsToShow);
      }
    };

    updateDisplayItems();
    window.addEventListener("resize", updateDisplayItems);
    return () => window.removeEventListener("resize", updateDisplayItems);
  }, []);

  const rotateArray = (array: JSX.Element[], n: number) => {
    for (let i = 0; i < Math.abs(n); i++) {
      if (n > 0) {
        array.push(array.shift() as JSX.Element);
      } else {
        array.unshift(array.pop() as JSX.Element);
      }
    }
  };

  const previous = () => {
    setAnimateRight(true);
    setTimeout(() => {
      setCurrentItem((prev) => prev - 1);
      setAnimateRight(false);
    }, transitionSpeed);
  };

  const next = () => {
    setAnimateLeft(true);
    setTimeout(() => {
      setCurrentItem((prev) => prev + 1);
      setAnimateLeft(false);
    }, transitionSpeed);
  };

  const openModalCarousel = (index: number) => {
    setIsModalOpen({ isOpen: true, startItem: index });
  };

  const closeModalCarousel = () => {
    setIsModalOpen({ isOpen: false, startItem: 1 });
  };

  const calculateOrder = (index: number) =>
    (((index - currentItem) % items.length) + items.length) % items.length;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      next();
    }

    if (touchStartX.current - touchEndX.current < -75) {
      previous();
    }
  };

  return (
    <div
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {showNavigation && (
        <div className={styles.carouselControls}>
          <ChevronLeft
            aria-label="navigate left"
            name="chevron-left"
            onClick={previous}
          />
          <ChevronRight
            aria-label="navigate right"
            name="chevron-right"
            onClick={next}
          />
        </div>
      )}

      <div className={styles.carouselInner}>
        <div
          className={classNames([
            styles.carouselItems,
            singleSlide ? styles.single : null,
          ])}
          style={
            {
              "--displayItems": displayItems,
            } as React.CSSProperties
          }
        >
          {items.map((item, index) => {
            return (
              <CarouselItem
                key={`carousel-item-${item.key}`}
                testId={`carousel-item-${index}`}
                order={calculateOrder(index)}
                displayItems={displayItems}
                className={classNames([
                  styles.itemOrder,
                  styles.carouselItem,
                  singleSlide ? styles.single : null,
                  animateLeft ? styles.animateLeft : null,
                  animateRight ? styles.animateRight : null,
                ])}
                onClick={() =>
                  showMagnify ? openModalCarousel(index - 1) : null
                }
              >
                {item}
                {showMagnify && (
                  <div className={styles.magnifyAction}>
                    <MagnifyingGlass
                      aria-label="Magnify slide"
                      name="magnifying-glass"
                    />
                  </div>
                )}
              </CarouselItem>
            );
          })}
        </div>
      </div>

      <CarouselModal
        isOpen={isModalOpen.isOpen}
        onClose={() => closeModalCarousel()}
        items={modalCarousel}
        startItem={isModalOpen.startItem}
      />
    </div>
  );
};

export default Carousel;
