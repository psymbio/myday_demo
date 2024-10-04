"use client";
import React from "react";


const TeyaCard: React.FC = () => {
  return (
    <div className="relative max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 p-6 mt-4 transition-all duration-300 hover:shadow-xl flex items-center">
      {/* Section 1: Image */}
      <div className="flex-shrink-0">
        <img
          src="/restaurants/Teya_PrimaryLogo.png" // actual path of the image
          alt="Card Image"
          className="w-24 h-auto rounded-md" // Adjusted image size
        />
      </div>

      {/* Section 3: Subtext */}
      <div className="flex-grow pl-10 flex items-center">
        <p className="text-gray-500 text-xs">
          PSP is a cashless building. Purchases can be made via Teya, Chip and
          Pin, Apple Pay, or Google Pay. To download the app,
          <a
          href="/coming_soon"
          className="text-red-600 hover:underline font-semibold"
        >
          Click here
        </a>
to scan a QR code with your mobile device.
        </p>
      </div>
    </div>
  );
};

export default TeyaCard;
