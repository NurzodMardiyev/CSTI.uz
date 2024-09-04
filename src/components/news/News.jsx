import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import image from "../../images/header2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

  const cards = [
    {
      id: 1,
      info: "lorem23It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
    {
      id: 2,
      info: "lorem23It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed  o’rinbosari",
      title: "Rahimov Farhod Xushboqovich",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23",
    },
    {
      id: 3,
      info: "lorem23It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed  o’rinbosari:",
      title: "Rayimov Xurshidjon G’ayratjon o’g’li",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23",
    },
    {
      id: 4,
      info: "lorem23It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
    {
      id: 5,
      info: "lorem23It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
    {
      id: 6,
      info: "lorem23It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
  ];

  return (
    <div className="md:mb-10" id="yangiliklar">
      <div className="container md:max-w-9xl md:mx-auto justify-between py-14 max-w-[90%] mx-auto items-center bg-[#1c1c25] my-7 md:px-10 px-6 md:py-10 rounded-[15px]">
        <div className="md:mt-16 px-6 md:px-0">
          <span className="md:text-[16px] text-[12px] font-[600] text-white uppercase">
            yangiliklar
          </span>
          <h2 className="md:text-[40px] text-[24px] font-[700] text-white news_title">
            Eng So'ngi yangiliklar to'plami
          </h2>
        </div>
        <Slider {...settings} className="mb-10 md:mt-8 mt-6 ">
          {cards.map((card) => (
            <div
              key={card.id}
              className=" flex justify-center text-center w-full items-center cardOne py-5 "
            >
              <div className=" flex justify-center w-full ">
                <div className="flex justify-center flex-col items-center w-full text-center py-10 px-5 mx-5 border border-slate-700 rounded-2xl">
                  <div className=" overflow-hidden rounded-[20px]">
                    <img
                      src={image}
                      alt="Raxbariyat azo'si"
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-white rounded-[10px] p-5 mt-4">
                    <div className="flex flex-col  items-start">
                      <h3 className="md:text-[24px] text-[20px] font-[700] text-start">
                        {card.title}
                      </h3>
                      <span className="text-[14px] font-[400] text-start line-clamp-4">
                        {card.info}:
                      </span>
                      <button className="text-blue-500">detail...</button>
                    </div>
                    <div className="text-start">
                      <span className="text-[13px] font-[600]">Tel: </span>
                      <span>{card.tel}</span>
                    </div>
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

export default News;
