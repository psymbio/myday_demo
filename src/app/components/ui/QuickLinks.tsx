import React from "react";
import Heading2 from "./Heading2";
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import DirectionsSubwayFilledOutlinedIcon from '@mui/icons-material/DirectionsSubwayFilledOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function Links() {
  const cards = [
    {
      title: "Attractions",
      description:
        "Explore Panaroma St. Pauls",
      imgSrc: "/attraction.jpg",
    },
    {
      title: "Sustainability",
      description:
        "Climate conscious building",
      imgSrc: "/sustainability-banner.jpg",
    },
  ];

  return (
    <div className="py-8 -translate-y-[9rem] px-4 sm:px-6 lg:px-8">
      {/* Quick Links Section */}
      <div className="mb-8">
        <Heading2 heading="Quick Links" />
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-4">
          <a href="#" className="flex flex-col items-center text-center text-HSBC-red hover:text-HSBC-darkRed" aria-label="QR Code Scanner">
            <QrCodeScannerOutlinedIcon fontSize="large" />
            <span className="mt-2 text-sm">Scan QR</span>
          </a>
          <a href="#" className="flex flex-col items-center text-center text-HSBC-red hover:text-HSBC-darkRed" aria-label="Subway Directions">
            <DirectionsSubwayFilledOutlinedIcon fontSize="large" />
            <span className="mt-2 text-sm">Directions</span>
          </a>
          <a href="#" className="flex flex-col items-center text-center text-HSBC-red hover:text-HSBC-darkRed" aria-label="More Info">
            <InfoOutlinedIcon fontSize="large" />
            <span className="mt-2 text-sm">Info</span>
          </a>
          <a href="#" className="flex flex-col items-center text-center text-HSBC-red hover:text-HSBC-darkRed" aria-label="Add Person">
            <PersonAddOutlinedIcon fontSize="large" />
            <span className="mt-2 text-sm">Add Person</span>
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {cards.map((card, index) => (
          <article
            key={index}
            className="group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 p-4 border border-transparent group-hover:border-HSBC-red flex flex-col"
          >
            <img
              alt={card.title}
              src={card.imgSrc}
              className="h-36 w-full rounded-t-xl object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <a href="#" className="text-HSBC-red hover:underline">
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              </a>
              <p className="mt-2 text-sm text-gray-700 flex-1">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
