import React, { useState, useEffect } from "react";
import ImageCard from "./image-card";
import ImageCardInfo from "./image-card-2";
import ImageCardReversed from "./image-card-reversed";
import ImageCardWriter from "./Image-card-writer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


import Rightcover2 from "/Hero-images/Right-Cover-2.webp";
import Special2 from "/Hero-images/Bot-special-2.webp";
import AboutUsCover from "/Hero-images/Aboutus-facade.webp";
import AboutUsCoverSepia from "/Hero-images/Aboutus-facade-Sepia.webp";
import LeftVideo from "/Videos/Left-Video.webm";
import Modal from "./modal";

const imageCardData = [
  {
    id: 1,
    imageUrl: "/Hero-images/Right-Cover-2.webp",
    title: "دوره جامع بازسازی ساختمان",
    register: "/register/course2",
    moreInfo: "/info/بازسازی-ساختمان",
  },
  {
    id: 2,
    imageUrl: "/Hero-images/Right-Cover-3.webp",
    title: "دوره جامع مُدلسازی و رِندرینگ",
    register: "/register/course2",
    moreInfo: "/info/مدلسازی-رندرینگ",
  },
  {
    id: 3,
    imageUrl: "/Hero-images/Right-Cover-4.webp",
    title: " دوره جامع نورپردازی فضا",
    register: "/register/course3",
    moreInfo: "/info/نورپردازی",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeInterval = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCardData.length);
    }, changeInterval);

    return () => clearInterval(interval);
  }, []);

  const currentCard = imageCardData[currentIndex];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Helmet>
        <title>مجتمع آموزشی بن‌ژیوار</title>
        <meta
          name="description"
          content="آموزش بازسازی ساختمان برای افرادی که به دنبال مهارت‌های عملی و تکنیک‌های مدرن هستند."
        />
      </Helmet>
      <div
        id="Hero"
        className="h-[calc(100vh-4rem)] w-full flex items-center justify-center text-3xl bg-background text-accentLight font-bold"
      >
        <div className="w-full grid lg:grid-cols-2 gap-3 h-full p-4">
          <div className="flex flex-col justify-between gap-3">
            <div class=" rounded-3xl  h-full overflow-hidden">
              <ImageCardReversed
                videoUrl={LeftVideo}
                title="مُدلسازی و رِندرینگ"
              />
            </div>
            <div class=" flex justify-center items-center gap-3  rounded-lg h-full">
              <div className="rounded-3xl flex w-full h-full justify-center items-center overflow-hidden">
                <Link
                  to="/درباره-ما"
                  className=" rounded-3xl h-full overflow-hidden"
                >
                  <ImageCardInfo
                    imageUrl={AboutUsCoverSepia}
                    title="درباره ما"
                    icons={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#F4E8C9"
                        height={50}
                        width={50}
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    }
                  />
                </Link>
              </div>
              <div
                onClick={openModal}
                className="rounded-3xl flex w-full h-full justify-center items-center overflow-hidden"
              >
                <ImageCardWriter
                  imageUrl={Special2}
                  titles={["...شروعـــی نو", "...مسیـــری نو", "...هدفـــی نو"]}
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div class=" rounded-3xl h-full overflow-hidden ">
              <ImageCard
                key={currentCard.id}
                imageUrl={currentCard.imageUrl}
                title={currentCard.title}
                register={currentCard.register}
                moreInfo={currentCard.moreInfo}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="مجتمع آموزشی بن‌ژیوار"
        description="مجتمع آموزشی بن‌ژیوار از سال ۱۳۸۷ فعالیت خود را با هدف ارتقای مهارت‌های کاربردی و آماده‌سازی فراگیران برای ورود به بازار کار آغاز کرده است. این مجتمع با ارائه دوره‌های متنوعی در حوزه‌های مختلف، از جمله معماری داخلی، طراحی، مدیریت کسب‌وکار و مهارت‌های کافی‌شاپ، به یکی از مراکز آموزشی پیشرو در زمینه مهارت‌آموزی تبدیل شده است. علاوه بر این، بن‌ژیوار در سال‌های گذشته موفق به کسب جوایز مختلفی نظیر آموزشگاه برتر کشور و کارآفرین برتر شده است که گواهی بر کیفیت و اهمیت فعالیت‌های آن است"
        imageUrl="/Hero-images/Bot-special-2.webp"
      />
    </>
  );
}

export default Hero;
