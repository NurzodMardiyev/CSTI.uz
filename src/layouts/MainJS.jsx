import React from "react";
import HeaderJS from "../components/header/Header";
import Rahbariyat from "../components/rahbariyat/Raxbariyat";
import About from "../components/about/About";
import News from "../components/news/News";
import Galary from "../components/galareya/Galary";
import Contact from "../components/contact/Contact";
import Hamkorlar from "../components/hamkorlar/Hamkorlar";
import Faoliyati from "../components/faoliyati/Faoliyati";

export default function MainJS() {
  return (
    <div>
      <HeaderJS />
      <Rahbariyat />
      <About />
      <News />
      <Galary />
      <Faoliyati />
      <Hamkorlar />
      <Contact />
    </div>
  );
}
