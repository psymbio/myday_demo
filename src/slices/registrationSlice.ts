// slices/registrationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  registeredEvents: { [eventId: number]: boolean };
}

const initialState: RegistrationState = {
  registeredEvents: {}, // Initial state is an empty object
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerForEvent(state, action: PayloadAction<number>) {
      state.registeredEvents[action.payload] = true;
    },
    unregisterForEvent(state, action: PayloadAction<number>) {
      state.registeredEvents[action.payload] = false;
    },
    setDefaultEvents(state, action: PayloadAction<number[]>) {
      action.payload.forEach(eventId => {
        if (state.registeredEvents[eventId] === undefined) {
          state.registeredEvents[eventId] = false; // Default to false
        }
      });
    },
  },
});

export const { registerForEvent, unregisterForEvent, setDefaultEvents } = registrationSlice.actions;
export default registrationSlice.reducer;
