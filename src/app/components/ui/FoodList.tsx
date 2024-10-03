// components/MenuItem.tsx
/*interface MenuItemProps {
  id: number;
  name: string;
  price: number;
}

const MenuItem: React.FC<{ item: MenuItemProps }> = ({ item }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-500">${item.price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;*/

// components/FoodList.tsx

import FoodItem from "./FoodItem";
interface FoodItemProps {
  id: number;
  name: string;
  price: number;
  isVeg: boolean;
}

const FoodList: React.FC<{ items: FoodItemProps[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {items.map((item) => (
        <FoodItem
          key={item.id}
          name={item.name}
          price={item.price}
          isVeg={item.isVeg}
        />
      ))}
    </div>
  );
};

export default FoodList;
