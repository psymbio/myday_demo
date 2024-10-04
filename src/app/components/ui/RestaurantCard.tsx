"use client";
import React, { useState } from 'react';

// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  text: string;
  subtext: string;
  image: string;
}

// Restaurant Card Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="relative max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4">
      {/* Image with same size as FoodCardDisplay */}
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />

      {/* Selection Menu instead of button */}
      <div className="w-full p-4">
        <select
          value={selectedOption}
          onChange={handleSelectionChange}
          className="w-full p-2 border border-gray-500 rounded-lg"
        >
          <option value="" disabled>{restaurant.name}</option>
          <option value="Option 1">Vegetarian</option>
          <option value="Option 2">Pescatarian</option>
          <option value="Option 3">GlutenFree</option>
        </select>
      </div>

      {/* Restaurant text with equal padding left and right */}
      <div className="px-4 pb-4">
        <p className="text-black text-sm font-bold mt-2">{restaurant.text}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
