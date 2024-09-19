import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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
      <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 max-w-md w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-medium sm:text-lg">{event.text}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <CloseOutlinedIcon />
          </button>
        </div>
        <img src={event.image} alt={event.text} className="mt-4 w-full h-auto rounded" />
        <p className="mt-4 text-gray-500">{event.subtextLong}</p>
      </div>
    </div>
  );
}
