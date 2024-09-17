import React from "react";

export default function Links() {
  const cards = [
    {
      title: "Attractions",
      description:
        "Located at the heart of London, HSBC's global headquarters offers breathtaking views of the River Thames and is just minutes away from iconic attractions such as the Tower of London, the Shard, and Canary Wharf. Experience the vibrancy of London's financial district while banking with us.",
      imgSrc: "/attraction.jpg", // Replace with your image path
    },
    {
      title: "Sustainability",
      description:
        "At HSBC, sustainability is at the core of everything we do. We are committed to driving positive environmental impact through responsible banking practices, supporting green energy projects, and helping customers transition towards a low-carbon future.",
      imgSrc: "/sustainability-banner.jpg", // Replace with your image path
    },
    {
      title: "Spinathon-Blog",
      description:
        "Join us on our Spinathon Blog where we share exciting updates, stories, and tips from our latest spinathon events. Stay inspired and motivated with our community of fitness enthusiasts.",
      imgSrc: "/spinathon-blog.jpg", // Replace with your image path
    },
  ];

  return (
    <section className="p-8 bg-gray-100">
      {/* Heading Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-red-700">Quick Links</h2>
        {/* Icons Section - Responsive Flex Layout with Local Icons */}
        <div className="flex flex-wrap justify-between md:justify-start gap-4 md:gap-6">
          <a href="#" className="flex flex-col items-center text-center">
            <img
              src="/icons/qr_scanner.png" // Replace with your local QR Scanner icon path
              alt="QR Scanner"
              className="h-20 w-20 object-contain hover:text-red-700"
            />
            {/* <span className="text-sm text-gray-600 mt-1">QR Scanner</span> */}
          </a>
          <a href="#" className="flex flex-col items-center text-center">
            <img
              src="/icons/transport.png" // Replace with your local Transportation icon path
              alt="Transport"
              className="h-20 w-20 object-contain hover:text-red-700"
            />
            {/* <span className="text-sm text-gray-600 mt-1">Transportation</span> */}
          </a>
          <a href="#" className="flex flex-col items-center text-center">
            <img
              src="/icons/help.png" // Replace with your local Help icon path
              alt="Help"
              className="h-20 w-20 object-contain hover:text-red-700"
            />
            {/* <span className="text-sm text-gray-600 mt-1">Help</span> */}
          </a>
          <a href="#" className="flex flex-col items-center text-center">
            <img
              src="/icons/user.png" // Replace with your local User icon path
              alt="User"
              className="h-20 w-20 object-contain hover:text-red-700"
            />
            {/* <span className="text-sm text-gray-600 mt-1">User</span> */}
          </a>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={index}
            className="group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 p-4"
            style={{ maxWidth: '900px', margin: '0 auto' }} // Reduced size
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
