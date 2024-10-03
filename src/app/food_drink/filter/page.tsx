"use client";

import { useSearchParams } from "next/navigation";
import HeaderFnD from "@/app/components/ui/HeaderFnD";
import NavigationBar from "@/app/components/ui/NavigationBar";
import ChatBot from "@/app/components/ui/ChatBot";
import Add2Cart from "@/app/components/ui/Add2Cart";
import HeaderImageFnD from "@/app/components/ui/HeaderImageFnD";

export default function FoodDrink() {
  const searchParams = useSearchParams();

  const veg = searchParams.get("veg") === "true";
  const pescatarian = searchParams.get("pescatarian") === "true";
  const glutenFree = searchParams.get("glutenFree") === "true";

  return (
    <div>
      <NavigationBar />
      <HeaderFnD />
      <HeaderImageFnD />
      <Add2Cart veg={veg} pescatarian={pescatarian} glutenFree={glutenFree} />
      <ChatBot />
    </div>
  );
}
