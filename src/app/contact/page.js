'use client';

import { useState } from 'react';

export default function Contact() {

  const contactInfo = [
    {
      title: 'آدرس',
      value: 'بن‌ژیوار، تهران، پاسداران، میدان هروی، جنب مرکز خرید گلستان، پلاک ٦٥',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'تلفن تماس',
      value: '۰۲۱-۲۸۱۱۱۱۹٥ - ۰۹۳۶۱۱۲۴۳۰۷',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'ایمیل',
      value: 'info@bonzhivar.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const socialMedia = [
    {
      title: 'اینستاگرام',
      link: 'https://instagram.com/bonzhivar.inst',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2H8C4.686 2 2 4.686 2 8v8c0 3.314 2.686 6 6 6h8c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6h-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 7.5v.001" />
        </svg>
      )
    },
    {
      title: 'تلگرام',
      link: 'https://t.me/bonzhivarinstitute',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.6 4.8L2.4 11.4c-1.3.5-1.3 1.7 0 2.2l4.8 1.5 1.8 5.7c.2.7.9.9 1.4.4l2.6-2.6 5.1 3.8c.9.7 2.2.2 2.4-1l3.6-15.7c.3-1.3-.8-2.4-2.1-1.9zM7.2 14.7l11.4-7" />
        </svg>
      )
    },
    {
      title: 'واتساپ',
      link: 'https://wa.me/+989361124307',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11.855C3.018 11.574 3 11.287 3 11c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9c-1.598 0-3.097-.418-4.397-1.147l-3.766 1.256a1 1 0 01-1.249-1.249l1.256-3.766A8.949 8.949 0 013.055 11.855z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.621 9.44c.204-.248.422-.484.652-.706a3.276 3.276 0 014.728 0c.23.222.448.458.652.706m-6.032 0c.204.248.422.484.652.706a3.276 3.276 0 004.728 0c.23-.222.448-.458.652-.706" />
        </svg>
      )
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Hero Section with Cover Image */}
      <div className="relative h-[40vh] bg-accent/10">
        <img
          src="/Contact/1.webp"
          alt="Contact Us Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white font-IranYekan text-center drop-shadow-2xl">
            با ما در ارتباط باشید
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  {/* Icon Background */}
                  <div className="absolute -inset-2 blur-xl rounded-full transition-all duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative bg-background border-2 border-accent/10 p-4 rounded-2xl
                    transform group-hover:scale-110 group-hover:border-accent/20 
                    transition-all duration-500 shadow-lg">
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {info.icon.props.children}
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-accent font-IranYekan font-bold text-lg
                    group-hover:scale-105 transition-transform duration-500">
                    {info.title}
                  </h3>
                  <div className="h-px w-12 bg-accent/20 mx-auto transform origin-left
                    group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-gray-600 font-IranYekan text-base leading-relaxed
                    max-w-[280px] mx-auto">
                    {info.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Bento Grid */}
        <div className="p-10 ">
          <h2 className="text-4xl font-bold text-accent font-IranYekan text-center mb-12 relative">
            <span className="relative z-10">ما را در شبکه‌های اجتماعی دنبال کنید</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent/30 via-accent to-accent/30"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 
                  bg-gradient-to-br from-white via-white to-accent/5 hover:to-accent/10
                  border border-accent/5 hover:border-accent/20"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full transform -translate-x-8 translate-y-8 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>

                <div className="relative p-8 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="mb-6 relative transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Icon background with animated border */}
                    <div className="relative bg-white backdrop-blur-sm border-2 border-accent/20 p-6 rounded-2xl
                      transform group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-500 shadow-lg
                      after:absolute after:inset-0 after:border-2 after:border-accent/20 after:rounded-2xl
                      after:transform after:scale-90 after:opacity-0
                      after:transition-all after:duration-500
                      group-hover:after:scale-110 group-hover:after:opacity-100"
                    >
                      <div className="text-accent transform group-hover:scale-110 transition-transform duration-500">
                        {social.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-4 relative">
                    <h3 className="text-accent font-IranYekan font-bold text-xl
                      transform group-hover:scale-105 group-hover:translate-y-1
                      transition-all duration-500">
                      {social.title}
                    </h3>
                    <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent
                      transform origin-left scale-x-0 group-hover:scale-x-100
                      transition-transform duration-700 ease-out"></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
