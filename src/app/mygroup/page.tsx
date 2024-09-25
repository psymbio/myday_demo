import ChatBot from "../components/ui/ChatBot";
import Header from "../components/ui/Header";
import HeaderImage from "../components/ui/HeaderImage";
import NavigationBar from "../components/ui/NavigationBar";
import MyGroupDisplay from "../components/ui/MyGroupDisplay";

export default function TestingPage() {
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
