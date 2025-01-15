'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function RichTextRenderer({ content }) {
  if (!content) return null;
  
  return <BlocksRenderer content={content} blocks={{
    paragraph: ({ children }) => <p className="text-accentDark text-justify leading-relaxed direction-rtl mb-4">{children}</p>,
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <h1 className="text-5xl font-bold text-accent mb-6 direction-rtl">{children}</h1>;
        case 2:
          return <h2 className="text-3xl font-bold text-accent mb-4 direction-rtl">{children}</h2>;
        case 3:
          return <h3 className="text-xl font-bold text-accent mb-3 direction-rtl">{children}</h3>;
        default:
          return <h4 className="text-lg font-bold text-accent mb-2 direction-rtl">{children}</h4>;
      }
    },
    list: ({ children, format }) => {
      if (format === 'ordered') {
        return <ol className="list-decimal list-inside mb-4 direction-rtl">{children}</ol>;
      }
      return <ul className="list-disc list-inside mb-4 direction-rtl">{children}</ul>;
    },
    quote: ({ children }) => (
      <blockquote className="border-r-4 border-accent pr-4 my-4 italic text-accentDark direction-rtl">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <pre className="bg-accent/5 p-4 rounded-lg overflow-x-auto mb-4 direction-ltr">
        <code className="text-accent">{children}</code>
      </pre>
    ),
    image: ({image}) => <img src={image.url} alt={image.alternativeText} className='w-full md:h-[500px] object-cover rounded-lg my-8'/>

  }} />;
}
