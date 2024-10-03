// components/HomeToDeskpopup1.tsx
import React from "react";
import CustomButton from "./CustomButton";

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
  );
};

export default HomeToDeskpopup1;
