import { icons } from "../../icons/iconc.js";
import React from "react";
import image from "../../images/aboutus.jpg";

export default function About() {
  return (
    <div className="" id="about">
      <div className="container md:max-w-9xl md:mx-auto flex md:flex-row md:gap-0 gap-5 flex-col justify-between py-14  max-w-[90%] mx-auto items-center border my-7 md:px-14 px-6 rounded-xl md:py-20">
        <div className="leftSec md:max-w-[48%]">
          <div>
            <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
              Biz Haqimizda
            </span>
            <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
              Ilmiy texnik axborot markazi <br /> haqida
            </h2>
            <p className="md:text-[16px] text-[14px] text-[#737887] font-[400] line-clamp-6 md:line-clamp-none md:mb-4">
              Oʻzbekiston Respublikasi Prezidentining 2017-yil 30-noyabrdagi
              “Oʻzbekiston Respublikasi innovatsion rivojlanish vazirligi
              faoliyatini tashkil etish toʻgʻrisida”gi PQ-3416-sonli qarori,
              2018-yil 21-sentyabrdagi “2019 — 2021-yillarda Oʻzbekiston
              Respublikasini innovatsion rivojlantirish strategiyasini
              tasdiqlash toʻgʻrisida”gi PF-5544-son Farmoni, 2021-yil
              1-apreldagi “Ilm fan sohasidagi davlat siyosati va innovatsion
              rivojlanishdagi davlat boshqaruvini yanada takomillashtirish
              chora-tadbirlari toʻgʻrisida”gi PQ-5047-son qarori, Vazirlar
              Mahkamasining 2021-yil 28-avgustdagi “Ilmiy va innovatsion
              faoliyatni boshqarish tizimini tashkil etish chora-tadbirlari
              toʻgʻrisida”gi 545-son qarori asosida tashkil topilgan.
            </p>
            <span className="text-blue-500 cursor-pointer  mb-4 inline-block md:hidden">
              details...
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="md:text-[16px] text-[14px] text-gray-800 font-[500] flex items-center gap-2">
              <span className="text-blue-500">{icons.check}</span>
              Davlat ilmiy-texnik axborot tizimini takomillashtirish
            </p>
            <p className="md:text-[16px] text-[14px] text-gray-800 font-[500] flex items-center gap-2">
              <span className="text-blue-500">{icons.check}</span>
              Ilmiy-texnik axborot tizimi bazasida axborot-tahliliy xizmatlar
              shakllantirish
            </p>
            <p className="md:text-[16px] text-[14px] text-gray-800 font-[500] flex items-center gap-2">
              <span className="text-blue-500">{icons.check}</span>
              Davlat va nodavlat sektori uchun fan va innovatsiyalar sohasida
              yuqori sifatli axborot-tahliliy xizmatlarning ishonchli yetkazib
              berish
            </p>
          </div>
          <div>
            <button className="bg-blue-500 flex items-center px-6 py-3 rounded-3xl mt-4 text-[14px] uppercase fpnt-[700] text-white gap-3">
              <span className=" text-blue-500 bg-white rounded-full w-[25px] h-[25px] text-[10px] flex justify-center items-center">
                {icons.play}
              </span>
              View Client Stories
            </button>
          </div>
        </div>
        <div className="rightSec md:max-w-[48%] relative">
          <div className="md:max-w-[500px] border h-[500px] overflow-hidden rounded-[20px]">
            <img
              src={image}
              alt="aboutImage"
              className="w-full object-cover h-full rounded-[20px] transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="absolute md:top-[50%] md:left-[-200px] md:bottom-auto bottom-0 bg-blue-500 flex items-center gap-4 rounded-l-[25px] max-w-[400px] px-10 py-6  ">
            <span className="md:text-[54px] text-[30px] text-white font-[700]">
              780
            </span>
            <span className="md:text-[18px] font-[600] md:leading-[22px] text-white">
              dayjestlar oʻzbek va rus tillarida tayyorlandi hamda
              ommalashtirildi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
