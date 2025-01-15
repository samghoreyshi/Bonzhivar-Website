"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function AnnouncementModal({ announcement, onClose }) {
  if (!announcement) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-background rounded-2xl overflow-hidden max-w-lg w-full h-[80vh] flex flex-col"
      >
        <div className="p-6 flex-grow overflow-y-auto">
          <img src={announcement.imagePath} alt={announcement.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
          
          <div className="flex justify-between items-start mb-4">
            <button
              onClick={onClose}
              className="text-accentDark hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-IranYekan text-accent/90 bg-accent/5">
              {announcement.category}
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-IranYekan text-accent font-[600] direction-rtl">
              {announcement.title}
            </h3>
            <p className="text-sm text-accentDark/70 font-IranYekan direction-rtl">
              {announcement.date}
            </p>
            <p className="text-accentDark text-justify leading-relaxed font-IranYekan text-right direction-rtl">
              {announcement.description}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-t">
          <Link href="/contact">
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-accent/10 hover:bg-accent/15 text-accent rounded-lg font-IranYekan transition-colors duration-200 text-sm sm:text-base">
              تماس با ما
            </button>
          </Link>
          <button
            onClick={() => {
              const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(announcement.title + ' - مجتمع مهارت آموزی بن‌ژیوار')}`;
              window.open(telegramUrl, '_blank');
            }}
            className="px-4 py-2 sm:px-6 sm:py-2 bg-accent/10 hover:bg-accent/15 text-accent rounded-lg font-IranYekan transition-colors duration-200 flex items-center text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2 2 4-4 2 2 4-4 2 2-6 6-2-2-4 4-2-2z" />
            </svg>
            اشتراک گذاری در تلگرام
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
