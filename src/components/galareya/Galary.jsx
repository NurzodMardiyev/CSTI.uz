import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi";
import { Flex, Spin } from "antd";
import { Link } from "react-router-dom";

export default function Galary() {
  const queryClient = useQueryClient();
  const heroSection = useMutation(csti.news, {
    onSuccess: () => {
      queryClient.invalidateQueries("heroSection");
    },
    onError: (error) => {
      console.log("Mutation error:", error);
    },
  });

  useEffect(() => {
    heroSection.mutate();
  }, []);

  const { data, error, isLoading } = useQuery(["gallary"], () =>
    csti.gallary("")
  );

  const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomGallary = data ? getRandomItems(data, 6) : [];

  // State to manage modal visibility and selected image
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
    <div id="fotogalereya">
      <div className="container md:max-w-9xl md:mx-auto flex justify-between max-w-[90%] py-14 mx-auto items-start border-[1.5px] border-gray-300 my-7 px-4 md:px-8 rounded-xl md:py-20 flex-col">
        <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
              Galereya
            </span>
            <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Ilmiy-texnik axborot markazi  fotogalereyasi
            </h2>
            <p className="md:text-[16px] text-[14px] text-[#737887] font-[400]">
              Oʻzbekiston Respublikasi Prezidentining 2017-yil 30-noyabrdagi
              “Oʻzbekiston Respublikasi innovatsion rivojlanish vazirligi
            </p>
          </div>
          <Link
            className="bg-blue-500 text-white text-[12px] md:text-[16px] px-3 pb-2 pt-1 md:px-6 md:py-2 rounded-md md:rounded-xl"
            to={`/photogallery`}>
            Yana ko'rish
          </Link>
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
                onClick={() => openModal(img.image)} // Open modal on click
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
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
