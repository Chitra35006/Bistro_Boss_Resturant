import React from "react";
import bgImg from "../../assets/shop/banner2.jpg";

const BistroBox = () => {
  return (
    <div
      className="my-16 relative flex items-center justify-center object-cover h-[520px] bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="flex justify-center items-center h-screen">
        <div className="relative z-10 bg-white py-16 px-12 rounded shadow-lg text-center w-9/12">
          <h1 className="text-3xl font-bold mb-4">BISTRO BOSS</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBox;
