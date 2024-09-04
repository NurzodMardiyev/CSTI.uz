import React from "react";
import g1 from "../../images/galary1.JPG";
import g2 from "../../images/galary2.JPG";
import g3 from "../../images/galary3.jpg";
import g4 from "../../images/galary4.JPG";
import g5 from "../../images/galary5.JPG";
import g6 from "../../images/galary6.JPG";
import g7 from "../../images/galary7.JPG";
import g8 from "../../images/galary8.jpg";

export default function Galary() {
  return (
    <div id="fotogalereya">
      <div className="container md:max-w-9xl md:mx-auto flex justify-between  max-w-[90%] py-14 mx-auto items-start border my-7 px-8 rounded-xl md:py-20 flex-col">
        <div>
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
            Galary
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Innovate business solution for startup comapnies
          </h2>
          <p className="md:text-[16px] text-[14px] text-[#737887] font-[400] ">
            Oʻzbekiston Respublikasi Prezidentining 2017-yil 30-noyabrdagi
            “Oʻzbekiston Respublikasi innovatsion rivojlanish vazirligi
          </p>
        </div>
        <div className="grid grid-cols-6  space-y-6 grid-flow-row auto-rows-auto gap-x-10">
          <div className="mt-6 col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] rounded-xl overflow-hidden">
            <img
              src={g2}
              alt="1"
              className=" object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full rounded-xl"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] rounded-xl block overflow-hidden">
            <img
              src={g1}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] overflow-hidden rounded-xl">
            <img
              src={g3}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] overflow-hidden rounded-xl">
            <img
              src={g4}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] overflow-hidden rounded-xl">
            <img
              src={g5}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] overflow-hidden rounded-xl">
            <img
              src={g6}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] overflow-hidden rounded-xl">
            <img
              src={g7}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
          <div className="col-span-2 md:w-[420px] md:h-[300px] h-[100px] w-[140px] overflow-hidden rounded-xl">
            <img
              src={g8}
              alt="1"
              className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
