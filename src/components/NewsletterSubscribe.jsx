"use client";
import { useState } from 'react';
import Image from 'next/image';

const NewsletterSubscribe = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');

  // Convert Persian/Arabic numbers to English
  const convertToEnglishNumbers = (str) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    
    for (let i = 0; i < 10; i++) {
      str = str.replace(new RegExp(persianNumbers[i], 'g'), i.toString())
               .replace(new RegExp(arabicNumbers[i], 'g'), i.toString());
    }
    return str;
  };

  const validatePhoneNumber = (number) => {
    // Persian mobile number format: 09XXXXXXXXX
    const persianPhoneRegex = /^09[0-9]{9}$/;
    return persianPhoneRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const englishNumber = convertToEnglishNumbers(phoneNumber);
    
    // Validate phone number
    if (!validatePhoneNumber(englishNumber)) {
      setStatus('invalid');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setStatus('sending');

    try {
      const payload = {
        data: {
          PhoneNumber: englishNumber
        }
      };

      console.log('Sending payload:', payload);

      const response = await fetch('https://dev.bonzhivar.com/api/news-letters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status);
      
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(responseData.error?.message || 'Failed to subscribe');
      }

      setStatus('success');
      setPhoneNumber('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    
    // Remove any non-digit or non-Persian/Arabic number characters
    value = value.replace(/[^\d۰-۹٠-٩]/g, '');
    
    // Limit to 11 digits
    if (convertToEnglishNumbers(value).length <= 11) {
      setPhoneNumber(value);
    }
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-24 bg-[#0D8F8F] overflow-hidden" dir="rtl">
      <div className="absolute inset-0">
        <Image
          src="/images/newsletter-bg.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[500px] w-full mx-auto lg:mx-0 lg:ml-auto text-center lg:text-right">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-IranYekan leading-tight">
            عضویت در خبرنامه
          </h2>
          <p className="text-white/80 text-md mb-8 font-IranYekan">
            برای اطلاع از آخرین دوره‌ها و رویدادهای آموزشی، در خبرنامه ما عضو شوید
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative max-w-full">
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="شماره همراه خود را وارد نمایید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)"
                className="w-full h-[52px] pl-[110px] border border-accent pr-4 sm:pr-6 rounded-lg bg-white/90 text-sm sm:text-base outline-none text-gray-800 placeholder:text-gray-400 font-IranYekan text-right transition-colors focus:border-accentDark"
                required
                dir="ltr"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="absolute left-0 top-0 h-[52px] w-[100px] bg-accentDark text-base sm:text-lg text-white rounded-lg rounded-r-none hover:bg-black active:scale-95 transition-all duration-300 font-IranYekan disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-lg animate-spin inline-block"/>
                ) : (
                  'عضویت'
                )}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 text-white font-IranYekan text-sm sm:text-base">
              ✓ عضویت شما با موفقیت انجام شد
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 text-red-200 font-IranYekan text-sm sm:text-base">
              خطا در ثبت عضویت. لطفا دوباره تلاش کنید
            </div>
          )}
          {status === 'invalid' && (
            <div className="mt-4 text-red-200 font-IranYekan text-sm sm:text-base">
              لطفا یک شماره موبایل معتبر وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
