import React from "react";

const FeatureCard = ({ num, title, subText }) => {
  return (
    <div className="w-full h-40  bg-gray-100 p-4 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex  items-center  ">
        <div className="p-5 w-5 h-5 rounded-full bg-black text-white text-xl font-bold flex justify-center items-center">
          {num}
        </div>
        <div className="ml-16 font-bold text-xl text-orange-500">{title}</div>
      </div>
      <p className="text-center mt-3">{subText}</p>
    </div>
  );
};

export default FeatureCard;
