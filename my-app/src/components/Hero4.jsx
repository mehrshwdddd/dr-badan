import React from "react";
import { TbMathLower } from "react-icons/tb";

export default function Hero4() {
  return (
    <div dir="rtl">
      <div className=" container mx-auto">
        <h1 className=" text-2xl">رژیم غذایی سالم برای سبک زندگی بهتر</h1>
        <p className=" text-xl text-gray-600">
          در این بخش می‌توانید بهترین برنامه‌های غذایی را متناسب با هدفتان پیدا
          کنید؛ از رژیم‌های لاغری اصولی و رژیم کتو برای چربی‌سوزی، تا رژیم‌های
          افزایش وزن و<br /> برنامه‌های تغذیه‌ای معروف دنیا. همچنین راهکارهای
          طلایی تغذیه‌ای برای داشتن زندگی سالم و پایدار در دسترس شماست. تمام
          رژیم‌ها همراه با نکات کاربردی و<br /> معرفی مواد اولیه سالم ارائه
          شده‌اند تا انتخاب و اجرای آن‌ها ساده‌تر از همیشه باشد…..
        </p>
        <button className="mt-4 flex items-center text-blue-500 font-bold text-lg">
            مشاهده همه
            <TbMathLower className=" mr-2 mt-1.5"/>
        </button>
      </div>
    </div>
  );
}
