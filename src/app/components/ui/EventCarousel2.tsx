"use client";

import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import CustomButton from "./CustomButton";

export default function Carousel() {
  const slides = [
    { text: "Event 1", subtext: "Description 1" },
    { text: "Event 2", subtext: "Description 2" },
    { text: "Event 3", subtext: "Description 3" },
  ];

  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [current]);

  return (
    <div className="py-5">
      <Heading2 heading="Events" />
      <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="w-full h-full relative rounded-lg flex flex-col justify-center items-start p-6 sm:p-10 lg:p-12 text-black shadow bg-white">
                <Heading3 heading={slide.text} />
                <p className="text-sm sm:text-lg lg:text-xl mb-4">
                  {slide.subtext}
                </p>
                <div className="flex justify-between items-center w-full">
                  <div className="flex space-x-4">
                    <CustomButton
                      bgColor="bg-red-600"
                      textColor="text-white"
                      text="Submit"
                    />
                    <CustomButton
                      bgColor="bg-gray-700"
                      textColor="text-white"
                      text="Register"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={previousSlide}
                      className="bg-gray-300 bg-opacity-70 hover:bg-gray-400 p-2 sm:p-3 rounded-full"
                    >
                      <ArrowBackIcon />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-gray-300 bg-opacity-70 hover:bg-gray-400 p-2 sm:p-3 rounded-full"
                    >
                      <ArrowForwardIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 w-full translate-y-3 sm:translate-y-5 mt-3">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={i}
              className={`rounded-full w-3 h-3 cursor-pointer ${
                i === current ? "bg-red-600" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
