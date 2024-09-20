import React from "react";
import CustomButton from "./CustomButton";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface EventPopupProps {
  event: {
    text: string;
    subtextLong: string;
    image: string;
  };
  onClose: () => void;
}

export default function EventPopup({ event, onClose }: EventPopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg sm:p-6 lg:p-8 max-w-md w-full">
        {/* Close Button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-lg">{event.text}</h2>
          </div>
          {/* <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseOutlinedIcon />
          </button> */}
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
            bgColor="bg-red-600"
            textColor="text-white"
            text="Register"
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
