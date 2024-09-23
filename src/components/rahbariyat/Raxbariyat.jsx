import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi";
import { Flex, Spin } from "antd";

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

const Rahbariyat = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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

  const queryClient = useQueryClient();

  const heroSection = useMutation(csti.leaders, {
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

  const { data, error, isLoading } = useQuery(["leaders"], () =>
    csti.leaders("")
  );

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
    <div className="md:mb-10" id="rahbariyat">
      <div className="container md:max-w-9xl md:mx-auto justify-between py-14 max-w-[90%] mx-auto items-center bg-blue-500 my-7 px-10 md:py-10 rounded-[15px]">
        <div className="md:mt-16">
          <span className="md:text-[16px] text-[12px] font-[600] text-white uppercase">
            Rahbariyat
          </span>
          <h2 className="md:text-[40px] text-[24px] font-[700] text-white ">
            Rahbariyat jamoasi
          </h2>
        </div>
        <Slider {...settings} className="md:mb-10 mt-8">
          {data?.map((card) => (
            <div key={card.id}>
              <div className="w-[300px]">
                <div className="w-[300px] h-[200px] overflow-hidden rounded-[20px]">
                  <img
                    src={card.image}
                    alt="Raxbariyat azo'si"
                    className=" transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-[10px] p-5 mt-4">
                  <div className="flex flex-col items-center">
                    <h3 className="md:text-[24px] text-[16px] font-[700] text-center">
                      {card.name}
                    </h3>
                    <span className="text-[14px] font-[500]">
                      {card.position}:
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[13px] font-[600]">Tel: </span>
                    <span>{card.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Rahbariyat;
