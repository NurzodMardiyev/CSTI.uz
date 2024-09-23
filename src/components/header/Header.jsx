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

export default function HeaderJS() {
  const [isFixed, setIsFixed] = useState(false);

  const queryClient = useQueryClient();

  const heroSection = useMutation(csti.heroSection, {
    onSuccess: () => {
      queryClient.invalidateQueries("heroSection");
    },
    onError: (error) => {
      console.log("Mutation error:", error); // Xatolik haqida batafsil ma'lumot
    },
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
    <div className={`relative z-10 ${isFixed ? "md:mt-[93px] mt-[48px]" : ""}`}>
      <div className="headerInfo absolute w-full h-[80vh] z-10 text-white">
        <div className="container md:max-w-9xl md:mx-auto flex flex-col  md:py-3 py-1.5 max-w-[90%] mx-auto justify-center h-full gap-3">
          <h1 className="md:text-[54px] font-[600] head_ttile text-[40px]">
            {data[0]?.title}
          </h1>
          <p className="md:text-[16px] text-[14px] md:w-[750px] w-[330px] ]">
            {data[0]?.description}
          </p>
          <div></div>
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
          {data?.map((item) => (
            <SwiperSlide
              className="w-full h-[60vh] rounded-[10px]"
              key={item.id}
            >
              <img
                src={item.image}
                alt="header 1"
                className="w-full h-[100%]"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
