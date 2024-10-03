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
    <div>
    <div className="py-2 mx-5 -translate-y-3">
      <div className="flex items-center justify-between px-2">
        <Heading2 heading="Events" />
      </div>
      <div className="overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] -translate-y-3">
        <div
          className="flex rounded-lg transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {events.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 rounded-lg flex flex-row"
            >
              {/* Merged Content - Text and Image */}
              <div className="w-full flex flex-col lg:flex-row bg-white rounded-lg shadow border">
                {/* Left side - Text content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-4 sm:p-10 text-black">
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
                          registeredEvents[slide.id]
                            ? "Unregister"
                            : "Register"
                        }
                        onClick={() => handleRegister(slide.id)}
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Image and Button */}
                <div className="absolute mt-[0.5rem] ml-[14rem] w-2/5 lg:w-1/2 flex flex-col lg:flex-col items-center justify-between p-2">
                  <div
                    className="w-full rounded"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "85px", // Adjust the height as needed
                    }}
                  ></div>

                  {/* Button Container */}
                  <div className="w-full flex justify-end mt-2 text-xs">
                    <a href="events" className="text-red-600 hover:underline">
                      View all Events
                    </a>
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
              className={`cursor-pointer w-8 h-1 rounded-full transition-all duration-300 ${
                i === current ? "bg-red-600 scale-x-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    <div>
      {isPopupOpen && selectedEvent && (
        <EventPopup event={selectedEvent} onClose={closePopup} />
      )}
    </div>
    </div>
  );
}
