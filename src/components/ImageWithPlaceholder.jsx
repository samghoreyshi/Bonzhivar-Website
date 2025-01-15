'use client';

import { useState, useEffect } from "react";

const ImageWithPlaceholder = ({ src, alt, className }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const img = new Image();

        img.onload = () => {
            if (isMounted) {
                setIsLoading(false);
            }
        };

        img.src = src;

        return () => {
            isMounted = false;
            img.onload = null;
        };
    }, [src]);

    return (
        <div className="relative w-full h-full">
            {/* Shimmer Placeholder */}
            {isLoading && (
                <div 
                    className="
                        absolute inset-0 
                        animate-shimmer
                        transition-opacity duration-300
                    "
                />
            )}
            
            {/* Actual Image */}
            <img
                src={src}
                alt={alt}
                className={`
                    w-full h-full
                    ${className}
                    transition-opacity duration-300 
                    ${isLoading ? 'opacity-0' : 'opacity-100'}
                `}
                loading="eager"
            />
        </div>
    );
};

export default ImageWithPlaceholder;
