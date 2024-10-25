import { useState } from "react";
import Footer from "../footer";

function Contact() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <section className="bg-background">
        <div className="lg:grid lg:h-full lg:grid-cols-12">
          <section className=" sm:p-16 flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/Contact/1.webp"
              className=" h-full w-full object-cover sm:rounded-3xl shadow-md"
            />
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-12 lg:py-12 xl:col-span-6">
            <div className="w-full lg:w-full ">
            <section class="">
                <div class="container px-6 py-12 mx-auto">
                  <div class="text-center">
                    <h1 class="font-extrabold text-3xl font-IranYekan text-accent">
                      راه‌های ارتباطی
                    </h1>
                  </div>

                  <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div class="flex flex-col items-center justify-between text-center">
                      <span class="p-3 text-accent rounded-full bg-accent/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </span>

                      <h2 class="mt-4 text-lg font-bold font-IranYekan text-accentDark">
                        ایمیل
                      </h2>
                      <p class="mt-2 text-accent font-semibold">
                        Info@bonzhivar.com
                      </p>
                    </div>

                    <div class="flex flex-col items-center justify-center text-center">
                      <span class="p-3 text-accent rounded-full bg-accent/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </span>

                      <h2 class="mt-4 text-lg font-bold text-accentDark font-IranYekan">
                        آدرس
                      </h2>
                      <p class="mt-2 text-accent font-IranYekan text-semibold">
                        تهران، پاسداران، میدان هروی جنب پاساژ گلستان پلاک 65 مجتمع اموزشی بن‌ژیوار
                      </p>
                    </div>

                    <div class="flex flex-col items-center justify-between text-center">
                      <span class="p-3 text-accent rounded-full bg-accent/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </span>

                      <h2 class="mt-4 text-lg font-bold text-accentDark font-IranYekan">
                        تلفن تماس
                      </h2>
                      <p class="mt-2 text-accent font-IranYekan font-semibold">
                      ۰۲۱ - ۲۸۱۱۱۱۹٥
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <form className="bg-white/10 p-8 w-full rtl text-right rounded-3xl shadow-md mb-5 border border-accent">
                <h2 className="text-3xl mb-6 font-IranYekan font-extrabold text-accent">
                  تماس با ما
                </h2>
                <p className="direction-rtl text-right my-5 font-IranYekan text-sm text-accentDark/70">
                  اگر سوالی داشتید یا کمکی نیاز داشتید میتوانید از طریق راه های
                  ارتباطی زیر و یا از طریق فرم زیر با ما در ارتباط باشید.
                </p>

                {/* First Name */}
                <div className="mb-4">
                  <label
                    className="block font-IranYekan font-bold text-accentDark text-sm mb-2"
                    htmlFor="first-name"
                  >
                    نام
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="w-full p-2 border-b border-accent/50 font-IranYekan bg-transparent direction-rtl placeholder:text-accent/80 placeholder:text-sm focus:outline-none"
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label
                    className="block font-IranYekan font-bold text-accentDark text-sm mb-2"
                    htmlFor="last-name"
                  >
                    نام خانوادگی
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    placeholder="نام خانوادگی خود را وارد کنید"
                    className="w-full p-2 border-b border-accent/50 font-IranYekan bg-transparent direction-rtl placeholder:text-accent/80 placeholder:text-sm focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    className="block font-IranYekan font-bold text-accentDark text-sm mb-2"
                    htmlFor="email"
                  >
                    ایمیل
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="w-full p-2 border-b border-accent/50 font-IranYekan bg-transparent direction-rtl placeholder:text-accent/80 placeholder:text-sm focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    className="block font-IranYekan font-bold text-accentDark text-sm mb-2"
                    htmlFor="phone-number"
                  >
                    شماره تلفن
                  </label>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    placeholder="شماره تلفن خود را وارد کنید"
                    className="w-full p-2 border-b border-accent/50 font-IranYekan bg-transparent direction-rtl placeholder:text-accent/80 placeholder:text-sm focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label
                    className="block font-IranYekan font-bold text-accentDark text-sm mb-2"
                    htmlFor="message"
                  >
                    پیام
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="پیام خود را وارد کنید"
                    className="w-full p-2 border-b border-accent/50 font-IranYekan bg-transparent direction-rtl placeholder:text-accent/80 placeholder:text-sm resize-none focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="font-IranYekan font-semibold bg-back-gradient text-accentLight py-2 px-6 rounded-2xl hover:bg-gray-800 transition-colors w-full"
                >
                  ارسال
                </button>
              </form>
            
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
