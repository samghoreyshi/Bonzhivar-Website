import React from 'react';
import RichTextRenderer from '@/components/RichTextRenderer';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import { notFound } from 'next/navigation';

async function getBlogPost(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        console.error(`Blog post with slug "${slug}" not found.`);
        notFound();
      }
      throw new Error('Failed to fetch blog post');
    }

    const response = await res.json();
    const post = response.data[0];

    if (!post) {
      console.error(`No blog post found with slug "${slug}".`);
      notFound();
    }

    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?fields[0]=slug`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blog slugs. Status: ${res.status}`);
    }

    const response = await res.json();

    return response.data.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata(props) {
  const slug = await props.params.slug;
  const post = await getBlogPost(slug);

  return {
    title: post.title,
    description: post.excerpt || post.description,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      images: post.CoverImage ? [`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.CoverImage.url}`] : [],
    },
  };
}

function formatPersianDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    calendar: 'persian',
    numberingSystem: 'persian'
  };
  return date.toLocaleDateString('fa-IR', options);
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  const suggestedPostsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?populate=*`
  ).then((res) => res.json());
  
  // Filter out current post and get only 3 posts
  const suggestedPosts = suggestedPostsRes.data
    .filter(post => post.slug !== params.slug)
    .slice(0, 3);

  const persianDate = formatPersianDate(post.publishedTime);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Cover Image Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        {post.CoverImage ? (
          <ImageWithPlaceholder
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.CoverImage.url}`}
            alt={post.title}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="py-16 flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {/* Author and Date */}
              <div className="flex items-center gap-4 mb-8">
                {post.author && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                )}
                <span className="text-sm text-gray-400">{persianDate}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-accent mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Content */}
              <article className="prose prose-lg max-w-none prose-headings:text-accent prose-a:text-accent hover:prose-a:text-accent/80">
                <RichTextRenderer content={post.content} />
              </article>

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-16 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm text-accent hover:text-accent/80 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Blog Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-4">درباره این مقاله</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">زمان مطالعه</p>
                    <p className="text-sm text-accent">۱۰ دقیقه</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">تاریخ انتشار</p>
                    <p className="text-sm text-accent">{persianDate}</p>
                  </div>
                  {post.author && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">نویسنده</p>
                      <p className="text-sm text-accent">{post.author}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Suggested Posts */}
              {suggestedPosts.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-accent mb-4">دیگر مقالات ما</h3>
                  <div className="space-y-6">
                    {suggestedPosts.map((suggestedPost) => (
                      <a
                        key={suggestedPost.id}
                        href={`/blog/${suggestedPost.slug}`}
                        className="block group"
                      >
                        <div className="aspect-video relative mb-3 overflow-hidden rounded-lg h-[120px]">
                          {suggestedPost.CoverImage?.formats?.medium?.url ? (
                            <div className="w-full h-full">
                              <ImageWithPlaceholder
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${suggestedPost.CoverImage.formats.medium.url}`}
                                alt={suggestedPost.title}
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                          {suggestedPost.title}
                        </h4>
                        {suggestedPost.excerpt && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {suggestedPost.excerpt}
                          </p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
