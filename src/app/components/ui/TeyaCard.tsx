"use client";
import React from "react";
import Link from "next/link"; // Import Link for routing

const TeyaCard: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 max-w-md text-sm">
      {/* Section 1: Image */}
      <div className="w-1/2 px-4"> {/* Add equal padding */}
        <img
          src="/restaurants/Teya_PrimaryLogo.png" // actual path of the image
          alt="Card Image"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Section 3: Subtext */}
      <div className="w-1/2 px-4"> {/* Add equal padding */}
        <p className="text-gray-500 text-xs font-bold"> {/* Add font-bold for bold text */}
          PSP is a cashless building. Purchases can be made via Teya, Chip and Pin, Apple Pay, or Google Pay. To download the app,{" "}
          <Link href="/coming_soon" className="text-blue-500 underline">
            Click here
          </Link>
          to scan a QR code using mobile device.
        </p>
      </div>
    </div>
  );
};

export default TeyaCard;
