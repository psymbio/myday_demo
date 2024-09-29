// src/app/Providers.tsx
"use client"; // This file is marked as a Client Component

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* PersistGate delays the rendering of the UI until the persisted state is retrieved */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
