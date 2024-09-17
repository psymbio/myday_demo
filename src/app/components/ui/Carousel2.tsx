"use client";

import { useState } from "react";
import FeatherIcon from "feather-icons-react";

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

  return (
    <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="w-full h-full relative bg-gray-100 flex flex-col justify-center items-start p-6 sm:p-10 lg:p-12 text-black shadow-lg">
              {/* Title and Subtext */}
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold mb-2">{slide.text}</h2>
              <p className="text-sm sm:text-lg lg:text-xl mb-4">{slide.subtext}</p>

              <div className="flex justify-between items-center w-full">
                {/* View and Register Buttons */}
                <div className="flex space-x-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded font-medium">
                    View
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded font-medium">
                    Register
                  </button>
                </div>

                {/* Chevron for Previous and Next Slide (Right-aligned) */}
                <div className="flex space-x-2">
                  <button
                    onClick={previousSlide}
                    className="bg-gray-300 bg-opacity-70 hover:bg-gray-400 p-2 sm:p-3 rounded-full"
                  >
                    <FeatherIcon icon="chevron-left" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-gray-300 bg-opacity-70 hover:bg-gray-400 p-2 sm:p-3 rounded-full"
                  >
                    <FeatherIcon icon="chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicator Dots below Card */}
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
  );
}
