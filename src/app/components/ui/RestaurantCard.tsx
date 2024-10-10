"use client";
import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  schedule: string[];
  image: string;
  text: string; 
}

// Restaurant Card Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  return (
    <div className="relative w-full p-4 bg-white rounded-lg shadow-lg border border-gray-200 p-1 mt-2 transition-all duration-300 hover:shadow-xl -z-10">
      {/* Restaurant Image */}
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-24 object-cover rounded-lg"
      />

      {/* Button with Chevron */}
      <button
        className="w-full flex items-center justify-between p-2 mt-2 bg-gray-100 text-black rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 border border-black"
      >
        <span className="text-md font-semibold">{restaurant.name}</span>
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
      {/* Restaurant Description */}
      {/* <div className="mt-2 text-gray-600 text-sm">
        <p>{restaurant.text}</p>
      </div> */}
    </div>
  );
};

export default RestaurantCard;
