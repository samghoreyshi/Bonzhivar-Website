"use client";
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const CafePage = () => {
  return (
    <ServiceLayout
      title="کافه و رستوران"
      description="هنر قهوه و آشپزی را با ما تجربه کنید"
      imagePath="/Scards/cafe.webp"
    >
      <div className="max-w-4xl mx-auto space-y-24 direction-rtl">
        {/* Introduction Section */}
        <div className="border-r-2 border-accent pr-6">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-6">درباره دوره کافه و رستوران</h2>
          <p className="text-lg leading-relaxed text-accentDark/80 font-IranYekan">
            در این دوره جامع، شما با اصول حرفه‌ای باریستایی و آشپزی آشنا خواهید شد. از دم‌آوری قهوه گرفته تا طراحی منو و
            مدیریت کافه و رستوران را خواهید آموخت.
          </p>
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "باریستایی حرفه‌ای",
              description: "آموزش انواع دم‌آوری و تهیه نوشیدنی‌های کافه"
            },
            {
              title: "آشپزی مدرن",
              description: "تکنیک‌های پخت و تزئین غذاهای کافه‌ای"
            },
            {
              title: "مدیریت کافه",
              description: "اصول راه‌اندازی و مدیریت کافه"
            },
            {
              title: "طراحی منو",
              description: "اصول طراحی منو و قیمت‌گذاری"
            }
          ].map((module, index) => (
            <div key={index} className="border-t border-accent/20 pt-6">
              <h3 className="text-xl font-bold font-IranYekan text-accent mb-3">{module.title}</h3>
              <p className="text-accentDark/80 font-IranYekan">{module.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Course Content */}
        <div>
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-12">محتوای دوره</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                title: "مبانی قهوه‌شناسی",
                topics: [
                  "آشنایی با انواع دانه‌های قهوه",
                  "روش‌های برشته‌کاری",
                  "اصول نگهداری قهوه",
                  "آسیاب و دم‌آوری"
                ]
              },
              {
                title: "تکنیک‌های باریستایی",
                topics: [
                  "اسپرسو و مشتقات آن",
                  "لاته آرت",
                  "قهوه‌های دمی",
                  "نوشیدنی‌های سرد"
                ]
              },
              {
                title: "آشپزی کافه‌ای",
                topics: [
                  "صبحانه‌های کافه‌ای",
                  "ساندویچ و برگر",
                  "دسرها و کیک‌ها",
                  "اسنک‌های مدرن"
                ]
              },
              {
                title: "مدیریت و کسب‌وکار",
                topics: [
                  "طراحی فضای کافه",
                  "مدیریت موجودی",
                  "بازاریابی و برندینگ",
                  "خدمات مشتری"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="border-r border-accent/20 pr-4">
                <h3 className="text-xl font-bold font-IranYekan text-accent mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-accent"></div>
                      <p className="text-accentDark/80 font-IranYekan">{topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="border-t border-accent/20 pt-12">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-12">تجهیزات آموزشی</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "دستگاه اسپرسو حرفه‌ای",
                description: "آموزش با پیشرفته‌ترین دستگاه‌های روز دنیا"
              },
              {
                title: "آسیاب‌های تخصصی",
                description: "آسیاب‌های کالیبره شده برای نتایج عالی"
              },
              {
                title: "تجهیزات آشپزخانه",
                description: "آشپزخانه مجهز با استانداردهای حرفه‌ای"
              },
              {
                title: "ابزار باریستایی",
                description: "مجموعه کامل ابزار تخصصی باریستا"
              }
            ].map((equipment, index) => (
              <div key={index} className="border-r border-accent/20 pr-4">
                <h3 className="text-lg font-bold font-IranYekan text-accent mb-2">{equipment.title}</h3>
                <p className="text-accentDark/80 font-IranYekan">{equipment.description}</p>
              </div>
            ))}
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

export default CafePage;
