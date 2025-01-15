import Link from "next/link";

function CTA() {
  const externalLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSewvPyLp8zwuTs0WRg_OT-jOUPeI0XAdlHnrO4TBQm5h7xoNA/viewform";

  return (
    <>
      <div className="w-full h-[100px] cursor-pointer flex justify-between items-center rounded-lg relative overflow-hidden group p-5">
        {/* Pastel gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accentDark to-accent transition-opacity duration-300 ease-in-out"></div>
        {/* Hover pastel gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accentDark opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        {/* Arrow icon container */}
        <Link
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-IranYekan font-normal text-sm border border-accentLight hover:border-accentLight hover:text-gray-600 rounded-lg my-5 p-1 transition-all duration-300 relative z-10 rotate-180 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="white"
            height={30}
            width={30}
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </Link>
        <h2 className="font-IranYekan font-normal text-white text-sm sm:text-2xl text-right direction-rtl relative z-10">
          تخفیف ثبت‌نام گروهی: به همراه دوستان خود ثبت‌نام کنید و از ۱۵٪ تخفیف
          گروهی بهره‌مند شوید!
        </h2>
      </div>
    </>
  );
}

export default CTA;
