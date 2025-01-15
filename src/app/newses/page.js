import Link from "next/link";

async function getNewsList() {
  try {
    const res = await fetch("https://dev.bonzhivar.com/api/newses?populate=*", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await res.json();
    console.log("Strapi Response:", data);
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return { data: [] };
  }
}

export default async function NewsPage() {
  const { data: newsList } = await getNewsList();

  return (
    <main className="flex bg-background min-h-screen flex-col items-center justify-between py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative text-center">
            <div className="relative inline-block">
              <div className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent bottom-0 left-0 w-full" />
              <h1 className="text-4xl md:text-5xl text-accent font-IranYekan direction-rtl font-[800] py-3">
                اخبار و رویدادها
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news) => {
            console.log("News item:", news);
            
            return (
              <Link 
                key={news.id} 
                href={`/newses/${news.Slug}`}
                className="group"
              >
                <article className="h-full rounded-xl overflow-hidden bg-gradient-to-b from-accent/5 to-accent/10 backdrop-blur-sm border border-accent/10">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    {news.Image && (
                      <img
                        src={`https://dev.bonzhivar.com${news.Image.url}`}
                        alt={news.Title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        {news.Category || 'عمومی'}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-accent direction-rtl">
                      {news.Title}
                    </h2>
                    <p className="text-accentDark text-sm line-clamp-2 direction-rtl">
                      {news.Description}
                    </p>
                    <time className="block mt-4 text-accentDark/70 text-sm direction-rtl">
                      {new Date(news.publishedAt).toLocaleDateString('fa-IR')}
                    </time>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
