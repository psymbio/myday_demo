"use client";

import React from 'react';
import RestaurantDisplay from './RestDisplay';
import FoodCardDisplay from './FoodDisplay';

const MainPage: React.FC = () => {
  return (
    <div className="relative">
      {/* Background: RestaurantList */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <RestaurantDisplay />
      </div>

      {/* Overlay: FoodCardDisplay */}
      <div className="relative z-10 p-8">
        <FoodCardDisplay />
      </div>
    </div>
  );
};

export default MainPage;
