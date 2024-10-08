"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

interface HomeToDeskPopupProps {
  show: boolean;
  title: string;
  message: string;
  onYes: () => void;
  onNo: () => void;
  onClose: () => void;
  onBack: () => void;
  flag: string;
}

const HomeToDeskPopup: React.FC<HomeToDeskPopupProps> = ({
  show,
  title,
  message,
  onYes,
  onNo,
  onClose,
  onBack,
  flag,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  if (!show) return null;
  // Handle change for radio buttons
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-10/12">
        {/* Close Button */}

        {flag !="Travel"?
        <>       
  <button onClick={onBack} // Function to handle closing the popup
          className="absolute top-2 left-2 text-black font-bold text-xl hover:text-gray-500"
     >
    ← 
  </button>
      </>: <></>
}
        <button
          onClick={onClose} // Function to handle closing the popup
          className="absolute top-2 right-2 text-black font-bold text-xl hover:text-gray-500"
        >
          &times;
        </button>

        <h2 className="text-lg text-center font-bold mb-4">{title}</h2>

        {flag == "yes" ? (
          <>
            <p className="mb-6  text-center npm ">{message}</p>
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
          </>
        ) : (

          flag=="Travel"?
          <>
           <p className="mb-6  text-center npm  ">Line closure on Elizabeth line. Expected delays of 3 hours.</p>
   
          {/* <div className="bg-white shadow-lg p-4 rounded-md"> */}
          <p className="text-gray-700 font-semibold text-center npm ">Would you like to update your day?</p>
          <br/>
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
            {/* </div> */}
          </>
          :
          <>
            <div className="mb-4">
              <label className="block mb-2">
                <input
                  type="radio"
                  name="options"
                  value="Booking"
                  checked={selectedOption === "Booking"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
               {message}
              </label>

              <label className="block mb-2">
                <input
                  type="radio"
                  name="options"
                  value="No Changes"
                  checked={selectedOption === "No Changes"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                No Changes
              </label>
            </div>
            <div className="flex justify-center space-x-4">
            <CustomButton
                bgColor="bg-red-600"
                textColor="text-white"
                text="Confirm"
                onClick={onYes}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeToDeskPopup;
