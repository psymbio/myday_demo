import Carousel from "@/app/components/ui/EventCarousel3";
import ChatBot from "@/app/components/ui/ChatBot";
import Header from "@/app/components/ui/Header";
import HeaderImage from "@/app/components/ui/HeaderImage";
import NavigationBar from "@/app/components/ui/NavigationBar";
import QuickLinks from "@/app/components/ui/QuickLinks";
import Tabs from "@/app/components/ui/Tabs";
import PeopleCounter from "@/app/components/ui/PeopleCounter";
import HomeToDeskDisplay from "../components/ui/HomeToDeskDisplay";
export default function TestingPage() {
  return (
    <div><HomeToDeskDisplay></HomeToDeskDisplay>
      <NavigationBar></NavigationBar> 
      <Header></Header>
      <HeaderImage></HeaderImage>
      <div className="sm:px-2 mx-5 md:mx-16 lg:mx-32 -translate-y-3">
        <Tabs />
        <Carousel />
        <QuickLinks />
       <PeopleCounter />
      </div>
      <ChatBot></ChatBot>
    </div>
  );
}
