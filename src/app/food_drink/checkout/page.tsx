

import RestaurantDisplay from '@/app/components/ui/RestaurantDisplay';
import Header from '@/app/components/ui/Header';
import NavigationBar from '@/app/components/ui/NavigationBar';
import ChatBot from '@/app/components/ui/ChatBot';
import HeaderImage from '@/app/components/ui/HeaderImage';




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