"use client";

import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import foodItemsData from '../../data/fooditems.json'; // Import your food items data
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '@/slices/cartSlice'; // Adjust the path to your slice

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

interface Add2CartProps {
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

const Add2Cart: React.FC<Add2CartProps> = ({ veg, pescatarian, glutenFree }) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]); // Holds filtered items
  const cartItems = useSelector((state: { cart: { items: { [key: number]: number } } }) => state.cart.items); // Get cart items from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    // Filter the food items based on the received props
    const filteredItems = foodItemsData.filter((item: FoodItem) => {
      return (
        (!veg || item.veg) &&
        (!pescatarian || item.pescatarian) &&
        (!glutenFree || item.glutenFree)
      );
    });

    setFoodItems(filteredItems); // Set filtered items in state
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
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
              cartQuantity={cartItems[item.id] || 0} // Pass the current cart quantity
            />
          ))
        ) : (
          <p>No items match your filter criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Add2Cart;
