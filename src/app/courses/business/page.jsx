"use client";
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const BusinessPage = () => {
  return (
    <ServiceLayout
      title="درباره‌ما"
      description="با تیم حرفه‌ای و با تجربه ما آشنا شوید"
      imagePath="/Scards/business.webp"
    >
      <div className="max-w-4xl mx-auto space-y-24 direction-rtl">
        {/* Introduction Section */}
        <div className="border-r-2 border-accent pr-6">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-6">درباره مجموعه بن‌ژیوار</h2>
          <p className="text-lg leading-relaxed text-accentDark/80 font-IranYekan">
            مجموعه آموزشی بن‌ژیوار با هدف ارائه آموزش‌های کاربردی و حرفه‌ای در زمینه‌های مختلف تاسیس شده است. ما با تکیه بر
            تجربه و دانش اساتید برجسته، محیطی پویا برای یادگیری و رشد فراهم کرده‌ایم.
          </p>
        </div>

        {/* Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "کیفیت آموزشی",
              description: "ارائه بهترین محتوای آموزشی با استانداردهای روز"
            },
            {
              title: "تجربه عملی",
              description: "تمرکز بر یادگیری عملی و کاربردی"
            },
            {
              title: "پشتیبانی مستمر",
              description: "ارائه پشتیبانی و مشاوره در طول دوره"
            },
            {
              title: "محیط حرفه‌ای",
              description: "فضای آموزشی مدرن و استاندارد"
            }
          ].map((value, index) => (
            <div key={index} className="border-t border-accent/20 pt-6">
              <h3 className="text-xl font-bold font-IranYekan text-accent mb-3">{value.title}</h3>
              <p className="text-accentDark/80 font-IranYekan">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-12">تیم ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                name: "دکتر علی محمدی",
                role: "مدیر آموزش",
                description: "متخصص در زمینه معماری داخلی با ۱۵ سال سابقه"
              },
              {
                name: "مهندس سارا احمدی",
                role: "مدرس ارشد",
                description: "کارشناس ارشد توسعه فردی و مربی حرفه‌ای"
              },
              {
                name: "مهندس رضا کریمی",
                role: "مشاور آموزشی",
                description: "متخصص در زمینه کسب و کار و کارآفرینی"
              },
              {
                name: "خانم زهرا حسینی",
                role: "مدیر پشتیبانی",
                description: "کارشناس ارشد روانشناسی و مشاور تحصیلی"
              }
            ].map((member, index) => (
              <div key={index} className="border-r border-accent/20 pr-4">
                <h3 className="text-xl font-bold font-IranYekan text-accent mb-2">{member.name}</h3>
                <p className="text-accent/80 font-IranYekan mb-3">{member.role}</p>
                <p className="text-accentDark/70 font-IranYekan">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-accent/20 pt-12">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-12">ارتباط با ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-r border-accent/20 pr-4">
              <h3 className="font-bold font-IranYekan text-accent mb-2">آدرس</h3>
              <p className="text-accentDark/80 font-IranYekan">تهران، خیابان ولیعصر، ساختمان بن‌ژیوار</p>
            </div>
            <div className="border-r border-accent/20 pr-4">
              <h3 className="font-bold font-IranYekan text-accent mb-2">تماس</h3>
              <p className="text-accentDark/80 font-IranYekan">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
            <div className="border-r border-accent/20 pr-4">
              <h3 className="font-bold font-IranYekan text-accent mb-2">ایمیل</h3>
              <p className="text-accentDark/80 font-IranYekan">info@bonzhivar.com</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-accent/20">
          <button className="px-12 py-4 bg-accent text-white text-lg font-IranYekan hover:bg-accent/90 transition-colors duration-300">
            تماس با ما
          </button>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default BusinessPage;
