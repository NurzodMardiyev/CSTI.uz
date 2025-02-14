import React from "react";

function Workers({ item }) {
  return (
    <div className="w-full border-t border-bl-xl border-br-xl flex flex-col  shadow-sm bg-[#12284C]">
      <div className="w-full  flex-col sm:flex-row  text-white sm:p-5 p-3 flex  lg:items-center gap-5 space-x-4 lg:max-h-[300px]">
        <img
          src={item?.photo}
          alt="Sarvarbek's Photo"
          className="h-[260px] w-[250px] lg:w-[200px] rounded-xl object-cover"
        />

        <div className="h-full flex flex-col justify-start gap-6">
          <div className="">
            <h2 className="text-2xl font-semibold text-white">
              {item?.last_name} {item?.first_name} {item?.middle_name}
            </h2>
            <p className="text-[16px]">{item?.position}</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[16px]">
              <b>📞</b> + {item?.phone}
            </p>
            <p className="font-semibold text-[16px]">
              <strong>📧</strong> {item?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workers;
