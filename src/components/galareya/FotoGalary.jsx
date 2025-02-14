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
  const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const randomGallary = data ? getRandomItems(data, data?.length) : [];
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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

  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[94px] mt-[48px]" : ""}`}>
      <div className="container mx-auto py-6 px-6 bg-[#e6e6e6] my-7 md:px-10 rounded-[15px]">
        <div>
          <span className="head_title text-blue-500 font-[600] uppercase text-[12px] md:text-[16px]">
            Fotogalareya
          </span>
          <h2 className="font-[700] text-gray-800 md:text-[40px] text-[24px] md:leading-[50px] mb-4">
            Fotogalareya
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
          {randomGallary?.map((img, index) => (
            <div
              className={`col-span-1 overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
              key={img.id}>
              <img
                src={img.image}
                alt="Gallery Item"
                className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]"
                onClick={() => openModal(img.image)}
              />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex  items-center justify-center z-[1000]"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-2 rounded-xl h-[80%] relative max-w-[90%] cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 text-white font-bold bg-red-500 p-1 px-[10px] rounded-full">
              X
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain h-full w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}


