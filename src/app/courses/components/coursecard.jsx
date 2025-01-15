import Link from "next/link";

const CourseCard = ({
  prof,
  type,
  pre,
  date,
  time,
  price,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
}) => {
  const externalLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSewvPyLp8zwuTs0WRg_OT-jOUPeI0XAdlHnrO4TBQm5h7xoNA/viewform";

  return (
    <div className=" flex flex-col gap-5 sm:pl-5  sm:visible ">
      <div className="sticky flex flex-col gap-2 justify-center items-center top-64 w-full h-[450px] text-sm sm:shadow-emerald-600/35 sm:shadow-lg  sm:border-2  p-2 border-accent rounded-3xl overflow-hidden">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div className="flex justify-end items-center w-full h-full">
            {/* <span className="w-[80px] h-[80px] bg-[url(/Backgrounds/Prof.webp)] bg-center bg-cover bg-no-repeat rounded-lg"></span> */}
            <span className="font-IranYekan font-bold text-accent text-right direction-rtl my-5">
              استاد دوره : {prof}
            </span>
          </div>
          <div className=" flex items-center justify-end gap-5 w-full h-full border-b border-accent/40 px-2">
            <span className="font-IranYekan text-sm font-normal text-accentDark">
              نوع دوره : {type}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height={20}
              width={20}
              fill="#4F9A85"
            >
              <path d="M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5L288 60.8 249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4C4.3 415.4 0 427.7 0 440.4L0 464c0 26.5 21.5 48 48 48l240 0 240 0c26.5 0 48-21.5 48-48l0-23.6c0-12.7-4.3-25.1-12.3-35L329 112l48-60zM288 448l-119.5 0L288 291.7 407.5 448 288 448z" />
            </svg>
          </div>
          <div className=" flex items-center justify-end gap-5 w-full h-full border-b border-accent/40 px-2">
            <span className="font-IranYekan text-sm font-normal text-accentDark">
              پیش نیاز : {pre}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={20}
              fill="#4F9A85"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </div>
          <div className=" flex items-center justify-end gap-5 w-full h-full border-b border-accent/40 px-2">
            <span className="font-IranYekan text-sm font-normal text-accentDark direction-rtl text-right">
              تاریخ شروع : {date}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height={20}
              fill="#4F9A85"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
            </svg>
          </div>

          <div className=" flex items-center justify-end gap-5 w-full h-full border-b border-accent/40 px-2">
            <span className="font-IranYekan text-sm font-normal direction-rtl text-accentDark">
              زمان برگزاری: {time}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={20}
              fill="#4F9A85"
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
          </div>
          <div className=" flex items-center justify-end gap-5 w-full h-full px-2">
            <span className="font-IranYekan text-sm font-normal direction-rtl text-accentDark">
              ارائه گواهینامه معتبر بین‌المللی
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={20}
              fill="#4F9A85"
            >
              <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
            </svg>
          </div>
          <div className=" my-2 font-IranYekan text-orange-700 font-bold flex items-center justify-center w-full h-full bg-orange-100 border border-orange-500 border-dashed rounded-lg">
            هزینه دوره: {price}
          </div>
          <Link
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" my-2 font-IranYekan text-accentLight font-bold flex items-center justify-center w-full h-full bg-accent hover:bg-background hover:text-accent border border-accent transition all duration-300 rounded-lg cursor-pointer"
          >
            ثبت نام
          </Link>
          <div className=" text-[10px] my-2 font-IranYekan  text-gray-500 font-normal flex flex-wrap gap-2 items-start justify-end w-full h-full">
            <span className=" bg-background border border-accent p-1 rounded-full text-accent">
              {tag1}
            </span>
            <span className=" bg-background border border-accent p-1 rounded-full text-accent">
              {tag2}
            </span>
            <span className=" bg-background border border-accent p-1 rounded-full text-accent">
              {tag3}
            </span>
            <span className=" bg-background border border-accent p-1 rounded-full text-accent">
              {tag4}
            </span>
            <span className=" bg-background border border-accent p-1 rounded-full text-accent">
              {tag5}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
