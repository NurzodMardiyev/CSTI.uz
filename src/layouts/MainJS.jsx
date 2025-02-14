import React from "react";
import HeaderJS from "../components/header/Header";
import Rahbariyat from "../components/rahbariyat/Raxbariyat";
import About from "../components/about/About";
import News from "../components/news/News";
import Galary from "../components/galareya/Galary";
import Contact from "../components/contact/Contact";
import Hamkorlar from "../components/hamkorlar/Hamkorlar";
import Faoliyati from "../components/faoliyati/Faoliyati";
import Deyjistlar from "../components/deyjistlar/Deyjistlar";
import Projects from "../components/projects/Projects";

export default function MainJS() {
  return (
    <div className="">
      <HeaderJS />
      {/* <Rahbariyat /> */}
      <About />
      <News />
      <Projects />
      <Galary />
      <Faoliyati />
      <Deyjistlar />
      <Hamkorlar />
      <Contact />
    </div>
  );
}
