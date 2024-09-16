// components/Menu.tsx
import MenuItem from './MenuItem';

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
}

const Menu: React.FC<{ items: MenuItemProps[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;