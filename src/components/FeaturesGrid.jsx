"use client";
import { features } from '../data/features';

const FeaturesGrid = () => {
  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4 font-IranYekan">
            ویژگی‌های دوره‌های بن‌ژیوار چیست؟
          </h2>
        </div>

        <div className="flex justify-center mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 max-w-5xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border border-accent/30 mb-4 flex items-center justify-center text-accent relative">
                  <div className="w-14 h-14 rounded-full bg-accent/5 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold mb-2 text-accent font-IranYekan">
                  {feature.title}
                </h3>
                <p className="text-accentDark/70 text-xs leading-relaxed font-IranYekan max-w-[350px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
