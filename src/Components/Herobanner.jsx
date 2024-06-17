import React, { useState } from "react";
import banner from "../assets/images/banner.png";
const Herobanner = () => {
  function scrollToExercises() {
    const exercisesElement = document.getElementById("excercises");
    if (exercisesElement) {
      exercisesElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex  relative">
      <div className=" w-1/2 mt-24 flex flex-col items-center  sm:mx-0">
        <div className="flex flex-col items-center justify-center text-center mx-56 w-full">
          <h1 className="  text-5xl sm:text-2xl text-[#FF2625]  font-semibold">
            Fitness Club
          </h1>
          <h1 className="text-black md:flex-wrap tracking-normal text-5xl sm:text-5xl mb-7 mt-8 font-bold">
            Sweat , Smile <br /> And Repeat
          </h1>
          <p className="mt-9 text-4xl leading-9 flex-wrap md:flex-wrap">
            Check Out the most effective Excercises{" "}
          </p>

          <a id="excercises"></a>
          <button
            className="border py-3 z-10 mt-10 px-4 bg-[#FF2625] font-semibold text-lg text-white cursor-pointer rounded-md"
            onClick={scrollToExercises}
          >
            Explore Excercises
          </button>

        </div>
      </div>

      <div className=" hidden sm:block">
        <h1 className="absolute  mt-[400px] text-[195px] font-semibold text-[#ff2625] opacity-10 hidden md:block  md:-mx-[435px] ">
          Excercise
        </h1>
      </div>

      <div>
        <img
          className=" -mt-20 md:-mt-[100px]  hidden sm:block  right-3 absolute  md:h-[600px] "
          src={banner}
          alt="bannerimg "
        ></img>
      </div>
    </div>
  );
};

export default Herobanner;
