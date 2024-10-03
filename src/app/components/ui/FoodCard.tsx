"use client";

import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

interface FoodCardProps {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cartQuantity: number; // The current quantity in the cart
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  cost,
  veg,
  pescatarian,
  glutenFree,
  onAddToCart,
  onRemoveFromCart,
  cartQuantity,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{name} £{cost.toFixed(2)}</h3>
        
      </div>
      
      {/* Quantity and Cart Controls */}
      <div className="mt-4 flex items-center justify-between">
        {/* <p className="text-lg font-semibold">£{cost.toFixed(2)}</p> */}
        
        {/* Quantity Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onRemoveFromCart(id)}
            className="border p-1 flex items-center justify-center"
            disabled={cartQuantity === 0} // Disable if quantity is 0
          >
            <RemoveRoundedIcon />
          </button>
          
          <span className="text-lg">{cartQuantity}</span>
          
          <button
            onClick={() => onAddToCart(id)}
            className="border p-1 flex items-center justify-center"
          >
            <AddRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
