import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { TbMathLower } from "react-icons/tb";

import img1 from "../images/carousel/ChatGPT-Image-Aug-18-2025-12_31_45-PM.png";
import img2 from "../images/carousel/ChatGPT-Image-Aug-18-2025-12_27_27-PM.png";
import img3 from "../images/carousel/ChatGPT-Image-Aug-18-2025-12_24_10-PM.png";
import img4 from "../images/carousel/4.png";
import img5 from "../images/carousel/5.png";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero2() {
  const slides1 = [
    { img: img1, title: "حرکت کشش قفسه سینه روی دیوار" },
    { img: img2, title: "دمبل پرس سینه" },
    { img: img3, title: "وضعیت سگ رو به پایین" },
  ];

  const slides2 = [
    { img: img3, title: "وضعیت سگ رو به پایین" },
    { img: img4, title: "اسکوات با وزن بدن" },
    { img: img5, title: "TRX ROW" },
  ];

  return (
    <div dir="rtl" className="bg-gray-100 p-5">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">
          معرفی تمرین‌های ورزشی متنوع برای همه سلیقه‌ها
        </h1>
        <p className="text-xl mt-6 text-gray-500">
          معرفی تمرین‌های ورزشی متنوع برای همه سلیقه‌ها؛ از تمرین با وزنه گرفته
          تا حرکات ساده در منزل، TRX، <br /> یوگا و حرکات اصلاحی. اینجا
          مجموعه‌ای کامل از برنامه‌های ورزشی برای تناسب اندام، کاهش وزن، افزایش
          قدرت و بهبود سلامتی
          <br />
          پیدا می‌کنید. هر تمرین همراه با توضیحات کامل و تصویر آموزشی ارائه شده
          تا بتوانید به‌راحتی در خانه یا باشگاه آن‌ها را اجرا کنید و از مرور
          آخرین تمرین‌ها لذت ببرید. ….
          <br />
          <button className="mt-4 flex items-center text-blue-500 font-bold text-lg">
            مشاهده همه
            <TbMathLower className="mr-2 mt-1.5" />
          </button>
        </p>
      </div>
      <div className="container mx-auto mt-10">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper h-[400px] md:h-[450px]"
          style={{
            "--swiper-pagination-color": "#f3f4f6",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}    
        >
          <SwiperSlide>
            <div className="flex justify-center items-center gap-10 flex-wrap">
              {slides1.map((slide, i) => (
                <div key={i} className="flex flex-col rounded-lg items-center">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-[300px] h-[300px] md:h-[350px] rounded-lg object-cover"
                  />
                  <span className="mt-2 text-center">{slide.title}</span>
                </div>
              ))}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center gap-10 flex-wrap">
              {slides2.map((slide, i) => (
                <div key={i} className="flex flex-col rounded-lg items-center">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-[300px] h-[300px] md:h-[350px] rounded-lg object-cover"
                  />
                  <span className="mt-2 text-center">{slide.title}</span>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
