import React, { useEffect, useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router-dom";
import { csti } from "../../feature/queryApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Flex, Spin } from "antd";

export default function Deyjistlar() {
  const queryClient = useQueryClient();
  const [randomProjects, setRandomProjects] = useState([]);

  const dyjes = useMutation(csti.dyjes, {
    onSuccess: () => {
      queryClient.invalidateQueries("heroSection");
    },
    onError: (error) => {
      console.log("Mutation error:", error);
    }
  });

  useEffect(() => {
    dyjes.mutate();
  }, []);

  const { data, error, isLoading } = useQuery(["dyjes"], () => csti.dyjes(""));

  useEffect(() => {
    if (data) {
      const getRandomItems = (arr, count) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };

      setRandomProjects(getRandomItems(data, 6));
    }
  }, [data]);

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
    <div className="mb-20">
      <div className="container bg-[#fafafa] md:max-w-9xl md:mx-auto justify-between py-3 max-w-[90%] mx-auto items-center border mb-7 md:px-14 px-6 rounded-xl md:py-10">
        <div className="flex items-center w-full justify-between">
          <div>
            <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
              Deyjeslar
            </span>
            <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
              Deyjestlar
            </h2>
          </div>
          <div>
            <Link
              className="bg-blue-500 text-white md:px-6 md:py-2 md:rounded-xl text-[12px] px-3 py-1 md:text-[16px] rounded-sm"
              to={`dayjes/${data?.length}`}
            >
              Yana ko'rish
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomProjects?.map((card) => {
            return (
              <Link
                to={`/dayjes/${card.id}`}
                key={card.id}
                className="col-span-1 border rounded-xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-">
                  <div className="overflow-hidden rounded-xl w-full h-[200px]">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="rounded-xl  transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-[500] text-[18px] mt-4 line-clamp-2">{card.name}</h3>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">{card.content}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
