import React from 'react';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
  onClick?: () => void;  // Make onClick optional
}

export default function CustomButton({ bgColor, textColor, text, onClick }: ButtonProps) {
  return (
    <button
      className={`${bgColor} hover:brightness-110 ${textColor} rounded-md px-5 py-2.5 text-sm font-medium text-white shadow`}
      onClick={onClick}  // Pass onClick if available, else do nothing
    >
      {text}
    </button>
  );
}
