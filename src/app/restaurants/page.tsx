import ChatBot from "../components/ui/ChatBot";
import Header from "../components/ui/Header";
import HeaderImage from "../components/ui/HeaderImage";
import NavigationBar from "../components/ui/NavigationBar";
import RestaurantDisplay from "../components/ui/RestaurantWidget";

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