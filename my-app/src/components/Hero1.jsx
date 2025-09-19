import React from "react";
import img from "../images/header/New-Project-2.webp";
import hero1 from "../images/header/دکتر-بدن.png";
import logo1 from "../images/logo/icons8-restaurant-100.png";
import logo2 from "../images/logo/icons8-fitness-100.png";
import logo3 from "../images/logo/icons8-coach-100.png";
import logo4 from "../images/logo/icons8-barbells-100.png";
export default function Hero1() {
  return (
    <>
      <div>
        <img src={img} alt="img" className=" w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white">
            برنامه تمرینی و رژیم مخصوص بدن تو
          </h1>
          <p className="text-lg font-semibold text-gray-200 mt-4">
            ما توی دکتر بدن، بر اساس هدف، وضعیت بدنی و سبک زندگی تو، یه برنامه
            کاملاً اختصاصی طراحی می‌کنیم تا سریع‌تر و علمی‌تر به فرم دلخواهت
            برسی.
          </p>
          <button className=" bg-gray-200 px-3 py-3 rounded-lg mt-6 font-semibold hover:cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-500">
            ثبت نام برنامه اختصاصی
          </button>
        </div>
      </div>
      <div dir="rtl" className="bg-gray-100 p-5">
        <div className="container mx-auto flex justify-center items-center gap-10">
          <div className="text-right max-w-xl">
            <h1 className="text-3xl font-bold">چرا دکتر بدن؟</h1>
            <p className="text-lg text-gray-700 font-semibold">
              <br />
              در «دکتربدن» همه‌چیز حول برنامه‌ی شخصی‌سازی‌شده‌ی ورزشی و تغذیه‌ای
              <br />
              تدوین می‌شود که با توجه به سن، جنسیت، سطح فعلی و هدف شما
              <br />
              (چربی‌سوزی، افزایش حجم یا آمادگی مسابقه‌ای) تنظیم شده است؛
              پشتیبانی
              <br />
              آنلاین ۲۴/۷ در دسترس است تا در هر لحظه به سوالات شما پاسخ دهد؛
              <br />
              تمامی برنامه‌ها توسط تیمی از بهترین پزشکان ورزشی و متخصصین تغذیه{" "}
              <br />
              طراحی می‌شوند تا علمی و ایمن باشند؛ و این خدمات کاملاً با انواع
              اهداف <br />
              فیتنس شما — from کاهش وزن تا ساخت حجم عضلانی یا آمادگی مسابقه‌ای —
              سازگار است.
            </p>
          </div>
          <div>
            <img src={hero1} alt="" className="w-[600px] rounded-lg h-full" />
          </div>
        </div>
      </div>
      <div dir="rtl" className=" flex items-center justify-center gap-5 py-10">
        <div className=" flex flex-col text-right border border-gray-200 rounded shadow py-8 pr-2 pl-30">
          <img src={logo1} alt="logo1" className=" w-[60px] h-full mb-5" />
          <span className=" font-semibold text-gray-600 text-lg">انواع رژیم غذایی</span>
        </div>
        <div className=" flex flex-col text-right border border-gray-200 rounded shadow py-8 pr-2 pl-30">
          {" "}
          <img src={logo2} alt="logo2" className=" w-[60px] h-full mb-5" />
          <span className=" font-semibold text-gray-600 text-lg">آموزش تمرین های ورزشی</span>
        </div>
        <div className=" flex flex-col text-right border border-gray-200 rounded shadow py-8 pr-2 pl-30">
          {" "}
          <img src={logo3} alt="logo3" className="w-[60px] h-full mb-5" />
          <span className=" font-semibold text-gray-600 text-lg">معرفی مشاوران و مربیان</span>
        </div>
        <div className=" flex flex-col text-right border border-gray-200 rounded shadow py-8 pr-2 pl-30">
          {" "}
          <img src={logo4} alt="logo4" className=" w-[60px] h-full mb-5" />
          <span className=" font-semibold text-gray-600 text-lg">محاسبه گر BMI</span>
        </div>
      </div>
    </>
  );
}
