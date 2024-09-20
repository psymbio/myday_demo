"use client";

import React, { useState } from "react";
import EventCard from "./EventCard";
import EventPopup from "./EventPopup"; // Import the EventPopup component
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { format, addMonths, subMonths, isSameMonth } from "date-fns";

export default function EventCardDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // Make the type any or a specific event type
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const events = [
    {
      id: 1,
      startDate: "2024-09-02T00:00:00Z",
      endDate: "2024-09-02T00:00:00Z",
      time: "16:00 - 17:00",
      text: "DevOps",
      subtext: "Event for DevOps Training",
      image: "/events/easter.jpg",
      subtextLong:
        "In-depth training on DevOps principles, tools, and workflows.",
    },
    {
      id: 2,
      startDate: "2024-09-02T00:00:00Z",
      endDate: "2024-09-04T00:00:00Z",
      time: "16:00 - 17:00",
      text: "Scrum Meeting",
      subtext: "Daily Scrum Stand-up",
      image: "/events/easter.jpg",
      subtextLong:
        "In-depth training on DevOps principles, tools, and workflows.",
    },
    {
      id: 3,
      startDate: "2024-09-02T00:00:00Z",
      endDate: "2024-09-04T00:00:00Z",
      time: "All day",
      text: "Frontend Review",
      subtext: "Discuss UI Improvements",
      image: "/events/easter.jpg",
      subtextLong:
        "In-depth training on DevOps principles, tools, and workflows.",
    },
    {
      id: 4,
      startDate: "2024-10-05T00:00:00Z",
      endDate: "2024-10-05T00:00:00Z",
      time: "09:00 - 10:00",
      text: "Backend Review",
      subtext: "Review backend architecture",
      image: "/events/easter.jpg",
      subtextLong:
        "In-depth training on DevOps principles, tools, and workflows.",
    },
  ];

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
  const openPopup = (event: any) => {
    setSelectedEvent(event); // Set the selected event data
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-6 bg-gray-100">
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
