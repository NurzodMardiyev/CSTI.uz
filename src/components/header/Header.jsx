import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swipeImg1 from "../../images/header1.jpg";
import swipeImg2 from "../../images/header2.jpg";
import swipeImg3 from "../../images/header3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import { icons } from "../../icons/iconc.js";

export default function HeaderJS() {
  const [isFixed, setIsFixed] = useState(false);

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
  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[93px] mt-[48px]" : ""}`}>
      <div className="headerInfo absolute w-full h-[80vh] z-10 text-white">
        <div className="container md:max-w-9xl md:mx-auto flex flex-col  md:py-3 py-1.5 max-w-[90%] mx-auto justify-center h-full gap-3">
          <h1 className="md:text-[54px] font-[600] head_ttile text-[40px]">
            Ilmiy texnik axborot markazi
          </h1>
          <p className="md:text-[16px] text-[14px] md:w-[750px] w-[330px] ]">
            Oʻzbekiston Respublikasini innovatsion va ilmiy-texnik
            rivojlantirish sohasida jamiyat va davlat hayotini har tomonlama
            rivojlantirishga, mamlakatning intellektual va texnologik
            salohiyatini oshirish bilan shugʻullanuvchi tashkilot.
          </p>
          <div>
            <button className="flex items-center text-[16px] font-[500] gap-3">
              <span className=" rounded-full flex justify-center items-center w-[45px] h-[45px] border-4 border-blue-500 text-white text-[17px] hover:bg-blue-500 transition-all duration-150">
                {icons.play}{" "}
              </span>{" "}
              Videoni Ko'rish
            </button>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide className="w-full h-[60vh] rounded-[10px]">
            <img src={swipeImg1} alt="header 1" className="w-full h-[100%]" />
          </SwiperSlide>
          <SwiperSlide className="w-full h-[60vh] rounded-[10px]">
            <img src={swipeImg2} alt="header 2" className="w-full h-[100%]" />
          </SwiperSlide>
          <SwiperSlide className="w-full h-[60vh] rounded-[10px]">
            <img src={swipeImg3} alt="header 3" className="w-full h-[100%]" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
