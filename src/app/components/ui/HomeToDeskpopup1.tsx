// components/HomeToDeskpopup1.tsx
import React from "react";

interface HomeToDeskpopup1Props {
  show: boolean;
  title: string;
  message: string;
  onYes: () => void;
  onNo: () => void;
}

const HomeToDeskpopup1: React.FC<HomeToDeskpopup1Props> = ({
  show,
  title,
  message,
  onYes,
  onNo,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-10/12">
        <h2 className="text-lg text-center font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onYes}
            className="bg-white  text-black border border-black shadow-lg hover:bg-gray font-semibold py-2 px-10 transition"
          >
            Yes
          </button>
          <button
            onClick={onNo}
            className="bg-white text-black border border-black shadow-lg hover:bg-gray  font-semibold py-2 px-10 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeToDeskpopup1;
