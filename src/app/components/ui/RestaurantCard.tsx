"use client";
import React, { useState } from 'react';

import foodItems from '../../data/fooditems.json'; // Import food items data
import CustomButton from './CustomButton';


// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  text: string;
  subtext: string;
  image: string;
}

// Define a type for food items
interface FoodItem {
  id: number;
  name: string;
  cost: number;
  restaurantId: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

// Restaurant Card Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  // Filter state for menu preferences
  const initialFilterState = {
    veg: false,
    pescatarian: false,
    glutenFree: false,
  };

  const [filter, setFilter] = useState(initialFilterState);
  const [menuVisible, setMenuVisible] = useState(false); // Control the visibility of the menu

  // Function to open the menu and reset the filters
  const openMenu = () => {
    setFilter(initialFilterState); // Reset filter preferences
    setMenuVisible(true); // Show the menu
  };

  return (
    <div className="relative -z-10 max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4"> {/* Ensure card has z-index lower than menu */}
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />


      <CustomButton
            bgColor="bg-gray-400 w-full"
            textColor="text-black-500 text-sm font-bold"
            text={restaurant.name} 
            onClick={openMenu}
          />

     

      <div className="p-1">
        {/* Text below the button */}

        <p className="text-black-500 text-sm font-bold mt-2">{restaurant.text}</p>
    </div>
  );
};

export default RestaurantCard;
