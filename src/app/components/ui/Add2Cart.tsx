// Add2Cart.tsx
"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
 //import foodItemsData from "../../data/fooditems.json"; // Import your food items data
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "@/slices/cartSlice"; // Adjust the path to your slice
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // Import useRouter

interface FoodItem {
  id: number;
  restaurantID: number;
  name: string;
  vegan: boolean;
  vegetarian: boolean;
  dairyFree: boolean; // notice camelCase
  lactoseFree: boolean; // notice camelCase
  pescatarian: boolean;
  glutenFree: boolean;
  cost: number;
  imagePath: string;
  type: string;
}

interface Add2CartProps {
  vegan: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  vegetarian: boolean;
  dairyFree: boolean; // notice camelCase
  lactoseFree: boolean; // notice camelCase
}

const Add2Cart: React.FC<Add2CartProps> = ({
  vegan,
  pescatarian,
  glutenFree,
  vegetarian,
  dairyFree, // notice camelCase
  lactoseFree, // notice camelCase
}) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]); // Holds filtered items
  const cartItems = useSelector(
    (state: { cart: { items: { [key: number]: number } } }) => state.cart.items
  ); // Get cart items from Redux
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Filter the food items based on the received props
    const filteredItems = foodItems.filter((item: FoodItem) => {
      return (
        (!vegan || item.vegan) &&  // Use vegan prop from the component
        (!pescatarian || item.pescatarian) &&
        (!glutenFree || item.glutenFree) &&
        (!vegetarian || item.vegetarian) &&
        (!dairyFree || item.dairyFree) &&
        (!lactoseFree || item.lactoseFree)
      );
    });
  
    setFoodItems(filteredItems); // Set filtered items in state
  }, [vegan, pescatarian, glutenFree, vegetarian, dairyFree, lactoseFree, foodItems]); // Re-run when props or foodItems change
  
  const handleAddToCart = (id: number) => {
    dispatch(addItemToCart({ itemId: id, quantity: 1 }));
  };

  const handleRemoveFromCart = (id: number) => {
    if (cartItems[id] > 1) {
      dispatch(addItemToCart({ itemId: id, quantity: -1 }));
    } else {
      dispatch(removeItemFromCart(id));
    }
  };

  const handleCheckout = () => {
    router.push("/food_drink/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-black mb-6">Available Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              cost={item.cost}
              vegan={item.vegan}
              pescatarian={item.pescatarian}
              glutenFree={item.glutenFree}
              vegetarian={item.vegetarian}
              dairyFree={item.dairyFree}
              lactoseFree={item.lactoseFree}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              cartQuantity={cartItems[item.id] || 0} // Pass the current cart quantity
            />
          ))
        ) : (
          <p className="text-gray-700 text-lg">No items match your filter criteria.</p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <CustomButton
          bgColor="bg-red-600 hover:bg-red-700"
          textColor="text-white"
          text="Proceed to Checkout"
          onClick={handleCheckout} // Call handleCheckout on button click
        />
      </div>
    </div>
  );
};

export default Add2Cart;
