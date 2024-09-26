"use client";

import React, { useState } from 'react';
import FoodCard from './FoodCard';
import foodItems from '../../data/fooditems.json'; // Importing data from a JSON file

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

const FoodCardDisplay: React.FC = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({}); // Cart is a dictionary {id: quantity}

  return (
    <div className="p-6">
      {/* Display food items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodItems.map((item: FoodItem) => (
          <FoodCard
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            veg={item.veg}
            pescatarian={item.pescatarian}
            glutenFree={item.glutenFree} onAddToCart={function (id: number): void {
              throw new Error('Function not implemented.');
            } } onRemoveFromCart={function (id: number): void {
              throw new Error('Function not implemented.');
            } } cartQuantity={0}          />
        ))}
      </div>
    </div>
  );
};

export default FoodCardDisplay;
