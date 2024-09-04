import React from "react";
import HeadNavbar from "../components/navbar/HeadNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavbarJS from "../components/navbar/NavbarJS";

export default function SCTI() {
  return (
    <div>
      <HeadNavbar />
      <NavbarJS />
      <Outlet />
      <Footer />
    </div>
  );
}
