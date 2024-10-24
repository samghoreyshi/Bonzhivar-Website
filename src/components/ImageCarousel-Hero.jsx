import { ChevronLeft, ChevronRight } from "react-feather";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 9000,
  titles,
}) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const goToSlide = useCallback(
    (index) => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrent(index);
      }
    },
    [isTransitioning]
  );

  const prev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goToSlide]);

  const next = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, slides.length, goToSlide]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Mouse drag handling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset < 0) {
        next(); // Dragged left
      } else {
        prev(); // Dragged right
      }
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handling for mobile devices
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - startX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset < 0) {
        next(); // Swiped left
      } else {
        prev(); // Swiped right
      }
    }
    setDragOffset(0);
  };

  return (
    <div
      className="overflow-hidden relative h-full"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div
        className="flex h-full transition-transform ease-out duration-300"
        style={{
          transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Current Slide Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-sm ${
              index === current ? "bg-background transition-all duration-300 ease-in-out w-6 " : "bg-background/50"
            }`}
          />
        ))}
      </div>

      <div className="hidden absolute inset-0 sm:flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-lg shadow bg-accent/80 text-accentLight hover:bg-accent transition-all ease-in-out duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-lg shadow bg-accent/80 text-accentLight hover:bg-accent transition-all ease-in-out duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;