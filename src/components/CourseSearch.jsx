'use client';

import { useState } from 'react';

export default function CourseSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="جستجوی دوره..."
        className="w-full px-6 py-4 bg-white rounded-xl border border-gray-100 focus:outline-none focus:border-[#16A4BA] text-right"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}
