"use client";
import React from "react";
import Link from "next/link";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-10  px-5 relative">
    <div className="relative">
      <h2 className="text-4xl md:text-5xl font-[800] text-accent mb-8 font-IranYekan relative inline-block">
        {title}
      </h2>
      <p className="text-accentDark/80 text-lg font-IranYekan max-w-4xl mx-auto leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

const services = [
  {
    title: "معماری داخلی",
    route: "/services/architecture",
    imagePath: "/Scards/arch.webp",
    size: "tall",
    gridArea: "1 / 1 / 3 / 2",
  },
  {
    title: "توسعه فردی",
    route: "/services/personal-development",
    imagePath: "/Scards/self.webp",
    size: "wide",
    gridArea: "1 / 2 / 2 / 4",
  },
  {
    title: "درباره‌ما",
    route: "/about",
    imagePath: "/Scards/business.webp",
    size: "small",
    gridArea: "2 / 2 / 3 / 3",
  },
  {
    title: "کافه و رستوران",
    route: "/services/cafe",
    imagePath: "/Scards/cafe.webp",
    size: "small",
    gridArea: "2 / 3 / 3 / 4",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-background overflow-hidden relative">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">


        {/* Modern grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6366F1 1px, transparent 1px),
              linear-gradient(to bottom, #6366F1 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto direction-rtl relative">
        <SectionTitle
          title="مسیر خودتو پیدا کن!"
          subtitle="آیا به دنبال شغلی هستید که با عشق و علاقه آن را دنبال کنید؟ در مجتمع آموزشی بن‌ژیوار، ما به شما کمک می‌کنیم تا مسیر خود را در زمینه‌های مختلف مانند معماری داخلی، توسعه فردی، کسب‌وکار و کافه و رستوران پیدا کنید."
        />

        {/* Mobile Scrollable View */}
        <div className="lg:hidden relative">
          <div className="w-full overflow-x-auto pb-16 no-scrollbar">
            <div className="flex gap-4 px-4 w-max">
              {services.map((service, index) => (
                <Link 
                  key={service.title}
                  href={service.route}
                  className={`flex-none w-[280px] h-[200px] relative rounded-3xl overflow-hidden group 
                    ${index === 0 ? 'ml-0' : ''}`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.imagePath})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-white text-xl font-IranYekan font-bold group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="h-0.5 w-12 bg-white/80 mt-2 rounded-full group-hover:w-16 transition-all duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute left-0 right-0 bottom-4 flex justify-center items-center">
            <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-accent font-IranYekan text-sm">برای دیدن موارد بیشتر به چپ بکشید</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-4 h-4 text-accent animate-pulse"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid max-w-6xl mx-auto gap-4" 
             style={{ 
               gridTemplateColumns: "repeat(3, 1fr)",
               gridTemplateRows: "300px 300px",
               height: "calc(600px + 1rem)"
             }}>
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.route}
              className="relative rounded-3xl overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
              style={{ gridArea: service.gridArea }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.imagePath})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
              
              {/* Title container */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="relative">
                  <h3 className="text-white text-2xl font-IranYekan font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="h-0.5 w-16 bg-accent/80 rounded-full group-hover:w-24 transition-all duration-300" />
                    <span className="text-sm font-IranYekan opacity-80 group-hover:opacity-100 transition-opacity duration-300">جزئیات بیشتر</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
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
