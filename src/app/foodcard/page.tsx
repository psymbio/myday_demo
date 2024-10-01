


import Header from '@/app/components/ui/HeaderFnD';
import NavigationBar from '@/app/components/ui/NavigationBar';
import ChatBot from '@/app/components/ui/ChatBot';
import HeaderImage from '@/app/components/ui/HeaderImageFnD';
import FoodDisplay from '@/app/components/ui/FoodDisplay';



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