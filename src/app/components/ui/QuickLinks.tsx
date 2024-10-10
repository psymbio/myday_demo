import React from "react";
// import Heading2 from "./Heading2";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

export default function Links() {
  const cards = [
    {
      title: "Attractions",
      description: "Explore Panaroma St. Pauls",
      imgSrc: "/attraction.jpg",
    },
    {
      title: "Sustainability",
      description: "Climate conscious building",
      imgSrc: "/sustainability-banner.jpg",
    },
  ];

  return (
    <div className="py-8 -translate-y-[12.5rem] px-2 sm:px-6 lg:px-8 mx-4">
      {/* Quick Links Section */}
      <div className="mb-4">
        {/* <Heading2 heading="Quick Links" /> */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-12 mt-4">
          <a
            href="#"
            className="flex flex-col items-center text-center "
            aria-label="QR Code Scanner"
          >
            <QrCodeScannerOutlinedIcon fontSize="medium" />
            <span className="mt-2 text-sm">Scan QR</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-center"
            aria-label="Subway Directions"
          >
            <DirectionsSubwayFilledOutlinedIcon fontSize="medium" />
            <span className="mt-2 text-sm">Directions</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-center"
            aria-label="More Info"
          >
            <InfoOutlinedIcon fontSize="medium" />
            <span className="mt-2 text-sm">Info</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-center"
            aria-label="Add Person"
          >
            <PersonAddOutlinedIcon fontSize="medium" />
            <span className="mt-2 text-sm">Add Person</span>
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-2">
        {cards.map((card, index) => (
          <article
            key={index}
            className="group bg-white rounded-lg shadow transition-transform transform hover:scale-105 p-3 border flex flex-col"
          >
            <img
              alt={card.title}
              src={card.imgSrc}
              className="h-20 w-full object-cover rounded"
            />
            <div className="mt-2 flex-1 flex flex-col">
              <a href="#" className="hover:underline">
                <h3 className="text-sm text-black">
                  {card.title}
                </h3>
              </a>
              <p className="text-xs text-gray-600 flex-1">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
