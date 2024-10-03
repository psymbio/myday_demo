"use client";

import React from "react";
import RestaurantDisplay from "./RestaurantDisplay";
import FoodCardDisplay from "./FoodDisplay";

const MainPage: React.FC = () => {
  return (
    <div className="p-7 flex flex-col"> {/* Removed gap or margin class */}
      {/* FoodCardDisplay */}
      <div className="m-0 p-0">
        <FoodCardDisplay />
      </div>

      {/* RestaurantDisplay */}
      <div className="m-0 p-0">
        <RestaurantDisplay />
      </div>
    </div>
  );
};

export default MainPage;
