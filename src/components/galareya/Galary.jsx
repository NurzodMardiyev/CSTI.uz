import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi";
import { Flex, Spin } from "antd";

export default function Galary() {
  const queryClient = useQueryClient();
  const heroSection = useMutation(csti.news, {
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

  const { data, error, isLoading } = useQuery(["gallary"], () =>
    csti.gallary("")
  );

  const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random()); // Array ni shuffle qiladi
    return shuffled.slice(0, num); // Birinchi 8 ta elementni qaytaradi
  };

  const randomGallary = data ? getRandomItems(data, 8) : [];

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
      <div className="container md:max-w-9xl md:mx-auto flex justify-between  max-w-[90%] py-14 mx-auto items-start border my-7 px-8 rounded-xl md:py-20 flex-col">
        <div>
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
            Galereya
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Ilmiy texnik axborot markazi fotogalereyasi
          </h2>
          <p className="md:text-[16px] text-[14px] text-[#737887] font-[400] ">
            Oʻzbekiston Respublikasi Prezidentining 2017-yil 30-noyabrdagi
            “Oʻzbekiston Respublikasi innovatsion rivojlanish vazirligi
          </p>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-4 space-y-6 grid-flow-row auto-rows-auto gap-x-4 md:gap-8">
          {randomGallary?.map((img, index) => (
            <div
              className={`col-span-2 md:max-w-[420px] md:h-[300px] h-[100px] max-w-[140px] rounded-xl block overflow-hidden  ${
                index === 0 ? "mt-6" : ""
              }`}
              key={img.id}
            >
              <img
                src={img.image}
                alt="1"
                className="object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
