"use client";

import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Modal from "./Modal";
import foodItems from "../../data/fooditems.json"; // Assuming fooditems.json is in this path
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

interface FoodItem {
  id: number;
  restaurantID: number;
  name: string;
  vegan: boolean;
  vegetarian: boolean;
  "dairy-free": boolean;  // Use kebab-case if JSON uses this format
  "lactose-free": boolean; // Use kebab-case if JSON uses this format
  pescatarian: boolean;
  glutenFree: boolean;
  cost: number;
  imagePath: string;
  type: string;
}


const FoodCardDisplay: React.FC = () => {
  const [filter, setFilter] = useState({
    vegan: false,
    pescatarian: false,
    glutenFree: false,
    vegetarian: false,
    dairyFree: false,
    lactoseFree:false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal is initially closed
  const [tempFilter, setTempFilter] = useState({ ...filter }); // Temporary filter for modal
  const [showFoodList, setShowFoodList] = useState(false); // State to show or hide the food list

// Helper function to convert kebab-case or snake-case to camelCase
const normalizeKeys = (item: any): FoodItem => {
  return {
    id: item.id,
    restaurantID: item.restaurantID,
    name: item.name,
    vegan: item.vegan,
    vegetarian: item.vegetarian,
    'dairy-free': item["dairy-free"], // Handle both cases
    'lactose-free': item["lactose-free"], // Handle both cases
    pescatarian: item.pescatarian,
    glutenFree: item.glutenFree,
    cost: item.cost,
    imagePath: item.imagePath,
    type: item.type
  };
};

// Use the normalized data
const normalizedFoodItems = foodItems.map(normalizeKeys);

// Now filter the normalized food items
const filteredItems = normalizedFoodItems.filter((item: FoodItem) => {
  return (
    (!filter.vegan || item.vegan) &&
    (!filter.pescatarian || item.pescatarian) &&
    (!filter.glutenFree || item.glutenFree) &&
    (!filter.vegetarian || item.vegetarian) &&
    (!filter.dairyFree || item["dairy-free"]) &&
    (!filter.lactoseFree || item["lactose-free"])
  );
});

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setTempFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
  };

  const openModal = () => setIsModalOpen(true); // Open the modal when button is clicked
  const closeModal = () => setIsModalOpen(false); // Close the modal

  const router = useRouter();

  const applyFilters = () => {
    const query = new URLSearchParams({
      vegan: String(tempFilter.vegan),
      pescatarian: String(tempFilter.pescatarian),
      glutenFree: String(tempFilter.glutenFree),
      vegetarian: String(tempFilter.vegetarian),
      dairyfree: String(tempFilter.dairyFree),
      lactosefree: String(tempFilter.lactoseFree),
    }).toString();

    router.push(`/food_drink/filter?${query}`);
  };

  // Function to clear the filters and hide the food list
  const clearSelection = () => {
    setFilter({
      vegan: false,
      pescatarian: false,
      glutenFree: false,
      vegetarian: false,
      dairyFree: false,
      lactoseFree: false,
    });
    setTempFilter({
      vegan: false,
      pescatarian: false,
      glutenFree: false,
      vegetarian: false,
      dairyFree: false,
      lactoseFree: false,
    });
    setShowFoodList(false); // Hide the food list when clearing the selection
    setIsModalOpen(true); // Reopen the modal to show Menu Preferences
  };

  return (
    <div className="p-0 relative content-center font-bold">
      {/* Filter and Clear Selection Buttons Row */}
      <div className="mb-4 flex items-center justify-center">
        {/* Full-width Clickable Filter Menu Row */}
        <button
          className="w-9/12 p-3 bg-red-600 text-white font-bold flex items-center justify-center rounded-lg shadow-lg hover:bg-red-700 hover:text-white transition duration-300 ease-in-out cursor-pointer"
          onClick={openModal}
        >
          <FilterAltRoundedIcon className="mr-2" />
          FILTER
        </button>
        {/* Teya Card Below Filter Menus */}
      </div>

      {/* Modal for filtering */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Semi-transparent background */}
          <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl text-center text-red-500 font-bold mb-4">
                Dietary Preferences
              </h2>

              {/* Filters inside the Modal */}
              <div className="flex flex-col space-y-2 mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Allergies"
                    checked={tempFilter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6" // Increase the size of the checkbox
                  />
                  <span className="text-lg font-medium">Allergies</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="pescatarian"
                    checked={tempFilter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6" // Increase the size of the checkbox
                  />
                  <span className="text-lg font-medium">Dairy-free</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Gluten-free"
                    checked={tempFilter.glutenFree}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6" // Increase the size of the checkbox
                  />
                  <span className="text-lg font-medium">Gluten-free</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Vegetarian"
                    checked={tempFilter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6"
                  />
                  <span className="text-lg font-medium">Lactose-free</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="pescatarian"
                    checked={tempFilter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6"
                  />
                  <span className="text-lg font-medium">Pescatarian</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="pescatarian"
                    checked={tempFilter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6"
                  />
                  <span className="text-lg font-medium">Vegan</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="pescatarian"
                    checked={tempFilter.vegan}
                    onChange={handleFilterChange}
                    className="mr-3 w-6 h-6"
                  />
                  <span className="text-lg font-medium">Vegetarian</span>
                </label>
              </div>

              {/* Confirm and Close buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <CustomButton
                  bgColor="bg-red-600"
                  textColor="text-white"
                  text="Confirm"
                  onClick={() => applyFilters()}
                />
                <CustomButton
                  bgColor="bg-gray-700"
                  textColor="text-white"
                  text="Close"
                  onClick={() => closeModal()}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Displaying filtered food items */}
      {showFoodList && (
        <>
          {/* Food list and Clear Selection button */}
          <div>
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
                    vegan={item.vegan}
                    pescatarian={item.pescatarian}
                    vegetarian={item.vegetarian}
                    glutenFree={item.glutenFree}
                    dairyFree={item["dairy-free"]}
                   lactoseFree={item["lactose-free"]}
                    onAddToCart={() => {}}
                    onRemoveFromCart={() => {}}
                    cartQuantity={0} // You can set the cart quantity here if needed
                  />
                ))
              ) : (
                <p>No items match your filter criteria.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FoodCardDisplay;
