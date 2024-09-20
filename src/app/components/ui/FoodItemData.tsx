import React, { useState } from 'react';

// Define FoodItemData type
interface FoodItemData {
  id: number;
  name: string;
  cost: number;
  restaurantId: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

// Sample data
const foodData: FoodItemData[] = [
  { id: 1, name: 'Veggie Burger', cost: 5.99, restaurantId: 0, veg: true, pescatarian: false, glutenFree: false },
  { id: 2, name: 'Grilled Salmon', cost: 12.99, restaurantId: 1, veg: false, pescatarian: true, glutenFree: true },
  { id: 3, name: 'Gluten-Free Pasta', cost: 9.99, restaurantId: 2, veg: true, pescatarian: false, glutenFree: true },
  { id: 4, name: 'Chicken Sandwich', cost: 7.99, restaurantId: 1, veg: false, pescatarian: false, glutenFree: false }
];

// Unfiltered and Filtered Page Component
const FoodItemsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    veg: false,
    pescatarian: false,
    glutenFree: false
  });

  // Function to toggle filters
  const toggleFilter = (filterName: string) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName as keyof typeof filters]
    });
  };

  // Function to filter food items based on the selected filters
  const filteredData = foodData.filter((item) => {
    if (filters.veg && !item.veg) return false;
    if (filters.pescatarian && !item.pescatarian) return false;
    if (filters.glutenFree && !item.glutenFree) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Food Items</h1>

      {/* Filter Options */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => toggleFilter('veg')}
          className={`px-4 py-2 border rounded ${
            filters.veg ? 'bg-green-500 text-white' : 'bg-white text-black'
          }`}
        >
          Vegetarian
        </button>
        <button
          onClick={() => toggleFilter('pescatarian')}
          className={`px-4 py-2 border rounded ${
            filters.pescatarian ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          Pescatarian
        </button>
        <button
          onClick={() => toggleFilter('glutenFree')}
          className={`px-4 py-2 border rounded ${
            filters.glutenFree ? 'bg-purple-500 text-white' : 'bg-white text-black'
          }`}
        >
          Gluten-Free
        </button>
      </div>

      {/* Food Items Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500">Cost: £{item.cost.toFixed(2)}</p>
            <p className="text-gray-500">Restaurant ID: {item.restaurantId}</p>
            <p className={`text-sm ${item.veg ? 'text-green-600' : 'text-red-600'}`}>
              {item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
            </p>
            <p className={`text-sm ${item.pescatarian ? 'text-blue-600' : 'text-red-600'}`}>
              {item.pescatarian ? 'Pescatarian' : 'Not Pescatarian'}
            </p>
            <p className={`text-sm ${item.glutenFree ? 'text-purple-600' : 'text-red-600'}`}>
              {item.glutenFree ? 'Gluten-Free' : 'Contains Gluten'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItemsPage;
