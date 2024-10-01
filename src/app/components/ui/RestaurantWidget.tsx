"use client";

import React, { useState, useEffect } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DoneIcon from "@mui/icons-material/DoneRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";

// Enums for better type safety
enum IconType {
  Restaurant = "restaurant",
  Cafe = "cafe",
}

enum BusyStatus {
  Busy = "Busy",
  NotBusy = "Not Busy",
}

// Define restaurant data structure
interface Restaurant {
  id: string;
  name: string;
  iconType: IconType;
  schedule: string[];
  busyStatus: BusyStatus;
}

// Restaurant details
const initialRestaurants: Restaurant[] = [
  {
    id: "mezzanine",
    name: "Mezzanine Restaurant",
    iconType: IconType.Restaurant,
    schedule: [
      "Breakfast: 07:30 - 10:30 (Mon-Fri)",
      "Lunch: 11:30 - 14:00 (Mon-Fri)",
    ],
    busyStatus: BusyStatus.NotBusy, // Default status
  },
  {
    id: "starbucks",
    name: "Starbucks",
    iconType: IconType.Cafe,
    schedule: [
      "Mon-Fri: 07:00 - 16:00",
      "Tue & Thu: 07:00 - 17:00",
    ],
    busyStatus: BusyStatus.NotBusy, // Default status
  },
];

interface RestaurantCardProps {
  restaurant: Restaurant;
  renderIcon: (iconType: IconType) => JSX.Element | null;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, renderIcon }) => (
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
    <div className="w-full mt-1">
      <div className="flex justify-end items-center mb-1">
        {restaurant.busyStatus === BusyStatus.Busy ? (
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
        className={`px-2 py-0.5 rounded-full text-xs font-semibold text-center w-full ${
          restaurant.busyStatus === BusyStatus.Busy
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        }`}
        aria-label={restaurant.busyStatus}
      >
        {restaurant.busyStatus}
      </div>
    </div>
  </div>
);

export default function RestaurantDisplay() {
  const [restaurantStatuses, setRestaurantStatuses] = useState<Restaurant[]>(initialRestaurants);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to render icons based on type
  const renderIcon = (iconType: IconType) => {
    switch (iconType) {
      case IconType.Restaurant:
        return (
          <RestaurantMenuIcon
            fontSize="small" // Reduced size
            className="text-red-600"
            aria-hidden="true"
          />
        );
      case IconType.Cafe:
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
          const randomStatus: BusyStatus =
            Math.random() > 0.5 ? BusyStatus.Busy : BusyStatus.NotBusy;
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
    return (
      <div className="p-1 text-center text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-2 p-3 border rounded-lg shadow bg-white">
      {/* Title */}
      {/* <h1 className="text-lg font-bold mb-2 text-red-600">Restaurant Availability</h1> */}

      {/* Display Restaurants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {restaurantStatuses.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            renderIcon={renderIcon}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-2 text-xs">
        <a href="/food_drink" className="text-red-600 hover:underline font-semibold">
          Go to Restaurants
        </a>
      </div>
    </div>
  );
}
