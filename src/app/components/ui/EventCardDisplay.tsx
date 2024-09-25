"use client";

import React, { useState } from "react";
import EventCard from "./EventCard";
import EventPopup from "./EventPopup"; // Import the EventPopup component
import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import { format, addMonths, subMonths, isSameMonth } from "date-fns";
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

export default function EventCardDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const changeMonth = (direction: "back" | "forward") => {
    if (direction === "back") {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  // const hasEventsInMonth = (date: Date) => {
  //   return events.some((event) => {
  //     const eventStartDate = new Date(event.startDate);
  //     return (
  //       isSameMonth(eventStartDate, date) && isSameYear(eventStartDate, date)
  //     );
  //   });
  // };

  const filteredEvents = events.filter((event) => {
    const eventStartDate = new Date(event.startDate);
    return isSameMonth(eventStartDate, currentDate);
  });

  // Correct type for event parameter
  const openPopup = (event: EventData) => {
    // Use EventData type instead of any
    setSelectedEvent(event); // Set the selected event data
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Events</h1>

      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-gray-800">
          {format(currentDate, "MMMM yyyy")}
        </span>
        <div className="flex space-x-2">
          <ArrowBackIcon
            className={`cursor-pointer`}
            onClick={() => changeMonth("back")}
          />
          <ArrowForwardIcon
            className={`cursor-pointer`}
            onClick={() => changeMonth("forward")}
          />
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <EventCard eventData={filteredEvents} onView={openPopup} />
      ) : (
        <p className="text-gray-600">No events for this month.</p>
      )}

      {isPopupOpen && selectedEvent && (
        <EventPopup event={selectedEvent} onClose={closePopup} />
      )}
    </div>
  );
}
