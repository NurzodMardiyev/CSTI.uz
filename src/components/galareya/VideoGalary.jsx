import React, { useEffect, useState } from "react";
import { csti } from "../../feature/queryApi";
import { useQuery } from "react-query";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // ScrollToPlugin import
import { Flex, Spin } from "antd";

gsap.registerPlugin(ScrollToPlugin); // ScrollToPluginni ro'yxatdan o'tkazish

export default function VideoGallery() {
  const [isFixed, setIsFixed] = useState(false);

  const { data, error, isLoading } = useQuery(["videogallery"], () =>
    csti.videogallery("")
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

  // YouTube URL-larini iframe uchun mos shaklga aylantirish
  const getYoutubeEmbedUrl = (url) => {
    let videoId = null;

    // Qisqartirilgan YouTube URL (youtu.be)
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0]; // ID ni olish
    }
    // To'liq YouTube URL (youtube.com/watch?v=)
    else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1]?.split("&")[0]; // Parametrlarni bo'lish
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  // To'liq ekran rejimiga o'tish uchun funksiyani qo'shish
  const handleFullScreen = (event) => {
    const iframe = event.target;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      // Firefox
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      // IE/Edge
      iframe.msRequestFullscreen();
    }
  };

  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[94px] mt-[48px]" : ""}`}>
      <div className="container md:max-w-9xl md:mx-auto md:flex-row flex-col py-6 max-w-[90%] mx-auto bg-[#e6e6e6] my-7 md:px-10 px-6 md:py-10 rounded-[15px]">
        <div>
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
            Videogalareya
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Videogalareya
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {data?.map((video, index) => (
            <div
              key={video.id}
              className={`rounded-xl overflow-hidden transition-transform duration-300 ease-in-out ${
                index === 0 ? "mt-6" : ""
              }`}>
              <iframe
                src={getYoutubeEmbedUrl(video.video)} // YouTube videoni iframe ichiga qo'yish
                title={`YouTube video player ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl w-full"
                onClick={handleFullScreen} // Fullscreen rejimiga o'tish uchun klikni boshqarish
              ></iframe>
              {/* Description added below the video */}
              <p className="text-sm text-black  mt-2">
                {video?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
