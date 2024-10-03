"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/app/components/ui/Header";
import NavigationBar from "@/app/components/ui/NavigationBar";
import ChatBot from "@/app/components/ui/ChatBot";
import HeaderImage from "@/app/components/ui/HeaderImage";
import Add2Cart from "@/app/components/ui/Add2Cart";

export default function FoodDrink() {
  const searchParams = useSearchParams();

  const veg = searchParams.get("veg") === "true";
  const pescatarian = searchParams.get("pescatarian") === "true";
  const glutenFree = searchParams.get("glutenFree") === "true";

  return (
    <div>
      <NavigationBar />
      <Header />
      <HeaderImage />
      <Add2Cart veg={veg} pescatarian={pescatarian} glutenFree={glutenFree} />
      <ChatBot />
    </div>
  );
}
