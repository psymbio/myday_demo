// Define the FoodItemData type and FoodItemProps interface
interface FoodItemData {
    id: number;
    name: string;
    cost: number;
    restaurantId: number;
    veg: boolean;
    pescatarian: boolean;
    glutenFree: boolean;
  }
  
  interface FoodItemProps {
    foodData: FoodItemData[];
  }
  
  // React component to display each food item in a separate card
  const FoodItemList: React.FC<FoodItemProps> = ({ foodData }) => {
    const restaurantNames = ["Teya", "Mezzanine", "Starbucks"];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {foodData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500">Cost: £{item.cost.toFixed(2)}</p>
            <p className="text-gray-500">Restaurant: {restaurantNames[item.restaurantId]}</p>
  
            {/* Dietary information */}
            <div className="mt-4">
              <p className={`text-sm ${item.veg ? "text-green-600" : "text-red-600"}`}>
                {item.veg ? "Vegetarian" : "Non-Vegetarian"}
              </p>
              <p className={`text-sm ${item.pescatarian ? "text-blue-600" : "text-red-600"}`}>
                {item.pescatarian ? "Pescatarian" : "Not Pescatarian"}
              </p>
              <p className={`text-sm ${item.glutenFree ? "text-purple-600" : "text-red-600"}`}>
                {item.glutenFree ? "Gluten Free" : "Contains Gluten"}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Sample usage with foodData
  const sampleFoodData: FoodItemData[] = [
    { id: 1, name: "Veggie Burger", cost: 5.99, restaurantId: 0, veg: true, pescatarian: false, glutenFree: false },
    { id: 2, name: "Grilled Salmon", cost: 12.99, restaurantId: 1, veg: false, pescatarian: true, glutenFree: true },
    { id: 3, name: "Gluten-Free Pasta", cost: 9.99, restaurantId: 2, veg: true, pescatarian: false, glutenFree: true },
  ];
  
  // App Component
  const App: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-center my-4">Food Items</h1>
        <FoodItemList foodData={sampleFoodData} />
      </div>
    );
  };
  
  export default App;