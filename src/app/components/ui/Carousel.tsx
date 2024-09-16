"use client";

import { useState } from "react";
import FeatherIcon from "feather-icons-react";

export default function Carousel() {
  const slides = [
    { image: "/events/christmas.jpg", text: "Slide 1", subtext: "Description 1" },
    { image: "/events/easter.jpg", text: "Slide 2", subtext: "Description 2" },
    { image: "/events/christmas.jpg", text: "Slide 3", subtext: "Description 3" },
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
    <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px]"> {/* Responsive height */}
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover" // Ensure proper image fit
              />

              {/* Title and Subtext (left-aligned) */}
              <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 text-white">
                <h2 className="text-lg sm:text-2xl font-bold">{slide.text}</h2> {/* Title */}
                <p className="text-sm sm:text-lg">{slide.subtext}</p>             {/* Subtext */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chevron for Previous and Next Slide */}
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-3xl">
        <button
          onClick={previousSlide}
          className="bg-gray-700 bg-opacity-50 p-1 sm:p-2 rounded-full"
        >
          <FeatherIcon icon="chevron-left" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-700 bg-opacity-50 p-1 sm:p-2 rounded-full"
        >
          <FeatherIcon icon="chevron-right" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="flex justify-center gap-2 sm:gap-3 w-full translate-y-3 sm:translate-y-5">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={i}
            className={`rounded-full w-2 h-2 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
