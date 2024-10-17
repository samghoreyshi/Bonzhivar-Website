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
      <div className="flex flex-col justify-center items-center w-full h-full p-5 bg-background border-accent border-2 rounded-tr-3xl rounded-tl-3xl gap-5">
        <motion.div
          onClick={toggleCard}
          className="w-[80px] h-[8px] bg-accent rounded-full cursor-pointer"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      {/* Sliding Card */}
      <div
        className={`transition-transform transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } fixed bottom-0 left-0 w-full bg-background p-2 rounded-tr-3xl rounded-tl-3xl shadow-lg border-accent border-2 flex flex-col py-6 justify-center items-center`}
      >
        <h2 className="font-IranYekan text-lg font-bold text-accent">جزئیات دوره</h2>
        {children}
        <button
          onClick={toggleCard}
          className="bg-accent text-white px-4 py-2 rounded-full mt-4 font-IranYekan font-normal flex items-center justify-center text-xl"
        >
          {"✖"} {/* Unicode close icon here */}
        </button>
      </div>
    </div>
  );
};

export default SlidingCard;
