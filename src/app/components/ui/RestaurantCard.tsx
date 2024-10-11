"use client";
import React from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useRouter } from "next/navigation"; // Import Next.js router for navigation

// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  schedule: string[];
  image: string;
  text: string;
  route: string; // Add route field to type definition
}

// Restaurant Card Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  const router = useRouter(); // Initialize Next.js router

  const handleNavigate = () => {
    router.push(restaurant.route); // Navigate to the restaurant route
  };

  return (
    <div className="relative w-full p-4 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
      {/* Restaurant Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Button with Chevron */}
      <button
        type="button" // Explicitly set the button type
        className="w-full flex items-center justify-between p-2 mt-2 bg-gray-100 text-black rounded-lg transition duration-300 border border-black cursor-pointer hover:bg-red-700 hover:text-white"
        onClick={handleNavigate} // Handle navigation on button click
      >
        {restaurant.name}
        <ChevronRightRoundedIcon className="ml-2" />
      </button>

      {/* Restaurant Schedule */}
      <div className="mt-3">
        <ul className="text-gray-800 text-sm font-semibold">
          {restaurant.schedule.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
