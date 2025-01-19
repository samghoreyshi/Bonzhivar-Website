'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CourseSidebar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dev.bonzhivar.com/api/courses?populate=*');
        const data = await response.json();
        
        // Group courses by Filter
        const groupedCourses = data.data.reduce((acc, course) => {
          const filter = course.Filter || 'سایر';
          if (!acc[filter]) {
            acc[filter] = [];
          }
          acc[filter].push(course);
          return acc;
        }, {});

        // Convert to array format
        const categoriesArray = Object.entries(groupedCourses).map(([filter, courses]) => ({
          id: filter,
          title: filter,
          courses: courses
        }));

        setCategories(categoriesArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <aside dir="rtl" className="w-72 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-100 rounded-lg w-3/4 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-12 bg-gray-100 rounded-xl w-full"></div>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside dir="rtl" className="w-72 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-accent rounded-full"></span>
        همه دوره‌ها
      </h2>
      
      <nav className="space-y-3">
        {categories.map((category) => (
          <div key={category.id} className="relative">
            <div className="p-4 rounded-xl bg-accent/10 text-accent shadow-sm">
              <div className="flex items-center">
                <span className="font-extrabold">{category.title}</span>
              </div>
            </div>

            <div className="mt-2 space-y-1 pr-4">
              {category.courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.Slug}`}
                  className="block py-2 px-3 rounded-lg text-sm transition-colors duration-200 font-medium text-gray-800 hover:bg-accent/5"
                >
                  {course.Title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
