
import Head from 'next/head';
import FoodList from '../components/ui/FoodList';
import Header from '../components/ui/Header';

interface FoodItemProps {
  id: number;
  name: string;
  price: number;
  isVeg: boolean;
}

const Home: React.FC = () => {
  const foodItems: FoodItemProps[] = [
    { id: 1, name: 'Pizza', price: 12.99, isVeg: false },
    { id: 2, name: 'Veg Burger', price: 9.99, isVeg: true },
    { id: 3, name: 'Pasta', price: 14.49, isVeg: true },
    { id: 4, name: 'Chicken Salad', price: 10.99, isVeg: false },
    { id: 5, name: 'Paneer Tikka', price: 11.99, isVeg: true },
    { id: 6, name: 'Sushi', price: 18.99, isVeg: false },
    { id: 7, name: 'Chicken Tikka Masala', price: 11.99, isVeg: false },
    { id: 8, name: 'Paneer Butter Masala', price: 18.99, isVeg: true },
    { id: 9, name: 'Noddles', price: 11.99, isVeg: true },
    { id: 10, name: 'Mutton Curry', price: 18.99, isVeg: false },
    { id: 9, name: 'Veg Fried Rice', price: 11.99, isVeg: true },
    { id: 10, name: 'Lamp Curry', price: 18.99, isVeg: false },
  ];

  return (
    <div>
      <Head>
        <title>Food Delivery Menu</title>
        <meta name="description" content="Food items with veg and non-veg options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="bg-gray-100 min-h-screen">
        <section className="max-w-6xl mx-auto py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Our Menu</h2>
          <FoodList items={foodItems} />
        </section>
      </main>
    </div>
  );
};

export default Home;
