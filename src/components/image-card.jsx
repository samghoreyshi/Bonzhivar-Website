import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ImageCard = ({ imageUrl, title, register, moreInfo }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const [currentTitle, setCurrentTitle] = useState(title);

  useEffect(() => {
    setCurrentImageUrl(imageUrl);
    setCurrentTitle(title);
  }, [imageUrl, title]);

  return (
    <>
      <div className="flex flex-col w-full h-full  justify-between items-center">
        <div className="flex w-full h-full  overflow-hidden">
          <div className="flex h-full w-full items-center justify-center  overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageUrl}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-full w-full items-center justify-center overflow-hidden"
              >
                <img
                  className="w-full h-full object-top object-cover"
                  src={currentImageUrl}
                  alt={currentTitle}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex w-full h-24 items-center justify-center p-2 bg-back-gradient">
          <div className="flex items-center justify-between w-full h-full px-3">
            <div className="flex min-w-[fit-content] h-full gap-3">
              <button className="font-IranYekan font-600 text-sm hover:bg-accent hover:text-accentLight bg-accentLight text-accent rounded-lg my-5 px-5 transition-all duration-300">
                <Link to={register || "/courses"}>ثبت نام</Link>
              </button>
              <button className="font-IranYekan font-normal text-sm border border-accentLight hover:border-white/50 hover:text-white/50 rounded-lg my-5 p-2 transition-all duration-300">
                <Link to={moreInfo || "/courses"}>اطلاعات بیشتر</Link>
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-IranYekan font-extrabold text-right py-3 w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
              >
                {currentTitle}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
