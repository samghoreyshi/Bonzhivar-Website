import React from "react";
import { Link } from "react-router-dom";

const ImageCardReversed = ({ imageUrl, title, videoUrl }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full  justify-between items-center">
        <div className="flex w-full h-24 items-center justify-center p-2 bg-back-gradient">
          <div className="flex items-center justify-between w-full h-full px-3">
            <div className="flex min-w-[fit-content] h-full gap-3">
              <button className="font-IranYekan font-600 text-sm hover:bg-accent hover:text-accentLight bg-accentLight text-accent rounded-lg my-5 px-5 transition-all duration-300">
                ثبت نام
              </button>
              <button className="font-IranYekan font-normal text-sm border border-accentLight hover:border-white/50 hover:text-white/50 rounded-lg my-5 p-2 transition-all duration-300">
                <Link to="/info/مدلسازی-رندرینگ">اطلاعات بیشتر</Link>
              </button>
            </div>
            <div className="font-IranYekan font-extrabold text-right py-3 w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {title}
            </div>
          </div>
        </div>
        <div className="flex w-full h-full  overflow-hidden">
          <div className="flex h-full w-full items-center justify-center  overflow-hidden">
            {/* <img className="w-full h-full object-cover" src={imageUrl} alt="" /> */}
            <video
              className="w-full h-32 sm:h-48 md:h-64 lg:h-[350px] object-cover"
              src={videoUrl}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCardReversed;
