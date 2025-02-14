import React, { useEffect, useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router-dom";
import { csti } from "../../feature/queryApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Spin } from "antd";

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
        <Spin size="large" />
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div >
      <div className="container bg-white md:max-w-9xl md:mx-auto flex justify-between max-w-[90%] py-14 mx-auto items-start border-[1.5px] border-gray-300 my-7 px-4 md:px-8 rounded-xl md:py-20 flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between gap-4">
          <div>
            <span className="head_title text-[12px] md:text-[16px] text-blue-500 font-[600] uppercase">
              Loyihalar
            </span>
            <h2 className="font-[700] text-[20px] md:text-[40px] text-gray-800 leading-[28px] md:leading-[50px]">
              Bizning Loyihalar
            </h2>
          </div>
          <div>
            <Link
              className="bg-blue-500 text-white text-[12px] md:text-[16px] px-3 pb-2 pt-1 md:px-6 md:py-2 rounded-md md:rounded-xl"
              to={`projects/${randomProjects.length}`}
            >
              Yana ko'rish
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {randomProjects.map((card) => {
            return (
              <Link
                to={`/projects/${card.id}`}
                key={card.id}
                className="border rounded-xl p-4 hover:shadow-lg transition-all duration-150"
              >
                <h2 className="flex items-start font-[500] text-[14px] md:text-[20px] gap-2">
                  <GoProjectRoadmap className="w-[20px] mt-1" />
                  <span className="flex-1"> {card.name}</span>
                </h2>
                <div className="w-full h-[200px] md:h-[250px] overflow-hidden rounded-xl my-4">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-[300px]"
                  />
                </div>
                <p className="line-clamp-2 text-[12px] md:text-[14px] text-gray-600">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
