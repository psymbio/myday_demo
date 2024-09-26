"use client";

import React, { useState, useEffect } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DoneIcon from "@mui/icons-material/DoneRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";

// Define restaurant data structure
interface Restaurant {
  name: string;
  icon: JSX.Element;
  schedule: string[];
  busyStatus: "Busy" | "Not Busy";
}

// Restaurant details
const restaurants: Restaurant[] = [
  {
    name: "Teya Restaurant",
    icon: <RestaurantMenuIcon fontSize="large" className="text-blue-500" aria-label="Restaurant Icon" />,
    schedule: [
      "Breakfast: 07:30 - 10:30 (Mon-Fri)",
      "Lunch: 11:30 - 14:00 (Mon-Fri)",
    ],
    busyStatus: "Not Busy", // Default status
  },
  {
    name: "Mezzanine Restaurant",
    icon: <RestaurantMenuIcon fontSize="large" className="text-green-500" aria-label="Restaurant Icon" />,
    schedule: [
      "Breakfast: 07:30 - 10:30 (Mon-Fri)",
      "Lunch: 11:30 - 14:00 (Mon-Fri)",
    ],
    busyStatus: "Not Busy", // Default status
  },
  {
    name: "Starbucks",
    icon: <LocalCafeIcon fontSize="large" className="text-yellow-500" aria-label="Cafe Icon" />,
    schedule: [
      "Mon-Fri: 07:00 - 16:00",
      "Tue & Thu: 07:00 - 17:00",
    ],
    busyStatus: "Not Busy", // Default status
  },
];

export default function RestaurantDisplay() {
  const [restaurantStatuses, setRestaurantStatuses] = useState<Restaurant[]>(restaurants);

  // Polling to update restaurant status every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRestaurantStatuses((prevStatuses) =>
        prevStatuses.map((restaurant) => {
          const randomStatus: "Busy" | "Not Busy" = Math.random() > 0.5 ? "Busy" : "Not Busy";
          return { ...restaurant, busyStatus: randomStatus };
        })
      );
    }, 10000); // Updates every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="p-8 bg-white h-120">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Restaurant Availability</h1>

      {/* Display Restaurants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurantStatuses.map((restaurant, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-lg p-5 flex flex-col justify-between items-start"
          >
            {/* Left side: Icon and Restaurant Details */}
            <div className="flex items-start w-full">
              {/* Restaurant Icon */}
              <div className="mr-4">
                {restaurant.icon}
              </div>
              {/* Restaurant Name and Schedule */}
              <div className="text-left flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">{restaurant.name}</h2>
                <div className="text-gray-600 text-sm">
                  {restaurant.schedule.map((time, i) => (
                    <p key={i}>{time}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Busy Status as a full-width pill button */}
            <div className="w-full mt-4">
              <div className="flex justify-end items-center w-full">
                {/* Busy/Not too busy icon */}
                {restaurant.busyStatus === "Busy" ? (
                  <CloseIcon aria-label="Busy" className="text-red-600 mr-2" />
                ) : (
                  <DoneIcon aria-label="Not Busy" className="text-green-500 mr-2" />
                )}
              </div>
              {/* Busy Status Pill Button */}
              <div
                className={`px-4 py-2 mt-2 rounded-full text-sm font-semibold transition-colors duration-300 text-center w-full ${
                  restaurant.busyStatus === "Busy"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
                aria-label={restaurant.busyStatus}
              >
                {restaurant.busyStatus}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="flex justify-between items-center">
        <span>Feeling Hungry?</span>
        <a href="/food_drink" className="text-red-600 hover:underline">
          Go to Restaurants
        </a>
      </div>
    </div>
  );
}
