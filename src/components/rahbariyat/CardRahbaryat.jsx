import React, { useState } from "react";
import Leader from "./Leader";
import { useMutation } from "react-query";
import { csti } from "../../feature/queryApi";

function CardRahbaryat({ item, oneCard, setOneCard }) {
  const [departmentId, setDepartmentId] = useState(null);
  const {
    mutate,
    data: workers,
    isLoading,
    error
  } = useMutation(csti.departmentId, {
    onSuccess: (workers) => {},
    onError: (error) => {
      console.error("Error fetching department:", error.message);
    }
  });

  const handleLeader = () => {
    setOneCard(item?.id);
    if (item.id) {
      mutate(item.id);
    }
  };

  return (
    <div className="w-full h-full flex flex-col rounded-xl shadow-sm bg-[#12284C]">
      <div className=" h-auto w-full text-white p-3 sm:p-5 flex flex-col sm:flex-row items-start gap-5 space-x-4 lg:max-h-[300px]">
        <img
          src={"https://api.csti.uz" + item?.head?.photo}
          alt="Sarvarbek's Photo"
          className="h-[260px] w-[300px] lg:w-[200px] rounded-xl object-cover mb-4 md:mb-0"
        />

        <div className="h-full flex flex-col justify-start lg:gap-6  w-full ">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              {item?.head?.last_name} {item?.head?.first_name}{" "}
              {item?.head?.middle_name}
            </h2>
            <p className="text-[16px]">{item?.head?.position}</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[16px]">
              <b>📞</b> + {item?.head?.phone}
            </p>
            <p className="font-semibold text-[16px]">
              <strong>📧</strong> {item?.head?.email}
            </p>
          </div>
          <div
            onClick={() => (!oneCard ? handleLeader() : setOneCard(0))}
            className="border cursor-pointer text-center py-3 px-5 max-w-max text-lg mt-4 md:max-w-28">
            {oneCard ? "Yopish" : "Batafsil..."}
          </div>
        </div>
      </div>
      {oneCard ? <Leader workers={workers} leader={item} /> : ""}
    </div>
  );
}

export default CardRahbaryat;
