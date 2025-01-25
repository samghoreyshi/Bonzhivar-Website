'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseSearch from '@/components/CourseSearch';
import CourseSidebar from '@/components/CourseSidebar';
import FeaturedCourseCard from '@/components/FeaturedCourseCard';

export default function CoursesClient({ courses }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Find the featured course
  const featuredCourse = courses.find(course => course.Featured === true);

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

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Search Section */}
      <div className="bg-background border-b border-gray-300 sticky top-[60px] z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto py-4">
            <CourseSearch onSearch={setSearchQuery} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Course */}
        {featuredCourse && !searchQuery && (
          <div className="mb-12">
            <FeaturedCourseCard course={featuredCourse} />
          </div>
        )}

        {/* Course Layout */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden md:block">
            <CourseSidebar />
          </div>

          {/* Course Sections */}
          <div className="flex-1">
            {Object.entries(coursesByFilter).map(([filter, filterCourses]) => (
              filterCourses.length > 0 && (
                <div key={filter} className="mb-16">
                  <div className="flex items-center justify-between border-b border-gray-200 mb-8">
                    <h2 className="text-2xl font-extrabold text-accent pb-4">{filter}</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filterCourses.map((course) => (
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
                        Content={course.Content}
                      />
                    ))}
                  </div>
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
      </div>
    </div>
  );
}
