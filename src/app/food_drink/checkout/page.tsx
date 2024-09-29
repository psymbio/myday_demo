import Header from '@/app/components/ui/Header';
import NavigationBar from '@/app/components/ui/NavigationBar';
import ChatBot from '@/app/components/ui/ChatBot';
import HeaderImage from '@/app/components/ui/HeaderImage';
import Checkout from '@/app/components/ui/Checkout';

export default function FoodDrink() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <Checkout></Checkout>
      <ChatBot></ChatBot>
    </div>
  );
}