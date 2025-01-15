'use client';

import { useState } from 'react';

export default function BlogSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="جستجو در مقالات..."
          className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border border-accent/10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
          dir="rtl"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-accent hover:text-accent/80 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
