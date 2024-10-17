import React from 'react';

const ImageCard2 = ({ imageUrl, title, icons }) => {
    return (
        <>
            <div className='relative flex flex-col w-full h-full  justify-between items-center'>
                <div className='flex w-full h-full  overflow-hidden'>
                    <div className='flex h-full w-full items-center justify-center  overflow-hidden'>
                        <img id="AboutUs"  className='cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out w-full h-full object-cover' src={imageUrl} alt="" />
                    </div>
                </div>
                <div className='absolute bottom-0 flex w-full h-24 items-center justify-center p-2 '>
                    <div className='flex items-center justify-between w-full h-full px-3'>
                        <div className='flex min-w-[fit-content] h-full gap-5'>
                            <div className='-rotate-45 flex h-full w-full justify-center items-center'>{icons}</div>
                            
                        </div>
                        <div id='typewriter' className='font-IranYekan font-bold text-right py-3 w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>{title}</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ImageCard2;
