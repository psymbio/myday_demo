"use client";

import React, { useState } from 'react';
import FoodCard from './FoodCard';
import Modal from './Modal';
import foodItems from '../../data/fooditems.json'; // Assuming fooditems.json is in this path
import TeyaCard from './TeyaCard';

interface FoodItem {
  id: number;
  name: string;
  cost: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

const FoodCardDisplay: React.FC = () => {
  const [filter, setFilter] = useState({
    veg: false,
    pescatarian: false,
    glutenFree: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal is initially closed
  const [tempFilter, setTempFilter] = useState({ ...filter }); // Temporary filter for modal
  const [showFoodList, setShowFoodList] = useState(false); // State to show or hide the food list

  // Filter logic for food items
  const filteredItems = foodItems.filter((item: FoodItem) => {
    return (
      (!filter.veg || item.veg) &&
      (!filter.pescatarian || item.pescatarian) &&
      (!filter.glutenFree || item.glutenFree)
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

  const applyFilters = () => {
    setFilter(tempFilter);
    setShowFoodList(true); // Show the food list when the filters are applied
    closeModal();
  };

  // Function to clear the filters and hide the food list
  const clearSelection = () => {
    // Reset filters
    setFilter({
      veg: false,
      pescatarian: false,
      glutenFree: false,
    });
    setTempFilter({
      veg: false,
      pescatarian: false,
      glutenFree: false,
    });
    setShowFoodList(false); // Hide the food list when clearing the selection
    setIsModalOpen(true); // Reopen the modal to show Menu Preferences
  };

  return (
    <div className="p-0 relative">
      {/* Filter and Clear Selection Buttons Row */}
      <div className="-mt-11 mb-4">
        {/* Full-width Clickable Filter Menu Row */}
        <div
          className="w-full bg-gray-100 cursor-pointer hover:bg-gray-200 text-center"
          onClick={openModal} // Open modal when button is clicked
        >
          FILTER MENUS
        </div>
        {/* Teya Card Below Filter Menus */}
        <TeyaCard />
      </div>

      {/* Modal for filtering */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="z-50">
              <h2 className="text-2xl font-bold mb-4">Menu Preferences</h2>

              {/* Filters inside the Modal */}
              <div className="flex flex-col space-y-2 mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="veg"
                    checked={tempFilter.veg}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  Vegetarian
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="pescatarian"
                    checked={tempFilter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  Pescatarian
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="glutenFree"
                    checked={tempFilter.glutenFree}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  Gluten-Free
                </label>
              </div>

              {/* Confirm and Close buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                >
                  Confirm
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {/* Displaying filtered food items */}
      {showFoodList && (
        <>
          {/* Dark overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

          {/* Food list and Clear Selection button on top of the overlay */}
          <div className="relative z-20">
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
