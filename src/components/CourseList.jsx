'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CourseSearch from '@/components/CourseSearch';
import CourseFilters from '@/components/CourseFilters';

export default function CourseList({ initialCourses }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract unique filters from courses data
  const uniqueFilters = ['all', ...new Set(initialCourses.map(course => course.Filter))];
  
  const filters = uniqueFilters.map(filter => ({
    label: filter === 'all' ? 'همه دوره‌ها' : filter,
    value: filter === 'all' ? 'all' : filter,
    active: activeFilter === filter
  }));

  const filteredCourses = initialCourses.filter(course => {
    const matchesSearch = course.Title.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeFilter === 'all') return matchesSearch;
    return course.Filter === activeFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">

        
        {/* Search */}
        <div className="mb-8">
          <CourseSearch onSearch={setSearchQuery} />
        </div>

        {/* Filters */}
        <CourseFilters 
          filters={filters}
          onFilterChange={setActiveFilter}
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Link 
            key={course.id}
            href={`/courses/${course.Slug}`}
            className="group bg-white rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={course.CoverImage?.url ? `https://dev.bonzhivar.com${course.CoverImage.url}` : '/default-course-image.jpg'}
                alt={course.Title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-white/90 backdrop-blur-sm text-[#16A4BA] px-3 py-1.5 rounded-lg text-sm">
                  {course.CourseType}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-1">
                {course.Title}
              </h3>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{course.Prof}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{course.StartingDate}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.Price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* No Results */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">هیچ دوره‌ای یافت نشد</p>
        </div>
      )}
    </div>
  );
}
