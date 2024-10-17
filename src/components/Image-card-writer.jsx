import React from 'react';
import Typewriter from 'typewriter-effect';

const ImageCardWriter = ({ imageUrl, titles, icons }) => {
    // Ensure titles is always an array
    const textArray = Array.isArray(titles) ? titles : [titles];

    return (
        <div className='relative flex flex-col w-full h-full justify-between items-center'>
            
            <img src={imageUrl} alt="Card background" className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out w-full h-full object-cover" />

            
            <div className='absolute bottom-0 flex w-full h-24 items-center justify-center p-2'>
                <div className='flex items-center justify-between w-full h-full px-3'>
                    
                    <div className='flex min-w-[fit-content] h-full gap-5'>
                        <div className='-rotate-45 flex h-full w-full justify-center items-center'>{icons}</div>
                    </div>

                    
                    <div className='font-IranYekan font-bold text-right py-3 w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rtl relative text-white'>
                        <Typewriter
                            options={{
                                strings: textArray,
                                autoStart: true,
                                loop: true,
                                cursor: ' <',
                                delay: 100,
                                deleteSpeed: 100,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCardWriter;
