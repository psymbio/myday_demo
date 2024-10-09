"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import foodItemsData from "../../data/fooditems.json"; // Import your food items data
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "@/slices/cartSlice"; // Adjust the path to your slice
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // Import useRouter

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  restaurant: string; // Ensure this property exists in your data
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  courseType: string; // Match this with your data
  image: string;
}

interface Add2CartProps {
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

const Add2Cart: React.FC<Add2CartProps> = ({
  veg,
  pescatarian,
  glutenFree,
}) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]); // Holds filtered items
  const cartItems = useSelector(
    (state: { cart: { items: { [key: number]: number } } }) => state.cart.items
  ); // Get cart items from Redux
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Filter the food items based on the received props
    const filteredItems = foodItemsData.filter((item: FoodItem) => {
      return (
        (!veg || item.veg) &&
        (!pescatarian || item.pescatarian) &&
        (!glutenFree || item.glutenFree)
      );
    });

    // Define sort order for course items
    const sortOrder: { [key: string]: number } = {
      starter: 1, // Ensure this matches your data
      main: 2,
      dessert: 3, // Make sure "dessert" is in your dataset if needed
    };

    // Debugging: Check filtered items
    console.log("Filtered Items: ", filteredItems);

    // Sort the filtered items by courseType
    const sortedItems = filteredItems.sort((a, b) => {
      const orderA = sortOrder[a.courseType.toLowerCase()] || 0; // Ensure case-insensitive
      const orderB = sortOrder[b.courseType.toLowerCase()] || 0; // Ensure case-insensitive
      return orderA - orderB;
    });

    // Debugging: Check sorted items
    console.log("Sorted Items: ", sortedItems);

    setFoodItems(sortedItems); // Set filtered and sorted items in state
  }, [veg, pescatarian, glutenFree]); // Re-run when props change

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
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-black mb-6">Available Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              cost={item.cost}
              veg={item.veg}
              image={item.image}
              pescatarian={item.pescatarian}
              glutenFree={item.glutenFree}
              onAddToCart={handleAddToCart} // Add functionality
              onRemoveFromCart={handleRemoveFromCart} // Remove functionality
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
