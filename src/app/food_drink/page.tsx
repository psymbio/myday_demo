// import PeopleCounter from "@/app/components/ui/PeopleCounter"

import HeaderFnD from '@/app/components/ui/HeaderFnD';
import NavigationBar from '@/app/components/ui/NavigationBar';
import ChatBot from '@/app/components/ui/ChatBot';
import HeaderImageFnD from '@/app/components/ui/HeaderImageFnD';
import RestaurantAndFoodDisplay from '@/app/components/ui/RestaurantAndFoodDisplay'




export default function FoodDrink() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeaderFnD></HeaderFnD>
      <HeaderImageFnD></HeaderImageFnD>
      <RestaurantAndFoodDisplay></RestaurantAndFoodDisplay>
      <br />
      <ChatBot></ChatBot>
    </div>
  );
}
