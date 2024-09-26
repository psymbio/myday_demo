
import Head from 'next/head';
import RestaurantDisplay from '../components/ui/RestDisplay';
import Header from '../components/ui/Header';
import NavigationBar from '../components/ui/NavigationBar';
import ChatBot from '../components/ui/ChatBot';
import HeaderImage from '../components/ui/HeaderImage';



export default function FoodDrink() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <RestaurantDisplay></RestaurantDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}