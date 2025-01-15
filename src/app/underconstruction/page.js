
function UnderConstruction() {
  return (
    <>
      <section className="flex w-full h-[calc(100vh-4rem)] bg-background ">
        <div className="w-full h-full bg-gray-200 flex flex-col items-end justify-center bg-[url(/Undercn/1.webp)] bg-center bg-cover bg-no-repeat  font-IranYekan gap-5 px-5 sm:px-10">
          <h2 className="text-accentLight text-4xl text-right font-extrabold  sm:text-5xl">
            صفحه در حال ساخت است
          </h2>
          <p className=" text-accentLight text-sm px-2 direction-rtl w-full sm:text-base sm:block ">
            وبسایت بن‌ژیوار در حال توسعه می‌باشد، از صبر و شکیبایی شما متشکریم.
          </p>
        </div>
      </section>
    </>
  );
}

export default UnderConstruction;
