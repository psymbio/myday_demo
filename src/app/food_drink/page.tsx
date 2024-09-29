

import RestaurantDisplay from '../components/ui/RestDisplay';
import Header from '../components/ui/Header2';
import ChatBot from '../components/ui/ChatBot';
import HeaderImage from '../components/ui/HeaderImage2';




export default function FoodDrink() {
  return (
    <div>
      
      <Header></Header>
      <HeaderImage></HeaderImage>
      <RestaurantDisplay></RestaurantDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}