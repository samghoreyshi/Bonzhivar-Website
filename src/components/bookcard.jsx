// BookCard.js
import React from 'react';
import { motion } from 'framer-motion';

const BookCard = ({ cover, title, description }) => {
  return (
    <motion.div
      className="w-full h-full flex-col cursor-pointer border border-accent rounded-xl shadow-lg overflow-hidden bg-background"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.1 }}
    >
      <img src={cover} alt={`${title} cover`} className="w-full h-96 object-cover object-top rounded-none" />
      <div className="p-4">
        <h2 className="text-lg font-IranYekan direction-rtl text-right font-semibold text-accent truncate">
          {title}
        </h2>
        <p className="mt-2 direction-rtl font-IranYekan font-normal text-[12px] text-right text-accent/80 line-clamp-3 overflow-hidden">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BookCard;
