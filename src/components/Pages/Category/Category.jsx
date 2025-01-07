import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";

const Category = () => {
  return (
    <Swiper
      direction="horizontal"  // Horizontal scrolling (default)
      slidesPerView={3}       // Show one slide at a time
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={true}  // Enable looping for continuous swipe
      modules={[Pagination]}
      className="mySwiper"
    //   style={{ width: "100%", height: "500px", paddingBottom: "50px" }}
    >
    <SwiperSlide className="relative">
  <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
  <h3 className="text-4xl bg-red-300 uppercase text-center text-white opacity-55 absolute bottom-0 w-full p-4">
    salads
  </h3>
</SwiperSlide>

<SwiperSlide className="relative">
  <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
  <h3 className="text-4xl bg-red-300 uppercase text-center text-white opacity-55 absolute bottom-0 w-full p-4">
    Pizzas
  </h3>
</SwiperSlide>

<SwiperSlide className="relative">
  <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
  <h3 className="text-4xl bg-red-300 uppercase text-center text-white opacity-55 absolute bottom-0 w-full p-4">
    Soups
  </h3>
</SwiperSlide>

<SwiperSlide className="relative">
  <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
  <h3 className="text-4xl bg-red-300 uppercase text-center text-white opacity-55 absolute bottom-0 w-full p-4">
    Cake
  </h3>
</SwiperSlide>


    

      {/* CSS to handle pagination at the bottom */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 0px;  /* Position at the bottom */
        }
      `}
      </style> 
    </Swiper>
  );
};

export default Category;
