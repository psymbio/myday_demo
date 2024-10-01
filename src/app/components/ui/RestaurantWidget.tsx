"use client";

import React, { useState, useEffect } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DoneIcon from "@mui/icons-material/DoneRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";

// Define restaurant data structure
interface Restaurant {
  id: string;
  name: string;
  iconType: "restaurant" | "cafe";
  schedule: string[];
  busyStatus: "Busy" | "Not Busy";
}

// Restaurant details
const initialRestaurants: Restaurant[] = [
  {
    id: "mezzanine",
    name: "Mezzanine Restaurant",
    iconType: "restaurant",
    schedule: [
      "Breakfast: 07:30 - 10:30 (Mon-Fri)",
      "Lunch: 11:30 - 14:00 (Mon-Fri)",
    ],
    busyStatus: "Not Busy", // Default status
  },
  {
    id: "starbucks",
    name: "Starbucks",
    iconType: "cafe",
    schedule: [
      "Mon-Fri: 07:00 - 16:00",
      "Tue & Thu: 07:00 - 17:00",
    ],
    busyStatus: "Not Busy", // Default status
  },
];

export default function RestaurantDisplay() {
  const [restaurantStatuses, setRestaurantStatuses] = useState<Restaurant[]>(initialRestaurants);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to render icons based on type
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "restaurant":
        return (
          <RestaurantMenuIcon
            fontSize="small" // Reduced size
            className="text-red-600"
            aria-hidden="true"
          />
        );
      case "cafe":
        return (
          <LocalCafeIcon
            fontSize="small" // Reduced size
            className="text-red-600"
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  // Polling to update restaurant status every 10 seconds
  useEffect(() => {
    const updateStatuses = () => {
      setRestaurantStatuses((prevStatuses) =>
        prevStatuses.map((restaurant) => {
          const randomStatus: "Busy" | "Not Busy" =
            Math.random() > 0.5 ? "Busy" : "Not Busy";
          return { ...restaurant, busyStatus: randomStatus };
        })
      );
    };

    // Initial update
    updateStatuses();
    setLoading(false);

    const interval = setInterval(updateStatuses, 10000); // Updates every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div className="p-2 text-center text-sm">Loading...</div>;
  }

  return (
    <div className="mt-4 p-4 border rounded-lg shadow bg-white">
      {/* <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4"> */}
        {/* Title */}
        <h1 className="text-xl font-bold mb-4 text-red-600">Restaurant Availability</h1>

        {/* Display Restaurants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {restaurantStatuses.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-gray-50 shadow-sm rounded-lg p-3 flex flex-col justify-between"
            >
              {/* Icon and Details */}
              <div className="flex items-start">
                <div className="mr-2">{renderIcon(restaurant.iconType)}</div>
                <div className="flex-grow">
                  <h2 className="text-sm font-bold text-black">{restaurant.name}</h2>
                  <div className="text-gray-600 text-xs">
                    {restaurant.schedule.map((time, i) => (
                      <p key={i}>{time}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Busy Status */}
              <div className="w-full mt-2">
                <div className="flex justify-end items-center mb-1">
                  {restaurant.busyStatus === "Busy" ? (
                    <CloseIcon
                      aria-label="Busy"
                      className="text-red-600 mr-1"
                      fontSize="small"
                    />
                  ) : (
                    <DoneIcon
                      aria-label="Not Busy"
                      className="text-green-500 mr-1"
                      fontSize="small"
                    />
                  )}
                  <span className="text-xs font-semibold text-gray-700">
                    {restaurant.busyStatus}
                  </span>
                </div>
                {/* Busy Status Pill */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-center w-full ${
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

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-xs">
          <span className="text-gray-700">Feeling Hungry?</span>
          <a href="/food_drink" className="text-red-600 hover:underline font-semibold">
            Go to Restaurants
          </a>
        </div>
      {/* </div> */}
    </div>
  );
}
