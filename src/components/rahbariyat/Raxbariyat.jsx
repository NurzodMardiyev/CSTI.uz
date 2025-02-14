import React, { useState } from "react";
import { useQuery } from "react-query";
import { csti } from "../../feature/queryApi";
import { Card, Flex, Spin } from "antd";
import CardRahbaryat from "./CardRahbaryat";

const Rahbariyat = () => {
  const { data, error, isLoading } = useQuery("department", csti.department);
  const [filter, setFilter] = useState("leadership");
  const [oneCard, setOneCard] = useState(0);

  if (isLoading)
    return (
      <div className="absolute w-full h-[100vh] top-0 left-0 flex items-center justify-center">
        <Flex>
          <Spin size="large" />
        </Flex>
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  const filteredData = data?.filter((item) => {
    if (filter === "leadership") {
      return item?.is_leadership === true;
    }
    if (filter === "management") {
      return item?.type === 1 && !item?.is_leadership;
    }
    if (filter === "departments") {
      return item?.type === 2 && !item?.is_leadership;
    }
    if (filter === "assistant") {
      return item?.type === 3 && !item?.is_leadership;
    }
    if (filter === "consultant") {
      return item?.type === 4 && !item?.is_leadership;
    }
    return true;
  });

  return (
    <div id="rahbariyat">
      <div className="container py-14 max-w-[90%] mx-auto md:py-10 rounded-[15px]">
        <div className="grid gap-4 grid-cols-1  lg:grid-cols-4">
          {/* Main Content (Left Section) */}
          <div className="lg:col-span-3 rounded-lg  flex flex-col gap-2">
            {filteredData?.map((item) =>
              oneCard ? (
                oneCard === item?.id && (
                  <CardRahbaryat
                    oneCard={oneCard}
                    setOneCard={setOneCard}
                    key={item.id}
                    item={item}
                  />
                )
              ) : (
                <CardRahbaryat
                  oneCard={oneCard}
                  setOneCard={setOneCard}
                  key={item.id}
                  item={item}
                />
              )
            )}
          </div>

          {/* Sidebar (Right Section) */}
          <div className="col-span-1 w-full rounded-xl  text-white  h-auto ">
            <div className="h-68 py-4 rounded-xl bg-[#12284C]">
              <h2 className="text-2xl font-medium px-4">Tuzilma</h2>
              <div className="flex flex-col text-xl px-4 font-medium gap-3 mt-2 select-none">
                <p
                  className={`cursor-pointer px-4 pb-0.5 transition-all rounded-md ${
                    filter === "leadership"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-[#1C3B72] hover:text-white"
                  }`}
                  onClick={() => {
                    setFilter("leadership");
                    setOneCard(0);
                  }}>
                  Rahbaryat
                </p>
                <p
                  className={`cursor-pointer px-4 pb-0.5 transition-all rounded-md ${
                    filter === "assistant"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-[#1C3B72] hover:text-white"
                  }`}
                  onClick={() => {
                    setOneCard(0);
                    setFilter("assistant");
                  }}>
                  Maslahatchi
                </p>
                <p
                  className={`cursor-pointer px-4 pb-0.5 transition-all rounded-md ${
                    filter === "consultant"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-[#1C3B72] hover:text-white"
                  }`}
                  onClick={() => {
                    setOneCard(0);
                    setFilter("consultant");
                  }}>
                  Direktor yordamchisi
                </p>
                <p
                  className={`cursor-pointer px-4 pb-0.5 transition-all rounded-md ${
                    filter === "management"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-[#1C3B72] hover:text-white"
                  }`}
                  onClick={() => {
                    setOneCard(0);
                    setFilter("management");
                  }}>
                  Boshqarmalar
                </p>
                <p
                  className={`cursor-pointer px-4 pb-0.5 transition-all rounded-md ${
                    filter === "departments"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-[#1C3B72] hover:text-white"
                  }`}
                  onClick={() => {
                    setOneCard(0);
                    setFilter("departments");
                  }}>
                  Bo'limlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rahbariyat;
