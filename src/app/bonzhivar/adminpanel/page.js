'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('messages');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [data, setData] = useState({ messages: [], newsletters: [], registrations: [] });
  const [loading, setLoading] = useState(false);
  const [dateFilter, setDateFilter] = useState({ startDate: '', endDate: '' });
  const [expandedRows, setExpandedRows] = useState(new Set());
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      credentials.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [messagesRes, newslettersRes, registrationsRes] = await Promise.all([
        fetch('https://dev.bonzhivar.com/api/contact-forms?populate=*'),
        fetch('https://dev.bonzhivar.com/api/news-letters?populate=*'),
        fetch('https://dev.bonzhivar.com/api/registrations?populate=*')
      ]);

      const [messages, newsletters, registrations] = await Promise.all([
        messagesRes.json(),
        newslettersRes.json(),
        registrationsRes.json()
      ]);

      setData({
        messages: messages.data,
        newsletters: newsletters.data,
        registrations: registrations.data
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = (data, filename) => {
    let csvData;
    if (filename === 'messages') {
      csvData = data.map(item =>
        `${item.Name || ''},${item.Email || ''},${item.PhoneNumber || ''},${item.Message?.replace(/,/g, ';') || ''}`
      );
      csvData.unshift('Name,Email,Phone Number,Message');
    } else if (filename === 'newsletters') {
      csvData = data.map(item =>
        `${item.PhoneNumber || ''}`
      );
      csvData.unshift('Phone Number');
    } else if (filename === 'registrations') {
      csvData = data.map(item =>
        `${item.Name || ''},${item.PhoneNumber || ''},${item.CurrentCourse || ''},${item.Message?.replace(/,/g, ';') || ''}`
      );
      csvData.unshift('Name,Phone Number,Course,Message');
    }
    const csvString = csvData.join('\n');
    const blob = new Blob(['\ufeff' + csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_phone_numbers.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filterDataByDate = () => {
    if (!dateFilter.startDate || !dateFilter.endDate) {
      return data[activeTab];
    }
    return data[activeTab].filter(item => {
      const itemDate = new Date(item.createdAt);
      return itemDate >= new Date(dateFilter.startDate) && itemDate <= new Date(dateFilter.endDate);
    });
  };

  const toggleRow = (id) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div dir="rtl" className="h-full bg-background p-32 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[#e5e5f7] opacity-[0.02] bg-[linear-gradient(#444cf7_1.7px,transparent_1.7px),linear-gradient(to_right,#444cf7_1.7px,#e5e5f7_1.7px)] bg-[size:14px_14px]" />
        <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden border border-gray-100 backdrop-blur-sm bg-white/90">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
          <div className="flex justify-center mb-8">
            <div className="bg-accent/10 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-accent mb-6 text-center">ورود به پنل مدیریت</h1>
          <p className="text-gray-500 text-center mb-8 text-sm">
            لطفاً با استفاده از اطلاعات مدیریتی خود وارد شوید
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نام کاربری</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all duration-300 text-sm"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  placeholder="نام کاربری خود را وارد کنید"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="password"
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all duration-300 text-sm"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-xl hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>ورود به سیستم</span>
            </button>
          </form>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="h-full bg-background p-20 relative">
      <div className="absolute inset-0 bg-[#e5e5f7] opacity-[0.02] bg-[linear-gradient(#444cf7_1.7px,transparent_1.7px),linear-gradient(to_right,#444cf7_1.7px,#e5e5f7_1.7px)] bg-[size:14px_14px]" />
      <div className="max-w-8xl mx-auto p-20 relative">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-accent">پنل مدیریت داده های سایت</h1>
            <button
              onClick={() => {
                localStorage.removeItem('adminAuth');
                setIsAuthenticated(false);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              خروج
            </button>
          </div>

          {/* Info Note */}
          <div className="mb-6 p-4 bg-accent/5 border border-accent/10 rounded-xl">
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                در این بخش میتوانید داده های بخش های مختلف سایت از جمله: پیام‌ها، پیش ثبت‌نام دوره‌ها و عضویت تلفنی خبرنامه را مشاهده کرده و داده هر بخش را در فرمت csv دانلود کنید تا بتوانید در اکسل وارد نمایید.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6 flex justify-between items-center">
            <nav className="flex space-x-8 space-x-reverse" aria-label="Tabs">
              {['messages', 'newsletters', 'registrations'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${activeTab === tab
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab === 'messages' && 'پیام‌ها'}
                  {tab === 'newsletters' && 'خبرنامه'}
                  {tab === 'registrations' && 'ثبت‌نام‌ها'}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-2 flex items-center gap-3">
                <div className="flex items-center gap-2">
                <span className="text-gray-400 px-1">از</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      value={dateFilter.startDate}
                      onChange={(e) => setDateFilter(prev => ({ ...prev, startDate: e.target.value }))}
                      className="pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none bg-white/50 w-40 transition-all duration-300"
                      placeholder="تاریخ شروع"
                    />
                  </div>
                  <span className="text-gray-400 px-1">تا</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      value={dateFilter.endDate}
                      onChange={(e) => setDateFilter(prev => ({ ...prev, endDate: e.target.value }))}
                      className="pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none bg-white/50 w-40 transition-all duration-300"
                      placeholder="تاریخ پایان"
                    />
                  </div>
                </div>
                
                <div className="h-6 w-px bg-gray-200"></div>
                
                <button
                  onClick={() => setDateFilter({ startDate: '', endDate: '' })}
                  className="px-3 py-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors duration-300 rounded-lg hover:bg-red-50 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  پاک کردن فیلتر
                </button>
              </div>

              {data[activeTab] && filterDataByDate().length > 0 && (
                <button
                  onClick={() => downloadCSV(filterDataByDate(), activeTab)}
                  className="bg-green-500 text-white px-4 py-2.5 rounded-xl hover:bg-green-600 transition-all duration-300 flex items-center text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {`دانلود ${activeTab === 'newsletters' ? 'شماره تلفن های خبرنامه' : activeTab === 'registrations' ? 'ثبت‌نام‌ها' : 'پیام‌ها'} در فرمت CSV`}
                </button>
              )}
            </div>

            {(dateFilter.startDate || dateFilter.endDate) && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-500">فیلتر فعال:</span>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  {dateFilter.startDate && `از ${new Date(dateFilter.startDate).toLocaleDateString('fa-IR')}`}
                  {dateFilter.startDate && dateFilter.endDate && ' - '}
                  {dateFilter.endDate && `تا ${new Date(dateFilter.endDate).toLocaleDateString('fa-IR')}`}
                </div>
              </div>
            )}
          </div>

          {/* Modern Table Section */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="relative">
                <div className="w-12 h-12 rounded-full absolute border-4 border-accent/20"></div>
                <div className="w-12 h-12 rounded-full animate-[spin_1.5s_cubic-bezier(0.68,-0.55,0.265,1.55)_infinite] border-4 border-accent border-t-transparent"></div>
                <div className="w-12 h-12 rounded-full animate-[spin_2s_cubic-bezier(0.68,-0.55,0.265,1.55)_infinite] border-4 border-accent/40 border-t-transparent absolute top-0"></div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white/90 backdrop-blur-sm">
              {data[activeTab] && data[activeTab].length > 0 ? (
                <table className="w-full divide-y divide-gray-200/50">
                  <thead className="bg-gradient-to-r from-accent/90 to-accent/80">
                    <tr>
                      {activeTab === 'messages' && (
                        <>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">نام</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">ایمیل</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">شماره تماس</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">پیام</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">تاریخ</th>
                        </>
                      )}
                      {activeTab === 'newsletters' && (
                        <>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">شماره تماس</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">تاریخ</th>
                        </>
                      )}
                      {activeTab === 'registrations' && (
                        <>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">نام</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">شماره تماس</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">دوره</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">پیام</th>
                          <th className="px-5 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">تاریخ</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200/50">
                    {filterDataByDate().map((item) => (
                      <React.Fragment key={item.id}>
                        <tr 
                          onClick={() => toggleRow(item.id)}
                          className="hover:bg-accent/5 transition-colors duration-200 group cursor-pointer"
                        >
                          {activeTab === 'messages' && (
                            <>
                              <td className="px-5 py-4 text-sm text-gray-700 font-medium flex items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`h-4 w-4 transition-transform duration-200 ${expandedRows.has(item.id) ? 'rotate-180' : ''}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                {item.Name || '-'}
                              </td>
                              <td className="px-5 py-4 text-sm text-gray-600">{item.Email || '-'}</td>
                              <td className="px-5 py-4 text-sm text-gray-600">{item.PhoneNumber || '-'}</td>
                              <td className="px-5 py-4 text-sm text-gray-600 max-w-xs truncate">{item.Message || '-'}</td>
                              <td className="px-5 py-4 text-sm text-gray-500">
                                {item.createdAt && new Date(item.createdAt).toLocaleDateString('fa-IR')}
                              </td>
                            </>
                          )}
                          {activeTab === 'newsletters' && (
                            <>
                              <td className="px-5 py-4 text-sm text-gray-700 font-medium flex items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`h-4 w-4 transition-transform duration-200 ${expandedRows.has(item.id) ? 'rotate-180' : ''}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                {item.PhoneNumber || '-'}
                              </td>
                              <td className="px-5 py-4 text-sm text-gray-500">
                                {item.createdAt && new Date(item.createdAt).toLocaleDateString('fa-IR')}
                              </td>
                            </>
                          )}
                          {activeTab === 'registrations' && (
                            <>
                              <td className="px-5 py-4 text-sm text-gray-700 font-medium flex items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`h-4 w-4 transition-transform duration-200 ${expandedRows.has(item.id) ? 'rotate-180' : ''}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                {item.Name || '-'}
                              </td>
                              <td className="px-5 py-4 text-sm text-gray-600">{item.PhoneNumber || '-'}</td>
                              <td className="px-5 py-4 text-sm text-gray-600">{item.CurrentCourse || '-'}</td>
                              <td className="px-5 py-4 text-sm text-gray-600 max-w-xs truncate">{item.Message || '-'}</td>
                              <td className="px-5 py-4 text-sm text-gray-500">
                                {item.createdAt && new Date(item.createdAt).toLocaleDateString('fa-IR')}
                              </td>
                            </>
                          )}
                        </tr>
                        
                        {/* Expanded Content */}
                        {expandedRows.has(item.id) && (
                          <tr className="bg-accent/[0.02]">
                            <td colSpan={activeTab === 'newsletters' ? 2 : 5} className="px-5 py-4">
                              <div className="animate-fadeIn">
                                {activeTab === 'messages' && (
                                  <div className="space-y-4">
                                    <div className="flex gap-6">
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">نام</h4>
                                        <p className="text-sm text-gray-700">{item.Name || '-'}</p>
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">ایمیل</h4>
                                        <p className="text-sm text-gray-700">{item.Email || '-'}</p>
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">شماره تماس</h4>
                                        <p className="text-sm text-gray-700 direction-rtl">{item.PhoneNumber || '-'}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-gray-500 mb-1">پیام</h4>
                                      <p className="text-sm text-gray-700 whitespace-pre-wrap bg-white p-4 rounded-lg border border-gray-100">
                                        {item.Message || '-'}
                                      </p>
                                    </div>
                                  </div>
                                )}
                                
                                {activeTab === 'newsletters' && (
                                  <div className="space-y-4">
                                    <div className="flex gap-6">
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">شماره تماس</h4>
                                        <p className="text-sm text-gray-700 direction-rtl">{item.PhoneNumber || '-'}</p>
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">تاریخ ثبت نام</h4>
                                        <p className="text-sm text-gray-700">
                                          {item.createdAt && new Date(item.createdAt).toLocaleDateString('fa-IR')}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                
                                {activeTab === 'registrations' && (
                                  <div className="space-y-4">
                                    <div className="flex gap-6">
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">نام</h4>
                                        <p className="text-sm text-gray-700">{item.Name || '-'}</p>
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">شماره تماس</h4>
                                        <p className="text-sm text-gray-700 direction-rtl">{item.PhoneNumber || '-'}</p>
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">دوره</h4>
                                        <p className="text-sm text-gray-700">{item.CurrentCourse || '-'}</p>
                                      </div>
                                    </div>
                                    {item.Message && (
                                      <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">پیام</h4>
                                        <p className="text-sm text-gray-700 whitespace-pre-wrap bg-white p-4 rounded-lg border border-gray-100">
                                          {item.Message}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="w-full py-12 flex flex-col items-center justify-center bg-white">
                  <div className="bg-accent/10 p-4 rounded-full mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-accent" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">
                    {activeTab === 'messages' && 'هیچ پیامی یافت نشد'}
                    {activeTab === 'newsletters' && 'هیچ عضوی در خبرنامه یافت نشد'}
                    {activeTab === 'registrations' && 'هیچ ثبت‌نامی یافت نشد'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}