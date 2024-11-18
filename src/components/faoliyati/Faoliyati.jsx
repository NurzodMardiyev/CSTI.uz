import { icons } from "../../icons/iconc.js";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi.js";
import { Flex, Spin } from "antd";

export default function Faoliyati() {
  const queryClient = useQueryClient();
  const [show1, setShow1] = useState(false);

  const heroSection = useMutation(csti.activity, {
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

  const { data, error, isLoading } = useQuery(["activity"], () =>
    csti.activity("")
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
    <div className="" id="faoliyat">
      <div className="container md:max-w-9xl md:mx-auto flex md:flex-row md:gap-0 gap-5 flex-col justify-between py-14  max-w-[90%] mx-auto items-center border my-7 md:px-14 px-6 rounded-xl md:py-20">
        <div className=" leftSec md:max-w-[48%] relative">
          <div className="md:max-w-[550px] border h-[550px] overflow-hidden rounded-[20px]">
            <img
              src={data?.image}
              alt="aboutImage"
              className="w-full object-cover h-full rounded-[20px] transition-transform transform hover:scale-110 duration-300"
            />
          </div>
        </div>
        <div className="rightSec md:max-w-[48%]">
          <div>
            <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
              Faoliyatimiz
            </span>
            <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
              {data?.title}
            </h2>
            <p
              className={`md:text-[16px] text-[14px] text-[#737887] font-[400] ${
                show1 ? "line-clamp-none" : "line-clamp-6"
              }  md:line-clamp-none md:mb-4`}
            >
              {data?.info}
            </p>
            <span
              className="text-blue-500 cursor-pointer  mb-4 inline-block md:hidden"
              onClick={() => setShow1(!show1)}
            >
              yana...
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="md:text-[16px] text-[14px] text-gray-800 font-[500] flex items-center gap-2">
              <span className="text-blue-500">{icons.check}</span>
              {data?.comments[0]?.comment}
            </p>
            <p className="md:text-[16px] text-[14px] text-gray-800 font-[500] flex items-center gap-2">
              <span className="text-blue-500">{icons.check}</span>
              {data?.comments[1]?.comment}
            </p>
            <p className="md:text-[16px] text-[14px] text-gray-800 font-[500] flex items-center gap-2">
              <span className="text-blue-500">{icons.check}</span>
              {data?.comments[2]?.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
