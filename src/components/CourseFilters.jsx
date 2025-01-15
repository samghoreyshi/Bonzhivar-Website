'use client';

export default function CourseFilters({ filters, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${filter.active 
              ? 'bg-[#16A4BA] text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
