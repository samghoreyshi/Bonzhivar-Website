import { useState } from "react";

function Contact() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <header>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/Contact/1.webp')]">
          {/* Container */}
          <div className=" w-full py-8 px-5 md:px-10 md:py-16 lg:py-20">
            {/* Component */}
            <div className="flex h-[calc(30vh-4rem)] flex-col justify-end sm:justify-start w-full py-0 md:py-16 lg:py-20 gap-10">
              {/* Title */}
              <div className="flex flex-col items-center sm:items-end gap-y-5">
                <h1 className="text-right text-4xl font-extrabold md:text-6xl font-IranYekan text-accentLight ">
                  تماس با ما
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="flex flex-col sm:flex-row w-full h-full justify-center items-center bg-background p-10 sm:p-28 gap-28 mx-auto ">
          <div className="w-full h-full flex flex-col gap-20 justify-start items-end">
            <div className="w-full flex flex-col items-end gap-5">
              <h1 className="font-IranYekan font-extrabold text-5xl text-accent">
                راه‌های ارتباطی
              </h1>
              <div className="flex flex-col justify-center items-end gap-2">
                <h3 className="font-IranYekan">شماره تماس: 28111195</h3>
                <h3 className="font-IranYekan direction-rtl">
                  ایمیل: info@bonzhivar.com
                </h3>
                <h3 className="font-IranYekan direction-rtl">
                  آدرس: تهران پاسداران میدان هروی جنب پاساژ گلستان پ 65
                </h3>
                <h2 className="font-IranYekan font-bold text-right direction-rtl text-accent mt-10">
                اگر سوالی داشتید یا به راهنمایی نیاز داشتید میتونید از طریق فرم زیر با ما در ارتباط باشید.
              </h2>
              </div>
            </div>
            <div className="w-full h-full flex flex-col  gap-5">
              <div className="w-full flex gap-2 justify-between items-center">
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="font-IranYekan direction-rtl outline-none w-full bg-transparent border-b border-transparent border-b-accent focus-visible:border-none focus-visible:outline-none placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="نام"
                  className="direction-rtl outline-none w-full bg-transparent border-b border-transparent border-b-accent focus-visible:border-none focus-visible:outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="w-full flex gap-2 justify-between items-center">
                <input
                  className="font-IranYekan font-regular text-base text-accent direction-rtl w-full bg-transparent border-b border-transparent border-b-accent outline-none focus-visible:border-none focus-visible:outline-none placeholder:text-gray-400"
                  type="text"
                  placeholder="آدرس ایمیل"
                />
              </div>
              <div className="w-full flex gap-2 justify-between items-center">
                <input
                  className="font-IranYekan font-regular text-base text-accent direction-rtl w-full bg-transparent border-b border-transparent border-b-accent outline-none focus-visible:border-none focus-visible:outline-none placeholder:text-gray-400"
                  type="text"
                  placeholder="شماره تماس"
                />
              </div>
              <div className="w-full flex gap-2 justify-between items-center">
                <textarea
                  name="text"
                  id=""
                  placeholder="متن پیام ..."
                  className="font-IranYekan text-base font-regular w-full h-[200PX] resize-none direction-rtl text-right rounded-md border-accent bg-background placeholder:text-gray-400 focus:outline-none focus:ring-0"
                ></textarea>
              </div>
              <div className="w-full flex gap-2 justify-between items-center">
                <button className="bg-back-gradient font-IranYekan font-medium text-accentLight w-full p-2 rounded-md">ارسال</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-blue-400 flex justify-center items-center">
            نقشه
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
