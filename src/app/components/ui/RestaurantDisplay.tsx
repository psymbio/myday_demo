"use client";

import React, { useState, useEffect } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
// import DoneIcon from "@mui/icons-material/DoneRounded";
// import CloseIcon from "@mui/icons-material/CloseRounded";

// Define restaurant data structure
interface Restaurant {
  name: string;
  icon: JSX.Element;
  schedule: string[];
  busyStatus: "Busy" | "Not too busy";
}

// Restaurant details
const restaurants: Restaurant[] = [
  {
    name: "Teya Restaurant",
    icon: <RestaurantMenuIcon fontSize="large" className="text-blue-500" />,
    schedule: [
      "Breakfast: 07:30 - 10:30 (Mon-Fri)",
      "Lunch: 11:30 - 14:00 (Mon-Fri)",
    ],
    busyStatus: "Not too busy", // Default status
  },
  {
    name: "Mezzanine Restaurant",
    icon: <RestaurantMenuIcon fontSize="large" className="text-green-500" />,
    schedule: [
      "Breakfast: 07:30 - 10:30 (Mon-Fri)",
      "Lunch: 11:30 - 14:00 (Mon-Fri)",
    ],
    busyStatus: "Not too busy", // Default status
  },
  {
    name: "Starbucks",
    icon: <LocalCafeIcon fontSize="large" className="text-yellow-500" />,
    schedule: [
      "Mon-Fri: 07:00 - 16:00",
      "Tue & Thu: 07:00 - 17:00",
    ],
    busyStatus: "Not too busy", // Default status
  },
];

export default function RestaurantDisplay() {
  const [restaurantStatuses, setRestaurantStatuses] = useState<Restaurant[]>(
    restaurants
  );

  // Randomize busy status on refresh
  useEffect(() => {
    const updatedStatuses = restaurantStatuses.map((restaurant) => {
      const randomStatus: "Busy" | "Not too busy" = Math.random() > 0.5 ? "Busy" : "Not too busy";
      return { ...restaurant, busyStatus: randomStatus };
    });
    setRestaurantStatuses(updatedStatuses);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Restaurant Availability</h1>

      {/* Display Restaurants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurantStatuses.map((restaurant, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center"
            >
              {/* Restaurant Icon */}
              {restaurant.icon}
              {/* Restaurant Name */}
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                {restaurant.name}
              </h2>
              {/* Schedule */}
              <div className="text-gray-600 text-sm mt-2">
                {restaurant.schedule.map((time, i) => (
                  <p key={i}>{time}</p>
                ))}
              </div>
              {/* Busy Status */}
              <div className="mt-4 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full ${
                    restaurant.busyStatus === "Busy" ? "bg-red-600" : "bg-green-500"
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {restaurant.busyStatus === "Busy" ? "Busy" : "Not too busy"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
