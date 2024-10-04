"use client";

import React from "react";
import RestaurantDisplay from "./RestaurantDisplay";
import FoodCardDisplay from "./FoodDisplay";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col"> {/* Removed gap or margin class */}
      {/* FoodCardDisplay */}
     
        <FoodCardDisplay />
     

     
     
        <RestaurantDisplay />
      
    </div>
  );
};

export default MainPage;
