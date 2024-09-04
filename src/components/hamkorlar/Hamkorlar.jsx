import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partner1 from "../../images/partners1.png";
import partner2 from "../../images/partners2.png";
import partner3 from "../../images/partners3.png";
import partner4 from "../../images/partners4.png";

gsap.registerPlugin(ScrollTrigger);

const Hamkorlar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.children;

    gsap.set(container, { xPercent: -100 });

    gsap.to(container, {
      xPercent: -100 - 100 / images.length, // Har bir rasmni siljitish
      duration: images.length * 2, // Harakat davomiyligi
      ease: "none",
      repeat: -1, // Doimiy qaytarish
      modifiers: {
        xPercent: gsap.utils.wrap(-100 - 100 / images.length, 0),
      },
    });
  }, []);

  return (
    <div className="overflow-hidden relative w-full z-50 mb-10" id="hamkorlar">
      <div className="flex" ref={containerRef}>
        {/* Rasmlar ketma-ketligini ikki marta o'rnatamiz */}
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner1} alt="Partner 1" className="w-40 h-auto" />
        </div>
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner2} alt="Partner 2" className="w-40 h-auto" />
        </div>
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner3} alt="Partner 3" className="w-40 h-auto" />
        </div>
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner4} alt="Partner 4" className="w-40 h-auto" />
        </div>
        {/* Takrorlanadigan rasmlar */}
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner1} alt="Partner 1" className="w-40 h-auto" />
        </div>
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner2} alt="Partner 2" className="w-40 h-auto" />
        </div>
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner3} alt="Partner 3" className="w-40 h-auto" />
        </div>
        <div className="flex-shrink-0 w-1/4 p-4">
          <img src={partner4} alt="Partner 4" className="w-40 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hamkorlar;
