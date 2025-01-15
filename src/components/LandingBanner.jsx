import react from "react";
import ImageCarousel from "./ImageCarousel-Hero";
import Link from "next/link";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

async function getSlides() {
    const res = await fetch('https://dev.bonzhivar.com/api/slides?populate=*', { next: { revalidate: 10 } });
    if (!res.ok) {
      throw new Error('Failed to fetch slides');
    }
    return res.json();
}

// Preload function
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
    });
}

export default async function LandingBanner() {
    const slidesData = await getSlides();
    const slides = slidesData.data.map(item => ({
      image: `https://dev.bonzhivar.com${item.Slide.url}`,
      mobileImage: `https://dev.bonzhivar.com${item.CoverMobile && item.CoverMobile[0] ? item.CoverMobile[0].url : item.Slide.url}`,
      title: item.Slide.name || "Slide Title",
      description: item.Slide.caption || "Slide Description",
      slug: item.Slug
    }));

    // Preload all images
    await Promise.all([
        ...slides.map(slide => preloadImage(slide.image)),
        ...slides.map(slide => preloadImage(slide.mobileImage))
    ]).catch(console.error); // Ignore errors, we'll show placeholders anyway

    return (
        <section className="relative w-full h-[300px] sm:h-[600px] bg-background overflow-hidden">
            <ImageCarousel
                autoSlide={true}
                autoSlideInterval={8000}
                titles={slides.map((slide) => slide.title)}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-full">
                        {slide.slug ? (
                            <Link href={slide.slug} className="block w-full h-full">
                                <div className="relative w-full h-full">
                                    {/* Desktop Image */}
                                    <div className="hidden md:block w-full h-full">
                                        <ImageWithPlaceholder
                                            src={slide.image}
                                            className="object-cover object-center"
                                            alt={slide.title}
                                        />
                                    </div>
                                    {/* Mobile Image */}
                                    <div className="block md:hidden w-full h-full">
                                        <ImageWithPlaceholder
                                            src={slide.mobileImage || slide.image}
                                            className="object-cover object-center"
                                            alt={slide.title}
                                        />
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="relative w-full h-full">
                                {/* Desktop Image */}
                                <div className="hidden md:block w-full h-full">
                                    <ImageWithPlaceholder
                                        src={slide.image}
                                        className="object-cover object-center"
                                        alt={slide.title}
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden w-full h-full">
                                    <ImageWithPlaceholder
                                        src={slide.mobileImage || slide.image}
                                        className="object-cover object-center"
                                        alt={slide.title}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </ImageCarousel>
        </section>
    );
}
