"use client";

import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Image from "next/image"; // Assuming you're using next/image for optimization

interface FoodCardProps {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cartQuantity: number; // The current quantity in the cart
  image: string; // Added image prop
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  cost,
  veg,
  onAddToCart,
  onRemoveFromCart,
  cartQuantity,
  image, // New prop for the image
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 flex items-center justify-between h-auto">
      
      {/* Name and Price on the left side */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Name of the food item with Vegetarian (V) icon if applicable */}
          <h2 className="text-base font-semibold text-gray-600 flex items-center -mt-10">
            {name}
            {veg && <span className="text-base font-semibold text-gray-600 ml-2 text-green-600">(V)</span>}
          </h2>
          <p className="text-base font-semibold text-gray-600">£{cost.toFixed(2)}</p>
        </div>
      </div>

      {/* Image on the right side */}
      <div className="w-20 h-20 relative">
        <Image
          src={`/food_items/${image}`}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Quantity Control next to the image in a vertical layout */}
      <div className="flex flex-col items-center justify-center ml-2">
        <button
          onClick={() => onAddToCart(id)}
          className="border p-1 flex items-center justify-center"
        >
          <AddRoundedIcon />
        </button>

        <span className="text-lg">{cartQuantity}</span>

        <button
          onClick={() => onRemoveFromCart(id)}
          className="border p-1 flex items-center justify-center"
          disabled={cartQuantity === 0} // Disable if quantity is 0
        >
          <RemoveRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
