'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://dev.bonzhivar.com/api/contact-forms', {
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
          }
        }),
      });

      if (!response.ok) {
        throw new Error('خطا در ارسال فرم');
      }

      setSubmitStatus({
        type: 'success',
        message: 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'متأسفانه در ارسال پیام خطایی رخ داد. لطفاً دوباره تلاش کنید.'
      });
    } finally {
      setLoading(false);
    }
  };

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
        </svg>
      )
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-accent to-accent/90 py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-IranYekan mb-6">
              با ما در ارتباط باشید
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              برای مشاوره رایگان و کسب اطلاعات بیشتر درباره دوره‌های آموزشی با ما در تماس باشید
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Form Section */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-accent mb-8">فرم تماس با ما</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    placeholder="نام خود را وارد کنید"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">پیام شما</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    placeholder="پیام خود را بنویسید..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full ${loading ? 'bg-accent/70' : 'bg-accent hover:bg-accent/90'} text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      در حال ارسال...
                    </>
                  ) : 'ارسال پیام'}
                </button>
                {submitStatus.message && (
                  <div className={`mt-4 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 lg:p-12">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                      <div className="text-accent">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-accent mb-1">{info.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                ))}

                {/* Social Media Links */}
                <div className="pt-8 border-t border-accent/10">
                  <h3 className="font-bold text-accent mb-6">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
                  <div className="flex items-center gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:bg-white hover:scale-110 transition-all duration-200"
                      >
                        <div className="text-accent">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.3526641477065!2d51.47837200000001!3d35.7667125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e052316d8b71d%3A0xb9679c86bbaeac5b!2sBonzhivar!5e0!3m2!1sen!2s!4v1737739899274!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
