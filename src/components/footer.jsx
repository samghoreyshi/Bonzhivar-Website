import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-300">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          <ul className="mt-8 flex justify-start gap-6 sm:mt-0">
            <li>
              <a
                href="https://instagram.com/bonzhivar.inst"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/+989361124307"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:opacity-75"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 .16 5.334.157 11.892c0 2.096.546 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.693 1.45h.005c6.554 0 11.89-5.335 11.894-11.893 0-3.181-1.237-6.167-3.49-8.415zm-8.413 18.326h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.827 9.827 0 01-1.51-5.26c.003-5.45 4.437-9.884 9.891-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885zm5.43-7.403c-.298-.149-1.765-.87-2.038-.969-.274-.099-.473-.149-.672.15-.199.298-.771.969-.945 1.168-.174.198-.348.223-.646.074-.298-.149-1.258-.463-2.396-1.475-.885-.79-1.483-1.764-1.657-2.062-.174-.298-.019-.458.13-.607.135-.133.299-.347.448-.52.149-.174.199-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.619-.921-2.216-.242-.582-.488-.502-.672-.511-.174-.008-.373-.01-.572-.01-.199 0-.522.074-.796.372-.273.298-1.044.97-1.044 2.364 0 1.394 1.044 2.738 1.193 2.937.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.273-.198-.571-.347z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://t.me/bonzhivarinstitute"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:opacity-75"
              >
                <span className="sr-only">Telegram</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.24-.02.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="text-teal-600">
            <a href="/" className="block">
              <img src="/Logo/Bonzhivar-Logo.png" alt="Bonzhivar Logo" className="w-32" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 text-right gap-8 border-t border-gray-300 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:pt-16">
          <div>
            <p className="font-IranYekan font-bold text-accentDark">تماس با ما</p>
            <ul className="mt-6 space-y-4 text-sm font-IranYekan">
              <li>
                <a href="tel:+982128111195" className="text-gray-700 transition hover:opacity-75 flex items-center justify-end gap-2">
                  <span>۲۸۱۱۱۱۹٥</span>
                  <span>:تلفن تماس</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bonzhivar.com" className="text-gray-700 transition hover:opacity-75 flex items-center justify-end gap-2">
                  <span>info@bonzhivar.com</span>
                  <span>:ایمیل</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/your-location-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  آدرس : تهران، خیابان پاسداران، میدان هروی، جنب پاساژ گلستان پلاک 65
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-IranYekan font-bold text-accentDark mr-10">دسترسی سریع</p>
            <ul className="mt-6 space-y-4 text-sm font-IranYekan mr-10">
              <li>
                <a href="/" className="text-gray-700 transition hover:opacity-75">خانه</a>
              </li>
              <li>
                <a href="/about" className="text-gray-700 transition hover:opacity-75">درباره ما</a>
              </li>
              <li>
                <a href="/courses" className="text-gray-700 transition hover:opacity-75">دوره‌های آموزشی</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-700 transition hover:opacity-75">مقالات</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-IranYekan font-bold text-accentDark">درباره بن‌ژیوار</p>
            <p className="mt-6 space-y-4 text-sm font-IranYekan text-gray-700 leading-relaxed text-justify direction-rtl">
              مجتمع آموزشی بن‌ژیوار فعالیت خود را از سال ۱۳۸۷ با هدف اصلی ارتقای مهارت‌های عملی و کاربردی و فراهم کردن زمینه‌ای مناسب برای آماده‌سازی فراگیران جهت ورود موفق به بازار کار آغاز کرد. این مجتمع با تمرکز بر ارائه دوره‌های آموزشی متنوع و به‌روز در حوزه‌های گوناگون، از جمله طراحی و معماری داخلی، مدیریت کسب‌وکار، و مهارت‌های عملی کافی‌شاپ، توانسته است جایگاه قابل‌توجهی در میان مراکز آموزشی کشور به دست آورد.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-right">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به مجتمع آموزشی بن‌ژیوار می‌باشد &copy; {new Date().getFullYear()} | طراحی و توسعه توسط{" "}
          <a
            href="https://instagram.com/blackriftstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            استودیو بلک ریفت
          </a>
        </p>
      </div>
    </footer>
  );
}
