import React, { useEffect, useRef } from "react";
import Bonzhitree from "/Aboutus/Bonzhitree.webp";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./footer";

import ImageCarousel from "./ImageCarousel";
import { div } from "framer-motion/client";

const slides = [
  {
    image: "/Aboutus/Sliders/1.webp",
    title: "Slide 1 Title",
    description: "Description for slide 1",
  },
  {
    image: "/Aboutus/Sliders/2.webp",
    title: "Slide 2 Title",
    description: "Description for slide 2",
  },
  {
    image: "/Aboutus/Sliders/3.webp",
    title: "Slide 3 Title",
    description: "Description for slide 3",
  },
  {
    image: "/Aboutus/Sliders/4.webp",
    title: "Slide 4 Title",
    description: "Description for slide 4",
  },
  {
    image: "/Aboutus/Sliders/5.webp",
    title: "Slide 5 Title",
    description: "Description for slide 5",
  },
];

const AboutUs = () => {
  const sec1Ref = useRef(null);
  const imgRef = useRef(null);
  const abtitleRef = useRef(null);
  const btitleRef = useRef(null);
  const btitle2Ref = useRef(null);
  const paragraphRef = useRef(null); // New ref for the paragraph
  const paragraph2Ref = useRef(null); // New ref for the paragraph
  const img2Ref = useRef(null); // New ref for the paragraph

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only run the animation for screens wider than 640px (sm breakpoint in Tailwind)
    if (window.innerWidth > 640) {
    }

    gsap.fromTo(
      btitleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btitleRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      btitle2Ref.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btitle2Ref.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    // Animation for the section
    gsap.fromTo(
      sec1Ref.current,
      { margin: 20, y: 0 },
      {
        margin: 0,
        y: -20,
        scrollTrigger: {
          trigger: sec1Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      abtitleRef.current,
      { y: 0 },
      {
        y: -700,
        scrollTrigger: {
          trigger: abtitleRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Animation for the image
    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.3,
        scrollTrigger: {
          trigger: sec1Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Update this animation to use paragraphRef instead of btitleRef
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      paragraph2Ref.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraph2Ref.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      img2Ref.current,
      { y: 200 }, // Start from 200px down
      {
        y: -200, // Move 200px up
        scrollTrigger: {
          trigger: img2Ref.current, // Use the element itself as the trigger
          start: "top bottom", // Start animation when the top of the element reaches the bottom of the viewport
          end: "bottom top", // End animation when the bottom of the element reaches the top of the viewport
          scrub: true, // Smooth scrubbing
          // Add markers for debugging (remove in production)
        },
      }
    );
  }, []);

  return (
    <>
      <section className="sticky top-0 flex min-h-[calc(100vh-4rem)] w-full bg-background z-10">
        <div
          id="sec-1"
          ref={sec1Ref}
          className="relative flex items-center justify-center m-0 sm:m-5 rounded-xl sm:rounded-3xl overflow-hidden w-full"
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src={Bonzhitree}
            alt="Bonzhitree"
          />
          <div
            ref={abtitleRef}
            id="about-title"
            className="absolute top-0 left-0 w-full h-full text-white flex items-start justify-between text-xl sm:text-3xl p-4 sm:p-10"
          >
            <svg
              className="rotate-90 h-8 w-8 sm:h-12 sm:w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#F4E8C9"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            <div className="text-accentLight font-IranYekan font-bold text-2xl sm:text-4xl mt-4 sm:mt-0">
              <Typewriter
                options={{
                  strings: ["درباره ما"],
                  autoStart: true,
                  loop: true,
                  cursor: " <",
                  delay: 100,
                  deleteSpeed: 100,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen w-full bg-orange-200 z-20">
        <div className="flex items-start justify-end sm:items-end p-36 px-10 w-full h-screen bg-[url('/Aboutus/Message.webp')] bg-cover bg-center bg-no-repeat">
          <p
            ref={paragraph2Ref}
            className="text-accentLight leading-relaxed p-5 rounded-lg bg-black/30 backdrop-blur-[50px]  w-[700px] font-IranYekan text-lg font-normal text-justify  mt-4 sm:mt-0 direction-rtl"
          >
            کارآفرینان، معماران زندگی هستند که از هیچ اغاز کرده‌اند و بارها زمین
            خورده‌اند و برخاستند. مصالح زندگی‌شان همت، تلاش، پیگیری و استقامت
            است. زیر ساخت باورهایشان، اتکا به قدرت لایزال الهی، دانش، آگاهی و
            نمای زندگی‌شان ادب و تواضع و تمایل به زیبایی است. معماران زندگی با
            همیاری، همدلی، همکاری و همراهی ستون های خیمه محبت و مهر را ساختند تا
            با اتحاد، نیکان سقفی باشند تا دیگر انسان ها زیر این سقف در برکت و
            امنیت زندگی کنند. کارآفرینان اینگونه‌اند، زندگی می‌سازند تا دیگران
            در آرامش زندگی کنند.
          </p>
        </div>
      </section>

      <section className="relative flex min-h-screen w-full bg-background z-20">
        <div
          id="sec-2"
          className="bg-background flex gap-10 flex-col items-start justify-center w-full p-5 sm:p-20 overflow-hidden"
        >
          <div
            ref={btitle2Ref}
            className="flex flex-col sm:flex-row justify-between items-center w-full max-w-10xl gap-5"
          >
            <h1 className="font-IranYekan font-bold text-accent text-4xl sm:text-5xl mb-4 sm:mb-0 text-left sm:text-left">
              Bonzhivar <br /> A New Life
            </h1>
            <p className="text-right sm:text-right leading-10 font-IranYekan font-extrabold text-accent text-4xl sm:text-5xl">
              مجتمع آموزشی
              <br /> بُن‌ژیــــــــــــــــــــوار
            </p>
          </div>
          <div
            ref={img2Ref}
            className="relative flex flex-col sm:flex-row justify-center items-center h-full w-full rounded-3xl"
          >
            <div className="w-full h-full relative sm:static mb-[520px] sm:mb-0">
              <div className="absolute left-36 sm:left-5 top-0 sm:top-36 w-[280px] sm:w-[350px] h-[400px] sm:h-[500px] bg-[url('/Aboutus/Bonzhivar-c.webp')] bg-cover bg-right shadow-xl transform -translate-x-1/2 sm:translate-x-0"></div>
              <div className="absolute left-64 sm:left-30 top-4 sm:top-16 w-[280px] sm:w-[350px] h-[400px] sm:h-[500px] bg-[url('/Aboutus/Bonzhivar-b.webp')] bg-cover bg-right shadow-xl transform -translate-x-1/2 sm:translate-x-0"></div>
            </div>
            <div className="flex flex-col gap-10 justify-center items-start w-full h-full font-IranYekan text-xl font-normal text-justify direction-rtl text-accent ">
              <div
                ref={img2Ref}
                className="text-accent text-4xl sm:text-4xl font-IranYekan font-extrabold"
              >
                <Typewriter
                  options={{
                    strings: ["بنیاد زندگی", "زندگی الهام بخش ما بود"],
                    autoStart: true,
                    loop: true,
                    cursor: " |",
                    delay: 100,
                    deleteSpeed: 100,
                  }}
                />
              </div>
              <p
                ref={img2Ref}
                className="leading-relaxed text-accentDark text-lg"
              >
                امروزه در جهانی زندگی می‌کنیم که به سوی یکپارچگی حرکت می‌کند و
                در عین حال مملو از تغییرات سریع و پر چالش است. بُن‌‌ژیوار
                (واژه‌ای کُردی به معنای بنیاد زندگی است) این مرکز با هدف ارتقای
                سطح دانش و مهارت ایرانیان در نقاط مختلف ایران و جهان در سال ۱۳۷۸
                به صورت رسمی آغاز به فعالیت نموده است، بن‌ژیوار توسعه دانش و
                مهارت فردی را تنها راهکار علمی رشد، پیشرفت و توسعه جامعه
                می‌بیند.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen w-full bg-orange-200 z-20">
        <div className="flex items-start justify-end sm:items-end p-36 px-10 w-full h-screen bg-[url('/Aboutus/Message-2.webp')] bg-cover bg-center bg-no-repeat">
          <div
            ref={paragraphRef}
            className="text-accentLight flex flex-col gap-5 leading-relaxed p-5 rounded-lg bg-black/30 backdrop-blur-[50px]  w-[700px] font-IranYekan text-lg font-normal text-justify  mt-4 sm:mt-0 direction-rtl"
          >
            <h1 className="text-accentLight text-2xl sm:text-4xl font-IranYekan font-extrabold">
              مباحث آموزشی در بن‌ژیوار
            </h1>
            <p>
              مباحثی که در بن‌ژیوار مطرح می‌شود در حوزه‌های معماری داخلی،
              کسب‌و‌کار و توسعه‌ی فردی است. ما در بن‌ژیوار بر این باوریم که این
              سه حوزه از اساسی‌ترین جنبه‌های توسعه انسانی و اجتماعی هستند. در
              حوزه معماری داخلی، دانشجویان می‌آموزند که چگونه فضاهایی زیبا،
              کاربردی و مطابق با نیازهای انسان‌ها طراحی کنند. در بخش کسب‌و‌کار،
              ما به دانشجویان کمک می‌کنیم تا مهارت‌های لازم برای مدیریت و رشد یک
              کسب‌و‌کار موفق را بیاموزند. در نهایت، در حوزه توسعه فردی، ما بر
              تقویت مهارت‌های نرم و توانمندی‌های شخصیتی تمرکز داریم که به افراد
              کمک می‌کند در زندگی حرفه‌ای و شخصی خود به موفقیت دست یابند.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen w-full bg-background z-20">
        <div
          id="sec-2"
          className="bg-background flex gap-10 flex-col items-start justify-center w-full p-5 sm:p-20 overflow-hidden"
        >
          <div
            ref={btitleRef}
            className="flex flex-col sm:flex-row justify-between items-center w-full max-w-10xl gap-5"
          >
            <h1 className="font-IranYekan font-bold text-accent text-4xl sm:text-5xl mb-4 sm:mb-0 text-left sm:text-left">
              Learn Everything <br /> Fast and Deep
            </h1>
            <p className="text-right sm:text-right leading-10 font-IranYekan font-extrabold text-accent text-4xl sm:text-5xl">
              تشویق به یادگیـری
              <br /> عَمیــــــــــــق
            </p>
          </div>
          <div
            ref={img2Ref}
            className="relative flex flex-col sm:flex-row justify-center items-center h-full w-full rounded-3xl"
          >
            <div className="w-full h-full relative sm:static mb-[520px] sm:mb-0">
              <div className="absolute left-36 sm:left-5 top-0 sm:top-36 w-[280px] sm:w-[350px] h-[400px] sm:h-[500px] bg-[url('/Aboutus/Bonzhivar-d.webp')] bg-cover bg-center shadow-xl transform -translate-x-1/2 sm:translate-x-0"></div>
              <div className="absolute left-64 sm:left-30 top-4 sm:top-16 w-[280px] sm:w-[350px] h-[400px] sm:h-[500px] bg-[url('/Aboutus/Bonzhivar-3.webp')] bg-cover bg-center shadow-xl transform -translate-x-1/2 sm:translate-x-0"></div>
              <div className="absolute left-64 sm:-left-32 top-4 sm:top-96 w-[280px] sm:w-[350px] h-[400px] sm:h-[500px] bg-[url('/Aboutus/Bonzhivar-f.webp')] bg-cover bg-right shadow-xl transform -translate-x-1/2 sm:translate-x-0"></div>
            </div>
            <div className="flex flex-col gap-10 justify-center items-start w-full h-full font-IranYekan text-xl font-normal text-justify direction-rtl text-accent ">
              <div
                ref={img2Ref}
                className="text-accent text-4xl sm:text-6xl font-IranYekan font-extrabold"
              >
                <Typewriter
                  options={{
                    strings: [""],
                    autoStart: true,
                    loop: true,
                    cursor: "↓",
                    delay: 100,
                    deleteSpeed: 100,
                  }}
                />
              </div>
              <p
                ref={img2Ref}
                className="leading-relaxed text-accentDark text-lg"
              >
                علاوه بر‌آن ما در بن‌ژیوار افراد را تشویق می‌کنیم که از یادگیری
                سطحی و شتاب‌زده فاصله بگیرند و با مطالعه و تمرین دقیق، عمیق و
                آهسته مهارت‌های مورد نظرشان را بهتر بیاموزند. ما باور داریم که
                یادگیری تنها زمانی مؤثر است که همراه با تأمل، درک عمیق و تکرار
                مداوم باشد. در بن‌ژیوار، ما به دانشجویان کمک می‌کنیم تا از طریق
                فرآیندهای آموزشی خلاقانه و مدون، به جای انباشت اطلاعات، به
                مهارت‌های کاربردی و تفکر انتقادی دست یابند. ما به این امر متعهد
                هستیم که هر فرد بتواند در مسیر یادگیری خود با سرعت مناسب پیش
                برود و با تکیه بر کیفیت یادگیری به جای کمیت، به مهارت‌های پایدار
                دست یابد.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen w-full bg-orange-200 z-20">
        <div className="flex items-start justify-end sm:items-end p-36 px-10 w-full h-screen bg-[url('/Aboutus/Message-3.webp')] bg-cover bg-center bg-no-repeat">
          <div
            ref={paragraphRef}
            className="text-accentLight flex flex-col gap-5 leading-relaxed p-5 rounded-lg bg-black/30 backdrop-blur-[50px]  w-[700px] font-IranYekan text-lg font-normal text-justify  mt-4 sm:mt-0 direction-rtl"
          >
            <h1 className="text-accentLight text-2xl sm:text-4xl font-IranYekan font-extrabold">
              به آینــــــــده می‌اندیشیــــــــــم
            </h1>
            <p>
              مباحثی که در بن‌ژیوار مطرح می‌شود در حوزه‌های معماری داخلی،
              کسب‌و‌کار و توسعه‌ی فردی است. ما در بن‌ژیوار بر این باوریم که این
              سه حوزه از اساسی‌ترین جنبه‌های توسعه انسانی و اجتماعی هستند. در
              حوزه معماری داخلی، دانشجویان می‌آموزند که چگونه فضاهایی زیبا،
              کاربردی و مطابق با نیازهای انسان‌ها طراحی کنند. در بخش کسب‌و‌کار،
              ما به دانشجویان کمک می‌کنیم تا مهارت‌های لازم برای مدیریت و رشد یک
              کسب‌و‌کار موفق را بیاموزند. در نهایت، در حوزه توسعه فردی، ما بر
              تقویت مهارت‌های نرم و توانمندی‌های شخصیتی تمرکز داریم که به افراد
              کمک می‌کند در زندگی حرفه‌ای و شخصی خود به موفقیت دست یابند.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen w-full bg-background z-20">
        <div
          id="sec-2"
          className="bg-background flex gap-10 flex-col items-start justify-center w-full p-5 sm:p-20 sm:py-0 overflow-hidden"
        >
          <div
            ref={img2Ref}
            className="relative   flex flex-col sm:flex-row justify-center items-center h-full w-full"
          >
            <div className="w-full h-full relative sm:static sm:mb-0">
              <div className="w-full h-full rou p-5">
                <div className="bg-[url('/Aboutus/Helena-Dahri.webp')] bg-cover bg-right bg-no-repeat w-full h-full rounded-3xl"></div>
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-10 justify-center items-start w-full h-full font-IranYekan text-xl font-normal text-justify direction-rtl text-accent ">
              <div
                ref={img2Ref}
                className="text-accent text-4xl sm:text-4xl font-IranYekan font-extrabold"
              >
                <Typewriter
                  options={{
                    strings: ["هلنا دهری", "مدیر و مؤسس"],
                    autoStart: true,
                    loop: true,
                    cursor: " |",
                    delay: 100,
                    deleteSpeed: 100,
                  }}
                />
              </div>
              <p
                ref={img2Ref}
                className="text-accentDark leading-relaxed text-lg"
              >
                هلنا دهری، موسس و مدیر مجتمع مهارت‌آموزی بن‌ژیوار، از چهره‌های
                برجسته در زمینه آموزش‌های علمی-کاربردی در ایران است. او این
                مجتمع را در سال ۱۳۸۷ با هدف ارتقای مهارت‌های شغلی و فردی
                بنیان‌گذاری کرد. بن‌ژیوار به‌طور رسمی از سازمان آموزش فنی و
                حرفه‌ای کشور مجوز دارد و دوره‌های آموزشی متنوعی را در زمینه‌های
                معماری داخلی، نورپردازی، آداب معاشرت، و مهارت‌های مدیریتی ارائه
                می‌دهد. این مجتمع با تاکید بر آماده‌سازی افراد برای ورود به
                بازار کار و توسعه فرهنگی، تلاش می‌کند تا بستری برای پیشرفت و
                کارآفرینی در ایران فراهم آورد.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen w-full bg-background z-20">
        <div
          id="sec-2"
          className="bg-background flex gap-10 flex-col items-start justify-center w-full p-5 sm:p-20 sm:py-0 overflow-hidden"
        >
          <div
            ref={img2Ref}
            className="relative   flex flex-col sm:flex-row-reverse justify-center items-center h-full w-full"
          >
            <div className="w-full h-full relative sm:static sm:mb-0">
              <div className="w-full h-full rou p-5">
                <div className="bg-[url('/Aboutus/Trophies.webp')] bg-cover bg-center bg-no-repeat w-full h-full rounded-3xl"></div>
              </div>
            </div>
            <div className=" px-5 flex flex-col gap-10 justify-center items-start w-full h-full font-IranYekan text-xl font-normal text-justify direction-rtl text-accent ">
              <div
                ref={img2Ref}
                className="text-accent text-4xl sm:text-4xl font-IranYekan font-extrabold"
              >
                <Typewriter
                  options={{
                    strings: ["افتخارات بن‌ژیوار"],
                    autoStart: true,
                    loop: true,
                    cursor: " |",
                    delay: 100,
                    deleteSpeed: 100,
                  }}
                />
              </div>
              <ul
                ref={img2Ref}
                className="text-accentDark text-lg leading-loose list-none"
              >
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-accentDark text-lg">-</span>
                  <span>
                    دارنده گواهینامه آموزشگاه نمونه از سازمان آموزش فنی و حرفه
                    ای کل کشور
                  </span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-accent">-</span>
                  <span>کارآفرین برتر سال ۱۳۹۳/۱۳۹٤</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-accent">-</span>
                  <span>
                    پژوهشگر برتر سال ۱۳۹۳/۱۳۹٤ در حوزه مهارت آموزی بن ژیوار
                  </span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-accent">-</span>
                  <span>
                    دریافت تندیس به عنوان کار آفرین برتر در نخستین جشنواره کار
                    آفرینان و استعداد های برتر مهارتی تاسبتان ۱۳۹۳
                  </span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-accent">-</span>
                  <span>دریافت تندیس برند ایرانی تیر ماه ۱۳۹۳</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex w-full h-screen bg-background z-20">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full h-full">
          <div className="w-full h-full sm:p-20 pb-32">
            <ImageCarousel
              autoSlide={true}
              autoSlideInterval={4000}
              titles={slides.map((slide) => slide.title)}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative h-full w-full object-cover"
                >
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover"
                    alt={slide.title}
                  />
                </div>
              ))}
            </ImageCarousel>
          </div>
          <Footer />

        </div>
      </section>
    </>
  );
};

export default AboutUs;