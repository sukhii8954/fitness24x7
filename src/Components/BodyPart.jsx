import React from "react";
import icon from '../assets/icons/gym.png'
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  console.log(item, bodyPart);
  return (
    <div
      typeof="button"
      className={`py-2 flex flex-col justify-center items-center text-center
      hover:scale-110 transition-transform duration-300 border-solid border-red-600 cursor-pointer ${
        bodyPart===(item)
          ? " bg-white"
          : "bg-[#fff] cursor-pointer w-[200px] h-[280px]"
      }`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} alt="dumble" className="w-8 h-8 " />
      <div className=" my-6  text-xl font-bold text-[#3A1212] capitalize">
        {item}
      </div>
    </div>
  );
};

export default BodyPart;
