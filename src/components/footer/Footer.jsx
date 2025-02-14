import React from "react";
import logo from "../../images/logo_center.png";
import { icons, links } from "../../icons/iconc.js";
import { Link } from "react-router-dom";
import "../../App.css";
import { csti } from "../../feature/queryApi.js";
import { useQuery } from "react-query";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const { data: projects } = useQuery(["projects"], () => csti.projects(""));

  return (
    <div className="bg-[#12284C] py-10 ">
      <div className="container text-white flex flex-col md:flex-row justify-between gap-8 md:max-w-9xl mx-auto px-4">
        {/* Logo and Description Section */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <Link className="logoSec flex items-center gap-3" to="/">
            <img src={logo} alt="csti logo" className="w-8 md:w-16" />
            <p className="text-sm md:text-lg font-semibold leading-5 md:leading-6">
              Ilmiy-texnik
              <br /> axborot markazi
            </p>
          </Link>
          <p className="text-sm md:text-base text-[#737887]">
            Oʻzbekiston Respublikasi Prezidentining 2017-yil 30-noyabrdagi
            “Oʻzbekiston Respublikasi innovatsion rivojlanish vazirligi
          </p>
          <div className="flex gap-2">
            {["facebook", "youtube", "instagram", "telegram"].map(
              (icon, idx) => (
                <a href={links[icon]}>
                  <span
                    key={idx}
                    className="w-6 h-6 md:w-8 md:h-8 flex justify-center items-center rounded-full border border-white">
                    {icons[icon]}
                  </span>
                </a>
              )
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-base md:text-lg font-bold uppercase">Linklar</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              { to: "/", label: "Bosh Sahifa" },
              { to: "/photogallery", label: "Galereyalar" },
              { to: `projects/${projects?.length}`, label: "Loyihalar" }
            ].map((link, idx) => (
              <li
                key={idx}
                className="text-sm md:text-base hover:text-white/70">
                <Link className="flex items-center gap-2" to={link.to}>
                  {icons.right} {link.label}
                </Link>
              </li>
            ))}
            {[
              { to: "faoliyat", label: "Faoliyat" },
              { to: "rahbariyat", label: "Rahbariyat" }
            ].map((link, idx) => (
              <li
                key={idx}
                className="text-sm md:text-base hover:text-white/70 cursor-pointer">
                <ScrollLink
                  className="flex items-center gap-2"
                  smooth={true}
                  duration={500}
                  to={link.to}>
                  {icons.right} {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-base md:text-lg font-bold uppercase">
            Bog'lanish
          </h3>
          <ul className="mt-4 flex flex-col gap-4">
            {[
              {
                icon: "phone",
                label: "Phone Number",
                content: "+998 (71) 203-32-23",
                href: "tel:+998712033223"
              },
              {
                icon: "location",
                label: "Oliy Talim Vazirligi",
                content: "Universitet st 7",
                href: "https://maps.app.goo.gl/WYjxXC7bKiLLKzGX6"
              },
              {
                icon: "phone",
                label: "Email Address",
                content: "info.csti@ilmiy.uz",
                href: "mailto:info.csti@ilmiy.uz"
              }
            ].map((item, idx) => (
              <li
                key={idx}
                className="text-sm md:text-base flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-lg shadow-md flex justify-center items-center text-base">
                  {icons[item.icon]}
                </span>
                <div>
                  <p className="uppercase">{item.label}</p>
                  <a
                    href={item.href}
                    className="font-semibold hover:text-white/70">
                    {item.content}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Call-to-action Section */}
      <div className="mt-8 text-center px-4">
        <p className="text-sm md:text-base text-[#737887]">
          Murojaat va takliflar bo'yicha{" "}
          <ScrollLink
            className="text-blue-500 cursor-pointer"
            to="contact"
            smooth={true}
            duration={1000}>
            Bizga Murojaat qiling
          </ScrollLink>{" "}
          bo'limida yozishingiz mumkin!
        </p>
      </div>
    </div>
  );
}
