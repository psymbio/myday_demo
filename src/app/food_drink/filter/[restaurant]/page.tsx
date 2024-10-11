import Add2CartRestaurant from "@/app/components/ui/Add2CartRestaurant";
import ChatBot from "@/app/components/ui/ChatBot";
import HeaderFnD from "@/app/components/ui/HeaderFnD";
import HeaderImageFnD from "@/app/components/ui/HeaderImageFnD";
import NavigationBar from "@/app/components/ui/NavigationBar";

interface FilterByRestaurantProps {
  params: { restaurant: string }; // Dynamic route params
}

const FilterByRestaurant: React.FC<FilterByRestaurantProps> = ({ params }) => {
  const { restaurant } = params; // Get restaurant from the params

  return (
    <div>
      <NavigationBar />
      <HeaderFnD />
      <HeaderImageFnD />
      <Add2CartRestaurant restaurant={restaurant} />
      <ChatBot />
    </div>
  );
};

export default FilterByRestaurant;
