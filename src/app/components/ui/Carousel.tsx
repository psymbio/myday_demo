"use client";

import { useState } from "react";
import FeatherIcon from "feather-icons-react";

export default function Carousel() {
  const slides = [
    { image: "/hsbc-logo-without-name.png", text: "Slide 1" },
    { image: "/hsbc-logo-without-name.png", text: "Slide 2" },
    { image: "/hsbc-logo-without-name.png", text: "Slide 3" },
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
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide.image} alt={slide.text} className="w-full" />
            <p className="text-center mt-4">{slide.text}</p>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <FeatherIcon icon="chevron-left" />
        </button>
        <button onClick={nextSlide}>
          <FeatherIcon icon="chevron-right" />
        </button>
      </div>

      <div className="absolute bottom-0 translate-y-1 flex justify-center gap-3 w-full">
        {slides.map((slide, i) => (
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
