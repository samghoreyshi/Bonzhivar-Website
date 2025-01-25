"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    image: '/gallery/image1.jpg',
    title: 'دوره‌های آموزشی',
    description: 'جدیدترین دوره‌های ما در ماه گذشته'
  },
  {
    id: 2,
    image: '/gallery/image2.jpg',
    title: 'پروژه‌های دانشجویی',
    description: 'نمونه کارهای برتر دانشجویان'
  },
  {
    id: 3,
    image: '/gallery/image3.jpg',
    title: 'رویدادهای آموزشی',
    description: 'همایش‌ها و کارگاه‌های تخصصی'
  },
  {
    id: 4,
    image: '/gallery/image4.jpg',
    title: 'دستاوردهای ما',
    description: 'موفقیت‌های اخیر دانشجویان'
  }
];

const ImageGallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let startTime;
    const duration = 20000; // 20 seconds for one complete scroll
    const startPosition = 0;
    const endPosition = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentPosition = startPosition + (endPosition * progress);
      scrollContainer.scrollLeft = currentPosition;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        startTime = null;
        scrollContainer.scrollLeft = 0;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center font-IranYekan">
          مطالب منتخب و محبوب
        </h2>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden select-none"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex-none w-[300px] h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2 font-IranYekan">{item.title}</h3>
                <p className="text-sm text-white/80 font-IranYekan">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
