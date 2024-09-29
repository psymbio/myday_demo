"use client";
import React from 'react';
import CustomButton from './CustomButton';
//import restaurants from '../../data/restaurants.json'

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
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
        <p className="text-gray-500 mt-2">{restaurant.text}</p>
        <p className="text-gray-400 text-sm mt-1">{restaurant.subtext}</p>
        <CustomButton
          bgColor="bg-red-600"
          textColor="text-white"
          text="View"
          onClick={() => alert(`Visit ${restaurant.name}`)}
        />
      </div>
    </div>
  );
};

export default RestaurantCard;
