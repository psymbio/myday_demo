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
          href="https://workspaces.dnaspaces.eu/?token=cb3c8ae0-7267-4db4-831a-9b90515da1ad#/dashboard"
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
