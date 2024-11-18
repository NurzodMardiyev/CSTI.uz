import React, { useEffect, useState } from "react";
import logo from "../../images/logo_center.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "../../App.css";
import { icons } from "../../icons/iconc.js";
import { csti } from "../../feature/queryApi.js";
import { useQuery } from "react-query";

export default function NavbarJS() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const { data } = useQuery(["news"], () => csti.news(""));
  const { data: dyjes } = useQuery(["dyjes"], () => csti.dyjes(""));
  const { data: projects } = useQuery(["projects"], () => csti.projects(""));

  const menuNav = [
    {
      title: "Rahbariyat",
      to: location.pathname === "/" ? "rahbariyat" : "/",
      smooth: true,
    },
    {
      title: "Faoliyat",
      to: location.pathname === "/" ? `faoliyat` : "/",
      smooth: true,
    },
    { title: "Yangiliklar", to: `/newspage/${data?.length}`, smooth: true },
    {
      title: "Xalqaro hamkorlik",
      to: location.pathname === "/" ? "hamkorlar" : "/",
      smooth: true,
    },
    { title: "Dayjestlar", to: `dayjes/${dyjes?.length}`, smooth: true },
  ];

  const items1 = [
    {
      key: "1",
      label:
        location.pathname === "/" ? (
          <Link
            to="about"
            smooth="true"
            duration={500}
            className="text-[14px] font-[500] uppercase menu_item"
          >
            Markaz haqida
          </Link>
        ) : (
          <RouterLink
            to="/"
            className="text-[14px] font-[500] uppercase menu_item"
          >
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
          className="text-[14px] font-[500] uppercase menu_item"
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
        <RouterLink
          rel="noopener noreferrer"
          to={`projects/${projects?.length}`}
          className="text-[14px] font-[500] uppercase menu_item"
        >
          Loyihalar
        </RouterLink>
      ),
    },
    {
      key: "2",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to="/photogallery"
          className="text-[14px] font-[500] uppercase menu_item"
        >
          Fotogalereya
        </RouterLink>
      ),
    },
    {
      key: "3",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to="/videogallery"
          className="text-[14px] font-[500] uppercase menu_item"
        >
          Videogalereya
        </RouterLink>
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
        <RouterLink
          className="logoSec  flex items-center gap-3"
          to="/"
          smooth="true"
          duration={500}
        >
          <img src={logo} alt="csti logo" className="md:w-[70px]  w-[30px]" />
          <p className="md:text-[20px] font-semibold md:mb-1 text-[12px] md:leading-[25px] logo">
            Ilmiy texnik <br /> axborot markazi
          </p>
        </RouterLink>
        <div className="menu hidden lg:block">
          <div className="flex lg:space-x-4 md:space-x-2 items-center uppercase font-[600] text-[14px]">
            <Dropdown menu={{ items: items1 }}>
              <Link
                onClick={(e) => e.preventDefault()}
                to="#"
                smooth="true"
                duration={500}
                className="cursor-pointer"
              >
                <Space className="menu_item">
                  Bosh Sahifa
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {menuNav.map((item, index) =>
              item.title === "Yangiliklar" ||
              item.title === "Dayjestlar" ||
              location.pathname !== "/" ? (
                <RouterLink
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item"
                >
                  {item.title}
                </RouterLink>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item"
                  smooth="true"
                  duration={500}
                >
                  {item.title}
                </Link>
              )
            )}
            <Dropdown menu={{ items: items2 }}>
              <Link className="cursor-pointer" to="#">
                <Space className="menu_item">
                  Galereyalar
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {location.pathname !== "/" ? (
              <RouterLink to="/" className="cursor-pointer menu_item px-5">
                Biz bilan bog'lanish
              </RouterLink>
            ) : (
              <Link
                to="contact"
                className="cursor-pointer menu_item"
                smooth="true"
                duration={500}
              >
                Biz bilan bog'lanish
              </Link>
            )}
          </div>
        </div>
        <div
          className="cursor-pointer block lg:hidden md:text-[30px] text-[20px]"
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
            <RouterLink
              className="logoSec  flex items-start gap-3 pt-8 pb-6 bg-blue-100 ps-5 pe-3 w-full"
              onClick={handleCloseMenu}
              to="/"
              smooth="true"
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
            </RouterLink>
            <Dropdown menu={{ items: items1 }} className="px-5">
              <Link className="" onClick={(e) => e.preventDefault()}>
                <Space>
                  Bosh Sahifa
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {menuNav?.map((item, index) =>
              item.title === "Yangiliklar" ||
              item.title === "Dayjestlar" ||
              location.pathname !== "/" ? (
                <RouterLink
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item px-5"
                  onClick={handleCloseMenu}
                >
                  {item.title}
                </RouterLink>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item px-5"
                  smooth="true"
                  duration={500}
                  onClick={handleCloseMenu}
                >
                  {item.title}
                </Link>
              )
            )}
            <Dropdown menu={{ items: items2 }} className="px-5">
              <div className="cursor-pointer">
                <Space>
                  Galereyalar
                  <DownOutlined className="text-[12px]" />
                </Space>
              </div>
            </Dropdown>
            {location.pathname !== "/" ? (
              <RouterLink to="/" className="cursor-pointer menu_item px-5">
                Biz bilan bog'lanish
              </RouterLink>
            ) : (
              <Link
                to="contact"
                className="px-5 cursor-pointer"
                onClick={handleCloseMenu}
                smooth="true"
                duration={500}
              >
                Biz bilan bog'lanish
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
