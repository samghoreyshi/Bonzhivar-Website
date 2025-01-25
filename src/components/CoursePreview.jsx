"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoursePreview = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://dev.bonzhivar.com/api/courses?populate=*");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        // Filter latest courses and take first 3
        const latestCourses = data.data
          .filter(course => course.Latest === true)
          .slice(0, 3);
        setCourses(latestCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4 font-IranYekan">
            جدیدترین دوره‌های آموزشی ما را مشاهده کنید
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="w-full h-64 bg-gray-200 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-background" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500">خطا در بارگذاری دوره‌ها. لطفا دوباره تلاش کنید.</p>
        </div>
      </section>
    );
  }

  // Don't render section if no latest courses
  if (courses.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4 font-IranYekan">
            دوره‌های آموزشی بن‌ژیوار
          </h2>
          <p className="text-accentDark/70 text-lg font-IranYekan">
            جدیدترین دوره‌های آموزشی ما را مشاهده کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {courses.map((course) => (
            <Link 
              href={`/courses/${course.Slug}`} 
              key={course.id}
              className="group block"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={`https://dev.bonzhivar.com${course.CoverImage?.formats?.medium?.url || course.CoverImage?.formats?.small?.url}`}
                  alt={course.Title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-3 font-IranYekan group-hover:text-accentDark transition-colors">
                  {course.Title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-accentDark/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="font-IranYekan truncate max-w-[150px]" title={course.Prof}>{course.Prof}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="font-IranYekan">{course.Filter}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
