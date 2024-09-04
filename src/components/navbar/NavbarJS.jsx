import React, { useEffect, useState } from "react";
import logo from "../../images/logo_center.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "../../App.css";
import { icons } from "../../icons/iconc.js";

const menuNav = [
  { title: "Rahbariyat", to: "rahbariyat", smooth: true },
  { title: "Faoliyat", to: "faoliyat", smooth: true },
  { title: "Yangiliklar", to: "yangiliklar", smooth: true },
  { title: "Xalqaro hamkorlik", to: "hamkorlar", smooth: true },
  { title: "Dayjestlar", to: "dayjestlar", smooth: true },
];

export default function NavbarJS() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const items1 = [
    {
      key: "1",
      label:
        location.pathname === "/" ? (
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-[14px] font-[500] uppercase"
          >
            Markaz haqida
          </Link>
        ) : (
          <RouterLink to="/" className="text-[14px] font-[500] uppercase">
            Markaz haqida
          </RouterLink>
        ),
    },
    {
      key: "2",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to="/tuzilma"
          className="text-[14px] font-[500] uppercase"
        >
          Tashkiliy tuzilma
        </RouterLink>
      ),
    },
  ];

  const items2 = [
    {
      key: "1",
      label: (
        <Link
          rel="noopener noreferrer"
          to="loyihalar"
          className="text-[14px] font-[500] uppercase"
        >
          Loyihalar
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          rel="noopener noreferrer"
          to="fotogalereya"
          className="text-[14px] font-[500] uppercase"
        >
          Fotogalereya
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="videogalereya"
          className="text-[14px] font-[500] uppercase"
        >
          Videogalereya
        </Link>
      ),
    },
  ];

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

  const handleCloseMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div
      className={`${
        isFixed ? "fixed opacity-100 " : "opacity-100"
      } bg-white top-0 left-0 z-[999] w-full transition-opacity duration-300`}
    >
      <div className="container md:max-w-9xl md:mx-auto flex justify-between md:py-3 py-1.5 max-w-[90%] mx-auto items-center">
        <Link
          className="logoSec  flex items-center gap-3"
          to="#"
          smooth={true}
          duration={500}
        >
          <img src={logo} alt="csti logo" className="md:w-[70px]  w-[30px]" />
          <p className="md:text-[20px] font-semibold md:mb-1 text-[12px] md:leading-[25px]">
            Ilmiy texnik <br /> axborot markazi
          </p>
        </Link>
        <div className="menu hidden md:block">
          <div className="flex space-x-4 items-center uppercase font-[600] text-[14px]">
            <Dropdown menu={{ items: items1 }}>
              <Link
                onClick={(e) => e.preventDefault()}
                to="#"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <Space>
                  Bosh Sahifa
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {menuNav.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                {item.title}
              </Link>
            ))}
            <Dropdown menu={{ items: items2 }}>
              <Link className="cursor-pointer">
                <Space>
                  Galereyalar
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            <Link
              to="contact"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Biz bilan bog'lanish
            </Link>
          </div>
        </div>
        <div
          className="cursor-pointer block md:hidden"
          onClick={() => setOpenMenu(true)}
        >
          {icons.burger}
        </div>
        <div
          className={`absolute ${
            openMenu ? "w-full" : "overflow-hidden w-0"
          } transition-all duration-150 flex justify-start min-h-[100vh] items-center border top-0 left-0 menuBg `}
          onClick={() => handleCloseMenu()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-start uppercase font-[600] text-[14px] border w-[50%] bg-white min-h-[100vh] opacity-100 gap-4 border-e-2 border-e-blue-500  relative"
          >
            <div
              className="absolute top-10 right-[-15px] z-20 text-[28px]  bg-blue-500 text-white rounded"
              onClick={handleCloseMenu}
            >
              {icons.close}
            </div>
            <Link
              className="logoSec  flex items-start gap-3 pt-8 pb-6 bg-blue-100 ps-5 pe-3 w-full"
              onClick={handleCloseMenu}
              to="#"
              smooth={true}
              duration={500}
            >
              <img
                src={logo}
                alt="csti logo"
                className="md:max-w-[70px]  w-[30px]"
              />
              <p className="md:text-[20x] font-semibold md:mb-2 text-[12px]">
                Ilmiy texnik axborot markazi
              </p>
            </Link>
            <Dropdown menu={{ items: items1 }} className="px-5">
              <Link className="" onClick={(e) => e.preventDefault()}>
                <Space>
                  Bosh Sahifa
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {menuNav.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="px-5"
                onClick={handleCloseMenu}
                smooth={item.smooth}
                duration={500}
              >
                {item.title}
              </Link>
            ))}
            <Dropdown menu={{ items: items2 }} className="px-5">
              <Link className="cursor-pointer">
                <Space>
                  Galereyalar
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            <Link
              to="contact"
              className="px-5 cursor-pointer"
              onClick={handleCloseMenu}
              smooth={true}
              duration={500}
            >
              Biz bilan bog'lanish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
