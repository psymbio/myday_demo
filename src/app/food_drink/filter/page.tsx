"use client";

import { useSearchParams } from "next/navigation";
import HeaderFnD from "@/app/components/ui/HeaderFnD";
import NavigationBar from "@/app/components/ui/NavigationBar";
import ChatBot from "@/app/components/ui/ChatBot";
import Add2Cart from "@/app/components/ui/Add2Cart";
import HeaderImageFnD from "@/app/components/ui/HeaderImageFnD";

export default function FoodDrink() {
  const searchParams = useSearchParams();

  const vegan = searchParams.get("vegan") === "true";
  const pescatarian = searchParams.get("pescatarian") === "true";
  const glutenFree = searchParams.get("glutenFree") === "true";
  const vegatarian = searchParams.get("vegetarian") === "true";
  const dairyFree = searchParams.get("dairy-free") === "true";
  const lactoseFree = searchParams.get("lactose-free") === "true";
  return (
    <div>
      <NavigationBar />
      <HeaderFnD />
      <HeaderImageFnD />
      <Add2Cart vegan={vegan} pescatarian={pescatarian} glutenFree={glutenFree} vegetarian={vegatarian} dairyFree={dairyFree} lactoseFree={lactoseFree} />
      <ChatBot />
    </div>
  );
}
