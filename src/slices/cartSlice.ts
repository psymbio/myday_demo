// slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: { [itemId: number]: number }; // itemId mapped to quantity
}

const initialState: CartState = {
  items: {
    1: 2, // Initial quantity for item ID 1
    2: 3, // Initial quantity for item ID 2
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<{ itemId: number; quantity: number }>) {
      const { itemId, quantity } = action.payload;
      state.items[itemId] = (state.items[itemId] || 0) + quantity; // Update quantity
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      delete state.items[action.payload]; // Remove item from cart
    },
    updateItemQuantity(state, action: PayloadAction<{ itemId: number; quantity: number }>) {
      const { itemId, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.items[itemId]; // Remove item if quantity is 0 or less
      } else {
        state.items[itemId] = quantity; // Update quantity
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
