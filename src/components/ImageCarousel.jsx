"use client";

import { ChevronLeft, ChevronRight } from "react-feather";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 4000,
  titles,
}) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  return (
    <div className="overflow-hidden relative h-full">
      <div
        className="flex h-full transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
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
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-accentLight rounded-sm
                        ${current === i ? "p-1 px-5 w-10" : "p-1"}
                        ${current !== i ? "opacity-50" : ""}
                        `}
            />
          ))}
        </div>
      </div>
      {/* <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute top-5 left-5 text-4xl font-bold text-white bg-black bg-opacity-50 p-2 rounded"
        >
          {titles[current]}
        </motion.h1>
      </AnimatePresence> */}
    </div>
  );
};

export default ImageCarousel;
