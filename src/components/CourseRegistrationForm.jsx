'use client';

import { useState } from 'react';
import { HiUser, HiMail, HiPhone, HiPencil } from 'react-icons/hi';
import Image from 'next/image';

const STRAPI_API_URL = 'https://dev.bonzhivar.com/api';

const CourseRegistrationForm = ({ courseName, courseSlug }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear any previous errors when user types
    setSuccess(''); // Clear any previous success message when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch(`${STRAPI_API_URL}/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Name: formData.name,
            Email: formData.email,
            PhoneNumber: formData.phone,
            Message: formData.message,
            CurrentCourse: courseName,
          }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'خطا در ارسال اطلاعات');
      }

      console.log('Registration successful:', data);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setSuccess('ثبت‌نام با موفقیت انجام شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'خطا در ثبت فرم. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 mb-10">
      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Features List */}
        <div className="w-full lg:w-2/5 flex flex-col">
          {/* Features Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/course-features.webp"
              alt="Course Features"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-[#F8FDFE] p-6 rounded-2xl flex-1">
            <h3 className="font-bold text-gray-900 mb-4">مزایای ثبت‌نام در دوره</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#16A4BA]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>دسترسی به محتوای کامل دوره</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#16A4BA]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>پشتیبانی توسط استاد دوره</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#16A4BA]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>گواهینامه با اعتبار بین‌المللی</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#16A4BA]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>امکان پرداخت اقساطی</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 w-full text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16A4BA]/10 rounded-lg mb-4">
            <span className="text-sm font-medium text-[#16A4BA]">ثبت‌نام آنلاین</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            پیش ثبت نام {courseName}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            برای شروع یادگیری، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm mb-4">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
            <div className="relative group">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FDFE] border border-gray-200
                         text-gray-900 text-right pr-11 placeholder-gray-500
                         focus:border-[#16A4BA] focus:outline-none
                         transition-all duration-300"
                placeholder="نام و نام خانوادگی"
              />
              <HiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 
                               group-focus-within:text-[#16A4BA] transition-colors" />
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FDFE] border border-gray-200
                         text-gray-900 text-right pr-11 placeholder-gray-500
                         focus:border-[#16A4BA] focus:outline-none
                         transition-all duration-300"
                placeholder="ایمیل"
                dir="ltr"
              />
              <HiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 
                               group-focus-within:text-[#16A4BA] transition-colors" />
            </div>

            <div className="relative group">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FDFE] border border-gray-200
                         text-gray-900 text-right pr-11 placeholder-gray-500
                         focus:border-[#16A4BA] focus:outline-none
                         transition-all duration-300"
                placeholder="شماره موبایل"
                dir="ltr"
              />
              <HiPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 
                                group-focus-within:text-[#16A4BA] transition-colors" />
            </div>

            <div className="relative group">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FDFE] border border-gray-200
                         text-gray-900 text-right pr-11 placeholder-gray-500
                         focus:border-[#16A4BA] focus:outline-none
                         transition-all duration-300 resize-none"
                placeholder="پیام شما (اختیاری)"
              />
              <HiPencil className="absolute right-3 top-3.5 text-lg text-gray-400 
                                 group-focus-within:text-[#16A4BA] transition-colors" />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#16A4BA] text-white py-3 px-6 rounded-xl
                         hover:bg-[#1493A7] transition-colors duration-300
                         disabled:bg-gray-300 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>در حال ثبت...</span>
                  </>
                ) : (
                  <>
                    <span>ثبت‌نام در دوره</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationForm;
