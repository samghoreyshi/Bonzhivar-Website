import { Helmet } from "react-helmet";

function UnderConstruction() {
  return (
    <>
      <Helmet>
        <title>
            صفحه در حال ساخت است | بن‌ژیوار
        </title>
        <meta
          name="description"
          content="صفحه در حال ساخت است | بن‌ژیوار"
        />
      </Helmet>
      <div className="w-full h-[calc(100vh-4rem)] bg-[url('/Backgrounds/uc.webp')] bg-cover bg-center flex items-center justify-center"></div>
    </>
  );
}

export default UnderConstruction;
