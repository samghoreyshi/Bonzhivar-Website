"use client";
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const PersonalDevelopmentPage = () => {
  return (
    <ServiceLayout
      title="توسعه فردی"
      description="مسیر رشد و پیشرفت شخصی خود را با ما بسازید"
      imagePath="/Scards/self.webp"
    >
      <div className="max-w-4xl mx-auto space-y-24 direction-rtl">
        {/* Introduction Section */}
        <div className="border-r-2 border-accent pr-6">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-6">درباره دوره توسعه فردی</h2>
          <p className="text-lg leading-relaxed text-accentDark/80 font-IranYekan">
            در دوره توسعه فردی، شما با مهارت‌های ضروری برای رشد شخصی و حرفه‌ای آشنا خواهید شد. از مدیریت زمان و استرس گرفته
            تا مهارت‌های ارتباطی و رهبری را خواهید آموخت.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "مدیریت زمان",
              description: "تکنیک‌های مدیریت زمان و افزایش بهره‌وری"
            },
            {
              title: "مهارت‌های ارتباطی",
              description: "بهبود روابط فردی و حرفه‌ای"
            },
            {
              title: "مدیریت استرس",
              description: "تکنیک‌های کنترل استرس و اضطراب"
            },
            {
              title: "هدف‌گذاری",
              description: "تعیین و دستیابی به اهداف شخصی"
            }
          ].map((feature, index) => (
            <div key={index} className="border-t border-accent/20 pt-6">
              <h3 className="text-xl font-bold font-IranYekan text-accent mb-3">{feature.title}</h3>
              <p className="text-accentDark/80 font-IranYekan">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Course Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-IranYekan text-accent mb-8">مزایای دوره</h2>
            <div className="space-y-6">
              {[
                "افزایش اعتماد به نفس و خودباوری",
                "بهبود روابط شخصی و حرفه‌ای",
                "مدیریت بهتر زمان و منابع",
                "دستیابی به اهداف شخصی و حرفه‌ای"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent mt-3"></div>
                  <p className="text-lg text-accentDark/80 font-IranYekan">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-IranYekan text-accent mb-8">جزئیات دوره</h2>
            <div className="space-y-6">
              <div className="border-r-2 border-accent/20 pr-4">
                <h3 className="font-bold font-IranYekan text-accent mb-2">مدت دوره</h3>
                <p className="text-accentDark/80 font-IranYekan">۴ ماه (۳۲ جلسه)</p>
              </div>
              <div className="border-r-2 border-accent/20 pr-4">
                <h3 className="font-bold font-IranYekan text-accent mb-2">سطح دوره</h3>
                <p className="text-accentDark/80 font-IranYekan">همه سطوح</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Structure */}
        <div className="border-t border-accent/20 pt-12">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-12">ساختار دوره</h2>
          <div className="space-y-12">
            {[
              {
                week: "هفته اول",
                title: "خودشناسی و ارزیابی",
                description: "شناخت نقاط قوت و ضعف شخصی"
              },
              {
                week: "هفته دوم",
                title: "مدیریت زمان و برنامه‌ریزی",
                description: "تکنیک‌های مدیریت زمان و اولویت‌بندی"
              },
              {
                week: "هفته سوم",
                title: "مهارت‌های ارتباطی",
                description: "اصول ارتباط موثر و فن بیان"
              },
              {
                week: "هفته چهارم",
                title: "رهبری و مدیریت",
                description: "اصول رهبری و مدیریت تیم"
              }
            ].map((week, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                <div className="text-accent font-bold font-IranYekan">{week.week}</div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold font-IranYekan text-accent mb-2">{week.title}</h3>
                  <p className="text-accentDark/80 font-IranYekan">{week.description}</p>
                </div>
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

export default PersonalDevelopmentPage;
