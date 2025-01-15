"use client";

import { useState } from "react";
import AnnouncementModal from "./AnnouncementModal";
import { motion } from "framer-motion";

export default function AnnouncementsClient({ announcements }) {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const featuredAnnouncement = announcements[0];
  const otherAnnouncements = announcements.slice(1);
  const visibleAnnouncements = otherAnnouncements.slice(0, visibleCount);
  const hasMoreToShow = visibleCount < otherAnnouncements.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, otherAnnouncements.length));
  };

  return (
    <section className="relative py-16 w-full bg-background">
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('/patterns/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="w-full relative">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative text-center">
            <div className="relative inline-block">
              <div className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent bottom-0 left-0 w-full" />
              <h2 className="text-4xl md:text-5xl text-accent font-IranYekan direction-rtl font-[800] py-3">
                آخرین رویدادهای بن‌ژیوار
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Announcement */}
          {featuredAnnouncement && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
              onClick={() => setSelectedAnnouncement(featuredAnnouncement)}
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-accent/5 to-accent/10 backdrop-blur-sm border border-accent/10">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/3 aspect-[16/9] md:aspect-auto">
                    <img
                      src={featuredAnnouncement.imagePath}
                      alt={featuredAnnouncement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                        {featuredAnnouncement.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent direction-rtl">
                      {featuredAnnouncement.title}
                    </h3>
                    <p className="text-accentDark line-clamp-3 direction-rtl">
                      {featuredAnnouncement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Announcements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedAnnouncement(announcement)}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-xl overflow-hidden bg-background border border-accent/30">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={announcement.imagePath}
                      alt={announcement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        {announcement.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-accent direction-rtl">
                      {announcement.title}
                    </h3>
                    <p className="text-accentDark text-sm line-clamp-2 direction-rtl">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreToShow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <button
                onClick={handleShowMore}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-background font-medium transition-all duration-300 hover:bg-accent/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-IranYekan">نمایش بیشتر</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedAnnouncement && (
        <AnnouncementModal
          announcement={selectedAnnouncement}
          onClose={() => setSelectedAnnouncement(null)}
        />
      )}
    </section>
  );
}
