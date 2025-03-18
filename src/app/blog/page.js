'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import BlogSearch from '@/components/BlogSearch';

async function getBlogPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?populate=*`, {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  
  return res.json();
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

function extractContentPreview(content, maxLength = 150) {
  if (!content || !Array.isArray(content)) return '';
  
  let text = '';
  for (const block of content) {
    if (block.type === 'paragraph' && Array.isArray(block.children)) {
      for (const child of block.children) {
        if (child.type === 'text' && child.text) {
          text += child.text + ' ';
        }
      }
    }
  }
  
  // Truncate to maxLength characters
  if (text.length > maxLength) {
    text = text.substring(0, maxLength).trim() + '...';
  }
  
  return text;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getBlogPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const featuredPost = posts.find(post => post.Featured === true);
  const regularPosts = posts.filter(post => post.Featured !== true);

  const filteredPosts = regularPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[url('/patterns/grid.svg')] bg-repeat opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent bottom-0 left-0 w-full" />
              <h1 className="text-4xl md:text-5xl text-accent font-IranYekan font-[800] py-3">
                وبلاگ بن‌ژیوار
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600">
              آخرین مقالات و آموزش‌های تخصصی
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-8">
            <BlogSearch onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Featured Post Section */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="relative group overflow-hidden rounded-3xl">
              <div className="aspect-[21/9] relative overflow-hidden">
                {featuredPost.CoverImage ? (
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                    <ImageWithPlaceholder
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${featuredPost.CoverImage.formats.large.url}`}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                    <svg className="w-20 h-20 text-accent/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-accent text-white mb-4">
                  مقاله ویژه
                </span>
                <h2 className="hidden md:block text-3xl font-bold text-white mb-4 line-clamp-2 group-hover:text-accent/90 transition-colors duration-200">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-200 mb-4 line-clamp-2 max-w-3xl">
                  {featuredPost.description}
                </p>
                <div className="flex items-center text-white/80">
                  <time dateTime={featuredPost.publishedTime}>
                    {formatPersianDate(featuredPost.publishedTime)}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="group-hover:text-accent transition-colors duration-200">
                    مطالعه مقاله ←
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="relative inline-block">
              <div className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent bottom-0 left-0 w-full" />
              <p className="text-2xl text-gray-500 font-IranYekan mb-2">
                مقاله‌ای یافت نشد
              </p>
              <p className="text-accent/80 font-IranYekan">
                لطفاً با کلمات کلیدی دیگری جستجو کنید
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.id}
                className="block h-[290px]"
              >
                <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-32 w-full flex-shrink-0 overflow-hidden">
                    {post.CoverImage ? (
                      <div className="w-full h-full">
                        <ImageWithPlaceholder
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.CoverImage.formats.medium.url}`}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 flex flex-col flex-grow">
                    {/* Post Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 font-light">
                      <div className="flex items-center gap-2">
                        <span>مقاله</span>
                        <span>•</span>
                        <time dateTime={post.publishedTime}>
                          {formatPersianDate(post.publishedTime)}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>مطالعه</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2 text-right">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.content ? extractContentPreview(post.content) : post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
