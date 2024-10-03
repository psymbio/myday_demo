// components/MenuItem.tsx
interface MenuItemProps {
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

export default MenuItem;
