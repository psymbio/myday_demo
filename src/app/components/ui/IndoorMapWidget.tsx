"use client";

import React from "react";

const PSPDisplay: React.FC = () => {
  return (
    <section className="mt-4 p-2 border rounded-lg shadow bg-white h-[12rem] overflow-scroll">
      {/* Responsive Image */}
      <div className="mb-4">
        <img
          src="/PSP_street_view.jpg"
          alt="PSP Street View"
          className="w-full h-36 object-cover rounded-md"
          loading="lazy" // Enhances performance by lazy loading the image
        />
      </div>

      {/* Footer with Styled Button */}
      <footer className="flex justify-end items-center mt-2 text-xs">
        <a
          href="https://workspaces.dnaspaces.io/?token=a1000c06-e96d-4cca-bb71-780e5718e04a#/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline font-semibold"
        >
          Finding Your Way @ PSP
        </a>
      </footer>
    </section>
  );
};

export default PSPDisplay;
