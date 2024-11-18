import React from "react";
import logo from "../../images/logo_center.png";
import { icons } from "../../icons/iconc.js";
import { Link } from "react-router-dom";
import "../../App.css";
import { csti } from "../../feature/queryApi.js";
import { useQuery } from "react-query";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const { data: projects } = useQuery(["projects"], () => csti.projects(""));

  return (
    <div className="bg-[#E2E7FA] py-10">
      <div className="container md:max-w-9xl md:mx-auto flex justify-between md:py-3 py-1.5 max-w-[90%] mx-auto items-start md:flex-row flex-col ">
        <div className="flex md:w-[50%]">
          <div className=" w-[50%]  flex flex-col px-3">
            <div>
              <Link className="logoSec  flex items-center gap-3" to="/">
                <img
                  src={logo}
                  alt="csti logo"
                  className="md:w-[70px]  w-[30px]"
                />
                <p className="md:text-[20px] font-semibold md:mb-1 text-[12px] md:leading-[25px] leading-[20px]">
                  Ilmiy texnik <br /> axborot markazi
                </p>
              </Link>
              <p className="md:text-[16px] text-[14px] text-[#737887] font-[400] mb-4 mt-4">
                Oʻzbekiston Respublikasi Prezidentining 2017-yil 30-noyabrdagi
                “Oʻzbekiston Respublikasi innovatsion rivojlanish vazirligi
              </p>
              <div className="flex gap-4">
                <span className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] flex justify-center items-center rounded-full border-2 border-black">
                  {icons.facebook}
                </span>
                <span className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] flex justify-center items-center rounded-full border-2 border-black">
                  {icons.twitter}
                </span>
                <span className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] flex justify-center items-center rounded-full border-2 border-black">
                  {icons.linked}
                </span>
                <span className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] flex justify-center items-center rounded-full border-2 border-black">
                  {icons.whatsapp}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[50%] flex flex-col ">
            <div className="relative w-full flex items-end">
              <h3 className="md:text-[24px] text-[16px] text-gray-800 font-[700] uppercase footer_title  inline-block relative pb-2 ">
                Linklar
              </h3>
            </div>

            <ul className="mt-4">
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4">
                <Link className="flex items-center gap-3" to="/">
                  {" "}
                  {icons.right} Bosh Sahifa
                </Link>
              </li>
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4">
                <Link className="flex items-center gap-3" to="/fotogalary">
                  {" "}
                  {icons.right} Galereyalar
                </Link>
              </li>
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4">
                <Link
                  className="flex items-center gap-3"
                  to={`projects/${projects?.length}`}
                >
                  {" "}
                  {icons.right} Loyihalar
                </Link>
              </li>
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4">
                <ScrollLink
                  className="flex items-center gap-3 cursor-pointer"
                  smooth="true"
                  duration={500}
                  to="faoliyat"
                >
                  {" "}
                  {icons.right} Faoliyat
                </ScrollLink>
              </li>
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4">
                <ScrollLink
                  className="flex items-center gap-3 cursor-pointer"
                  smooth="true"
                  duration={500}
                  to="rahbariyat"
                >
                  {" "}
                  {icons.right} Rahbariyat
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:w-[50%]">
          <div className=" w-[50%] flex flex-col ">
            <div className="relative w-full flex items-end">
              <h3 className="md:text-[24px] text-[16px] text-gray-800 font-[700] uppercase footer_title  inline-block relative pb-2 ">
                Bog'lanish
              </h3>
            </div>
            <ul className="mt-4">
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4 flex gap-3 items-center">
                <span className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-blue-500 text-white rounded-[10px] shadow-md flex justify-center items-center md:text-xl text-[12px]">
                  {icons.phone}
                </span>
                <div>
                  <p className="uppercase">Phone Number</p>
                  <Link
                    to="tel:+998712033223"
                    className="font-[600] hover:text-blue-500 transition-all duration-150 text-gray-800 "
                  >
                    +998 (71) 203-32-23
                  </Link>
                </div>
              </li>
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4 flex gap-3 items-center">
                <span className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-blue-500 text-white rounded-[10px] shadow-md flex justify-center items-center md:text-xl text-[12px]">
                  {icons.location}
                </span>
                <div>
                  <p className="uppercase">Oliy Talim Vazirligi</p>
                  <Link
                    to="https://maps.app.goo.gl/WYjxXC7bKiLLKzGX6"
                    className="font-[600] hover:text-blue-500 transition-all duration-150 text-gray-800 "
                  >
                    Universitet st 7
                  </Link>
                </div>
              </li>
              <li className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4 flex gap-3 items-center">
                <span className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-blue-500 text-white rounded-[10px] shadow-md flex justify-center items-center md:text-xl text-[12px]">
                  {icons.phone}
                </span>
                <div>
                  <p className="uppercase">Email Address</p>
                  <Link
                    to="https://info.csti@ilmiy.uz"
                    className="font-[600] hover:text-blue-500 transition-all duration-150 text-gray-800 "
                  >
                    info.csti@ilmiy.uz
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className=" w-[50%] flex flex-col ">
            <div className="relative w-full flex items-end">
              <h3 className="md:text-[24px] text-[16px] text-gray-800 font-[700] uppercase footer_title  inline-block relative pb-2 ">
                Aloqada Boling
              </h3>
            </div>
            <ul className="mt-4">
              <p className="md:text-[16px] text-[12px] text-[#737887] font-[400] mb-4">
                Murojaat va takliflar bo'yicha{" "}
                <ScrollLink
                  className="text-blue-500 cursor-pointer"
                  to="contact"
                  smooth="true"
                  duration={1000}
                >
                  Bizga Murojaat qiling{" "}
                </ScrollLink>{" "}
                Bizga Murojaat qiling bo'limida yozishingiz mumkin!
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
