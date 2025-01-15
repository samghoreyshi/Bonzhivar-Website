export default function NotFound() {
  return (
    <>
      <section className="w-full h-[calc(100vh-4rem)] bg-[url(/Undercn/2.webp)] bg-cover bg-center bg-no-repeat">

        <div className="grid h-screen place-content-center px-4">
          <div className="text-center">
            <h1 className="mt-6 text-5xl font-extrabold font-IranYekan tracking-tight text-accentLight sm:text-6xl">
              404
            </h1>

            <p className="mt-4 text-accentLight font-IranYekan font-medium text-lg direction-rtl">صفحه مورد نظر یافت نشد.</p>
          </div>
        </div>
      </section>
    </>
  );
}
