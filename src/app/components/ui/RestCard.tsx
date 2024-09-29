"use client";

import React from 'react';
import foodItems from '../../data/fooditems.json'; // Import food items data

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
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  // Filter food items for this restaurant
  const restaurantFoodItems = foodItems.filter((item: FoodItem) => item.restaurantId === restaurant.id);

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
        <p className="text-gray-500 mt-2">{restaurant.text}</p>
        <p className="text-gray-400 text-sm mt-1">{restaurant.subtext}</p>

        {/* Directly showing dropdown menu */}
        <div className="mt-4">
          
          <select className="w-full p-2 mt-2 border rounded-lg">
            <option value="" disabled selected>
            {restaurant.name}
            </option>
            {restaurantFoodItems.length > 0 ? (
              restaurantFoodItems.map((foodItem) => (
                <option key={foodItem.id} value={foodItem.name}>
                  {foodItem.name} - ${foodItem.cost.toFixed(2)}
                  {foodItem.veg && " | Vegetarian"}
                  {foodItem.pescatarian && " | Pescatarian"}
                  {foodItem.glutenFree && " | Gluten-Free"}
                </option>
              ))
            ) : (
              <option value="">No food items available</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
