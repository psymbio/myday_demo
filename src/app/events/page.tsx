import ChatBot from "@/app/components/ui/ChatBot";
import Header from "@/app/components/ui/Header";
import HeaderImage from "@/app/components/ui/HeaderImage";
import NavigationBar from "@/app/components/ui/NavigationBar";
import EventCardDisplay from "@/app/components/ui/EventCardDisplay";

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
