import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Preloader() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const t1 = gsap.timeline({ delay: 1 });

        t1.from(["#t-1", "#t-2", "#t-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
            duration: 1
        })
        .to(["#t-1", "#t-2", "#t-3"], {
            opacity: 0,
            y: "-=30",
            stagger: 0.5,
            duration: 2,
            delay: 2
        })
        .to(containerRef.current, {  // Use direct reference to the container
            x: '-100vw',
            duration: 2.5,
            ease: 'power2.out',
            onComplete: () => {
                console.log("Animation completed");
            }
        });

    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-background text-accent z-50 font-IranYekan font-black"
            style={{ transform: 'translateX(0)' }}
        >
            <h1 id="t-1" className="text-3xl md:text-5xl font-bold mb-5">بن‌ژیــــوار</h1>
            <h1 id="t-2" className="text-3xl md:text-5xl font-bold ">خانــــــــــه</h1>
            <h1 id="t-3" className="text-3xl md:text-5xl font-bold">.ماســـــــت</h1>
        </div>
    );
}

export default Preloader;
