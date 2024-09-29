import ChatBot from "@/app/components/ui/ChatBot";
import Header from "@/app/components/ui/Header";
import HeaderImage from "@/app/components/ui/HeaderImage";
import NavigationBar from "@/app/components/ui/NavigationBar";
import RestaurantDisplay from "@/app/components/ui/RestaurantWidget";

export default function TestingPage() {
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