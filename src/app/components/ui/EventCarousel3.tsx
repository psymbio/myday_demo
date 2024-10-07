"use client";
import React, { useState, useEffect } from "react";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import CustomButton from "./CustomButton";
import EventPopup from "./EventPopup";
import events from "../../data/events.json";
import { useDispatch, useSelector } from "react-redux";
import {
  registerForEvent,
  unregisterForEvent,
  setDefaultEvents,
} from "@/slices/registrationSlice";
import { RootState } from "@/app/store";

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
  const dispatch = useDispatch();
  const registeredEvents = useSelector(
    (state: RootState) => state.registration.registeredEvents
  );

  useEffect(() => {
    const eventIds = events.map((event) => event.id);
    dispatch(setDefaultEvents(eventIds));
  }, [dispatch]);

  const handleRegister = (eventId: number) => {
    if (registeredEvents[eventId]) {
      dispatch(unregisterForEvent(eventId));
    } else {
      dispatch(registerForEvent(eventId));
    }
  };

  const [current, setCurrent] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 12000);
    return () => clearInterval(interval);
  }, [current]);

  const openPopup = () => {
    setSelectedEvent(events[current]);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="py-2 mx-5 -translate-y-3">
        <div className="flex items-center justify-between px-2">
          <Heading2 heading="Events" />
        </div>
        <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] -translate-y-4">
          <div
            className="flex rounded-lg transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {events.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 rounded-lg flex flex-col md:flex-row bg-white shadow border"
              >
                {/* Text content on the left */}
                <div className="p-4 sm:p-10 text-black w-full md:w-1/2">
                  <div
                    className="float-end w-2/5 h-[90px] bg-cover bg-center rounded flex flex-col justify-end items-end"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="sm:static text-xs translate-y-5">
                      <a href="events" className="text-red-600 hover:underline">
                        View all Events
                      </a>
                    </div>
                  </div>
                  <Heading3 heading={slide.text} />
                  <p className="text-sm sm:text-lg lg:text-xl mb-4">
                    {slide.subtext}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <CustomButton
                      bgColor="bg-red-600"
                      textColor="text-white"
                      text="View"
                      onClick={openPopup}
                    />
                    <CustomButton
                      bgColor={
                        registeredEvents[slide.id]
                          ? "bg-gray-700"
                          : "bg-gray-700"
                      }
                      textColor="text-white"
                      text={
                        registeredEvents[slide.id] ? "Unregister" : "Register"
                      }
                      onClick={() => handleRegister(slide.id)}
                    />
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
                className={`cursor-pointer w-8 h-1 rounded-full transition-all duration-300 ${
                  i === current ? "bg-red-600 scale-x-110" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {isPopupOpen && selectedEvent && (
        <EventPopup event={selectedEvent} onClose={closePopup} />
      )}
    </div>
  );
}
