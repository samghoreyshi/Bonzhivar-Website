"use client";


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd, IoRemove } from "react-icons/io5";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-accent/30">
      <button
        className="flex justify-between items-center w-full py-4 text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="order-2 font-IranYekan text-xl font-bold text-accent hover:text-accentDark transition all duration-300">{title}</h2>
        <span className="order-1">
          {isOpen ? (
            <IoRemove className="text-2xl" />
          ) : (
            <IoAdd className="text-2xl" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="pb-4 font-IranYekan text-right direction-rtl">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;