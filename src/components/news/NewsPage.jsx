import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate import qildim
import { csti } from "../../feature/queryApi";
import { useQuery } from "react-query";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // ScrollToPlugin import
import { Flex, Spin } from "antd";

gsap.registerPlugin(ScrollToPlugin); // ScrollToPluginni ro'yxatdan o'tkazish

export default function NewsPage() {
  const [isFixed, setIsFixed] = useState(false);
  const [visibleNews, setVisibleNews] = useState(3); // O'ng tomondagi ko'rsatiladigan yangiliklar soni
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate hookdan foydalanish

  const { data, error, isLoading } = useQuery(["news"], () => csti.news(""));

  const newdata = data?.filter((item) => item.id === Number(id));

  useEffect(() => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: 0, autoKill: true } }); // GSAP bilan scrollni tepadan boshlash
  }, [id]);

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

  // Qo'shimcha yangiliklarni yuklash funksiyasi
  const loadMoreNews = () => {
    setVisibleNews((prev) => prev + 3); // Har safar 3ta yangilik qo'shiladi
  };

  if (isLoading)
    return (
      <div className="absolute w-full h-[100vh] top-0 left-0 flex items-center justify-center">
        <Flex>
          <Spin size="large" />
        </Flex>
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  // Yangilikni bosganda IDni yangilash va sahifani yangilash
  const handleNewsClick = (newsId) => {
    navigate(`/newspage/${newsId}`); // Sahifani ID bilan yangilash
  };

  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[94px] mt-[48px]" : ""}`}>
      <div className="container md:max-w-9xl md:mx-auto  md:flex-row flex-col py-6 max-w-[90%] mx-auto  bg-[#e6e6e6] my-7 md:px-10 px-6 md:py-10 rounded-[15px]">
        <h1 className="md:text-[28px] text-[16px] font-semibold">
          {newdata[0]?.title}
        </h1>
        <div className="flex md:flex-row flex-col mt-4 gap-4">
          <div className="md:max-w-[70%] w-full">
            <div className="overflow-hidden rounded-xl w-full md:h-[600px] h-[300px] ">
              <img
                src={newdata[0]?.images[0]?.image}
                alt="yangilik nomi"
                className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
              />
            </div>
            <span className="inline-block px-10 py-2 my-4 md:text-[14px] text-[10px] font-[500] rounded-full bg-white">
              {newdata[0]?.date}
            </span>
            <div className="flex gap-2  md:mb-2">
              <div
                className={`overflow-hidden rounded-xl md:max-w-[300px] md:h-[200px] w-1/2 ${
                  newdata[0]?.images[1] ? "block" : "hidden"
                }`}
              >
                <img
                  src={newdata[0]?.images[1]?.image}
                  alt="yangilik nomi"
                  className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full md:h-full"
                />
              </div>
              <div
                className={`overflow-hidden rounded-xl md:max-w-[300px] md:h-[200px] w-1/2 ${
                  newdata[0]?.images[2] ? "block" : "hidden"
                }`}
              >
                <img
                  src={newdata[0]?.images[2]?.image}
                  alt="yangilik nomi"
                  className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <p className="md:text-[16px] text-[14px]">
                {newdata[0]?.content}
              </p>
              <span className="text-blue-500 font-semibold text-[10px] w-full">
                {newdata[0]?.source}
              </span>
            </div>
          </div>
          <div className="bg-[#ededed] rounded-xl  p-6 md:max-w-[30%] w-full flex flex-col gap-4">
            {data?.slice(0, visibleNews).map((card) => (
              <div
                key={card.id}
                className="bg-white p-4 rounded-xl inline-block cursor-pointer"
                onClick={() => handleNewsClick(card.id)} // Yangilik bosilganda ID o'zgaradi
              >
                <span>{card?.date}</span>
                <h2 className="font-[500] text-[16px] my-2">{card.title}</h2>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={card.images[0].image}
                    alt={card.title}
                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 line-clamp-2">{card.title}</p>
              </div>
            ))}
            {/* Qo'shimcha yangiliklarni yuklash tugmasi */}
            <button
              onClick={loadMoreNews}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
            >
              Ko'proq yangiliklar yuklash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
