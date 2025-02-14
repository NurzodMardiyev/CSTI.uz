import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi.js";
import { Flex, Spin } from "antd";
import bg_video from "../../videos/video.mp4";
import NavbarJS from "../navbar/NavbarJS.jsx";
import HeadNavbar from "../navbar/HeadNavbar.jsx";
export default function HeaderJS() {
  const [isFixed, setIsFixed] = useState(false);

  const queryClient = useQueryClient();

  const heroSection = useMutation(csti.heroSection, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("heroSection");
    },
    onError: (error) => {
      console.log("Mutation error:", error); // Xatolik haqida batafsil ma'lumot
    }
  });

  useEffect(() => {
    heroSection.mutate(); // Mutationni boshlash
  }, []);

  const { data, error, isLoading } = useQuery(["heroSection"], () =>
    csti.heroSection("")
  );

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
    <div
      className={`relative z-10 w-full  ${
        isFixed ? "md:mt-[93px] mt-[48px]" : ""
      }`}>
      <div className=" bg-black/40  absolute w-full h-[100vh] z-10 text-white">
        {!isFixed && (
          <>
            <HeadNavbar />
            <NavbarJS isFixed={isFixed} />
          </>
        )}
        <div className="container md:max-w-9xl md:mx-auto flex flex-col md:py-3  py-1.5 max-w-[90%] mx-auto justify-center h-full gap-3">
          <h1 className="lg:text-[64px] font-[600] head_ttile text-[40px]">
          Ilmiy-texnik axborot markazi
          </h1>
          <p className="md:text-[18px] text-[14px] md:w-[750px] w-[330px] mb-48">
            Ilmiy-texnik axborot markazlari, odatda, ilmiy jurnallar, texnologik
            rivojlanishlar va sanoat ehtiyojlariga mos keladigan axborotni
            taqdim etishga yo'naltirilgan. Shuningdek, ular ilm-fan va
            texnologiyaning rivojlanishiga hissa qo'shadi.
          </p>
        </div>
      </div>

      <div className="h-[100vh] w-full">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
