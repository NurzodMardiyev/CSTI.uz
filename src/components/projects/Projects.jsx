import React, { useEffect, useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router-dom";
import { csti } from "../../feature/queryApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Flex, Spin } from "antd";

export default function Projects() {
  const queryClient = useQueryClient();
  const [randomProjects, setRandomProjects] = useState([]);

  const project = useMutation(csti.projects, {
    onSuccess: () => {
      queryClient.invalidateQueries("heroSection");
    },
    onError: (error) => {
      console.log("Mutation error:", error); // Xatolik haqida batafsil ma'lumot
    },
  });

  useEffect(() => {
    project.mutate(); // Mutationni boshlash
  }, []);

  const { data, error, isLoading } = useQuery(["projects"], () =>
    csti.projects("")
  );

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
    <div>
      <div className="container bg-[#fafafa] md:max-w-9xl md:mx-auto justify-between py-14  max-w-[90%] mx-auto items-center border my-7 md:px-14 px-6 rounded-xl md:py-20">
        <div className="flex items-center w-full justify-between">
          <div>
            <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
              Loyihalar
            </span>
            <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
              Bizning Loyihalar
            </h2>
          </div>
          <div>
            <Link
              className="bg-blue-500 text-white md:px-6 md:py-2 md:rounded-xl text-[12px] px-3 py-1 md:text-[16px] rounded-sm "
              to={`projects/${randomProjects.length}`}
            >
              Yana ko'rish
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 md:gap-4 gap-5">
          {randomProjects.map((card) => {
            return (
              <Link
                to={`/projects/${card.id}`}
                key={card.id}
                className="col-span-2 border rounded-xl md:p-6 p-2 hover:shadow-lg transition-all duration-150 "
              >
                <h2 className="flex items-start font-[500] md:text-[20px] text-[14px] gap-2 ">
                  <GoProjectRoadmap className="w-[20px] mt-2" />
                  <span className="flex-1"> {card.name}</span>
                </h2>
                <div className="w-full md:h-[250px] h-[200] overflow-hidden rounded-xl my-4">
                  <img
                    src={card.image}
                    alt={card.name}
                    className=" transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                  />
                </div>
                <p className="line-clamp-2 text-[14px]">{card.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
