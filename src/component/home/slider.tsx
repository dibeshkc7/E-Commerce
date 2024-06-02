import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slides = [
  {
    img: "https://innotechllc.us/images/slides/ecommerce.jpg",
  },
  {
    img: "https://diginomica.com/sites/default/files/images/2021-09/shutterstock-Maxx-Studio-211482073.jpg",
  },
  {
    img: "https://fitsmallbusiness.com/wp-content/uploads/2023/07/FeaturedImage-Impulse-Buying-Statistics.jpg",
  },
  {
    img: "https://classnotes.ng/wp-content/uploads/2020/03/commerce..jpg",
  },
];

export default function HomeSlider() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[Calc(100vh-80px)]"
      >
        {Slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <img src={slide.img} className="w-full h-full" alt="..." />
          </SwiperSlide>
        ))}
      
      </Swiper>
    </>
  );
}
