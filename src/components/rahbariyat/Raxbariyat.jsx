import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import rahbar from "../../images/rahbar.jfif";

// Maxsus oldinga o'tkazish tugmasi
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

// Maxsus orqaga o'tkazish tugmasi
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const Rahbariyat = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400, // sm va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 3, // 1ta slayd ko'rsatadi
        },
      },
      {
        breakpoint: 1000, // sm va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 2, // 1ta slayd ko'rsatadi
        },
      },
      {
        breakpoint: 767, // mobil va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 1, // 1ta slayd ko'rsatadi
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      lavozim: "Director",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
    {
      id: 2,
      lavozim: "Direktor o’rinbosari",
      title: "Rahimov Farhod Xushboqovich",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23",
    },
    {
      id: 3,
      lavozim: "Direktor o’rinbosari:",
      title: "Rayimov Xurshidjon G’ayratjon o’g’li",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23",
    },
    {
      id: 4,
      lavozim: "Director",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
    {
      id: 5,
      lavozim: "Director",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
    {
      id: 6,
      lavozim: "Director",
      title: "Nazirov Sardor Jamoliddin o’g’li1",
      img: "https://www.sardor.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.7d026018.jpeg&w=64&q=75",
      tel: "+998 (71) 203-32-23 ichki raqam (878)",
    },
  ];

  return (
    <div className="md:mb-10" id="rahbariyat">
      <div className="container md:max-w-9xl md:mx-auto justify-between py-14 max-w-[90%] mx-auto items-center bg-blue-500 my-7 px-10 md:py-10 rounded-[15px]">
        <div className="md:mt-16">
          <span className="md:text-[16px] text-[12px] font-[600] text-white uppercase">
            Rahbariyat jamosi
          </span>
          <h2 className="md:text-[40px] text-[24px] font-[700] text-white ">
            Raxbariyatdagi Eng Lavozimi Balandlar
          </h2>
        </div>
        <Slider {...settings} className="md:mb-10 mt-8">
          {cards.map((card) => (
            <div key={card.id}>
              <div className="w-[300px]">
                <div className="w-[300px] overflow-hidden rounded-[20px]">
                  <img
                    src={rahbar}
                    alt="Raxbariyat azo'si"
                    className=" transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-[10px] p-5 mt-4">
                  <div className="flex flex-col items-center">
                    <h3 className="md:text-[24px] text-[16px] font-[700] text-center">
                      {card.title}
                    </h3>
                    <span className="text-[14px] font-[500]">
                      {card.lavozim}:
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[13px] font-[600]">Tel: </span>
                    <span>{card.tel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Rahbariyat;
