import ChatBot from "@/app/components/ui/ChatBot";
import Header from "@/app/components/ui/Header";
import HeaderImage from "@/app/components/ui/HeaderImage";
import NavigationBar from "@/app/components/ui/NavigationBar";
import MyGroupDisplay from "@/app/components/ui/MyGroupDisplay";

export default function MyGroupPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <HeaderImage></HeaderImage>
      <MyGroupDisplay></MyGroupDisplay>
      <ChatBot></ChatBot>
    </div>
  );
}
