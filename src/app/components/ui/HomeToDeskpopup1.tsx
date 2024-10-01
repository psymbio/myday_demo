// components/HomeToDeskpopup1.tsx
import React,{useState} from 'react';

interface HomeToDeskpopup1Props {
  show: boolean;
  title: string;
  message: string;
  onYes: () => void;
  onNo: () => void;
}

const HomeToDeskpopup1: React.FC<HomeToDeskpopup1Props> = ({ show, title, message, onYes, onNo  }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onYes}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Yes
          </button>
          <button
            onClick={onNo}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeToDeskpopup1;
