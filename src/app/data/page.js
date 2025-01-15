'use client';

import { useState, useEffect } from 'react';

// Refresh icon component
const RefreshIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
    />
  </svg>
);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export default function DataView() {
  const [data, setData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('live');
  const [actionLoading, setActionLoading] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleArchive = async (id, isArchived) => {
    setActionLoading(id);
    try {
      const response = await fetch(`/api/form`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': password
        },
        body: JSON.stringify({
          id,
          action: isArchived ? 'unarchive' : 'archive'
        })
      });

      if (!response.ok) throw new Error('خطا در انجام عملیات');
      
      fetchData(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm('آیا از حذف این مورد اطمینان دارید؟')) return;
    
    setActionLoading(id);
    try {
      const endpoint = type === 'message' ? '/api/messages' : '/api/form';
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': password
        },
        body: JSON.stringify({ id })
      });

      if (!response.ok) throw new Error('خطا در حذف');
      
      if (type === 'message') {
        setMessages(prev => prev.filter(msg => msg.id !== id));
      } else {
        fetchData(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleRead = async (id, read) => {
    setActionLoading(id);
    try {
      const response = await fetch('/api/messages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': password
        },
        body: JSON.stringify({
          id,
          action: read ? 'markRead' : 'markUnread'
        })
      });

      if (!response.ok) throw new Error('خطا در تغییر وضعیت');
      await fetchMessages();
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  const renderMessageItem = (message) => {
    const isExpanded = expandedItems[message.id];
    return (
      <div key={message.id} className="border-b gradient-border-bottom last:border-b-0">
        <div 
          onClick={() => toggleExpand(message.id)}
          className={`cursor-pointer transition-colors rounded-lg duration-150 hover:bg-gray-50 p-4 ${message.read ? 'bg-white' : 'bg-accent/10  rounded-lg'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-accent">{message.name}</span>
                <span className="text-sm text-gray-500">({message.email})</span>
              </div>
              <div className={`text-gray-600 mt-2 ${isExpanded ? '' : 'line-clamp-2'}`}>
                {message.message}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">{new Date(message.created_at).toLocaleDateString('fa-IR')}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleRead(message.id, !message.read);
                }}
                disabled={actionLoading === message.id}
                className={`px-3 py-1 rounded-full text-xs border border-accent text-accent hover:bg-accent hover:text-white transition-colors ${
                  actionLoading === message.id ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {actionLoading === message.id ? 'در حال انجام...' : message.read ? 'خوانده شده' : 'نخوانده'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(message.id, 'message');
                }}
                disabled={actionLoading === message.id}
                className={`px-3 py-1 rounded-full text-xs border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors ${
                  actionLoading === message.id ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {actionLoading === message.id ? 'در حال حذف...' : 'حذف'}
              </button>
            </div>
          </div>
          {isExpanded && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="whitespace-pre-wrap text-gray-700">{message.message}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderFormItem = (item) => {
    const isExpanded = expandedItems[item.id];
    return (
      <div key={item.id} className="border-b border-accent last:border-b-0">
        <div 
          onClick={() => toggleExpand(item.id)}
          className="cursor-pointer transition-colors duration-150 hover:bg-gray-50 p-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-accent">{item.fullName}</span>
                <span className="text-sm text-gray-500">({item.email})</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {item.phoneNumber} | {item.course}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{new Date(item.created_at).toLocaleDateString('fa-IR')}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleArchive(item.id, activeTab === 'archived');
                }}
                disabled={actionLoading === item.id}
                className={`px-3 py-1 rounded-full text-xs border border-accent text-accent hover:bg-accent hover:text-white transition-colors ${
                  actionLoading === item.id ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {actionLoading === item.id ? 'در حال انجام...' : activeTab === 'archived' ? 'بازگردانی' : 'بایگانی'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item.id, 'form');
                }}
                disabled={actionLoading === item.id}
                className={`px-3 py-1 rounded-full text-xs border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors ${
                  actionLoading === item.id ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {actionLoading === item.id ? 'در حال حذف...' : 'حذف'}
              </button>
            </div>
          </div>
          {isExpanded && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">نام و نام خانوادگی</p>
                  <p className="font-medium">{item.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ایمیل</p>
                  <p className="font-medium">{item.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">شماره تماس</p>
                  <p className="font-medium">{item.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">دوره</p>
                  <p className="font-medium">{item.course}</p>
                </div>
                {item.message && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">توضیحات</p>
                    <p className="font-medium whitespace-pre-wrap">{item.message}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const calculateStats = () => {
    const totalMessages = messages.length;
    const unreadMessages = messages.filter(m => !m.read).length;
    const totalForms = data.length;
    const totalArchived = archivedData.length;
    
    // Combine both live and archived data for course statistics
    const allForms = [...data, ...archivedData];
    const courseStats = allForms.reduce((acc, curr) => {
      acc[curr.course] = (acc[curr.course] || 0) + 1;
      return acc;
    }, {});

    return {
      totalMessages,
      unreadMessages,
      totalForms,
      totalArchived,
      courseStats
    };
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
      fetchMessages();
    }
  }, [activeTab, isAuthenticated]);

  const fetchData = async (isRefresh = false) => {
    if (!isRefresh) {
      setLoading(true);
    }
    setError(null);

    try {
      if (activeTab === 'messages') {
        const response = await fetch('/api/messages', {
          headers: {
            'Authorization': password
          }
        });
        if (!response.ok) throw new Error('خطا در دریافت پیام‌ها');
        const data = await response.json();
        setMessages(data);
      } else {
        // Fetch both live and archived data
        const liveResponse = await fetch(`/api/form?type=live`, {
          headers: {
            'Authorization': password
          }
        });
        const archivedResponse = await fetch(`/api/form?type=archived`, {
          headers: {
            'Authorization': password
          }
        });
        
        if (!liveResponse.ok || !archivedResponse.ok) throw new Error('خطا در دریافت اطلاعات');
        
        const liveData = await liveResponse.json();
        const archivedData = await archivedResponse.json();
        
        setData(liveData);
        setArchivedData(archivedData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages', {
        headers: {
          'Authorization': password
        }
      });
      if (!response.ok) throw new Error('خطا در دریافت پیام‌ها');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      setError('رمز عبور اشتباه است');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setData([]);
    setMessages([]);
    setArchivedData([]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!isAuthenticated) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-IranYekan">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              ورود به پنل مدیریت
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  رمز عبور
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="رمز عبور را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">
                  {error}
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'در حال ورود...' : 'ورود'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 font-IranYekan">
      <div className="max-w-7xl mx-auto rounded-3xl border border-accent p-8 bg-[#FFFDF5] shadow-xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 shadow-sm border border-accent/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">کل پیام‌ها</p>
                <p className="text-2xl font-bold text-accent mt-1">{calculateStats().totalMessages}</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">پیام‌های نخوانده</p>
              <p className="text-lg font-semibold text-accent/80">{calculateStats().unreadMessages}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm border border-blue-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">ثبت‌ نام‌های فعال</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{calculateStats().totalForms}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">بایگانی شده</p>
              <p className="text-lg font-semibold text-blue-600/80">{calculateStats().totalArchived}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 shadow-sm border border-orange-200/30 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-orange-700">آمار دوره‌ها</h3>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(calculateStats().courseStats).map(([course, count]) => (
                <div key={course} className="bg-white/50 rounded-xl p-3">
                  <p className="text-sm text-gray-500">{course}</p>
                  <p className="text-lg font-semibold text-orange-600 mt-1">{count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-2xl border border-accent/10">
          <div>
            <h1 className="text-2xl font-extrabold text-accent">پنل مدیریت</h1>
            <p className="text-gray-500 mt-1">مدیریت ثبت‌نام‌ها و پیام‌ها</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="mr-2">بروزرسانی</span>
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="mr-2">خروج</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#FFFDF5] rounded-2xl border border-accent/10 shadow-sm">
          <div className="border-b border-accent/10">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => handleTabChange('live')}
                className={`${
                  activeTab === 'live'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
              >
                داده‌های فعال
              </button>
              <button
                onClick={() => handleTabChange('archived')}
                className={`${
                  activeTab === 'archived'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm mr-8 transition-colors`}
              >
                بایگانی شده
              </button>
              <button
                onClick={() => handleTabChange('messages')}
                className={`${
                  activeTab === 'messages'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
              >
                پیام‌ها
              </button>
            </nav>
          </div>

          {/* Content */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-pulse text-gray-500 font-IranYekan">در حال بارگذاری...</div>
            </div>
          ) : (
            <div className="p-6">
              {activeTab === 'messages' ? (
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <p className="text-center py-8 text-gray-500">پیامی یافت نشد</p>
                  ) : (
                    messages.map(renderMessageItem)
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {(activeTab === 'live' ? data : archivedData).length === 0 ? (
                    <p className="text-center py-8 text-gray-500">داده‌ای یافت نشد</p>
                  ) : (
                    activeTab === 'live' ? data.map(renderFormItem) : archivedData.map(renderFormItem)
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
