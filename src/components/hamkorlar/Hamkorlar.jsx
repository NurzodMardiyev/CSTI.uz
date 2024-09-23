import React from "react";
import partner1 from "../../images/partners1.png";
import partner2 from "../../images/partners2.png";
import partner3 from "../../images/partners3.png";
import partner4 from "../../images/partners4.png";

const Hamkorlar = () => {
  return (
    <div className="overflow-hidden relative w-full z-50 mb-10" id="hamkorlar">
      <div className="flex flex-wrap">
        <div className="flex-shrink-0  justify-center flex flex-wrap md:w-1/4 w-1/2 p-4">
          <img src={partner1} alt="Partner 1" className="w-[300px] h-auto" />
        </div>
        <div className="flex-shrink-0 justify-center flex  flex-wrap md:w-1/4 w-1/2 p-4">
          <img src={partner2} alt="Partner 2" className="w-[300px]  h-auto" />
        </div>
        <div className="flex-shrink-0 justify-center flex  flex-wrap md:w-1/4 w-1/2 p-4">
          <img src={partner3} alt="Partner 3" className="w-[300px]  h-auto" />
        </div>
        <div className="flex-shrink-0 justify-center flex  flex-wrap md:w-1/4 w-1/2 p-4">
          <img src={partner4} alt="Partner 4" className="w-[300px]  h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hamkorlar;
