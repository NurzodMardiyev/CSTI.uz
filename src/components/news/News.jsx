import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi";
import { Link } from "react-router-dom";
import { Flex, Spin } from "antd";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".news_title", {
  scrollTrigger: {
    trigger: ".scroll-element",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});
// Maxsus oldinga o'tkazish tugmasi
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

// Maxsus orqaga o'tkazish tugmasi
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const News = () => {
  const queryClient = useQueryClient();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400, // sm va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 3, // 1ta slayd ko'rsatadi
        },
      },
      {
        breakpoint: 1000, // sm va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 2, // 1ta slayd ko'rsatadi
        },
      },
      {
        breakpoint: 767, // mobil va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 1, // 1ta slayd ko'rsatadi
        },
      },
    ],
  };

  const news = useMutation(csti.news, {
    onSuccess: () => {
      queryClient.invalidateQueries("heroSection");
    },
    onError: (error) => {
      console.log("Mutation error:", error); // Xatolik haqida batafsil ma'lumot
    },
  });

  useEffect(() => {
    news.mutate(); // Mutationni boshlash
  }, []);

  const { data, error, isLoading } = useQuery(["news"], () => csti.news(""));

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

    <>
      {/* Asosiy page */}
      <div className="md:mb-10" id="yangiliklar">
        <div className="container md:max-w-9xl md:mx-auto justify-between  max-w-[90%] mx-auto items-center  bg-[#12284C]  md:px-10 px-6  rounded-[15px]">
          <div className="md:mt-16 px-6 py-7 md:px-0">
            <span className="md:text-[16px] text-[12px] mt-4 font-[600] text-[#3F83F8] uppercase">
              yangiliklar
            </span>
            <h2 className="md:text-[40px] text-[24px] font-[700] text-white ">
              So'nggi yangiliklar
            </h2>
          </div>
          <Slider {...settings} className="mb-10  flex">
            {data?.map((card) => (
              <div
                key={card.id}
                className=" flex justify-center  w-full items-center cardOne py-5 "
              >
                <div className=" flex justify-center w-full">
                  <Link
                    to={`newspage/${card.id}`}
                    className="flex justify-center flex-col items-center w-full text-center py-10 px-5 mx-5 border border-slate-700 rounded-2xl cursor-pointer"
                  >
                    <div className=" overflow-hidden rounded-[20px]">
                      <img
                        src={card.images[0].image}
                        alt={card.title}
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full  h-[250px]"
                      />
                    </div>
                    <div className="text-white rounded-[10px] p-5 mt-4 w-full">
                      <div className="flex flex-col w-full  items-start">
                        <h3 className="md:text-[24px] text-[20px] font-[700] text-start line-clamp-1">
                          {card.title}
                        </h3>
                        <span className="text-[14px] font-[400] text-start line-clamp-2">
                          {card.content}
                        </span>
                        <Link to={card.source} className="text-blue-500">
                          batafsil...
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default News;
