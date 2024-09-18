"use client";

interface FoodItemProps {
  name: string;
  price: number;
  isVeg: boolean;
}
let cart: string[] = [];

const FoodItem: React.FC<FoodItemProps> = ({ name, price, isVeg }) => {
  const handleTabClick = (foodName: string) => {
    cart.push(foodName);
    console.log(cart);

    // ideally the cart should be a dictionary
    // id of food item as key and the count of the times clicked as value
    // cart icon should be taken from material UI (https://mui.com/material-ui/material-icons/?query=cart&theme=Outlined)
    // on top of the cart display the number of items - sum of all the values in cart dictionary
    // if the number exceeds 99 then simply display as a plus sign
  };
  return (
    <a
      onClick={() => handleTabClick(name)}
      className="p-4 shadow-md rounded-lg flex justify-between items-center cursor-pointer bg-white"
    >
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">£{price.toFixed(2)}</p>
      </div>
      <span
        className={`${
          isVeg ? "bg-green-500" : "bg-red-500"
        } h-4 w-4 rounded-full`}
        title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      />
    </a>
  );
};

export default FoodItem;
