"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import foodItemsData from "../../data/fooditems.json"; // Ensure this path is correct
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "@/slices/cartSlice";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // Correct hook for app dir

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  restaurant: string;
  image: string;
  courseType: string;
}

interface Add2CartRestaurantProps {
  restaurant: string;
}

const Add2CartRestaurant: React.FC<Add2CartRestaurantProps> = ({
  restaurant,
}) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]); // Holds filtered items
  const cartItems = useSelector(
    (state: { cart: { items: { [key: number]: number } } }) => state.cart.items
  ); // Get cart items from Redux
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Filter food items by restaurant (case-insensitive)
    const filteredItems = foodItemsData.filter(
      (item: FoodItem) => item.restaurant.toLowerCase() === restaurant.toLowerCase()
    );

    // Sort order for courseType
    const sortOrder: { [key: string]: number } = {
      starter: 1,
      main: 2,
      dessert: 3,
    };

    // Sort the filtered items by courseType
    const sortedItems = filteredItems.sort((a, b) => {
      const orderA = sortOrder[a.courseType.toLowerCase()] || 0;
      const orderB = sortOrder[b.courseType.toLowerCase()] || 0;
      return orderA - orderB;
    });

    setFoodItems(sortedItems); // Set the filtered and sorted items in state
  }, [restaurant]); // Re-run when restaurant prop changes

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
    <div className="mx-4">
      <h1 className="flex justify-center text-2xl font-bold text-black mb-6">Available Items</h1>
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
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              cartQuantity={cartItems[item.id] || 0}
            />
          ))
        ) : (
          <p className="text-gray-700 text-lg">No items available from {restaurant}.</p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <CustomButton
          bgColor="bg-red-600 hover:bg-red-700"
          textColor="text-white"
          text="Proceed to Checkout"
          onClick={handleCheckout}
        />
      </div>
    </div>
  );
};

export default Add2CartRestaurant;
