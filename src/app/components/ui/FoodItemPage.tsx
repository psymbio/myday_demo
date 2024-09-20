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
  { id: 0, name: 'Teya', text: 'PSP is a cashless building,purchases can be made via Teya, Chip and Pin and Apple Pay or Google Pay.To download the app,click here to scan a QR code with your mobile device.', subtext: 'Fresh vegetarian options', image: 'src="/image1.jpeg"' },
  { id: 1, name: 'Mezzanine', text: 'The HSBC restruant serves breakfast and lunch presenting a variety of cuisines intended to showcase local ad seasonal produce,reflected in our weekly changing menu. Our Eat well Live Well programme supports your wellbeing, additionally we focus on vegan,vegetarian,and flexitarian diets.Microwaves are available for use to the rear of the restruant', subtext: 'Best seafood and meats', image: 'src="/images3.jpeg' },
  { id: 2, name: 'Starbucks', text: 'Currently the worlds largest coffeehouse chain.Barista hot drinks,grab and go inclusing pastries,light lunches,sandwiches,salads,indulgent and healthy snacks.', subtext: 'Gluten-free options available', image: 'src="/images2.jpeg' }
];

// Restaurant Item Component
const RestaurantItem: React.FC<{ restaurant: RestaurantItemData; onClick: () => void }> = ({ restaurant, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
      <img 
        src={restaurant.image} 
        alt={restaurant.name} 
        className="w-full h-32 object-cover rounded-t-lg" // object-cover for image fit
      />
      <div className="mt-2">
        <h2 className="text-xl font-semibold">{restaurant.name}</h2>
        <p className="text-gray-500">{restaurant.text}</p>
        <p className="text-gray-400 text-sm">{restaurant.subtext}</p>
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
      <p className={`text-sm ${food.veg ? 'text-green-600' : 'text-red-600'}`}>
        {food.veg ? 'Vegetarian' : 'Non-Vegetarian'}
      </p>
      <p className={`text-sm ${food.pescatarian ? 'text-blue-600' : 'text-red-600'}`}>
        {food.pescatarian ? 'Pescatarian' : 'Not Pescatarian'}
      </p>
      <p className={`text-sm ${food.glutenFree ? 'text-purple-600' : 'text-red-600'}`}>
        {food.glutenFree ? 'Gluten-Free' : 'Contains Gluten'}
      </p>
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
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Restaurants</h1>

      {/* Filter Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSelectedRestaurant(null)} // Reset filter to show all
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Show All Restaurants
        </button>
      </div>

      {/* Restaurant Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {restaurantData.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleFilterClick(restaurant.id)}
          />
        ))}
      </div>

      {/* Food Items Section */}
      <h2 className="text-2xl font-bold text-center mb-4">Food Items</h2>

      {/* Food Filter by Restaurant */}
      <div className="mb-6 flex justify-center">
        <select 
          onChange={(e) => setSelectedRestaurant(parseInt(e.target.value))} 
          value={selectedRestaurant ?? ""}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Filter by Restaurant</option>
          {restaurantData.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFoodData.length > 0 ? (
          filteredFoodData.map((food) => <FoodItem key={food.id} food={food} />)
        ) : (
          <p className="text-center col-span-3 text-gray-500">No items available for this restaurant</p>
        )}
      </div>
    </div>
  );
};

export default FoodItemsPage;