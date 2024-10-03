"use client";
import React, { useState } from 'react';
import foodItems from '../../data/fooditems.json'; // Import food items data

// Define a type for restaurant data
interface Restaurant {
  id: number;
  name: string;
  text: string;
  subtext: string;
  image: string;
}

// Define a type for food items
interface FoodItem {
  id: number;
  name: string;
  cost: number;
  restaurantId: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

// Restaurant Card Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  // Filter state for menu preferences
  const initialFilterState = {
    veg: false,
    pescatarian: false,
    glutenFree: false,
  };

  const [filter, setFilter] = useState(initialFilterState);
  const [menuVisible, setMenuVisible] = useState(false); // Control the visibility of the menu

  // Check if any preference is selected
  const isAnyPreferenceSelected =
    filter.veg || filter.pescatarian || filter.glutenFree;

  // Filter food items for this restaurant based on the selected preferences
  const restaurantFoodItems = foodItems.filter((item: FoodItem) => {
    return (
      item.restaurantId === restaurant.id &&
      (!filter.veg || item.veg) &&
      (!filter.pescatarian || item.pescatarian) &&
      (!filter.glutenFree || item.glutenFree)
    );
  });

  // Handle checkbox change to update the filter
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
  };

  // Function to open the menu and reset the filters
  const openMenu = () => {
    setFilter(initialFilterState); // Reset filter preferences
    setMenuVisible(true); // Show the menu
  };

  // Close the menu
  const closeMenu = () => setMenuVisible(false);

  return (
    <div className="relative max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />

      {/* Button to open the menu */}
      <button
        className="w-full p-2 bg-blue-500 text-white rounded-lg"
        onClick={openMenu}
      >
        {restaurant.name} 
      </button>

      <div className="p-1">
        {/* Text below the button */}
        <p className="text-black-500 text-sm font-bold mt-2">{restaurant.text}</p>
      

        {/* Menu popup, visible when the menuVisible state is true */}
        {menuVisible && (
          <>
            {/* Overlay to close the menu when clicking outside */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-20"
              onClick={closeMenu}
            ></div>

            {/* Menu Dropdown - positioned absolutely to act like a popup */}
            <div className="absolute top-16 left-0 right-0 bg-white border p-4 rounded-lg shadow-lg z-30">
              <h3 className="text-lg font-semibold mb-4">Menu Preferences</h3>

              {/* Menu Preferences as checkbox options */}
              <div className="mb-4">
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="veg"
                    checked={filter.veg}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  Vegetarian
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="pescatarian"
                    checked={filter.pescatarian}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  Pescatarian
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="glutenFree"
                    checked={filter.glutenFree}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  Gluten-Free
                </label>
              </div>

              {/* Conditionally show food items based on preference selection */}
              {isAnyPreferenceSelected ? (
                <>
                  <h3 className="text-lg font-semibold mb-2">
                    Available Food Items
                  </h3>
                  {restaurantFoodItems.length > 0 ? (
                    <ul className="space-y-2">
                      {restaurantFoodItems.map((foodItem) => (
                        <li
                          key={foodItem.id}
                          className="flex justify-between items-center"
                        >
                          <span>{foodItem.name}</span>
                          <span>${foodItem.cost.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>
                      No food items available based on selected preferences.
                    </p>
                  )}
                </>
              ) : (
                <p>
                  Please select at least one preference to view available food
                  items.
                </p>
              )}

              {/* Button to close the menu */}
              <button
                className="w-full mt-4 bg-red-500 text-white p-2 rounded-lg"
                onClick={closeMenu}
              >
                Close Menu
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;

