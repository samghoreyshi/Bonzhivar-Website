"use client";

export default function AnnouncementCard({ announcement, onClick }) {
  return (
    <div
      onClick={onClick}
      className="h-[600px] cursor-pointer shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col bg-white"
    >
      <div className="h-[250px] relative">
        <img 
          src={announcement.imagePath} 
          alt={announcement.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 bg-[#f9f7f1] flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block px-3 py-1 text-sm font-IranYekan text-accent/90 bg-accent/5 rounded-full">
              {announcement.category}
            </span>
            <span className={`inline-block px-3 py-1 text-sm font-IranYekan text-white rounded-full ${
              announcement.status === 'Upcoming' ? 'bg-accent' : 
              announcement.status === 'Ongoing' ? 'bg-accent' : 'bg-accent'
            }`}>
              {announcement.status === 'Upcoming' ? 'به زودی' : 
               announcement.status === 'Ongoing' ? 'در حال حاضر' : 'تکمیل شده'}
            </span>
          </div>

          <h3 className="text-xl font-IranYekan text-accent font-[600] direction-rtl line-clamp-2">
            {announcement.title}
          </h3>

          <p className="text-sm text-accentDark/70 font-IranYekan direction-rtl">
            {announcement.date}
          </p>

          <p className="text-accentDark font-IranYekan text-right leading-relaxed line-clamp-4 direction-rtl">
            {announcement.description}
          </p>
        </div>

        <div className="mt-6">
          <button className="w-full py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition duration-200 font-IranYekan text-lg">
            بیشتر بخوانید
          </button>
        </div>
      </div>
    </div>
  );
}
