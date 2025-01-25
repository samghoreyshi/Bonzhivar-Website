"use client";
import React from 'react';
import Link from 'next/link';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';

const ServiceLayout = ({ children, title, description, imagePath }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}


      {/* Hero Section */}
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithPlaceholder
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
{/* 
          <h1 className="text-4xl md:text-6xl font-[800] text-white mb-6 font-IranYekan">
            {title}
          </h1> */}
          {description && (
            <p className="text-lg md:text-xl text-white/90 font-IranYekan leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};

export default ServiceLayout;
