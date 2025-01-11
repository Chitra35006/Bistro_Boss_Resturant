import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({ items = [] }) => {
  // Helper function to split items into chunks of 6
  const chunkItems = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const chunks = chunkItems(items, 6); // Split items into groups of 6

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // Create a circular bullet with a background and number
      return `<span class="${className} rounded-full bg-orange-600 text-white text-lg w-10 h-10 flex items-center justify-center mx-1">${index + 1}</span>`;
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        loop={true} // Enable infinite looping
      >
        {chunks.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            <div className="grid md:grid-cols-3 gap-10">
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
