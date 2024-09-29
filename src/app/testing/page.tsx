import Carousel from "@/app/components/ui/EventCarousel3";
import ChatBot from "@/app/components/ui/ChatBot";
import Header from "@/app/components/ui/Header";
import HeaderImage from "@/app/components/ui/HeaderImage";
import NavigationBar from "@/app/components/ui/NavigationBar";
import QuickLinks from "@/app/components/ui/QuickLinks";
import Tabs from "@/app/components/ui/Tabs";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <div className="px-5 sm:px-5 mx-10 md:mx-16 lg:mx-32">
        <Tabs />
        <Carousel />
        <QuickLinks />
      </div>
      <ChatBot></ChatBot>
    </div>
  );
}
