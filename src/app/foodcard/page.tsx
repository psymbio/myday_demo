


import Header from '../components/ui/Header2';
import NavigationBar from '../components/ui/NavigationBar';
import ChatBot from '../components/ui/ChatBot';
import HeaderImage from '../components/ui/HeaderImage2';
import FoodDisplay from '../components/ui/FoodDisplay';



export default function FoodDrink() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <FoodDisplay></FoodDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}