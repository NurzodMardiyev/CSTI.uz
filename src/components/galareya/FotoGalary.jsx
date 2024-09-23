import React, { useEffect, useState } from "react";
import { csti } from "../../feature/queryApi";
import { useQuery } from "react-query";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // ScrollToPlugin import
import { Flex, Spin } from "antd";

gsap.registerPlugin(ScrollToPlugin); // ScrollToPluginni ro'yxatdan o'tkazish

export default function FotoGalary() {
  const [isFixed, setIsFixed] = useState(false);

  const { data, error, isLoading } = useQuery(["fotogalary"], () =>
    csti.fotogalary("")
  );

  useEffect(() => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: 0, autoKill: true } }); // GSAP bilan scrollni tepadan boshlash
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading)
    return (
      <div className="absolute w-full h-[100vh] top-0 left-0 flex items-center justify-center">
        <Flex>
          <Spin size="large" />
        </Flex>
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[94px] mt-[48px]" : ""}`}>
      <div className="container md:max-w-9xl md:mx-auto  md:flex-row flex-col py-6 max-w-[90%] mx-auto  bg-[#e6e6e6] my-7 md:px-10 px-6 md:py-10 rounded-[15px]">
        <div>
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
            Fotogalareya
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Fotogalareya
          </h2>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-4 space-y-6 grid-flow-row auto-rows-auto gap-x-4 md:gap-8">
          {data?.map((img, index) => (
            <div
              className={`col-span-2 md:max-w-[420px] md:h-[300px] h-[100px] max-w-[140px] rounded-xl block overflow-hidden  ${
                index === 0 ? "mt-6" : ""
              }`}
              key={img.id}
            >
              <img
                src={img.image}
                alt="1"
                className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
