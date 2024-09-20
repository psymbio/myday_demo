import React from "react";
import { format, isSameDay } from "date-fns";
import CustomButton from "./CustomButton";

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

interface EventCardProps {
  eventData: EventData[];
  onView: (event: EventData) => void;
}

export default function EventCard({ eventData, onView }: EventCardProps) {
  const formatDateRange = (startDate: Date, endDate: Date) => {
    if (isSameDay(startDate, endDate)) {
      return format(startDate, "E d");
    } else {
      return `${format(startDate, "E d")} - ${format(endDate, "E d")}`;
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {eventData.map((event) => {
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);
        const isAllDayEvent = event.time.toLowerCase() === "all day";

        return (
          <div
            key={event.id}
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
                  text="View"
                  onClick={() => onView(event)}
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
