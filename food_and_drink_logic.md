## Food and Drink

5-6 Components

1. FoodItemData - Id: number, Name: string, Cost: float, Restaurant id: number [possible values: Teya, Mezzanine, Starbucks], Veg: boolean, Pescatarian: boolean, GlutenFree: boolean
2. FoodItemProps:

interface FoodItemProps {
foodData: FoodItemData[];
}

display each fooditem in a separate card

use tailwind, write react code

1 page

1. Unfiltered page view and Filtered page

1. RestaurantItemData - Id: number, Name: string, Text: string, Subtext: string, Image: string, Link: that link onClick gets filtered view - filteration happens by restaurant id
1. RestaurantItemProps:

interface FoodItemProps {
foodData: FoodItemData[];
}

1. FilterFood.tsx: looks like popup - and display checkboxes for: Veg: boolean, Pescatarian: boolean, GlutenFree: boolean

User Journey

User lands - UnfilteredViewFoodDrink - Restaurant Data
User filters - either by top filter or by clicking a button on the restaurant

User lands unfiltered page view:

1. RestaurantCard: Id: number, Name: string, Text: string, Subtext: string, Image: string, Link: that lnk onClick gets filtered view - filteration happens by restaurant id
2. Button to filter: once user submits this form we get filtered view of all the food items in that category

object fit in image in tailwind

https://www.hyperui.dev/components/marketing/carts
