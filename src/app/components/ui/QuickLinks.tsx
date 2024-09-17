import React from "react";
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import DirectionsSubwayFilledOutlinedIcon from '@mui/icons-material/DirectionsSubwayFilledOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function Links() {
  const cards = [
    {
      title: "Attractions",
      description:
        "Located at the heart of London, HSBC's global headquarters offers breathtaking views of the River Thames and is just minutes away from iconic attractions such as the Tower of London, the Shard, and Canary Wharf. Experience the vibrancy of London's financial district while banking with us.",
      imgSrc: "/attraction.jpg",
    },
    {
      title: "Sustainability",
      description:
        "At HSBC, sustainability is at the core of everything we do. We are committed to driving positive environmental impact through responsible banking practices, supporting green energy projects, and helping customers transition towards a low-carbon future.",
      imgSrc: "/sustainability-banner.jpg",
    },
    {
      title: "Spinathon-Blog",
      description:
        "Join us on our Spinathon Blog where we share exciting updates, stories, and tips from our latest spinathon events. Stay inspired and motivated with our community of fitness enthusiasts.",
      imgSrc: "/spinathon-blog.jpg",
    },
  ];

  return (
    <section className="p-8 bg-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-red-700">Quick Links</h2>
        <div className="flex flex-wrap justify-between md:justify-start gap-4 md:gap-6">
          <a href="#" className="flex flex-col items-center text-center">
            <QrCodeScannerOutlinedIcon />
          </a>
          <a href="#" className="flex flex-col items-center text-center">
            <DirectionsSubwayFilledOutlinedIcon />
          </a>
          <a href="#" className="flex flex-col items-center text-center">
            <InfoOutlinedIcon />
          </a>
          <a href="#" className="flex flex-col items-center text-center">
            <PersonAddOutlinedIcon />
          </a>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={index}
            className="group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 p-4"
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <img
              alt={card.title}
              src={card.imgSrc}
              className="h-30 w-full rounded-t-xl object-cover"
            />
            <div className="p-4">
              <a href="#" className="text-red-700 hover:underline">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              </a>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
