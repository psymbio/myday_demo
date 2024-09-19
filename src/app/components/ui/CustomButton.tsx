import React from 'react';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
}

export default function CustomButton({ bgColor, textColor, text }: ButtonProps) {
  return (
    <button
      className={`${bgColor} hover:brightness-110 ${textColor} px-2 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded font-medium`}
    >
      {text}
    </button>
  );
}
