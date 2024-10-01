// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import registrationReducer from '../slices/registrationSlice';
import cartReducer from '../slices/cartSlice'; // Import the cart slice
import { combineReducers } from 'redux';
import counterReducer from '../slices/counterSlice';

// Create a persist configuration
const persistConfig = {
  key: 'root',  // Key for storage
  storage,      // Using localStorage (can change to sessionStorage if needed)
};

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  registration: registrationReducer,
  cart: cartReducer, // Add cart reducer to the combined reducers
  counter: counterReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer and handle special actions for redux-persist
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor to control rehydration
export const persistor = persistStore(store);

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
