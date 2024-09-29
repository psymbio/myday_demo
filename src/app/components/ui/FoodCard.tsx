"use client";

import React from 'react';

interface FoodCardProps {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cartQuantity: number;
}

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  veg,
  pescatarian,
  glutenFree,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className={`text-sm ${veg ? 'text-green-500' : 'text-red-500'}`}>
          {veg ? 'Vegetarian' : 'Non-Vegetarian'}
        </p>
        <p className="text-sm">{glutenFree ? 'Gluten-Free' : 'Contains Gluten'}</p>
        <p className="text-sm">{pescatarian ? 'Pescatarian' : 'Not Pescatarian'}</p>
      </div>
    </div>
  );
};
export default FoodCard;
