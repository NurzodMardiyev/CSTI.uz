import React, { useState, useEffect } from "react";
import HeadNavbar from "../components/navbar/HeadNavbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavbarJS from "../components/navbar/NavbarJS";

export default function SCTI() {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full  h-full">
      {isFixed || (location.pathname !== "/" && <NavbarJS isFixed={isFixed} />)}
      {isFixed && location.pathname == "/" && <NavbarJS isFixed={isFixed} />}
      <div className="w-full h-full flex flex-col justify-between">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
