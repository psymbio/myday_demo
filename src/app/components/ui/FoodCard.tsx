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
  pescatarian: boolean;
  glutenFree: boolean;
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
    <div className="bg-white shadow-md rounded-lg p-3 flex items-start justify-between h-auto">
      {/* Image on the left side */}
      <div className="mr-4 w-20 h-20">
        <Image
          src={`/food_items/${image}`}
          alt={name}
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Name of the food item with Vegetarian (V) icon if applicable */}
          <h2 className="text-lg font-semibold text-black flex items-center">
            {name}
            {veg && (
              <span className="ml-2 text-green-600 font-bold">(V)</span>
            )}
          </h2>
          <p className="text-lg text-gray-800">${cost.toFixed(2)}</p>
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
    </div>
  );
};

export default FoodCard;
