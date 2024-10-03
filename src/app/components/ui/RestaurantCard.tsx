"use client";
import React from 'react';

// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  text: string;
  subtext: string;
  image: string;
}

// Restaurant Card Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  return (
    <div className="relative -z-10 max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded-lg"
      >
        {restaurant.name} 
      </button>
      <p className="text-black-500 text-sm font-bold mt-2">{restaurant.text}</p>
    </div>
  );
};

export default RestaurantCard;