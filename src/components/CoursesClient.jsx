'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseSearch from '@/components/CourseSearch';

const INITIAL_DISPLAY_COUNT = 4;

export default function CoursesClient({ courses }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  // Filter courses based on search query
  const filteredCourses = courses.filter(course => {
    const title = (course.Title || '').toLowerCase();
    const prof = (course.Prof || '').toLowerCase();
    const query = searchQuery.toLowerCase();

    return title.includes(query) || prof.includes(query);
  });

  // Group filtered courses by their Filter
  const coursesByFilter = filteredCourses.reduce((acc, course) => {
    const filter = course.Filter || 'سایر';
    if (!acc[filter]) {
      acc[filter] = [];
    }
    acc[filter].push(course);
    return acc;
  }, {});

  const toggleSection = (filter) => {
    setExpandedSections(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const getDisplayedCourses = (courses, filter) => {
    if (expandedSections[filter]) {
      return courses;
    }
    return courses.slice(0, INITIAL_DISPLAY_COUNT);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Hero Section with Grid Background */}
      <div className="relative bg-gradient-to-b from-gray-50 to-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px]"></div>
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
            <div className="text-center space-y-8 relative">
              {/* Main Content */}
              <div className="space-y-6 relative">
                <h1 className="text-4xl md:text-5xl font-black text-accent">
                  دوره های آموزشی بن‌ژیوار
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  مسیر یادگیری خود را با دوره‌های تخصصی ما آغاز کنید
                </p>
              </div>

              {/* Search Box Container */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-accent/5 rounded-2xl transform -rotate-1"></div>
                <div className="absolute inset-0 bg-accent/5 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-lg">
                  <CourseSearch onSearch={setSearchQuery} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Course Sections */}
        {Object.entries(coursesByFilter).map(([filter, filterCourses]) => (
          filterCourses.length > 0 && (
            <div key={filter} className="mb-16">
              <div className="flex items-center justify-between border-b border-gray-200 mb-8">
                <h2 className="text-2xl font-extrabold text-accent pb-4">{filter}</h2>
                {filterCourses.length > INITIAL_DISPLAY_COUNT && (
                  <button
                    onClick={() => toggleSection(filter)}
                    className="text-sm text-[#16A4BA] hover:text-[#138EA1] transition-colors duration-200 flex items-center gap-2"
                  >
                    {expandedSections[filter] ? 'نمایش کمتر' : 'نمایش بیشتر'}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedSections[filter] ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {getDisplayedCourses(filterCourses, filter).map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.Title}
                    courseType={course.CourseType}
                    startingDate={course.StartingDate}
                    classDays={course.ClassDays}
                    price={course.Price}
                    slug={course.Slug}
                    prof={course.Prof}
                    image={course.CoverImage?.url}
                  />
                ))}
              </div>
              {filterCourses.length > INITIAL_DISPLAY_COUNT && !expandedSections[filter] && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => toggleSection(filter)}
                    className="bg-accent/5 hover:bg-accent/10 text-accent px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
                  >
                    <span>نمایش {filterCourses.length - INITIAL_DISPLAY_COUNT} دوره دیگر</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )
        ))}

        {/* No Results Message */}
        {Object.keys(coursesByFilter).length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">هیچ دوره‌ای با این عنوان یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
}
