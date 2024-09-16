import Head from 'next/head';
import Header from '../components/ui/Header';
import Menu from '../components/ui/Menu';
import NavigationBar from '../components/ui/NavigationBar';

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
}

const Home: React.FC = () => {
  // Example data, in a real app you would fetch this from an API
  const menuItems: MenuItemProps[] = [
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 9.99 },
    { id: 3, name: 'Pasta', price: 14.49 },
    { id: 4, name: 'Salad', price: 8.99 },
    { id: 5, name: 'Sushi', price: 18.99 },
    { id: 6, name: 'Steak', price: 24.99 },
  ];

  return (
    <div>
      {/* <Head>
        <title>Food Delivery</title>
        <meta name="description" content="Order food online" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <NavigationBar></NavigationBar>
      <Header></Header>
      <main className="bg-red-100 min-h-screen">
        <section className="max-w-6xl mx-auto py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Our Menu</h2>
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  );
};

export default Home;
