import { useState } from "react";

function Contact() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <header>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/Contact/1.png')]">
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

      <section className="bg-background">
        {/* Container */}
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-10 md:py-20">
          {/* Component */}
          <h2 className="text-3xl font-extrabold md:text-5xl font-IranYekan text-accent">
            سوالی دارید؟
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-accentDark text-center direction-rtl md:mb-12 lg:mb-16 font-IranYekan font-normal text-sm">
            میتونید از طریق فرم زیر سوالات و پیشنهادات خود را برای ما ارسال
            کنید.
          </p>
          {/* Form */}
          <form
            name="wf-form-name"
            method="get"
            className="mx-auto mb-4 text-right sm:px-4 md:px-20"
          >
            <div className="mb-4 grid w-full grid-cols-2 gap-6">
              <div className="flex flex-col items-end">
                <label
                  htmlFor="name-2"
                  className="mb-1 font-IranYekan font-bold text-accent"
                >
                  نام
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-accent bg-background px-3 py-6 text-sm text-black text-right focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="flex flex-col items-end">
                <label
                  htmlFor="name-3"
                  className="mb-1 font-IranYekan font-bold text-accent"
                >
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-accent bg-background px-3 py-6 text-sm text-black text-right focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-end">
              <label
                htmlFor="field"
                className="mb-1 font-IranYekan font-bold text-accent"
              >
                ایمیل
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-accent bg-background px-3 py-6 text-sm text-black text-right focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div className="mb-5 md:mb-6 lg:mb-8 flex flex-col items-end">
              <label
                htmlFor="field"
                className="mb-1 font-IranYekan font-bold text-accent"
              >
                پیام
              </label>
              <textarea
                placeholder=""
                maxLength="5000"
                name="field"
                className="mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-accent bg-background px-3 py-2 text-sm text-black text-right focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              ></textarea>
            </div>

            <input
              type="submit"
              value="ارسال پیام"
              className="inline-block w-full rounded-md cursor-pointer bg-accent font-IranYekan font-bold px-6 py-3 text-center text-accentLight border border-accent hover:bg-background hover:text-accent hover:border-accent transition-all duration-300 ease-in-out"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
