import ChatBot from "@/app/components/ui/ChatBot";
import HeaderImage from "@/app/components/ui/HeaderImage";
import NavigationBar from "@/app/components/ui/NavigationBar";
import EventCardDisplay from "@/app/components/ui/EventCardDisplay";
import HeaderEvents from "../components/ui/HeaderEvents";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeaderEvents></HeaderEvents>
      <HeaderImage></HeaderImage>
      <EventCardDisplay></EventCardDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}
