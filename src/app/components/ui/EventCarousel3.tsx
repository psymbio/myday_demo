"use client";

import { useState, useEffect } from "react";
// import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
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

  // Load registered events from Redux store
  const registeredEvents = useSelector(
    (state: RootState) => state.registration.registeredEvents
  );

  // Dispatch default registration status for all events if not already present in store
  useEffect(() => {
    const eventIds = events.map((event) => event.id);
    dispatch(setDefaultEvents(eventIds));
  }, [dispatch]);

  const handleRegister = (eventId: number) => {
    if (registeredEvents[eventId]) {
      console.log("Unregistering for event", eventId);
      dispatch(unregisterForEvent(eventId));
    } else {
      console.log("Registering for event", eventId);
      dispatch(registerForEvent(eventId));
    }
  };

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
    <div className="py-2">
      <div className="flex items-center justify-between mb-2 px-2">
        <Heading2 heading="Events" />
        <a
          className="bg-red-600 hover:brightness-110 text-white rounded-md px-5 py-2.5 text-sm font-medium shadow"
          href="events"
        >
          View all events
        </a>
      </div>
      <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="flex rounded-lg transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {events.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 rounded-lg flex flex-row"
            >
              {/* Left side - Text content */}
              <div className="w-[56] flex flex-col justify-center items-start p-4 sm:p-10 lg:p-12 text-black bg-white">
                <Heading3 heading={slide.text} />
                <p className="text-sm sm:text-lg lg:text-xl mb-4">
                  {slide.subtext}
                </p>
                <div className="flex justify-between items-center w-full">
                  <div className="flex space-x-1">
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

              {/* Right side - Image content */}
              <div className="w-2/3 bg-white p-2 flex justify-center items-center">
                {/* Image Container */}
                <div
                  className="w-full"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100px", // Adjust the height as needed
                  }}
                ></div>
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

      {isPopupOpen && selectedEvent && (
        <EventPopup event={selectedEvent} onClose={closePopup} />
      )}
    </div>
  );
}
