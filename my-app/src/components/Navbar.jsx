import React from "react";
import logo from "../images/New-Project-1-1024x576.png";
export default function Navbar() {
  return (
    <div dir="rtl" className="fixed top-0 w-full bg-white z-50">
      <div className="flex justify-start items-center p-2 gap-5 container mx-auto">
        <img src={logo} alt="logo" width={140} height={90} />
        <ul className="flex gap-5">
          <li className="text-xl font-semibold text-gray-500 hover:text-gray-900">
            خانه
          </li>
          <li className="text-xl font-semibold text-gray-500 hover:text-gray-900">
            رژیم ها
          </li>
          <li className="text-xl font-semibold text-gray-500 hover:text-gray-900">
            تمرین ها
          </li>
          <li className="text-xl font-semibold text-gray-500 hover:text-gray-900">
            محاسبه bmi
          </li>
          <li className="text-xl font-semibold text-gray-500 hover:text-gray-900">
            مقالات
          </li>
        </ul>
      </div>
    </div>
  );
}
