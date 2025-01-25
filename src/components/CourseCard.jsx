import Link from 'next/link';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';

const CourseCard = ({ title, courseType, startingDate, classDays, price, slug, prof, image, Content }) => {
  // Extract text content from the first paragraph
  const getContentPreview = () => {
    if (!Content || !Content.length) return '';
    
    const firstParagraph = Content.find(block => 
      block.type === 'paragraph' && 
      block.children?.[0]?.text
    );
    
    if (!firstParagraph) return '';
    
    return firstParagraph.children[0].text;
  };

  return (
    <Link href={`/courses/${slug}`} className="block h-full">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-video w-full flex-shrink-0">
          <ImageWithPlaceholder
            src={image ? `https://dev.bonzhivar.com${image}` : '/default-course-image.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Course Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 font-light gap-1.5 mb-3">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span>{courseType}</span>
              <span>•</span>
              <span>{classDays}</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>{startingDate}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 text-right min-h-[3rem] mb-2">
            {title}
          </h3>

          {/* Content Preview */}
          <p className="text-sm text-gray-600 line-clamp-5 text-right min-h-[6rem] mb-3">
            {getContentPreview()}
          </p>

          {/* Instructor */}
          <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3 mt-auto">
            <div className="text-gray-600 line-clamp-1">{prof}</div>
            <div className="text-[#16A4BA] font-semibold whitespace-nowrap">{price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
