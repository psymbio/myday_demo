"use client";

import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import CustomButton from "./CustomButton";
import EventPopup from "./EventPopup";
import events from "../../data/events.json";

interface EventData {
  id: number;
  startDate: string;
  endDate: string;
  time: string;
  text: string;
  subtext: string;
  image: string;
  subtextLong: string;
}

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const previousSlide = () => {
    if (current === 0) setCurrent(events.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === events.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  // Automatically change events every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [current]);

  const openPopup = () => {
    setSelectedEvent(events[current]); // Get the current event
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="py-5">
      <div className="flex items-center justify-between mb-4">
        <Heading2 heading="Events" />
        <a
          className={`bg-red-600 hover:brightness-110 text-white rounded-md px-5 py-2.5 text-sm font-medium shadow`} // Removed mb-4 from here
          href="events"
        >
          View all events
        </a>
      </div>
      <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {events.map((slide, index) => (
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
                      text="View"
                      onClick={openPopup} // Open popup on click
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

        <div className="flex justify-center gap-2 sm:gap-3 w-full translate-y-2 sm:translate-y-4 mt-2">
          {events.map((_, i) => (
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

      {isPopupOpen && selectedEvent && (
        <EventPopup event={selectedEvent} onClose={closePopup} />
      )}
    </div>
  );
}
