'use client';

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
    <div className="min-h-screen bg-background direction-rtl">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Aboutus/Bonzhitree.webp')] bg-cover bg-center bg-no-repeat" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-start">
            <div className="text-right">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white font-IranYekan">
                درباره ما
              </h1>
              <div className="h-2 w-32 bg-accent mt-4 mr-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#e5e5f7] opacity-[0.02] bg-[linear-gradient(#444cf7_1.7px,transparent_1.7px),linear-gradient(to_right,#444cf7_1.7px,#e5e5f7_1.7px)] bg-[size:14px_14px]" />
        
        {/* About Bonzhivar Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="relative order-2">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Aboutus/Bonzhivar-b.webp"
                    alt="Bonzhivar"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>
              
              <div className="mt-10 lg:mt-0 lg:ml-8 order-1">
                <h2 className="text-4xl font-extrabold text-accent font-IranYekan mb-8">
                  مجتمع آموزشی بُن‌ژیوار
                </h2>
                <div className="prose prose-lg text-accentDark">
                  <p className="text-justify direction-rtl font-IranYekan leading-relaxed">
                    مجتمع آموزشی بن‌ژیوار فعالیت خود را از سال ۱۳۸۷ با هدف اصلی
                    ارتقای مهارت‌های عملی و کاربردی و فراهم کردن زمینه‌ای مناسب برای
                    آماده‌سازی فراگیران جهت ورود موفق به بازار کار آغاز کرد. این
                    مجتمع با تمرکز بر ارائه دوره‌های آموزشی متنوع و به‌روز در
                    حوزه‌های گوناگون، از جمله طراحی و معماری داخلی، مدیریت کسب‌وکار،
                    و مهارت‌های عملی کافی‌شاپ، توانسته است جایگاه قابل‌توجهی در میان
                    مراکز آموزشی کشور به دست آورد. در طول سال‌های فعالیت خود،
                    بن‌ژیوار همواره به دنبال بهبود و توسعه برنامه‌های آموزشی بوده و
                    به‌طور رسمی از سازمان آموزش فنی و حرفه‌ای کشور مجوز دارد و دوره‌های آموزشی متنوعی را در زمینه‌های معماری داخلی، نورپردازی، آداب معاشرت، و مهارت‌های مدیریتی ارائه می‌دهد. این مجتمع با تاکید بر آماده‌سازی افراد برای ورود به بازار کار و توسعه فرهنگی، تلاش می‌کند تا بستری برای پیشرفت و کارآفرینی در ایران فراهم آورد. موفقیت‌های این مجتمع تنها به ارائه دوره‌های آموزشی محدود نمی‌شود، بلکه با کسب جوایز مختلف از جمله عنوان آموزشگاه برتر کشور و کارآفرین برتر، نشان داده است که کیفیت و اهمیت فعالیت‌هایش مورد توجه و تقدیر قرار گرفته است. این جوایز گواهی است بر تلاش مداوم بن‌ژیوار برای بهبود سطح مهارت‌های شغلی فراگیران و نقش مؤثر آن در ارتقای سطح کارآفرینی و مهارت‌آموزی در کشور است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative py-20 bg-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden bg-[url('/Aboutus/Message.webp')] bg-cover bg-center p-8 md:p-12">
              <div className="absolute inset-0 bg-accent/60 backdrop-blur-sm" />
              <div className="relative max-w-3xl ml-auto">
                <svg className="h-12 w-12 text-white/80 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-white text-lg md:text-xl font-IranYekan leading-relaxed text-justify direction-rtl">
                  کارآفرینان، معماران زندگی هستند که از هیچ آغاز کرده‌اند و
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
        </section>

        {/* Deep Learning Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="order-1">
                <h2 className="text-4xl font-extrabold text-accent font-IranYekan mb-8">
                  تشویق به یادگیری عمیق
                </h2>
                <div className="prose prose-lg text-accentDark">
                  <p className="text-justify direction-rtl font-IranYekan leading-relaxed">
                    علاوه بر‌آن ما در بن‌ژیوار افراد را تشویق می‌کنیم که از
                    یادگیری سطحی و شتاب‌زده فاصله بگیرند و با مطالعه و تمرین دقیق،
                    عمیق و آهسته مهارت‌های مورد نظرشان را بهتر بیاموزند. ما اعتقاد 
                    داریم که یادگیری تنها زمانی مؤثر است که همراه با تأمل، درک
                    عمیق و تکرار مداوم باشد. در بن‌ژیوار، ما به دانشجویان کمک
                    می‌کنیم تا از طریق فرآیندهای آموزشی خلاقانه و مدون، به جای
                    انباشت اطلاعات، به مهارت‌های کاربردی و تفکر انتقادی دست یابند.
                    ما به این امر متعهد هستیم که هر فرد بتواند در مسیر یادگیری خود
                    با سرعت مناسب پیش برود و با تکیه بر کیفیت یادگیری به جای کمیت،
                    به مهارت‌های پایدار دست یابد.
                  </p>
                </div>
              </div>
              
              <div className="relative order-2 mb-10 lg:mb-0">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Aboutus/Message-2.webp"
                    alt="Deep Learning"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="relative py-20 bg-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden bg-[url('/Aboutus/Message-3.webp')] bg-cover bg-center p-8 md:p-12">
              <div className="absolute inset-0 bg-accent/60 backdrop-blur-sm" />
              <div className="relative max-w-3xl ml-auto">
                <svg className="h-12 w-12 text-white/80 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-white text-lg md:text-xl font-IranYekan leading-relaxed text-justify direction-rtl">
                  به آینده می‌اندیشیم مباحثی که در بن‌ژیوار
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
        </section>

        {/* Team Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Founder Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8 direction-rtl">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
                    <img
                      src="/Aboutus/Helena-Dahri.webp"
                      alt="Helena Dahri"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-accent font-IranYekan mb-2">هلنا دهری</h3>
                  <p className="text-accent/80 font-IranYekan mb-4">مدیر و مؤسس</p>
                  <p className="text-accentDark font-IranYekan text-justify direction-rtl">
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

              {/* Achievements Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8 direction-rtl">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
                    <img
                      src="/Aboutus/Trophies.webp"
                      alt="Achievements"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-accent font-IranYekan mb-6">افتخارات بن‌ژیوار</h3>
                  <ul className="space-y-3 text-accentDark font-IranYekan direction-rtl">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-accent ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      دارنده گواهینامه آموزشگاه نمونه از سازمان آموزش فنی و حرفه ای کل کشور
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-accent ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      کارآفرین برتر سال ۱۳۹۳/۱۳۹٤
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-accent ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      پژوهشگر برتر سال ۱۳۹۳/۱۳۹٤ در حوزه مهارت آموزی بن ژیوار
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-accent ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      دریافت تندیس به عنوان کار آفرین برتر در نخستین جشنواره کار آفرینان و استعداد های برتر مهارتی تاسبتان ۱۳۹۳
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-accent ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      دریافت تندیس برند ایرانی تیر ماه ۱۳۹۳
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
