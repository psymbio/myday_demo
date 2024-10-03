
import NavigationBar from "@/app/components/ui/NavigationBar";
import ChatBot from "@/app/components/ui/ChatBot";
import Checkout from "@/app/components/ui/Checkout";
import HeaderFnD from "@/app/components/ui/HeaderFnD";
import HeaderImageFnD from "@/app/components/ui/HeaderImageFnD";

export default function FoodDrink() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeaderFnD></HeaderFnD>
      <HeaderImageFnD></HeaderImageFnD>
      <Checkout></Checkout>
      <ChatBot></ChatBot>
    </div>
  );
}
