import Image from 'next/image';
import RichTextRenderer from '@/components/RichTextRenderer';
import CourseCard from '@/components/CourseCard'; // Import the CourseCard component

async function getCourse(slug) {
  const res = await fetch(`https://dev.bonzhivar.com/api/courses?filters[Slug][$eq]=${slug}&populate=*`, {
    next: { revalidate: 0 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch course');
  }

  return res.json();
}

async function getAllCourses() {
  const res = await fetch('https://dev.bonzhivar.com/api/courses?populate=*', {
    next: { revalidate: 0 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const courseData = await getCourse(params.slug);
  const course = courseData.data[0];

  return {
    title: course?.Title || 'Course Not Found',
    description: course?.Description || '',
  };
}

export default async function CoursePage({ searchParams, params }) {
  const courseData = await getCourse(params.slug);
  const course = courseData.data[0];
  const { data: allCourses } = await getAllCourses();

  if (!course) {
    return (
      <div className=" h-screen flex w-full bg-[url(/Undercn/1.webp)] bg-center bg-cover bg-no-repeat justify-center items-center text-center">
        <h1 className="text-3xl font-extrabold  text-accentLight">دوره مورد نظر یافت نشد</h1>
      </div>
    );
  }

  const coverImageUrl = course.CoverImage?.url
    ? `https://dev.bonzhivar.com${course.CoverImage.url}`
    : '/default-course-image.jpg';

  // Filter out current course and get exactly 3 random related courses
  const otherCourses = allCourses.filter(c => c.id !== course.id);
  const relatedCourses = [...otherCourses]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="relative h-64 md:h-[500px] mb-16">
          <Image
            src={coverImageUrl}
            alt={course.Title || 'Course Image'}
            fill
            className="object-cover"
            priority
          />

        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto  -mt-32 relative z-10">
          <div className="bg-white rounded-2xl p-4 md:p-12 shadow-sm border border-gray-100">
            {/* Course Title Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h1 className="text-4xl font-bold text-[#16A4BA] mb-4">{course.Title}</h1>
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>استاد دوره: {course.Prof}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.CourseType}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <button className="bg-[#16A4BA] text-white px-8 py-3 rounded-xl font-medium">
                  ثبت نام
                </button>
              </div>
            </div>

            {/* Course Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mb-12">
              <div className="flex items-center gap-2 md:gap-3 bg-[#F8FDFE] p-3 md:p-4 rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#16A4BA]/10">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">زمان برگزاری</p>
                  <p className="text-sm md:text-base font-medium text-gray-900">{course.ClassDays}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 bg-[#F8FDFE] p-3 md:p-4 rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#16A4BA]/10">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">تاریخ شروع</p>
                  <p className="text-sm md:text-base font-medium text-gray-900">{course.StartingDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 bg-[#F8FDFE] p-3 md:p-4 rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#16A4BA]/10">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">پیش نیاز</p>
                  <p className="text-sm md:text-base font-medium text-gray-900">ندارد</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 bg-[#F8FDFE] p-3 md:p-4 rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#16A4BA]/10">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16A4BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">شهریه دوره</p>
                  <p className="text-sm md:text-base font-medium text-gray-900">{course.Price}</p>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-[#F8FDFE] rounded-2xl p-2 mb-12">
              <div className="prose prose-lg max-w-none prose-headings:text-[#16A4BA] prose-p:text-gray-600 prose-p:leading-relaxed">
                <RichTextRenderer content={course.Content} />
              </div>
            </div>
            {/* WhatsApp CTA Section */}
            <div className="bg-[#F8FDFE] py-16">
              <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-accent mb-4">سوالی دارید؟</h2>
                <p className="text-lg text-gray-600 mb-8">برای کسب اطلاعات بیشتر و مشاوره رایگان با ما در واتساپ در ارتباط باشید</p>
                <a
                  href="https://wa.me/+989361124307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1FAD53] transition-colors duration-300 text-lg font-medium"
                >
                  <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  شروع گفتگو در واتساپ
                </a>
              </div>
            </div>

            {/* Course Tags */}
            {/* <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-[#F8FDFE] text-[#16A4BA] rounded-lg text-sm">مصالح ساختمانی</span>
              <span className="px-4 py-2 bg-[#F8FDFE] text-[#16A4BA] rounded-lg text-sm">مبانی ساختمان</span>
              <span className="px-4 py-2 bg-[#F8FDFE] text-[#16A4BA] rounded-lg text-sm">اصول طراحی ساختمان</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-accent mb-8">دوره‌های دیگر ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedCourses.map((relatedCourse) => (
            <CourseCard
              key={relatedCourse.id}
              title={relatedCourse.Title}
              courseType={relatedCourse.CourseType}
              startingDate={relatedCourse.StartingDate}
              classDays={relatedCourse.ClassDays}
              price={relatedCourse.Price}
              slug={relatedCourse.Slug}
              prof={relatedCourse.Prof}
              image={relatedCourse.CoverImage?.url}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
