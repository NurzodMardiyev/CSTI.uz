import React from "react";
import partner1 from "../../images/partners1.png";
import partner2 from "../../images/partners2.png";
import partner3 from "../../images/partners3.png";
import partner4 from "../../images/partners4.png";

const Hamkorlar = () => {
  return (
    <div className="container bg-[#fafafa]/30 md:max-w-9xl md:mx-auto justify-between py-6 max-w-[90%] mx-auto items-center border mb-20 md:px-14 px-6 rounded-xl md:py-10">
      <div className="flex flex-col md:flex-row  w-full justify-between mb-8">
        <div className="text-left">
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase">
            Hamkorlar
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Hamkorlar
          </h2>
        </div>
      </div>
      <div
        className="overflow-hidden relative w-full z-50 mb-10"
        id="hamkorlar">
        <div className="flex animate-scroll gap-4">
          {/* Har bir rasm uchun loop */}
          {[partner1, partner2, partner3, partner4, partner1, partner2, partner3, partner4].map(
            (partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center p-4 w-[50%] sm:w-[33%] md:w-[25%]">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="rounded-xl w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] h-auto"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hamkorlar;
