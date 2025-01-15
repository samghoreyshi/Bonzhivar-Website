import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({ title, courseType, startingDate, classDays, price, slug, prof, image }) => {
  return (
    <Link href={`/courses/${slug}`} className="block h-[290px]">
      <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-32 w-full flex-shrink-0">
          <Image
            src={image ? `https://dev.bonzhivar.com${image}` : '/default-course-image.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay with Staff Pick badge if needed */}
          {/* <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
            Staff Pick
          </div> */}
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-grow">
          {/* Course Info */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 font-light">
            <div className="flex items-center gap-2">
              <span>{courseType}</span>
              <span>•</span>
              <span>{classDays}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>{startingDate}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-gray-900 mb-1.5 line-clamp-2 text-right flex-grow">{title}</h3>

          {/* Instructor */}
          <div className="flex items-center justify-between text-sm mt-auto">
            <div className="text-gray-600">{prof}</div>
            <div className="text-[#16A4BA] font-semibold">{price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
