"use client";
import React, { useState } from 'react';

// Food Item Type
interface FoodItemData {
  id: number;
  name: string;
  cost: number;
  restaurantId: number;
  veg: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
}

// Restaurant Item Type
interface RestaurantItemData {
  id: number;
  name: string;
  text: string;
  subtext: string;
  image: string;
}

// Sample Food Data
const foodData: FoodItemData[] = [
  { id: 1, name: 'Verbena and Lemon Halloumi', cost: 8.20, restaurantId: 0, veg: true, pescatarian: false, glutenFree: false },
  { id: 2, name: 'Thai Green Vegetable Curry', cost: 6.50, restaurantId: 1, veg: true, pescatarian: true, glutenFree: true },
  { id: 3, name: 'Tandoori Paneer Flatbread', cost: 7.15, restaurantId: 2, veg: true, pescatarian: false, glutenFree: true },
  { id: 4, name: 'Thai Green Vegetable Curry', cost: 7.99, restaurantId: 1, veg: true, pescatarian: false, glutenFree: false },
  { id: 5, name: 'Fries', cost: 2.20, restaurantId: 2, veg: true, pescatarian: true, glutenFree: true },
  { id: 6, name: 'Ramen Mushroom and Egg', cost: 7.80, restaurantId: 1, veg: true, pescatarian: false, glutenFree: false },
  { id: 7, name: 'Soba Noodle and Sesame Salad', cost: 6.90, restaurantId: 2, veg: true, pescatarian: false, glutenFree: true },
  { id: 8, name: 'Bread Roll', cost: 0.75, restaurantId: 1, veg: true, pescatarian: true, glutenFree: false },
  { id: 9, name: 'Classic Tiramisu', cost: 3.15, restaurantId: 2, veg: true, pescatarian: true, glutenFree: true },
  { id: 10, name: 'Veggie Sandwich', cost: 7.99, restaurantId: 1, veg: false, pescatarian: true, glutenFree: false },
  { id: 11, name: 'Ramen Mushroom and Egg', cost: 7.80, restaurantId: 1, veg: true, pescatarian: false, glutenFree: false },
  { id: 12, name: 'Soba Noodle and Sesame Salad', cost: 6.90, restaurantId: 2, veg: true, pescatarian: false, glutenFree: true },
  { id: 13, name: 'Mutton Roll', cost: 7.75, restaurantId: 1, veg: false, pescatarian: true, glutenFree: false },
  { id: 14, name: 'Classic mutton curry', cost: 8.15, restaurantId: 2, veg: false, pescatarian: true, glutenFree: true },
  { id: 15, name: 'Chicken Sandwich', cost: 7.99, restaurantId: 0, veg: false, pescatarian: true, glutenFree: false }
];

// Sample Restaurant Data
const restaurantData: RestaurantItemData[] = [
  {
    id: 0,
    name: 'Teya',
    text: 'PSP is a cashless building, purchases can be made via Teya, Chip and Pin and Apple Pay or Google Pay. To download the app, click here to scan a QR code with your mobile device.',
    subtext: 'Fresh vegetarian options',
    image: '/restaurants/acai.jpg'
  },
  {
    id: 1,
    name: 'Mezzanine',
    text: 'The HSBC restaurant serves breakfast and lunch presenting a variety of cuisines intended to showcase local and seasonal produce, reflected in our weekly changing menu. Our Eat Well Live Well programme supports your wellbeing, additionally, we focus on vegan, vegetarian, and flexitarian diets. Microwaves are available for use to the rear of the restaurant.',
    subtext: 'Best seafood and meats',
    image: '/restaurants/hummus.jpg'
  },
  {
    id: 2,
    name: 'Starbucks',
    text: "Currently the world's largest coffeehouse chain. Barista hot drinks, grab and go including pastries, light lunches, sandwiches, salads, indulgent and healthy snacks.",
    subtext: 'Gluten-free options available',
    image: '/restaurants/starbucks.jpg'
  }
];


// Restaurant Item Component
const RestaurantItem: React.FC<{
    restaurant: RestaurantItemData;
    onFilter: (restaurantId: number) => void;
  }> = ({ restaurant, onFilter }) => {
    const handleFilter = () => {
      onFilter(restaurant.id);
    };
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{restaurant.name}</h2>
          <p className="text-gray-500 mt-2">{restaurant.text}</p>
          <p className="text-gray-400 text-sm mt-1">{restaurant.subtext}</p>
          <button
            onClick={handleFilter}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            View Menu
          </button>
        </div>
      </div>
    );
  };
  
  // Food Item Component
  const FoodItem: React.FC<{ food: FoodItemData }> = ({ food }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold">{food.name}</h3>
        <p className="text-gray-500">Cost: £{food.cost.toFixed(2)}</p>
        <div className="flex flex-col space-y-2 mt-2">
          <p className={`text-sm font-medium p-2 rounded-lg border ${food.veg ? 'text-green-600 border-green-600' : 'text-red-600 border-red-600'} bg-opacity-10`}>
            {food.veg ? 'Vegetarian' : 'Non-Vegetarian'}
          </p>
          <p className={`text-sm font-medium p-2 rounded-lg border ${food.pescatarian ? 'text-blue-600 border-blue-600' : 'text-red-600 border-red-600'} bg-opacity-10`}>
            {food.pescatarian ? 'Pescatarian' : 'Not Pescatarian'}
          </p>
          <p className={`text-sm font-medium p-2 rounded-lg border ${food.glutenFree ? 'text-purple-600 border-purple-600' : 'text-red-600 border-red-600'} bg-opacity-10`}>
            {food.glutenFree ? 'Gluten-Free' : 'Contains Gluten'}
          </p>
        </div>
      </div>
    );
  };
  
  // Main Page Component
  const FoodItemsPage: React.FC = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  
    // Filter food items based on selected restaurant
    const filteredFoodData = selectedRestaurant !== null
      ? foodData.filter(food => food.restaurantId === selectedRestaurant)
      : foodData;
  
    const handleFilterClick = (restaurantId: number) => {
      setSelectedRestaurant(restaurantId);
    };
  
    return (
      <div className="min-h-screen p-4">
        {/* Display Restaurants or Food Items based on selection */}
        {selectedRestaurant === null ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-4">Restaurants</h1>
            {/* Restaurant Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {restaurantData.map((restaurant) => (
                <RestaurantItem
                  key={restaurant.id}
                  restaurant={restaurant}
                  onFilter={handleFilterClick}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
              >
                Back to Restaurants
              </button>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">
              {restaurantData.find(r => r.id === selectedRestaurant)?.name}'s Menu
            </h2>
            {/* Food Items Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFoodData.length > 0 ? (
                filteredFoodData.map((food) => <FoodItem key={food.id} food={food} />)
              ) : (
                <p className="text-center col-span-3 text-gray-500">No items available for this restaurant</p>
              )}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default FoodItemsPage;