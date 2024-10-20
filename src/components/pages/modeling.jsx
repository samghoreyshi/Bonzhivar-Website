import { section } from "framer-motion/client";
import React from "react";
import Accordion from "../accordion";
import AudioPlayer from "../audioplayer";
import BookCard from "../bookcard";
import Footer from "../footer";
import CourseCard from "../coursecard";
import CTA from "../cta";
import SlidingCard from "../slideup";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Modeling = () => {
  const books = [
    {
      id: 1,
      cover: "/Books/3.webp",
      title: "کتاب تاریخچه طراحی داخلی – چاپی",
      description:
        "این کتاب از مجموعه کتابهایبه همین سادگی به بحث و بررسی سبک های آغازین از یونان باستان تا سده های میانه، عصر طلایی باروک، سبک های روکوکو ، معاصر و نئوکلاسیک می پردازد و همچنین به تنوع سبک شناسی از دوران امپراطوری ناپلئون و نایب سلطنت تا دوران رمانتیک و تاریخ گرایی اشاره کرده است.در پایان هر درس آزمونی شامل پرسش از همان درس طراحی شده که فرصت لازم برای بررسی موضوع مورد نظر را در اختیار شما قرار می دهد مانند همیشه آرزومندیم توانایی لازم جهت انجام کارها را آموخته و بر مهارت های خود بیفزایید.",
    },
    {
      id: 2,
      cover: "/Books/2.webp",
      title: "کتاب مواد و ساختار طراحی – چاپی",
      description:
        "این کتاب ، از مجموعه کتاب هایبه همین سادگی شامل دو بخش می باشد . در ابتدا با بررسی عناصر و اصول طراحی آغاز شده و به بحث در مورد ویژگی ها و خصوصیات مواد طبیعی ( سنگ و چوب و … ) و مواد مصنوعی ( آجر ، شیشه ، پلاستیک و …. ) و مواد کاربردی مانند کاغذ دیواری ، رنگ ها ، دیوار پوش ها و ….. می پردازیم در ادامه در بخش دوم به بحث و بررسی در زمینه های ، فوندانسیون ها ، دیوارهای خارجی ، پنجره ها ، درب های خارج ، بام ها و کف ، سقف و دیوارهای جداکننده به طور کامل پرداخته می شود و در پایان هر درس آزمونی شامل چند پرسش از همان درس طراحی شده که به این ترتیب امکان می دهد تا آنچه را آموخته اید ارزیابی کنید.",
    },
    {
      id: 3,
      cover: "/Books/1.webp",
      title: "کتاب نقشه کشی و طراحی – چاپی",
      description:
        "این کتاب ، از مجموعه کتاب های به همین سادگی به مقیاس در نقشه کشی، انواع پرسپکتیو ها، ارگونومی، تمرین طراحی اداری به منظور نشان دادن جزئیات روی نقشه، می پردازد و همچنین به بررسی روند طراحی و ارتباط بین فضاها و در پایان هر درس آزمونی شامل چند پرسش از همان درس طراحی شده که به این ترتیب امکان می دهد تا آنچه را آموخته اید ارزیابی کنید.",
    },
    {
      id: 4,
      cover: "/Books/4.webp",
      title: "کتاب رنگ – چاپی",
      description:
        "این کتاب از مجموعه کتاب های به همین سادگی به بررسی فیزیک رنگ، ماهیت رنگ شامل رنگ های اصلی و فرعی و مرتبه سوم، نظم طبیعی رنگ، دما در رنگ، چرخه ها و نظام های رنگی، ترکیب بندی یا کمپوزیسیون، و همچنین روانشناسی رنگ، تاثیر نور بر رنگ، رنگ هایی با سابقه های تاریخی می پردازد و در پایان هر درس آزمونی شامل چند پرسش از همان درس، طراحی شده که به این ترتیب امکان می دهد تا آنچه را آموخته اید ارزیابی کنید.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          دوره جامع مدلسازی و رندرینگ | آموزش AutoCAD, 3ds Max, V-Ray و
          Photoshop
        </title>
        <meta
          name="description"
          content="با دوره جامع مدلسازی و رندرینگ ما، مهارت‌های مورد نیاز برای طراحی سه‌بعدی و رندرینگ حرفه‌ای را با نرم‌افزارهای AutoCAD، 3ds Max، V-Ray و Photoshop یاد بگیرید. مناسب برای معماران، طراحان داخلی و علاقه‌مندان به گرافیک سه‌بعدی."
        />
      </Helmet>
      <section className="w-full h-full bg-blue-100">
        <div className="w-full h-[200px] sm:h-[400px] bg-[url(/Modeling/5.webp)] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full  border-accentDark bg-background">
          <div className="flex h-full flex-col gap-10 items-end w-full p-5 border-r border-gray-300">
            <div className="w-full flex justify-between  items-end font-IranYekan  text-right font-extrabold text-accent text-2xl sm:text-4xl">
              <div className="rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#4F9A85"
                  height={50}
                  width={50}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
              <h1 className="">دوره جامع مدلسازی و رندرینگ</h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-right direction-rtl leading-relaxed">
              دوره آموزشی مدلسازی و رندرینگ ما یک دوره جامع و حرفه‌ای است که به
              شما کمک می‌کند تا به سطحی از مهارت و دانش دست یابید که بتوانید
              پروژه‌های حرفه‌ای را به بهترین شکل اجرا کنید. این دوره تمامی
              ابزارها و تکنیک‌های مدلسازی و رندرینگ را با استفاده از محبوب‌ترین
              نرم‌افزارهای صنعت به شما آموزش می‌دهد.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Modeling/1.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Modeling/2.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              چرا دوره مدلسازی و رندرینگ؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              چرا این دوره؟ با پیشرفت فناوری و نیاز روزافزون به طراحی‌های
              سه‌بعدی در صنعت معماری، طراحی داخلی، بازی‌سازی و تبلیغات، یادگیری
              مدلسازی و رندرینگ یکی از مهارت‌های بسیار پرتقاضا و ارزشمند است.
              دوره جامع مدلسازی و رندرینگ ما به شما امکان می‌دهد تا از پایه با
              نرم‌افزارهای AutoCAD، 3ds Max، V-Ray و Photoshop آشنا شده و به یک
              متخصص تبدیل شوید. این دوره برای مبتدیان و کسانی که تجربه‌ای در این
              زمینه ندارند بسیار مناسب است.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Modeling/3.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              این دوره شامل چه مباحثی است؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              دوره جامع مدلسازی و رندرینگ با هدف آموزش تمامی مهارت‌های لازم برای
              تبدیل شدن به یک طراح و مدلساز حرفه‌ای تدوین شده است. این دوره از
              سطح مبتدی شروع می‌شود و تا سطح پیشرفته پیش می‌رود. مباحث آموزشی
              این دوره به چهار نرم‌افزار مهم در صنعت مدلسازی و رندرینگ، یعنی
              AutoCAD، 3ds Max، V-Ray و Photoshop اختصاص داده شده است. در ادامه
              با سرفصل‌های اصلی هر نرم‌افزار آشنا می‌شوید:
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Modeling/6.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Modeling/7.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10">
              <li className="mb-2">
                <img
                  className="mb-5"
                  src="/Modeling/ic-1.webp"
                  alt="آموزش AutoCAD"
                />
                <h3 className="text-xl font-bold">آموزش AutoCAD</h3>
                <p className="">
                  این بخش از دوره به آموزش اصولی و پایه‌ای نرم‌افزار AutoCAD
                  اختصاص دارد که به عنوان یکی از محبوب‌ترین نرم‌افزارهای طراحی
                  دو و سه‌بعدی شناخته می‌شود.
                </p>
                <p>
                  آشنایی با محیط AutoCAD: یادگیری اجزای اصلی رابط کاربری،
                  ابزارها و تنظیمات اولیه. طراحی دو بعدی (2D): آموزش ایجاد
                  نقشه‌های دو بعدی، کار با خطوط و اشکال هندسی، و دستورات اولیه.
                  لایه‌ها و مدیریت لایه‌ها: نحوه ایجاد و مدیریت لایه‌ها برای
                  سازمان‌دهی پروژه‌ها. بلوک‌ها و گروه‌بندی: آموزش ایجاد و
                  استفاده از بلوک‌ها و گروه‌بندی اشکال برای ساده‌سازی فرآیند
                  طراحی. طراحی سه‌بعدی (3D): آشنایی با تکنیک‌های مدلسازی سه‌بعدی
                  و تبدیل طرح‌های دوبعدی به سه‌بعدی. خروجی گرفتن و چاپ: آموزش
                  نحوه چاپ و خروجی گرفتن از نقشه‌ها و طرح‌ها برای ارائه و
                  استفاده در پروژه‌های واقعی.
                </p>
              </li>
              <li className="mb-2">
                <img
                  className="mb-5"
                  src="/Modeling/ic-2.webp"
                  alt="آموزش AutoCAD"
                />
                <h3 className="text-xl font-bold">آموزش 3ds Max</h3>
                <p>
                  بخش دوم دوره به نرم‌افزار 3ds Max اختصاص دارد که یکی از
                  قدرتمندترین ابزارهای مدلسازی و انیمیشن‌سازی سه‌بعدی در صنعت
                  است. آشنایی با محیط کاربری و ابزارها: یادگیری بخش‌های مختلف
                  نرم‌افزار، تنظیمات اولیه و کار با نوار ابزار. مدلسازی سه‌بعدی:
                  ایجاد اشکال پایه، مدل‌های پیچیده و کار با تکنیک‌های مختلف
                  مدلسازی سه‌بعدی. متریال و تکسچرینگ: آموزش ایجاد متریال‌های
                  مختلف، اعمال تکسچرها و استفاده از ابزارهای متریال برای
                  واقعی‌تر کردن مدل‌ها. نورپردازی: معرفی انواع نورها در 3ds Max
                  و نحوه تنظیم آن‌ها برای تاثیرگذاری بیشتر بر روی مدل‌ها. دوربین
                  و نماها: آموزش تنظیم دوربین‌ها و ایجاد نماهای مختلف برای ارائه
                  بهتر مدل‌ها. انیمیشن‌سازی پایه: اصول اولیه انیمیشن‌سازی و نحوه
                  حرکت دادن اشیا و کار با ابزارهای انیمیشن در 3ds Max.
                </p>
              </li>
              <li className="mb-2">
                <img
                  className="mb-5"
                  src="/Modeling/ic-3.webp"
                  alt="آموزش AutoCAD"
                />
                <h3 className="text-xl font-bold">آموزش V-Ray</h3>
                <p>
                  بخش V-Ray یکی از مهم‌ترین قسمت‌های دوره است که به دانشجویان
                  کمک می‌کند تا با کیفیتی بالا مدل‌های سه‌بعدی خود را رندر کنند
                  و تصاویر واقع‌گرایانه‌ای ایجاد کنند. آشنایی با محیط و تنظیمات
                  V-Ray: معرفی ابزارها و تنظیمات ابتدایی رندرینگ در V-Ray.
                  نورپردازی پیشرفته: آموزش تکنیک‌های نورپردازی برای واقعی‌سازی
                  تصاویر، از جمله نور خورشید، نور محیطی و منابع نور مصنوعی.
                  تنظیمات متریال V-Ray: ایجاد متریال‌های پیشرفته و واقع‌گرایانه
                  با V-Ray، شامل متریال‌های شفاف، بازتاب‌دهنده و متریال‌های
                  ویژه. دوربین و عمق میدان: آشنایی با تنظیمات دوربین و عمق میدان
                  برای بهبود جزئیات رندر و ایجاد تصاویر جذاب‌تر. پروکسی‌ها و
                  نمونه‌سازی: کار با پروکسی‌ها برای کاهش زمان رندرینگ و
                  بهینه‌سازی پروژه‌ها. تنظیمات نهایی رندر: آموزش تنظیمات پیشرفته
                  برای بهینه‌سازی سرعت و کیفیت رندرینگ نهایی و گرفتن خروجی‌های
                  با کیفیت بالا.
                </p>
              </li>
              <li className="mb-2">
                <img
                  className="mb-5"
                  src="/Modeling/ic-4.webp"
                  alt="آموزش AutoCAD"
                />
                <h3 className="text-xl font-bold">آموزش Photoshop</h3>
                <p>
                  در این بخش از دوره، دانشجویان با نرم‌افزار Photoshop آشنا
                  می‌شوند تا بتوانند تصاویر رندر شده خود را برای ارائه ویرایش و
                  بهبود دهند. آشنایی با محیط و ابزارهای فتوشاپ: معرفی ابزارهای
                  اولیه و رابط کاربری Photoshop. پست‌پروداکشن تصاویر رندر شده:
                  ویرایش و بهبود تصاویر نهایی با استفاده از ابزارهای تصحیح رنگ،
                  نورپردازی و شفافیت. ترکیب تصاویر و افکت‌ها: ایجاد ترکیبات
                  مختلف با تصاویر و اعمال افکت‌های ویژه برای افزایش جذابیت و
                  واقع‌گرایی تصاویر. تصحیح رنگ و نور: آموزش تکنیک‌های حرفه‌ای
                  تصحیح رنگ و تنظیمات نور برای بهبود جزئیات و جلوه‌های نهایی
                  تصاویر. ایجاد فایل‌های خروجی مناسب: نحوه آماده‌سازی تصاویر و
                  فایل‌های خروجی با کیفیت بالا برای ارائه در پروژه‌های حرفه‌ای و
                  چاپ.
                </p>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Modeling/4.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              مزایای شرکت در دوره جامع مدلسازی و رندرینگ
            </h2>
            <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10">
              <li className="mb-2">
                <h3>
                  آموزش توسط اساتید مجرب: دوره ما توسط اساتید حرفه‌ای و متخصص در
                  حوزه مدلسازی و رندرینگ تدریس می‌شود که تجربه و دانش لازم برای
                  انتقال مهارت‌ها را دارند.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  پروژه‌های عملی: در طول دوره، شما به صورت گام‌به‌گام پروژه‌های
                  عملی را انجام خواهید داد تا بتوانید مطالب یادگرفته شده را به
                  صورت کاربردی تمرین کنید.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  مدرک معتبر پایان دوره: پس از اتمام دوره و ارائه پروژه نهایی،
                  شما یک مدرک معتبر دریافت خواهید کرد که نشان‌دهنده تسلط شما در
                  مدلسازی و رندرینگ است.
                </h3>
              </li>
            </ul>
            <CTA />
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سر فصل های دوره
            </h2>
            <div className="w-full">
              <Accordion title="AutoCAD">
                <p>آموزش اتوکد</p>
                <ul className="font-IranYekan text-accentDark text-base sm:text-base text-right direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      مقدمه‌ای بر AutoCAD: آشنایی با محیط کاربری و ابزارهای اصلی
                    </h3>
                  </li>
                  <li>
                    <h3>
                      طراحی دو بعدی: یادگیری اصول طراحی 2D و ابزارهای اصلی برای
                      ایجاد نقشه‌ها
                    </h3>
                  </li>
                  <li>
                    <h3>
                      طراحی سه‌بعدی: آموزش مدلسازی 3D و تبدیل طرح‌های دو بعدی به
                      سه بعدی
                    </h3>
                  </li>
                  <li>
                    <h3>
                      ابزارهای پیشرفته: آشنایی با ابزارهای پیشرفته برای
                      طراحی‌های پیچیده‌تر
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="3ds Max">
                <p>آموزش 3ds Max</p>
                <ul className="font-IranYekan text-accentDark text-base sm:text-base text-right direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      مدلسازی سه‌بعدی: آشنایی با مفاهیم مدلسازی 3D و ایجاد اشکال
                      ساده و پیچیده
                    </h3>
                  </li>
                  <li>
                    <h3>
                      متریال و تکسچرینگ: ایجاد و اعمال متریال‌ها و تکسچرها برای
                      واقعی‌سازی مدل‌ها
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نورپردازی: آشنایی با انواع نورپردازی در 3ds Max برای بهبود
                      رندرینگ
                    </h3>
                  </li>
                  <li>
                    <h3>
                      انیمیشن‌سازی پایه: تکنیک‌های اولیه برای ساخت انیمیشن‌های
                      ساده در 3ds Max
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="V-Ray">
                <p>آموزش V-ray</p>
                <ul className="font-IranYekan text-accentDark text-base sm:text-base text-right direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      رندرینگ حرفه‌ای: آشنایی با مفاهیم رندرینگ و تنظیمات پایه و
                      پیشرفته V-Ray
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نورپردازی و سایه‌گذاری: آموزش نورپردازی حرفه‌ای و کنترل
                      سایه‌ها برای واقعی‌تر کردن تصاویر
                    </h3>
                  </li>
                  <li>
                    <h3>
                      تنظیمات متریال V-Ray: ایجاد متریال‌های پیشرفته و اعمال
                      آن‌ها بر روی مدل‌ها
                    </h3>
                  </li>
                  <li>
                    <h3>
                      تنظیمات رندر نهایی: تکنیک‌های پیشرفته برای بهینه‌سازی رندر
                      نهایی و کاهش زمان رندرینگ
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Photoshop">
                <p>آموزش Photoshop</p>
                <ul className="font-IranYekan text-accentDark text-base sm:text-base text-right direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      پست‌پروداکشن: ویرایش و بهبود تصاویر رندر شده با استفاده از
                      ابزارهای Photoshop
                    </h3>
                  </li>
                  <li>
                    <h3>
                      ترکیب تصاویر: ترکیب رندرهای مختلف برای دستیابی به نتایج
                      بهتر و واقعی‌تر
                    </h3>
                  </li>
                  <li>
                    <h3>
                      ایجاد افکت‌های ویژه: استفاده از افکت‌های نوری و رنگی برای
                      بهبود تصاویر نهایی
                    </h3>
                  </li>
                  <li>
                    <h3>
                      آماده‌سازی تصاویر برای ارائه: ایجاد تصاویر با کیفیت برای
                      پرزنتیشن و استفاده در پروژهای حرفه‌ای
                    </h3>
                  </li>
                </ul>
              </Accordion>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سوالات متداول
            </h2>
            <div className="w-full">
              <Accordion title="این دوره مناسب چه افرادی است؟">
                <p>
                  این دوره برای گروه‌های مختلفی از افراد مناسب است: معماران و
                  طراحان داخلی: برای معماران و طراحان داخلی که به دنبال ارتقای
                  مهارت‌های طراحی سه‌بعدی و رندرینگ خود هستند. علاقه‌مندان به
                  گرافیک سه‌بعدی: کسانی که به دنیای گرافیک سه‌بعدی و طراحی
                  دیجیتال علاقه‌مندند و می‌خواهند به طور حرفه‌ای به این زمینه
                  وارد شوند. دانشجویان و فارغ‌التحصیلان رشته‌های معماری و طراحی:
                  دانشجویان و فارغ‌التحصیلان معماری، طراحی داخلی و دیگر رشته‌های
                  مرتبط که می‌خواهند مهارت‌های خود را تقویت کنند و در این زمینه
                  شغلی موفق شوند.
                </p>
              </Accordion>
              <Accordion title="آیا برای شرکت در این دوره باید تجربه قبلی داشته باشم؟">
                <p>
                  این دوره به گونه‌ای طراحی شده که از سطح مبتدی آغاز می‌شود،
                  بنابراین نیازی به تجربه قبلی نیست. همه موارد از ابتدا و به
                  صورت گام‌به‌گام آموزش داده می‌شود.
                </p>
              </Accordion>
              <Accordion title="نحوه ثبت‌نام و شرایط پرداخت">
                <p>
                  ثبت‌نام در دوره جامع بازسازی ساختمان به راحتی از طریق سایت
                  امکان‌پذیر است. شما می‌توانید از گزینه‌های پرداخت اقساطی یا
                  یکجا استفاده کنید. برای کسب اطلاعات بیشتر و ثبت‌نام، با ما
                  تماس بگیرید یا فرم زیر را تکمیل کنید.
                </p>
              </Accordion>
            </div>
            {/* <div className="w-full h-[500px] sm:flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  cover={book.cover}
                  title={book.title}
                  description={book.description}
                />
              ))}
            </div> */}
          </div>

          <div className=" flex-col justify-between items-center w-full md:w-[500px] bg-background hidden sm:flex">
            <div className="sticky top-64 w-full">
              <CourseCard
                prof="مهندس نوید سکاکی"
                type="حضوری"
                pre="ندارد"
                date="۱۴ آبان ۱۴۰۳"
                time="دوشنبه ها ۹ - ۱۴"
                price="۱٥،۰۰۰،۰۰۰ تومان"
                tag1="اتوکد"
                tag2="3ds Max"
                tag3="V-Ray"
                tag4="Photoshop"
                tag5="پکیج نرم‌افزار"
              />
            </div>
          </div>
        </div>
      </section>
      <SlidingCard>
        <CourseCard
          prof="مهندس نوید سکاکی"
          type="حضوری"
          pre="ندارد"
          date="۱۴ آبان ۱۴۰۳"
          time="دوشنبه ها ۹ - ۱۴"
          price="۱٥،۰۰۰،۰۰۰ تومان"
          tag1="اتوکد"
          tag2="3ds Max"
          tag3="V-Ray"
          tag4="Photoshop"
          tag5="پکیج نرم‌افزار"
        />
      </SlidingCard>
      <Footer />
    </>
  );
};

export default Modeling;
