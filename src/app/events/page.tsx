import ChatBot from "@/app/components/ui/ChatBot";
import NavigationBar from "@/app/components/ui/NavigationBar";
import EventCardDisplay from "@/app/components/ui/EventCardDisplay";
import HeaderEvents from "../components/ui/HeaderEvents";
import HeaderImageEvents from "../components/ui/HeaderImageEvents";

export default function TestingPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeaderEvents></HeaderEvents>
      <HeaderImageEvents></HeaderImageEvents>
      <EventCardDisplay></EventCardDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}
