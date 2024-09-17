
// components/FoodItem.tsx
interface FoodItemProps {
  name: string;
  price: number;
  isVeg: boolean;
}

const FoodItem: React.FC<FoodItemProps> = ({ name, price, isVeg }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>
      <span
        className={`${
          isVeg ? 'bg-green-500' : 'bg-red-500'
        } h-4 w-4 rounded-full`}
        title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
      />
    </div>
  );
};

export default FoodItem;