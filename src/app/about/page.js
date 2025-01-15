import ImageCarousel from "../../components/ImageCarousel";

const slides = [
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
  return (
    <>
      <header>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/Aboutus/Bonzhitree.webp')]">
          {/* Container */}
          <div className=" w-full py-12 px-5 md:px-10 md:py-16 lg:py-20">
            {/* Component */}
            <div className="flex h-[calc(60vh-4rem)] flex-col justify-center sm:justify-start w-full py-12 md:py-16 lg:py-20 gap-10">
              {/* Title */}
              <div className="flex flex-col items-center sm:items-end gap-y-5">
                <h1 className="text-right text-4xl font-extrabold md:text-6xl font-IranYekan text-accentLight ">
                  درباره ما
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-background">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="w-full">
            <h2 className="text-3xl font-extrabold md:text-4xl text-accent font-IranYekan text-right">
            مجتمع آموزشی بُن‌ژیوار
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-16 order-last">
              <article className="space-y-4 text-accentDark text-justify text-sm sm:text-base direction-rtl font-IranYekan">
                <p>
                مجتمع آموزشی بن‌ژیوار فعالیت خود را از سال ۱۳۸۷ با هدف اصلی
                ارتقای مهارت‌های عملی و کاربردی و فراهم کردن زمینه‌ای مناسب برای
                آماده‌سازی فراگیران جهت ورود موفق به بازار کار آغاز کرد. این
                مجتمع با تمرکز بر ارائه دوره‌های آموزشی متنوع و به‌روز در
                حوزه‌های گوناگون، از جمله طراحی و معماری داخلی، مدیریت کسب‌وکار،
                و مهارت‌های عملی کافی‌شاپ، توانسته است جایگاه قابل‌توجهی در میان
                مراکز آموزشی کشور به دست آورد. <br /> در طول سال‌های فعالیت خود،
                بن‌ژیوار همواره به دنبال بهبود و توسعه برنامه‌های آموزشی بوده و
                به‌واسطه ارائه آموزش‌های کیفی و هدفمند، به یکی از مراکز پیشرو در
                زمینه آموزش مهارت‌های شغلی تبدیل شده است. موفقیت‌های این مجتمع
                تنها به ارائه دوره‌های آموزشی محدود نمی‌شود، بلکه با کسب جوایز
                مختلف از جمله عنوان آموزشگاه برتر کشور و کارآفرین برتر، نشان
                داده است که کیفیت و اهمیت فعالیت‌هایش مورد توجه و تقدیر قرار
                گرفته است. این جوایز گواهی است بر تلاش مداوم بن‌ژیوار برای بهبود
                سطح مهارت‌های شغلی فراگیران و نقش مؤثر آن در ارتقای سطح
                کارآفرینی و مهارت‌آموزی در کشور.
                </p>
              </article>
            </div>

            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="/Aboutus/Bonzhivar-b.webp"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <header>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/Aboutus/Message.webp')]">
          {/* Container */}
          <div className=" w-full py-12 px-5 md:px-10 md:py-16 lg:py-20">
            {/* Component */}
            <div className="flex h-[calc(60vh-4rem)] flex-col justify-center items-end sm:justify-end w-full py-12 md:py-16 lg:py-20 gap-10">
              {/* Title */}
              <div className="flex flex-col sm:w-1/2 items-center sm:items-start gap-y-5">
                <p className="text-right text-sm sm:text-base font-noraml  font-IranYekan text-accentLight bg-accentDark/50 backdrop-blur-md p-5 rounded-lg ">
                  کارآفرینان، معماران زندگی هستند که از هیچ اغاز کرده‌اند و
                  بارها زمین خورده‌اند و برخاستند. مصالح زندگی‌شان همت، تلاش،
                  پیگیری و استقامت است. زیر ساخت باورهایشان، اتکا به قدرت لایزال
                  الهی، دانش، آگاهی و نمای زندگی‌شان ادب و تواضع و تمایل به
                  زیبایی است. معماران زندگی با همیاری، همدلی، همکاری و همراهی
                  ستون های خیمه محبت و مهر را ساختند تا با اتحاد، نیکان سقفی
                  باشند تا دیگر انسان ها زیر این سقف در برکت و امنیت زندگی کنند.
                  کارآفرینان اینگونه‌اند، زندگی می‌سازند تا دیگران در آرامش
                  زندگی کنند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-background">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="w-full">
            <h2 className="text-3xl font-extrabold md:text-4xl text-accent font-IranYekan text-right">
              تشویق به یادرگیری عمیق
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-16 order-last">
              <article className="space-y-4 text-accentDark text-justify text-sm sm:text-base direction-rtl font-IranYekan">
                <p>
                  علاوه بر‌آن ما در بن‌ژیوار افراد را تشویق می‌کنیم که از
                  یادگیری سطحی و شتاب‌زده فاصله بگیرند و با مطالعه و تمرین دقیق،
                  عمیق و آهسته مهارت‌های مورد نظرشان را بهتر بیاموزند. ما باور
                  داریم که یادگیری تنها زمانی مؤثر است که همراه با تأمل، درک
                  عمیق و تکرار مداوم باشد. در بن‌ژیوار، ما به دانشجویان کمک
                  می‌کنیم تا از طریق فرآیندهای آموزشی خلاقانه و مدون، به جای
                  انباشت اطلاعات، به مهارت‌های کاربردی و تفکر انتقادی دست یابند.
                  ما به این امر متعهد هستیم که هر فرد بتواند در مسیر یادگیری خود
                  با سرعت مناسب پیش برود و با تکیه بر کیفیت یادگیری به جای کمیت،
                  به مهارت‌های پایدار دست یابد.
                </p>
              </article>
            </div>

            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="/Aboutus/Message-2.webp"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <header>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/Aboutus/Message-3.webp')]">
          {/* Container */}
          <div className=" w-full py-12 px-5 md:px-10 md:py-16 lg:py-20">
            {/* Component */}
            <div className="flex h-[calc(60vh-4rem)] flex-col justify-center items-end sm:justify-end w-full py-12 md:py-16 lg:py-20 gap-10">
              {/* Title */}
              <div className="flex flex-col sm:w-1/2 items-center sm:items-start gap-y-5">
                <p className="text-right text-sm sm:text-base font-noraml  font-IranYekan text-accentLight bg-accentDark/50 backdrop-blur-md p-5 rounded-lg ">
                  به آینــــــــده می‌اندیشیــــــــــم مباحثی که در بن‌ژیوار
                  مطرح می‌شود در حوزه‌های معماری داخلی، کسب‌و‌کار و توسعه‌ی فردی
                  است. ما در بن‌ژیوار بر این باوریم که این سه حوزه از اساسی‌ترین
                  جنبه‌های توسعه انسانی و اجتماعی هستند. در حوزه معماری داخلی،
                  دانشجویان می‌آموزند که چگونه فضاهایی زیبا، کاربردی و مطابق با
                  نیازهای انسان‌ها طراحی کنند. در بخش کسب‌و‌کار، ما به دانشجویان
                  کمک می‌کنیم تا مهارت‌های لازم برای مدیریت و رشد یک کسب‌و‌کار
                  موفق را بیاموزند. در نهایت، در حوزه توسعه فردی، ما بر تقویت
                  مهارت‌های نرم و توانمندی‌های شخصیتی تمرکز داریم که به افراد
                  کمک می‌کند در زندگی حرفه‌ای و شخصی خود به موفقیت دست یابند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-background">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Content */}
          <div className="grid grid-cols-1 justify-center justify-items-center gap-5 sm:justify-items-stretch md:grid-cols-1 md:gap-8 lg:grid-cols-1">
            {/* Item */}
            <div className="grid w-full grid-flow-row justify-center gap-10 rounded-lg border border-solid border-accent p-8 md:grid-cols-2 text-right">
              <img
                src="/Aboutus/Helena-Dahri.webp"
                alt=""
                className="inline-block h-72 w-full object-cover"
              />
              <div>
                <p className="text-2xl font-extrabold font-IranYekan text-accent">
                  هلنا دهری
                </p>
                <p className="mb-4 font-semibold text-accent font-IranYekan">
                  مدیر و مؤسس
                </p>
                <p className="text-sm sm:text-base text-accentDark font-IranYekan text-justify direction-rtl">
                  هلنا دهری، موسس و مدیر مجتمع مهارت‌آموزی بن‌ژیوار، از چهره‌های
                  برجسته در زمینه آموزش‌های علمی-کاربردی در ایران است. او این
                  مجتمع را در سال ۱۳۸۷ با هدف ارتقای مهارت‌های شغلی و فردی
                  بنیان‌گذاری کرد. بن‌ژیوار به‌طور رسمی از سازمان آموزش فنی و
                  حرفه‌ای کشور مجوز دارد و دوره‌های آموزشی متنوعی را در
                  زمینه‌های معماری داخلی، نورپردازی، آداب معاشرت، و مهارت‌های
                  مدیریتی ارائه می‌دهد. این مجتمع با تاکید بر آماده‌سازی افراد
                  برای ورود به بازار کار و توسعه فرهنگی، تلاش می‌کند تا بستری
                  برای پیشرفت و کارآفرینی در ایران فراهم آورد.
                </p>
              </div>
            </div>
            <div className="grid w-full grid-flow-row justify-center gap-10 rounded-lg border border-solid border-accent p-8 md:grid-cols-2 text-right">
              <img
                src="/Aboutus/Trophies.webp"
                alt=""
                className="inline-block h-72 w-full object-cover"
              />
              <div>
                <p className="text-2xl font-extrabold font-IranYekan text-accent">
                  افتخارات بن‌ژیوار
                </p>
                <ul className="list list-inside text-accentDark font-IranYekan text-right direction-rtl mt-8">
                  <li>
                    دارنده گواهینامه آموزشگاه نمونه از سازمان آموزش فنی و حرفه
                    ای کل کشور
                  </li>
                  <li>کارآفرین برتر سال ۱۳۹۳/۱۳۹٤</li>
                  <li>
                    پژوهشگر برتر سال ۱۳۹۳/۱۳۹٤ در حوزه مهارت آموزی بن ژیوار
                  </li>
                  <li>
                    دریافت تندیس به عنوان کار آفرین برتر در نخستین جشنواره کار
                    آفرینان و استعداد های برتر مهارتی تاسبتان ۱۳۹۳
                  </li>
                  <li>دریافت تندیس برند ایرانی تیر ماه ۱۳۹۳</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background px-5 sm:px-48 sm:py-20 w-full h-[300px] sm:h-[800px] flex justify-center items-center">
        <ImageCarousel
          autoSlide={true}
          autoSlideInterval={4000}
          titles={slides.map((slide) => slide.title)}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full w-full object-cover">
              <img
                src={slide.image}
                className="w-full h-full object-cover rounded-3xl"
                alt={slide.title}
              />
            </div>
          ))}
        </ImageCarousel>
      </section>
    </>
  );
};

export default AboutUs;
