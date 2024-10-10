"use client";

import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import Modal from "./Modal";
import foodItems from "../../data/fooditems.json";
import CustomButton from "./CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

interface FoodItem {
  image: string;
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  allergies?: boolean;
  dairyFree?: boolean;
  lactoseFree?: boolean;
  vegan?: boolean;
}

interface CartItem extends FoodItem {
  quantity: number;
}

const FoodCardDisplay: React.FC = () => {
  const [filter, setFilter] = useState({
    veg: false,
    pescatarian: false,
    glutenFree: false,
    allergies: false,
    dairyFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempFilter, setTempFilter] = useState({ ...filter });
  const [showFoodList, setShowFoodList] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  // Parse query parameters on mount
  useEffect(() => {
    const veg = searchParams.get("veg") === "true";
    const pescatarian = searchParams.get("pescatarian") === "true";
    const glutenFree = searchParams.get("glutenFree") === "true";
    const allergies = searchParams.get("allergies") === "true";
    const dairyFree = searchParams.get("dairyFree") === "true";
    const lactoseFree = searchParams.get("lactoseFree") === "true";
    const vegan = searchParams.get("vegan") === "true";

    const initialFilter = {
      veg,
      pescatarian,
      glutenFree,
      allergies,
      dairyFree,
      lactoseFree,
      vegan,
    };

    setFilter(initialFilter);
    setTempFilter(initialFilter);
    setShowFoodList(
      veg || pescatarian || glutenFree || allergies || dairyFree || lactoseFree || vegan
    );
  }, [searchParams]);

  // Filter logic for food items
  const filteredItems = foodItems.filter((item: FoodItem) => {
    return (
      (!filter.veg || item.veg) &&
      (!filter.pescatarian || item.pescatarian) &&
      (!filter.glutenFree || item.glutenFree) &&
      (!filter.allergies || !item.allergies) &&
      (!filter.dairyFree || !item.dairyFree) &&
      (!filter.lactoseFree || !item.lactoseFree) &&
      (!filter.vegan || item.vegan)
    );
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setTempFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const applyFilters = () => {
    setFilter({ ...tempFilter });
    setShowFoodList(
      tempFilter.veg ||
      tempFilter.pescatarian ||
      tempFilter.glutenFree ||
      tempFilter.allergies ||
      tempFilter.dairyFree ||
      tempFilter.lactoseFree ||
      tempFilter.vegan
    );
    closeModal();

    const query = new URLSearchParams({
      veg: String(tempFilter.veg),
      pescatarian: String(tempFilter.pescatarian),
      glutenFree: String(tempFilter.glutenFree),
      allergies: String(tempFilter.allergies),
      dairyFree: String(tempFilter.dairyFree),
      lactoseFree: String(tempFilter.lactoseFree),
      vegan: String(tempFilter.vegan),
    }).toString();

    router.push(`/food_drink/filter?${query}`);
  };

  const clearSelection = () => {
    const clearedFilter = {
      veg: false,
      pescatarian: false,
      glutenFree: false,
      allergies: false,
      dairyFree: false,
      lactoseFree: false,
      vegan: false,
    };
    setFilter(clearedFilter);
    setTempFilter(clearedFilter);
    setShowFoodList(false);
    closeModal();

    const query = new URLSearchParams({
      veg: "false",
      pescatarian: "false",
      glutenFree: "false",
      allergies: "false",
      dairyFree: "false",
      lactoseFree: "false",
      vegan: "false",
    }).toString();

    router.push(`/food_drink/filter?${query}`);
  };

  // Cart management functions
  const addToCart = (id: number) => {
    const item = foodItems.find((food) => food.id === id);
    if (item) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === id);
        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  return (
    <div className="mx-4 p-0 relative content-center font-bold">
      {/* Filter Button */}
      <div className="mb-4 flex items-center justify-center">
        <button
          className="w-full p-2 bg-red-600 text-white font-bold flex items-center justify-center rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out cursor-pointer"
          onClick={openModal}
        >
          <FilterAltRoundedIcon className="mr-2" />
          FILTER
        </button>
      </div>

      {/* Modal for filtering */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 id="modal-title" className="text-2xl text-center text-red-500 font-bold mb-4">
            Dietary Preferences
          </h2>

          {/* Filters inside the Modal */}
          <div className="flex flex-col space-y-2 mb-4">
            {[
              { name: "allergies", label: "Allergies" },
              { name: "dairyFree", label: "Dairy-free" },
              { name: "glutenFree", label: "Gluten-free" },
              { name: "lactoseFree", label: "Lactose-free" },
              { name: "pescatarian", label: "Pescatarian" },
              { name: "vegan", label: "Vegan" },
              { name: "veg", label: "Vegetarian" },
            ].map((filterOption) => (
              <label className="flex items-center" key={filterOption.name}>
                <input
                  type="checkbox"
                  name={filterOption.name}
                  checked={tempFilter[filterOption.name as keyof typeof tempFilter]}
                  onChange={handleFilterChange}
                  className="mr-3 w-6 h-6"
                />
                <span className="text-lg font-medium">{filterOption.label}</span>
              </label>
            ))}
          </div>

          {/* Confirm and Close buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <CustomButton
              bgColor="bg-red-600"
              textColor="text-white"
              text="Confirm"
              onClick={applyFilters}
            />
            <CustomButton
              bgColor="bg-gray-700"
              textColor="text-white"
              text="Close"
              onClick={closeModal}
            />
          </div>
        </Modal>
      )}

      {/* Displaying filtered food items */}
      {showFoodList && (
        <>
          {/* Clear Selection Button */}
          <div className="flex justify-center">
            <button
              className="p-2 mt-4 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
              onClick={clearSelection}
            >
              Clear Selection
            </button>
          </div>

          {/* Food List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {filteredItems.length > 0 ? (
              filteredItems.map((item: FoodItem) => (
                <FoodCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  cost={item.cost}
                  veg={item.veg}
                  pescatarian={item.pescatarian}
                  glutenFree={item.glutenFree}
                  image={item.image}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                  cartQuantity={cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
                />
              ))
            ) : (
              <p className="text-center col-span-full">No items match your filter criteria.</p>
            )}
          </div>
        </>
      )}

      {/* Optional: Display Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Cart</h3>
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id} className="flex justify-between items-center mb-1">
                <span>
                  {cartItem.name} x {cartItem.quantity}
                </span>
                <span>${(cartItem.cost * cartItem.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodCardDisplay;