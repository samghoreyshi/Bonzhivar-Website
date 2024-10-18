import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Modal from "./modal";

const imageCardData = [
  {
    id: 1,
    imageUrl: "/Hero-images/Right-Cover-2.webp",
    title: "دوره جامع بازسازی ساختمان",
    register: "/register/course2",
    moreInfo: "/info/بازسازی-ساختمان",
  },
  {
    id: 2,
    imageUrl: "/Hero-images/Right-Cover-3.webp",
    title: "دوره جامع مُدلسازی و رِندرینگ",
    register: "/register/course2",
    moreInfo: "/info/مدلسازی-رندرینگ",
  },
  {
    id: 3,
    imageUrl: "/Hero-images/Right-Cover-4.webp",
    title: " دوره جامع نورپردازی فضا",
    register: "/register/course3",
    moreInfo: "/info/نورپردازی",
  },
];

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const changeInterval = 6000;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Helmet>
        <title>مجتمع آموزشی بن‌ژیوار</title>
        <meta
          name="description"
          content="آموزش بازسازی ساختمان برای افرادی که به دنبال مهارت‌های عملی و تکنیک‌های مدرن هستند."
        />
      </Helmet>

      <section className="flex w-full h-[calc(70vh-4rem)] bg-background ">
        <div className="w-full h-full bg-gray-200 flex flex-col items-end justify-center bg-[url(/Hero-images/banner.webp)] bg-center bg-cover bg-no-repeat  font-IranYekan gap-5 px-5 sm:px-10">
          <h2 className="text-accentLight text-4xl text-right font-extrabold  sm:text-5xl">
            مجتمع آموزشی بُن‌ژیوار
          </h2>
          <p className="hidden text-accentLight text-sm px-2 direction-rtl w-1/3 sm:text-base sm:block ">
            مجتمع آموزشی بن‌ژیوار با هدف توسعه مهارت‌های کاربردی و آماده‌سازی
            حرفه‌ای افراد برای ورود به بازار کار، دوره‌های متنوعی را در
            حوزه‌هایی همچون معماری داخلی، طراحی، مدیریت کسب‌وکار و مهارت‌های
            کافی‌شاپ ارائه می‌دهد. این مجتمع به عنوان یکی از مراکز پیشرو در
            زمینه آموزش‌های مهارتی شناخته شده و با تکیه بر کیفیت آموزشی خود،
            موفق به دریافت جوایز متعددی نظیر آموزشگاه برتر کشور و کارآفرین برتر
            شده است. بن‌ژیوار با تمرکز بر نیازهای بازار کار، مسیر موفقیت شغلی را
            برای فراگیران هموار می‌سازد.
          </p>
        </div>
      </section>

      <section>
        <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-background">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto w-full text-right lg:px-10 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl sm:text-5xl text-accent font-IranYekan font-extrabold">
                مسیر خودتو پیدا کن
              </h2>
              <p className="mt-6 text-accentDark font-IranYekan font-normal sm:text-justify direction-rtl">
                آیا به دنبال شغلی هستی که با عشق و علاقه آن را دنبال کنی؟ در
                مجتمع آموزشی بن‌ژیوار، ما به شما کمک می‌کنیم تا مسیر خود را در
                زمینه‌های مختلف مانند معماری داخلی، توسعه کسب‌وکار و راه‌اندازی
                کافه‌ و رستوران پیدا کنید. با آموزش‌های تخصصی و راهنمایی‌های
                حرفه‌ای، آینده‌ای روشن و شغلی پرانرژی را برای خود بساز!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="block rounded-xl border border-accent/50 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-accent focus:outline-none focus:ring transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-end cursor-pointer">
                  <span className="inline-block rounded-lg bg-accent/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height={20}
                      fill="#4F9A85"
                    >
                      <path d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z" />
                    </svg>
                  </span>

                  <h2 className="mt-2 font-bold text-accentDark text-right font-IranYekan">
                    معماری داخلی
                  </h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-accent text-right font-IranYekan">
                    در دوره‌های معماری داخلی مجتمع آموزشی بن‌ژیوار، مهارت‌های
                    اساسی و پیشرفته برای طراحی و اجرای پروژه‌های معماری داخلی و
                    خارجی به شما آموزش داده می‌شود.
                  </p>
                </div>
              </div>
              <div className="block rounded-xl border border-accent/50 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-accent focus:outline-none focus:ring transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-end cursor-pointer">
                  <span className="inline-block rounded-lg bg-accent/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height={20}
                      fill="#4F9A85"
                    >
                      <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
                    </svg>
                  </span>

                  <h2 className="mt-2 font-bold text-accentDark text-right font-IranYekan">
                    کسب و کار
                  </h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-accent text-right font-IranYekan">
                    در دوره‌های کسب و کار مجتمع آموزشی بن‌ژیوار، شما می‌توانید
                    با اصول و مهارت‌های مورد نیاز برای راه‌اندازی، توسعه و
                    مدیریت موفق یک کسب‌وکار آشنا شوید.
                  </p>
                </div>
              </div>
              <div className="block rounded-xl border border-accent/50 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-accent focus:outline-none focus:ring transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-end cursor-pointer">
                  <span className="inline-block rounded-lg bg-accent/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height={20}
                      fill="#4F9A85"
                    >
                      <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1-28.6 47.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L328 256.9 328 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0zM7 7C16.4-2.3 31.6-2.3 41 7l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 41C-2.3 31.6-2.3 16.4 7 7zM471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7zM7 505c-9.4-9.4-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 505c-9.4 9.4-24.6 9.4-33.9 0zm464 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z" />
                    </svg>
                  </span>

                  <h2 className="mt-2 font-bold text-accentDark text-right font-IranYekan">
                    توسعه فردی
                  </h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-accent text-right font-IranYekan">
                    در مجتمع آموزشی بن‌ژیوار، ما به اهمیت توسعه فردی به عنوان
                    یکی از کلیدی‌ترین عوامل موفقیت در زندگی شخصی و حرفه‌ای باور
                    داریم. این مفهوم شامل بهبود مداوم مهارت‌ها، تقویت
                    توانایی‌های فردی و افزایش اعتماد به نفس است تا شما بتوانید
                    به بهترین نسخه از خود تبدیل شوید.
                  </p>
                </div>
              </div>
              <div className="block rounded-xl border border-accent/50 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-accent focus:outline-none focus:ring transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-end cursor-pointer">
                  <span className="inline-block rounded-lg bg-accent/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      height={20}
                      fill="#4F9A85"
                    >
                      <path d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>
                  </span>

                  <h2 className="mt-2 font-bold text-accentDark text-right font-IranYekan">
                    کافه و رستوران
                  </h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-accent text-right font-IranYekan">
                    اگر علاقه‌مند به دنیای پرجنب‌وجوش کافه‌ها و رستوران‌ها هستید
                    و رویای راه‌اندازی کسب‌وکار خود را دارید، دوره‌های تخصصی
                    کافه و رستوران بن‌ژیوار دقیقا همان چیزی است که نیاز دارید!
                    این دوره‌ها تمامی مراحل از ایده‌پردازی تا اجرای موفق یک کافه
                    یا رستوران را به شما آموزش می‌دهند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-background">
        <div class="py-4 px-4 sm:px-8 w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-background h-auto md:h-full flex flex-col">
              <Link
                to="/info/بازسازی-ساختمان"
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/Hero-images/Right-Cover-2.webp"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-lg font-bold text-accentLight absolute top-0 right-0 p-2 xs:text-xl md:text-xl font-IranYekan text-right direction-rtl bg-accentDark/30 backdrop-blur-lg rounded-lg m-2">
                  دوره جامع بازسازی ساختمان
                </h3>
              </Link>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-background">
              <Link
                to="/info/مدلسازی-رندرینگ"
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="/Hero-images/Right-Cover-3.webp"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-lg font-bold text-accentLight absolute top-0 right-0 p-2 xs:text-xl md:text-xl font-IranYekan text-right direction-rtl bg-accentDark/30 backdrop-blur-lg rounded-lg m-2">
                  دوره جامع مُدلسازی و رِندرینگ
                </h3>
              </Link>
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <Link
                  to="/درباره-ما"
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/Hero-images/Aboutus-facade-Sepia.webp"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-lg font-bold text-accentLight absolute top-0 right-0 p-2 xs:text-xl md:text-xl font-IranYekan text-right direction-rtl bg-accentDark/30 backdrop-blur-lg rounded-lg m-2">
                    درباره ما
                  </h3>
                </Link>
                <div
                  onClick={openModal}
                  class="cursor-pointer group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/Hero-images/Bot-special-2.webp"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-xl font-bold text-accentLight absolute top-0 right-0 p-2 xs:text-xl md:text-xl font-IranYekan text-right direction-rtl bg-accentDark/30 backdrop-blur-lg rounded-lg m-2">
                    مسیری نو...
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-background h-auto md:h-full flex flex-col">
              <Link
                to="/info/نورپردازی"
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/Hero-images/Right-Cover-4.webp"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-lg font-bold text-accentLight absolute top-0 right-0 p-2 xs:text-xl md:text-xl font-IranYekan text-right direction-rtl bg-accentDark/30 backdrop-blur-lg rounded-lg m-2">
                  دوره جامع نور پردازی
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="text-center text-3xl font-extrabold md:text-5xl font-IranYekan text-accent">
            مزایای دوره‌های آموزشی مجتمع بن‌ژیوار
          </h2>
          <p className="mx-auto mb-8 mt-6 max-w-lg text-center text-sm text-accentDark sm:text-base md:mb-12 lg:mb-16 font-IranYekan direction-rtl">
            دوره‌های آموزشی بن‌ژیوار با ترکیب آموزش تخصصی، شرایط پرداخت منعطف و
            ارائه گواهینامه‌های بین‌المللی، فرصتی ایده‌آل برای کسب دانش و پیشرفت
            حرفه‌ای شما هستند.
          </p>
          {/* Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {/* Item */}
            <div className="grid gap-4 rounded-tr-3xl rounded-bl-3xl border border-solid border-accent/50 hover:border-accent cursor-pointer p-8 md:p-10 transition-all duration-300 ease-in-out">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    height={30}
                    fill="#4F9A85"
                  >
                    <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl font-bold text-right font-IranYekan text-accentDark">
                مدرسین حرفه‌ای و باتجربه
              </p>
              <p className="text-sm text-accent text-right font-IranYekan">
                دوره‌های ما توسط متخصصین مجرب و حرفه‌ای در هر حوزه برگزار می‌شود
                که تجربه‌های عملی خود را با شما به اشتراک می‌گذارند.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-tl-3xl rounded-br-3xl border border-solid border-accent/50 hover:border-accent cursor-pointer p-8 md:p-10 transition-all duration-300 ease-in-out">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height={30}
                    fill="#4F9A85"
                  >
                    <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl font-bold text-right font-IranYekan text-accentDark">
                گواهینامه بین‌المللی معتبر
              </p>
              <p className="text-sm text-accent text-right font-IranYekan">
                س از اتمام دوره‌ها، گواهینامه‌های معتبر بین‌المللی دریافت
                می‌کنید که در هر کجای جهان قابل ارائه و اعتبار است.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-bl-3xl rounded-tr-3xl border border-solid border-accent/50 hover:border-accent cursor-pointer p-8 md:p-10 transition-all duration-300 ease-in-out">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height={30}
                    fill="#4F9A85"
                  >
                    <path d="M386.5 111.5l15.1 249-11-.3c-36.2-.8-71.6 8.8-102.7 28-31-19.2-66.4-28-102.7-28-45.6 0-82.1 10.7-123.5 27.7L93.1 129.6c28.5-11.8 61.5-18.1 92.2-18.1 41.2 0 73.8 13.2 102.7 42.5 27.7-28.3 59-41.7 98.5-42.5zM569.1 448c-25.5 0-47.5-5.2-70.5-15.6-34.3-15.6-70-25-107.9-25-39 0-74.9 12.9-102.7 40.6-27.7-27.7-63.7-40.6-102.7-40.6-37.9 0-73.6 9.3-107.9 25C55.2 442.2 32.7 448 8.3 448H6.9L49.5 98.9C88.7 76.6 136.5 64 181.8 64 218.8 64 257 71.7 288 93.1 319 71.7 357.2 64 394.2 64c45.3 0 93 12.6 132.3 34.9L569.1 448zm-43.4-44.7l-34-280.2c-30.7-14-67.2-21.4-101-21.4-38.4 0-74.4 12.1-102.7 38.7-28.3-26.6-64.2-38.7-102.7-38.7-33.8 0-70.3 7.4-101 21.4L50.3 403.3c47.2-19.5 82.9-33.5 135-33.5 37.6 0 70.8 9.6 102.7 29.6 31.8-20 65.1-29.6 102.7-29.6 52.2 0 87.8 14 135 33.5z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl font-bold text-right font-IranYekan text-accentDark">
                آموزش عملی و پروژه‌محور
              </p>
              <p className="text-sm text-right font-IranYekan text-accent">
                دوره‌های ما به صورت کاملاً عملی و پروژه‌محور طراحی شده‌اند تا
                شما بتوانید مهارت‌های آموخته‌شده را به‌صورت واقعی در پروژه‌های
                کاربردی پیاده‌سازی کنید و تجربه عملی کسب کنید.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-accent rounded-lg p-8 md:p-12 lg:px-16 lg:py-24 flex items-end bg-[url(Hero-images/banner-2.webp)] bg-center bg-cover">
              <div className="flex flex-col gap-2 items-center justify-center mx-auto max-w-xl text-center bg-accentDark/50 backdrop-blur-md rounded-lg m-2 p-4">
                <h2 className="text-xl font-extrabold text-accentLight md:text-3xl text-right direction-rtl font-IranYekan">
                  یک شروع سریع داشته باش!
                </h2>

                <p className=" text-accentLight font-IranYekan font-normal text-base sm:mt-4 text-right ">
                  در مجتمع آموزشی بن‌ژیوار، مسیر یادگیری شما سریع و آسان شروع
                  می‌شود! با فرآیند ثبت‌نام ساده و امکان پرداخت شهریه به صورت
                  قسطی، می‌توانید بدون نگرانی از هزینه‌ها، به سرعت وارد دوره‌های
                  آموزشی مورد علاقه خود شوید. علاوه بر این، پس از اتمام دوره‌ها،
                  گواهینامه بین‌المللی معتبر دریافت خواهید کرد که در هر کجای
                  جهان قابل ارائه و اعتبار است.
                </p>

                <div className="mt-4 md:mt-2">
                  <a
                    href="#"
                    className="inline-block rounded-lg border border-accentlight px-5 py-3 text-sm text-accentLight transition hover:bg-transparen text-right font-IranYekan direction-rtl font-bold"
                  >
                    همین الان ثبت نام کن!
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="/Hero-images/1.webp"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
              />

              <img
                alt=""
                src="/Hero-images/3.webp"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="مجتمع آموزشی بن‌ژیوار"
        description="مجتمع آموزشی بن‌ژیوار از سال ۱۳۸۷ فعالیت خود را با هدف ارتقای مهارت‌های کاربردی و آماده‌سازی فراگیران برای ورود به بازار کار آغاز کرده است. این مجتمع با ارائه دوره‌های متنوعی در حوزه‌های مختلف، از جمله معماری داخلی، طراحی، مدیریت کسب‌وکار و مهارت‌های کافی‌شاپ، به یکی از مراکز آموزشی پیشرو در زمینه مهارت‌آموزی تبدیل شده است. علاوه بر این، بن‌ژیوار در سال‌های گذشته موفق به کسب جوایز مختلفی نظیر آموزشگاه برتر کشور و کارآفرین برتر شده است که گواهی بر کیفیت و اهمیت فعالیت‌های آن است"
        imageUrl="/Hero-images/Bot-special-2.webp"
      />
    </>
  );
}

export default Hero;
