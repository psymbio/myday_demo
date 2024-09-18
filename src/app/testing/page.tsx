import Carousel2 from "../components/ui/Carousel2";
import ChatBot from "../components/ui/ChatBot";
import Header from "../components/ui/Header";
import HeaderImage from "../components/ui/HeaderImage";
import NavigationBar from "../components/ui/NavigationBar";
import QuickLinks from "../components/ui/QuickLinks";
import Tabs from "../components/ui/Tabs";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <div className="px-5 sm:px-5 mx-10 md:mx-16 lg:mx-32">
        <Tabs />
        <Carousel2 />
        <QuickLinks />
      </div>
      <ChatBot></ChatBot>
    </div>
  );
}
