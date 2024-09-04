import React from "react";
import img from "../../images/tuzilma.png";

export default function Tuzilma() {
  return (
    <div>
      <div className="container md:max-w-9xl md:mx-auto flex md:flex-row md:gap-0 gap-5 flex-col justify-between py-14  max-w-[90%] mx-auto items-center border my-7 md:px-14 px-6 rounded-xl md:py-20">
        <img src={img} alt="Tashkiliy tuzilma" className="w-full" />
      </div>
    </div>
  );
}
