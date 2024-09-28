"use client";

import React from 'react'; // Removed unused `useState`
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
  const handleAddToCart = (id: number) => {
    console.log(`Added item with id ${id} to the cart.`);
    // Implement the add to cart functionality here
  };

  const handleRemoveFromCart = (id: number) => {
    console.log(`Removed item with id ${id} from the cart.`);
    // Implement the remove from cart functionality here
  };

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
            glutenFree={item.glutenFree}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            cartQuantity={0}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCardDisplay;
