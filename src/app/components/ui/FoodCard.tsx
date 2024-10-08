"use client";

import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

interface FoodCardProps {
  id: number;
  name: string;
  cost: number;
  vegan: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  vegetarian: boolean;
  dairyFree: boolean;
  lactoseFree: boolean;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cartQuantity: number; // The current quantity in the cart
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  cost,
  onAddToCart,
  onRemoveFromCart,
  cartQuantity,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 flex flex-col justify-between h-auto">
      <div>
        <h2 className="text-lg font-semibold text-black">{name}</h2>
        <p className="text-lg text-gray-800">${cost.toFixed(2)}</p> {/* Cost appears under the name */}
      </div>

      {/* Align the Quantity and Cart Controls to the bottom */}
      <div className="mt-auto flex items-center justify-end">
        <div className="flex items-center gap-2">
          {/* Quantity Control */}
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
