import { notFound } from "next/navigation";
import RichTextRenderer from "@/components/RichTextRenderer";

async function getNews(slug) {
  try {
    const res = await fetch(`https://dev.bonzhivar.com/api/newses?filters[Slug][$eq]=${slug}&populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const response = await res.json();
    console.log("Strapi Response for slug:", slug, response);

    if (!response.data || response.data.length === 0) {
      return null;
    }

    return response.data[0];
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const news = await getNews(resolvedParams.slug);
  
  return {
    title: `رویداد | ${news?.Title || 'خبر'}`,
    description: news?.Description || '',
  };
}

export default async function NewsPage({ params }) {
  const resolvedParams = await params;
  const news = await getNews(resolvedParams.slug);
  
  if (!news) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 bg-background">
      <article className="prose prose-lg max-w-4xl mx-auto px-4">
        <div className="mb-8">
          {news.Image && (
            <img
              src={`https://dev.bonzhivar.com${news.Image.url}`}
              alt={news.Title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          )}
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
              {news.Category || 'عمومی'}
            </span>
            <time className="text-accentDark/70 text-sm">
              {new Date(news.publishedAt).toLocaleDateString('fa-IR')}
            </time>
          </div>

          <h1 className="text-4xl font-bold text-accent mb-4 direction-rtl">
            {news.Title}
          </h1>

          {news.Content ? (
            <RichTextRenderer content={news.Content} />
          ) : (
            <p className="text-accentDark leading-relaxed direction-rtl">
              {news.Description}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
