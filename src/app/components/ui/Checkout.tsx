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
  emptyCart
} from "@/slices/cartSlice";
import CustomButton from "./CustomButton";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "./HomeToDeskpopup";
import { useRouter } from "next/navigation";

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  restaurant: string; // Use 'restaurant' instead of 'restaurantId'
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  courseType: string;
  image: string;
}

interface CartState {
  cart: {
    items: { [key: number]: number };
  };
}

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: CartState) => state.cart.items);
  const [items, setItems] = useState<FoodItem[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);
  const [loadingItem, setLoadingItem] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const [sendtodeskModal, setsendtodeskModal] = useState<boolean>(false);
  const [shownotifyModal, setshownotifyModal] = useState<boolean>(false);
  
  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      const updatedItems = foodItems.filter((item) => cartItems[item.id] > 0);
      setItems(updatedItems);
    } else {
      setItems([]);
    }
  }, [cartItems]);

  const handleIncrease = (id: number) => {
    setLoadingItem(id);
    try {
      dispatch(addItemToCart({ itemId: id, quantity: 1 }));
    } catch {
      setError("Could not increase the quantity. Please try again.");
    } finally {
      setLoadingItem(null);
    }
  };

  const handleDecrease = (id: number) => {
    if (cartItems[id] === 1) {
      setItemToRemove(id);
      setIsPopupVisible(true);
    } else {
      setLoadingItem(id);
      try {
        dispatch(updateItemQuantity({ itemId: id, quantity: cartItems[id] - 1 }));
      } catch {
        setError("Could not decrease the quantity. Please try again.");
      } finally {
        setLoadingItem(null);
      }
    }
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      try {
        dispatch(removeItemFromCart(itemToRemove));
      } catch {
        setError("Could not remove the item. Please try again.");
      } finally {
        setItemToRemove(null);
        setIsPopupVisible(false);
      }
    }
  };

  const cancelRemove = () => {
    setItemToRemove(null);
    setIsPopupVisible(false);
  };

  const subtotal = items.reduce(
    (total, item) => total + (cartItems[item.id] || 0) * item.cost,
    0
  );

  const handleclose = () => {
   
    setshownotifyModal(false);
    setsendtodeskModal(false);
  };

  const router = useRouter();

  const handleEndJourney = () => {
    router.push(`/`);
    dispatch(emptyCart());
    setshownotifyModal(false);
    setsendtodeskModal(false);
  };

  const handlesendtodesk = () => {
    dispatch(emptyCart());
    setshownotifyModal(false);
    setsendtodeskModal(true);
  };

  const handleOpenshownotifyModal = () => {
    setshownotifyModal(true);
  };

  return (
    <section>
      <div className="p-6 min-h-screen">
      <h1 className="flex justify-center text-2xl font-bold text-black mb-6">Your Cart</h1>

          {error && <div className="text-red-500 text-center">{error}</div>}

          {items.length === 0 ? (
            <div className="text-center text-gray-600 mt-8">
              Your cart is empty. Go add some items!
            </div>
          ) : (
            <div className="">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between">
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold text-gray-600">
                        {item.name}
                      </h3>
                      <p className="text-base text-gray-600">
                        £{item.cost.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="border p-1 flex items-center justify-center"
                        disabled={loadingItem === item.id}
                      >
                        {loadingItem === item.id ? (
                          <CircularProgress size={20} />
                        ) : (
                          <RemoveRoundedIcon />
                        )}
                      </button>
                      <span className="text-lg text-gray-600">
                        {cartItems[item.id]}
                      </span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="border p-1 flex items-center justify-center"
                        disabled={loadingItem === item.id}
                      >
                        {loadingItem === item.id ? (
                          <CircularProgress size={20} />
                        ) : (
                          <AddRoundedIcon />
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-lg text-gray-700">
                    <div className="flex justify-between font-bold bg-gray-200 p-2 rounded-md">
                      <dt>Total</dt>
                      <dd>£{subtotal.toFixed(2)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex justify-center p-1 mt-5">
                <CustomButton
                  bgColor="w-full bg-red-600"
                  textColor="text-white"
                  text="Proceed to Payment"
                  onClick={handleOpenshownotifyModal}
                />
              </div>
            </div>
          )}
        </div>
      {isPopupVisible && itemToRemove !== null && (
        <CheckoutPopup
          itemName={items.find((item) => item.id === itemToRemove)?.name || ""}
          onConfirm={confirmRemove}
          onCancel={cancelRemove}
        />
      )}

      {/* First Modal: Delay on Elizabeth Line */}
      <Modal
        show={shownotifyModal}
        title="Payment Successful"
        message="How would you like to receive your order?"
        onYes={handleEndJourney}
        onNo={handlesendtodesk}
        onClose={handleclose}
        onBack={handleclose}
        flag="Checkout"
      />
       <Modal
        show={sendtodeskModal}
        title="Thank you, your order has been placed and will be delivered to"
        message="LDN-PSP-Desk/L25/D35 at 13:00 "
        onYes={handleEndJourney}
        onNo={handleEndJourney}
        onClose={handleclose}
        onBack={handleclose}
        flag="Send to Desk"
      />
    </section>
  );
}
