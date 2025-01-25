import Image from "next/image";
import Link from "next/link";
import Modal from "../components/modal";
import ImageCarousel from "../components/ImageCarousel-Hero";
import LandingBanner from "@/components/LandingBanner";
import Announcements from "../components/Announcements";
import ServicesSection from '@/components/ServicesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import CoursePreview from "@/components/CoursePreview";
import ImageGallery from "@/components/ImageGallery";

import AboutusFacade from "/public/Hero-images/Aboutus-facade-Sepia.webp";
import Recon from "/public/Hero-images/Right-Cover-2.webp";
import Model from "/public/Hero-images/Right-Cover-3.webp";
import Light from "/public/Hero-images/Right-Cover-4.webp";
import Undercn from "/public//Undercn/1.webp";


async function getSlides() {
  const res = await fetch('https://dev.bonzhivar.com/api/slides?populate=*', { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error('Failed to fetch slides');
  }
  return res.json();
}



export default async function Home() {

  const homeLink = "/";
  const reconLink = "/courses/reconstruction";
  const modelingLink = "/courses/modeling";
  const lightLink = "/courses/lighting";
  const contactLink = "/contact";
  const aboutLink = "/about";
  const undercnLink = "/underconstruction";
  const externalLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSewvPyLp8zwuTs0WRg_OT-jOUPeI0XAdlHnrO4TBQm5h7xoNA/viewform";

  return (
    <main>
      <section id="imageCarousel" className="bg-background w-full h-[300px] sm:h-[600px] flex justify-center items-center">

          <LandingBanner />
      </section>

      
      <ServicesSection />
      <CoursePreview />
      {/* <ImageGallery /> */}
      <FeaturesGrid />

      {/* Announcements Section */}
      <section id="announcements" className="relative bg-background overflow-hidden">
        <div className="container mx-auto relative">
          <Announcements />
        </div>
      </section>
      <NewsletterSubscribe />
    </main>
  );
}
