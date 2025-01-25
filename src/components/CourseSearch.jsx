'use client';

import { useState } from 'react';

export default function CourseSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="چه چیزی میخواهید یاد بگیرید؟"
        className="w-full px-6 py-4 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-right"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}
