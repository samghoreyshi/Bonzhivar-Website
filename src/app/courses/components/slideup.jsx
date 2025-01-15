"use client";


import React, { useState } from "react";
import { motion } from "framer-motion";

const SlidingCard = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the card
  const toggleCard = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center z-20 visible sm:invisible">
      {/* Button to trigger the card */}
      <div
        onClick={toggleCard}
        className="flex flex-col justify-center items-center w-full h-full p-3 bg-background border-accent border-2 rounded-tr-3xl rounded-tl-3xl gap-5"
      >
        <motion.div
          onClick={toggleCard}
          className="w-full h-full rounded-full cursor-pointer flex justify-center items-center"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={20} fill="#4F9A85"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
        </motion.div>
      </div>

      {/* Sliding Card */}
      <div
        className={`transition-transform transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } fixed bottom-0 left-0 w-full h-[100vh-4rem] bg-background  rounded-tr-3xl rounded-tl-3xl shadow-lg border-accent border-2 flex flex-col justify-center items-center z-20`}
      >
        <motion.div
          onClick={toggleCard}
          className="flex justify-center items-center w-full h-full  rounded-full cursor-pointer mt-5"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512 " height={20} fill="#4F9A85"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </motion.div>
        {children}
      </div>
    </div>
  );
};

export default SlidingCard;
