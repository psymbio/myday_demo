
import Head from 'next/head';
// import FoodItemData from '../components/ui/FoodItemData';
import FoodItemPage from '../components/ui/FoodItemPage';
import Header from '../components/ui/Header';


function Home () {
  return (
    <div>
      <Head>
        <title>Food Delivery Menu</title>
        <meta name="description" content="Food items with veg and non-veg options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="bg-gray-50 min-h-screen">
        <section className="max-w-6xl mx-auto py-8">
         
          <FoodItemPage />
        </section>
      </main>
    </div>
  );
};

export default Home;

