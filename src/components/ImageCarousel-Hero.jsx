"use client";

import { ChevronLeft, ChevronRight } from "react-feather";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const unify = (e) => {
  return e.changedTouches ? e.changedTouches[0] : e;
};

const ImageCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 9000,
  titles,
}) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragAmount, setDragAmount] = useState(0);
  const [startPos, setStartPos] = useState(0);
  const [dragStartTime, setDragStartTime] = useState(0);
  const carouselRef = useRef(null);
  const slideTimeout = useRef(null);

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

  const handleDragStart = useCallback(
    (e) => {
      setIsDragging(true);
      setStartPos(unify(e).clientX);
      setDragStartTime(Date.now());
      clearTimeout(slideTimeout.current);
    },
    []
  );

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const currentX = unify(e).clientX;
      const walk = currentX - startPos;
      setDragAmount(walk);
    },
    [isDragging, startPos]
  );

  const handleDragEnd = useCallback(
    (e) => {
      if (!isDragging) return;
      
      const dragTime = Date.now() - dragStartTime;
      const dragDistance = Math.abs(dragAmount);
      const quickSwipe = dragTime < 300 && dragDistance > 50;
      const longSwipe = dragDistance > 100;

      if (quickSwipe || longSwipe) {
        if (dragAmount > 0) {
          prev();
        } else {
          next();
        }
      }

      setIsDragging(false);
      setDragAmount(0);
      resetTimeout();
    },
    [isDragging, dragAmount, dragStartTime, next, prev]
  );

  const resetTimeout = useCallback(() => {
    slideTimeout.current = setTimeout(next, autoSlideInterval);
  }, [autoSlideInterval, next]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('touchstart', handleDragStart, { passive: false });
    carousel.addEventListener('touchmove', handleDragMove, { passive: false });
    carousel.addEventListener('touchend', handleDragEnd);
    carousel.addEventListener('mousedown', handleDragStart);
    carousel.addEventListener('mousemove', handleDragMove);
    carousel.addEventListener('mouseup', handleDragEnd);
    carousel.addEventListener('mouseleave', handleDragEnd);

    return () => {
      carousel.removeEventListener('touchstart', handleDragStart);
      carousel.removeEventListener('touchmove', handleDragMove);
      carousel.removeEventListener('touchend', handleDragEnd);
      carousel.removeEventListener('mousedown', handleDragStart);
      carousel.removeEventListener('mousemove', handleDragMove);
      carousel.removeEventListener('mouseup', handleDragEnd);
      carousel.removeEventListener('mouseleave', handleDragEnd);
    };
  }, [handleDragStart, handleDragMove, handleDragEnd]);

  const translateX = isDragging ? dragAmount : 0;
  
  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden w-full h-full select-none"
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      <div
        className="flex transition-transform duration-300 ease-out h-full"
        style={{
          transform: `translateX(calc(-${current * 100}% + ${translateX}px))`,
          transition: isDragging ? 'none' : 'transform 300ms ease-out'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 z-50">
            {slide}
          </div>
        ))}
      </div>

      {/* Current Slide Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-6">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-md cursor-pointer hover:bg-background/80 ${
              index === current
                ? "bg-background  transition-all duration-300 ease-in-out w-8"
                : "bg-background/90"
            }`}
          />
        ))}
      </div>

     
    </div>
  );
};

export default ImageCarousel;