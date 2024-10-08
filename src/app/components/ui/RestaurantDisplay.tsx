"use client";
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantsData from "../../data/restaurants.json"; // Assuming data is imported from a JSON file

// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  text: string;
  image: string;
}

// Restaurant List Component
const RestaurantList: React.FC = () => {
  // Directly initialize state with the data from the JSON file
  const [restaurants] = useState<Restaurant[]>(restaurantsData);

  return (
    <div className="flex flex-wrap justify-center">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
