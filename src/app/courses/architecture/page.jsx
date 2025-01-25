"use client";
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const ArchitecturePage = () => {
  return (
    <ServiceLayout
      title="معماری داخلی"
      description="طراحی و دکوراسیون داخلی حرفه‌ای با جدیدترین متدهای روز دنیا"
      imagePath="/Scards/arch.webp"
    >
      <div className="max-w-4xl mx-auto space-y-24 direction-rtl">
        {/* Introduction Section */}
        <div className="border-r-2 border-accent pr-6">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-6">درباره دوره معماری داخلی</h2>
          <p className="text-lg leading-relaxed text-accentDark/80 font-IranYekan">
            در این دوره، شما با اصول اولیه و پیشرفته طراحی داخلی آشنا خواهید شد. از مبانی ترکیب‌بندی و رنگ‌شناسی گرفته تا
            تکنیک‌های پیشرفته نورپردازی و چیدمان فضا را خواهید آموخت.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "طراحی مدرن",
              description: "آشنایی با سبک‌های مدرن و معاصر در طراحی داخلی"
            },
            {
              title: "نورپردازی حرفه‌ای",
              description: "اصول نورپردازی و تاثیر آن در فضای داخلی"
            },
            {
              title: "چیدمان فضا",
              description: "اصول چیدمان و بهینه‌سازی فضای داخلی"
            },
            {
              title: "متریال‌شناسی",
              description: "آشنایی با انواع متریال‌ها و کاربرد آنها"
            }
          ].map((feature, index) => (
            <div key={index} className="border-t border-accent/20 pt-6">
              <h3 className="text-xl font-bold font-IranYekan text-accent mb-3">{feature.title}</h3>
              <p className="text-accentDark/80 font-IranYekan">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-IranYekan text-accent">جزئیات دوره</h2>
            <div className="space-y-8">
              <div className="border-r-2 border-accent/20 pr-4">
                <h3 className="font-bold font-IranYekan text-accent mb-2">مدت دوره</h3>
                <p className="text-accentDark/80 font-IranYekan">۳ ماه (۲۴ جلسه)</p>
              </div>
              <div className="border-r-2 border-accent/20 pr-4">
                <h3 className="font-bold font-IranYekan text-accent mb-2">سطح دوره</h3>
                <p className="text-accentDark/80 font-IranYekan">مقدماتی تا پیشرفته</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-IranYekan text-accent">پیش‌نیازها</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-accent"></div>
                <span className="text-accentDark/80 font-IranYekan">آشنایی با مبانی هنرهای تجسمی</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-accent"></div>
                <span className="text-accentDark/80 font-IranYekan">علاقه به طراحی و خلاقیت</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-accent/20">
          <button className="px-12 py-4 bg-accent text-white text-lg font-IranYekan hover:bg-accent/90 transition-colors duration-300">
            ثبت‌نام در دوره
          </button>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ArchitecturePage;
