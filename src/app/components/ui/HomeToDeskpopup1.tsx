"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

interface HomeToDeskpopup1Props {
  show: boolean;
  title: string;
  message: string;
  onYes: () => void;
  onNo: () => void;
  onClose: () => void;
  flag: string;
}

const HomeToDeskpopup1: React.FC<HomeToDeskpopup1Props> = ({
  show,
  title,
  message,
  onYes,
  onNo,
  onClose,
  flag,
}) => {
  if (!show) return null;
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Handle change for radio buttons
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-10/12">
        {/* Close Button */}
        <button
          onClick={onClose} // Function to handle closing the popup
          className="absolute top-2 right-2 text-black font-bold text-xl hover:text-gray-500"
        >
          &times;
        </button>

        <h2 className="text-lg text-center font-semibold mb-4">{title}</h2>
        
      
        { flag == "yes" ?
          <>
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
        </>
       
       :
       
        <>
         <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="options"
              value={message}
              checked={selectedOption === 'Booking'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Booking
          </label>

          <label className="block mb-2">
            <input
              type="radio"
              name="options"
              value="No Changes"
              checked={selectedOption === 'No Changes'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            No Changes
          </label>
        </div>
        <div className="flex justify-center space-x-4">
        <button
          onClick={onYes}
          className="bg-white  text-black border border-black shadow-lg hover:bg-gray font-semibold py-2 px-10 transition"
        >
          Confirm
        </button>
        </div>
        </>
       }
      </div>
    </div>
  );
  
/*
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-10/12">
        <h2 className="text-lg text-center font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-center space-x-4">
          <CustomButton
            bgColor="bg-red-600"
            textColor="text-white"
            text="Yes"
            onClick={onYes}
          />
          <CustomButton
            bgColor="bg-gray-700"
            textColor="text-white"
            text="No"
            onClick={onNo}
          />
        </div>
      </div>
    </div>
  );*/
};

export default HomeToDeskpopup1;
