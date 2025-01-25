"use client";
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <Link href={`/courses/${course.Slug}`} className="block mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-black h-[400px] md:h-[400px] group">
        <div className="absolute inset-0">
          <picture>
            {/* Mobile image */}
            <source
              media="(max-width: 768px)"
              srcSet={`https://dev.bonzhivar.com${course.MobileCoverImage?.url || course.MobileCover?.url}`}
            />
            {/* Desktop image */}
            <Image
              src={`https://dev.bonzhivar.com${course.CoverImage?.url}`}
              alt={course.Title}
              fill
              className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-500"
            />
          </picture>
        </div>
        
        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              دوره ویژه
            </div>
            {/* <h3 className="text-3xl md:text-4xl font-bold text-white">
              {course.Title}
            </h3> */}
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{course.Prof}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{course.CourseType}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300 mt-6">
              <span className="font-medium">مشاهده دوره</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCourseCard;
