import Carousel2 from "../components/ui/Carousel2";
import ChatBot from "../components/ui/ChatBot";
import Header from "../components/ui/Header";
import NavigationBar from "../components/ui/NavigationBar";
import QuickLinks from "../components/ui/QuickLinks";
import Tabs from "../components/ui/Tabs";
import Widgets from "../components/ui/Widgets";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Widgets></Widgets>
      <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto max-w-screen-xl px-2 py-8 sm:px-4 sm:py-10 lg:px-6">
        <Tabs />
        <Carousel2 />
      </div>
      <QuickLinks></QuickLinks>
      <ChatBot></ChatBot>
    </div>
  );
}
