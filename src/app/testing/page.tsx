import Carousel from "../components/ui/Carousel";
import ChatBot from "../components/ui/ChatBot";
import Header from "../components/ui/Header";
import NavigationBar from "../components/ui/NavigationBar";
import Widgets from "../components/ui/Widgets";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Widgets></Widgets>
      <div className="w-2/5 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Carousel></Carousel>
      </div>
      <ChatBot></ChatBot>
    </div>
  );
}
