import React from "react";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { registerForEvent, unregisterForEvent } from "@/slices/registrationSlice";
import { RootState } from "@/app/store";

interface EventPopupProps {
  event: {
    id: number; // Include the event ID
    text: string;
    subtextLong: string;
    image: string;
  };
  onClose: () => void;
}

export default function EventPopup({ event, onClose }: EventPopupProps) {
  const dispatch = useDispatch();

  // Access the list of registered events from Redux state
  const registeredEvents = useSelector((state: RootState) => state.registration.registeredEvents);

  const handleRegister = () => {
    if (registeredEvents.includes(event.id)) {
      console.log("Unregistering for event", event.id);
      dispatch(unregisterForEvent(event.id));
    } else {
      console.log("Registering for event", event.id);
      dispatch(registerForEvent(event.id));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg sm:p-6 lg:p-8 max-w-md w-full">
        {/* Close Button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-lg">{event.text}</h2>
          </div>
        </div>

        {/* Event Image */}
        <img
          src={event.image}
          alt={event.text}
          className="w-full h-auto rounded-lg mb-4"
        />

        {/* Event Description */}
        <p className="text-gray-500 mb-6">{event.subtextLong}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <CustomButton
            bgColor={registeredEvents.includes(event.id) ? "bg-gray-700" : "bg-red-600"}
            textColor="text-white"
            text={registeredEvents.includes(event.id) ? "Unregister" : "Register"}
            onClick={handleRegister}
          />
          <CustomButton
            bgColor="bg-gray-700"
            textColor="text-white"
            text="Close"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}
