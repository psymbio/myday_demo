"use client";
import React from "react";

const TeyaCard: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 max-w-md text-sm">
      {/* Section 1: Image */}
      <div className="w-1/3">
        <img
          src="/restaurants/Teya.jpg" // actual path of the image
          alt="Card Image"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Section 2: Main Text */}
      <div className="w-1/3 px-2">
        <h1 className="text-base font-bold">teya</h1>
      </div>

      {/* Section 3: Subtext */}
      <div className="w-1/3 px-2">
        <p className="text-gray-500 text-xs">
          PSP is a cashless building. Purchases can be made via Teya, Chip and
          Pin, Apple Pay, or Google Pay.
        </p>
      </div>
    </div>
  );
};

export default TeyaCard;
