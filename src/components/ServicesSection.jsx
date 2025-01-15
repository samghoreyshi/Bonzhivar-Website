"use client";
import React from "react";
import Link from "next/link";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-[800] text-accent mb-6 font-IranYekan">{title}</h2>
    <p className="text-accentDark/80 text-lg font-IranYekan max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
  </div>
);

const services = [
  {
    title: "معماری داخلی",
    description: "در دوره‌های معماری داخلی مجتمع آموزشی بن‌ژیوار، مهارت‌های اساسی و پیشرفته برای طراحی و اجرای پروژه‌های معماری داخلی و خارجی به شما آموزش داده می‌شود.",
    imagePath: "/Scards/arch.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    title: "توسعه فردی",
    description: "در مجتمع آموزشی بن‌ژیوار، ما به اهمیت توسعه فردی به عنوان یکی از کلیدی‌ترین عوامل موفقیت در زندگی شخصی و حرفه‌ای باور داریم. این مفهوم شامل بهبود مداوم مهارت‌ها، تقویت توانایی‌های فردی و افزایش اعتماد به نفس است.",
    imagePath: "/Scards/self.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "کسب و کار",
    description: "در دوره‌های کسب و کار بن‌ژیوار، شما با اصول و مفاهیم کلیدی راه‌اندازی و مدیریت یک کسب و کار موفق آشنا می‌شوید و مهارت‌های لازم برای موفقیت در دنیای تجارت را کسب می‌کنید.",
    imagePath: "/Scards/business.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "کافه و رستوران",
    description: "اگر علاقه‌مند به دنیای پرجنب‌وجوش کافه‌ها و رستوران‌ها هستید و رویای راه‌اندازی کسب‌وکار خود را دارید، دوره‌های تخصصی کافه و رستوران بن‌ژیوار دقیقا همان چیزی است که نیاز دارید!",
    imagePath: "/Scards/cafe.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-6 w-6" fill="currentColor">
        <path d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 direction-rtl">
        <SectionTitle
          title="مسیر خودتو پیدا کن!"
          subtitle="آیا به دنبال شغلی هستی که با عشق و علاقه آن را دنبال کنی؟ در مجتمع آموزشی بن‌ژیوار، ما به شما کمک می‌کنیم تا مسیر خود را در زمینه‌های مختلف مانند معماری داخلی، توسعه فردی، کسب‌وکار و کافه و رستوران پیدا کنید."
        />

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.imagePath}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="text-accent">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-[600] text-accent font-IranYekan">
                    {service.title}
                  </h3>
                  <p className="text-accentDark/80 text-sm font-IranYekan leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <Link 
            href="/courses" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-IranYekan text-white bg-accent rounded-xl transition-all duration-300 hover:bg-accent/90 active:scale-95 shadow-lg shadow-accent/20"
          >
            مشاهده همه دوره‌ها
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
