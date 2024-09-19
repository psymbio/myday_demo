import ChatBot from "../components/ui/ChatBot";
import Header from "../components/ui/Header";
import HeaderImage from "../components/ui/HeaderImage";
import NavigationBar from "../components/ui/NavigationBar";
import EventCardDisplay from "../components/ui/EventCardDisplay";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <EventCardDisplay></EventCardDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}
