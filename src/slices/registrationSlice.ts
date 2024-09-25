import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  registeredEvents: number[];
}

const initialState: RegistrationState = {
  registeredEvents: [],
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerForEvent(state, action: PayloadAction<number>) {
      if (!state.registeredEvents.includes(action.payload)) {
        state.registeredEvents.push(action.payload);
      }
    },
    unregisterForEvent(state, action: PayloadAction<number>) {
      state.registeredEvents = state.registeredEvents.filter(id => id !== action.payload);
    },
  },
});

export const { registerForEvent, unregisterForEvent } = registrationSlice.actions;
export default registrationSlice.reducer;
