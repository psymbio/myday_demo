"use client";

import React from 'react';
import RestaurantDisplay from './RestaurantDisplay';
import FoodCardDisplay from './FoodDisplay';

const MainPage: React.FC = () => {
  return (
    <div className="relative p-7">
      {/* FoodCardDisplay (appears first) */}
      <div className="relative z-50">
        <FoodCardDisplay />
      </div>

      {/* RestaurantDisplay (appears immediately after FoodCardDisplay) */}
      <div className="relative z-10">
        <RestaurantDisplay />
      </div>
    </div>
  );
};

export default MainPage;
