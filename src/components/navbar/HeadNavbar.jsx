import React from "react";
import { icons } from "../../icons/iconc";
import { Link } from "react-router-dom";

export default function HeadNavbar() {
  const socials = [
    {
      item: "+998 (71) 203-32-23",
      icon: icons.phone,
      type: "tel:+998712033223",
    },
    {
      item: "Olmazor t. universitet ko’chasi 7",
      icon: icons.location,
      type: "https://maps.app.goo.gl/WYjxXC7bKiLLKzGX6",
      display: "hidden",
    },
    {
      item: "info.csti@ilmiy.uz",
      icon: icons.email,
      type: "mailto:info@ilmiy.uz",
    },
  ];

  return (
    <div className="w-full border-b border-b-gray-300">
      <div className="container md:max-w-9xl md:mx-auto flex justify-between md:py-3 py-1.5 max-w-[90%] mx-auto items-center">
        <div className="leftSec">
          <div className="flex md:gap-6 gap-2 items-center">
            {socials.map((item, index) => {
              return (
                <Link
                  to={item.type}
                  key={index}
                  className={`${item.display}  gap-2 md:text-[16px] text-[10px] text-[#6A6F7C]  font-[600] md:flex  flex items-center`}
                >
                  <span className="md:text-xl text-[12px] text-blue-500">
                    {item.icon}
                  </span>
                  <span>{item.item}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="rightSec">
          <div className="flex items-center gap-4">
            <span className="text-[#141D38] text-[16px] font-[600] md:block hidden">
              Bizga Qoshiling:
            </span>
            <Link
              to="https://www.facebook.com/innovation.gov.uz/"
              className="md:text-[16px] text-[10px]"
            >
              {icons.facebook}
            </Link>
            <Link
              to="https://t.me/cntiuz"
              className="md:text-[16px] text-[10px]"
            >
              {" "}
              {icons.telegram}
            </Link>
            <Link
              to="https://www.instagram.com/ilmiy_texnik_axborot_markazi/?igsh=b2Qzejl2YXlsNTZj"
              className="md:text-[16px] text-[10px]"
            >
              {icons.instagram}
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCvL9mBAQQh--TsyZtQKhKzA/videos"
              className="md:text-[16px] text-[10px]"
            >
              {icons.youtube}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
