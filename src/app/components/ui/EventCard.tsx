import React from "react";
import { format, isSameDay } from "date-fns";
import CustomButton from "./CustomButton";

type EventData = {
  startDate: string; // UTC date string
  endDate: string; // UTC date string
  time: string;
  text: string;
  subtext: string;
};

interface EventCardProps {
  eventData: EventData[];
}

export default function EventCard({ eventData }: EventCardProps) {
  const formatDateRange = (startDate: Date, endDate: Date) => {
    if (isSameDay(startDate, endDate)) {
      // Single-day event
      return format(startDate, "E d");
    } else {
      // Multi-day event
      return `${format(startDate, "E d")} - ${format(endDate, "E d")}`;
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {eventData.map((event, index) => {
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);
        const isAllDayEvent = event.time.toLowerCase() === "all day";

        return (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow-md rounded-lg border border-gray-300"
          >
            <div className="flex flex-col w-1/3 text-left">
              <span className="text-lg font-semibold text-gray-900">
                {formatDateRange(start, end)}
              </span>
              {!isAllDayEvent && (
                <span className="text-sm text-gray-600">{event.time}</span>
              )}
            </div>
            <div className="w-px h-12 bg-gray-300 mx-4"></div>
            <div className="flex flex-col w-2/3 text-left">
              <span className="text-lg font-semibold text-gray-900">
                {event.text}
              </span>
              <span className="text-sm text-gray-600">{event.subtext}</span>

              <div className="flex space-x-4 mt-2">
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
