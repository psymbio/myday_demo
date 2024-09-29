// Checkout.tsx
"use client";

import React, { useEffect, useState } from "react";
import foodItems from "@/app/data/fooditems.json";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CheckoutPopup from "./CheckoutPopup";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "@/slices/cartSlice"; // Adjust path accordingly
import CustomButton from "./CustomButton";

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  restaurantId: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { items: { [key: number]: number } } }) => state.cart.items
  );
  const [items, setItems] = useState<FoodItem[]>(foodItems); // Load food items initially
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);

  useEffect(() => {
    // If the cart is not empty, update the items based on cart contents
    if (Object.keys(cartItems).length > 0) {
      const updatedItems = foodItems.filter((item) => cartItems[item.id] > 0);
      setItems(updatedItems);
    }
  }, [cartItems]); // Depend on cartItems so it runs whenever cart changes

  const handleIncrease = (id: number) => {
    dispatch(addItemToCart({ itemId: id, quantity: 1 }));
  };

  const handleDecrease = (id: number) => {
    if (cartItems[id] === 1) {
      setItemToRemove(id);
      setIsPopupVisible(true);
    } else {
      dispatch(updateItemQuantity({ itemId: id, quantity: cartItems[id] - 1 }));
    }
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      dispatch(removeItemFromCart(itemToRemove));
      setItemToRemove(null);
    }
    setIsPopupVisible(false);
  };

  const cancelRemove = () => {
    setItemToRemove(null);
    setIsPopupVisible(false);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {items.map(
                (item) =>
                  cartItems[item.id] > 0 && (
                    <li
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-lg text-gray-600">
                          £{item.cost.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="border p-1 flex items-center justify-center"
                        >
                          <RemoveRoundedIcon />
                        </button>
                        <span className="text-lg text-gray-600">
                          {cartItems[item.id]}
                        </span>
                        <button
                          onClick={() => handleIncrease(item.id)}
                          className="border p-1 flex items-center justify-center"
                        >
                          <AddRoundedIcon />
                        </button>
                      </div>
                    </li>
                  )
              )}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-lg text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>
                      £
                      {items
                        .reduce(
                          (total, item) =>
                            total + (cartItems[item.id] || 0) * item.cost,
                          0
                        )
                        .toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>
                      £
                      {(
                        items.reduce(
                          (total, item) =>
                            total + (cartItems[item.id] || 0) * item.cost,
                          0
                        ) * 0.1
                      ).toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20.00</dd>
                  </div>
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>
                      £
                      {(
                        items.reduce(
                          (total, item) =>
                            total + (cartItems[item.id] || 0) * item.cost,
                          0
                        ) *
                          1.1 -
                        20
                      ).toFixed(2)}
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <CustomButton
                    bgColor="bg-red-600"
                    textColor="text-white"
                    text="Checkout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupVisible && itemToRemove !== null && (
        <CheckoutPopup
          itemName={items.find((item) => item.id === itemToRemove)?.name || ""}
          onConfirm={confirmRemove}
          onCancel={cancelRemove}
        />
      )}
    </section>
  );
}
