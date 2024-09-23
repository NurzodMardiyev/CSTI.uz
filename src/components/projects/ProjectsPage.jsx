import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate import qildim
import { csti } from "../../feature/queryApi";
import { useQuery } from "react-query";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // ScrollToPlugin import
import { Flex, Spin } from "antd";

gsap.registerPlugin(ScrollToPlugin); // ScrollToPluginni ro'yxatdan o'tkazish

export default function ProjectsPage() {
  const [isFixed, setIsFixed] = useState(false);
  const [visibleNews, setVisibleNews] = useState(3); // O'ng tomondagi ko'rsatiladigan yangiliklar soni
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate hookdan foydalanish

  const { data, error, isLoading } = useQuery(["projects"], () =>
    csti.projects("")
  );

  const { data: allFiles } = useQuery(["getProjectFiles"], () =>
    csti.getProjectFiles("")
  );

  const downloadAllFiles = () => {
    if (allFiles && allFiles.length > 0) {
      allFiles.forEach((file) => {
        const link = document.createElement("a");
        link.href = file.file;
        link.download = file.file.split("/").pop(); // Fayl nomini URL'dan olish
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      alert("file yo'q");
    }
  };

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
    navigate(`/projects/${newsId}`); // Sahifani ID bilan yangilash
  };

  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[94px] mt-[48px]" : ""}`}>
      <div className="container md:max-w-9xl md:mx-auto  md:flex-row flex-col py-6 max-w-[90%] mx-auto  bg-[#e6e6e6] my-7 md:px-10 px-6 md:py-10 rounded-[15px]">
        <h1 className="md:text-[28px] text-[16px] font-semibold">
          {newdata[0]?.name}
        </h1>
        <div className="flex md:flex-row flex-col mt-4 gap-4">
          <div className="md:max-w-[70%] w-full">
            <div className="overflow-hidden rounded-xl w-full md:h-[600px] h-[300px] ">
              <img
                src={newdata[0]?.image}
                alt="yangilik nomi"
                className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col  my-4">
                <p className="text-[16px] font-[500]">
                  Tijoratlashtirishga tavsiya etilgan loyihalar bazasi:
                </p>
                <div>
                  <span
                    className=" px-10 inline-block py-2 md:text-[14px] text-[10px] font-[500] text-white rounded-full bg-blue-500 cursor-pointer float-right"
                    onClick={downloadAllFiles}
                  >
                    Faylni Yuklab olish
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="md:text-[16px] text-[14px] my-3">
                {newdata[0]?.description}
              </p>
              <span className="text-blue-500 font-semibold text-[10px] w-full md:text-[16px]">
                {newdata[0]?.link}
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
                <h2 className="font-[500] text-[16px] my-2">{card.name}</h2>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                  />
                </div>

                <p className="mt-2 line-clamp-2">{card.description}</p>
              </div>
            ))}
            <button
              onClick={loadMoreNews}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
            >
              Ko'proq loyihalar yuklash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
