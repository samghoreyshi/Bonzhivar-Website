import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: "مجتمع مهارت آموزی بن‌ژیوار",
  description:
    "مجتمع مهارت‌آموزی بن‌ژیوار ارائه‌دهنده دوره‌های تخصصی در زمینه معماری داخلی، بازسازی ساختمان، نورپردازی، و روان‌شناسی رنگ. با آموزش‌های حرفه‌ای و پروژه‌محور، مسیر ورود به بازار کار را برای شما هموار می‌کنیم.",
  icons: {
    icon: '/favicon-new.ico',
    shortcut: '/favicon-new.ico',
    apple: '/favicon-new.ico',
  },
  openGraph: {
    type: "website",
    url: "https://bonzhivar.com",
    title: "مجتمع مهارت آموزی بن‌ژیوار",
    description:
      "مجتمع مهارت‌آموزی بن‌ژیوار ارائه‌دهنده دوره‌های تخصصی در زمینه معماری داخلی، بازسازی ساختمان، نورپردازی، و روان‌شناسی رنگ. با آموزش‌های حرفه‌ای و پروژه‌محور، مسیر ورود به بازار کار را برای شما هموار می‌کنیم.",
    images: [
      {
        url: "https://bonzhivar.com/og-image.webp", // Update with the correct URL of your image
        width: 1200,
        height: 630,
        alt: "مجتمع مهارت‌آموزی بن‌ژیوار",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مجتمع مهارت آموزی بن‌ژیوار",
    description:
      "مجتمع مهارت‌آموزی بن‌ژیوار ارائه‌دهنده دوره‌های تخصصی در زمینه معماری داخلی، بازسازی ساختمان، نورپردازی، و روان‌شناسی رنگ. با آموزش‌های حرفه‌ای و پروژه‌محور، مسیر ورود به بازار کار را برای شما هموار می‌کنیم.",
    images: ["https://bonzhivar.com/og-image.webp"], // Same image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(134, 239, 172))"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
