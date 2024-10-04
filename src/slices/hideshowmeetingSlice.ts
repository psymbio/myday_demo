import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MeetingReservationState {
  meeting: boolean;
  reservation:boolean;
}

const initialState: MeetingReservationState = {
  meeting: true,reservation:true, // Initial state is an empty object
};


const reservationSlice = createSlice({
  name: "meetingreservationshowhide",
  initialState,
  reducers: {
    hideReservation(state, action: PayloadAction<boolean>) {
      state.reservation = action.payload;
    },
    hideMeeting(state, action: PayloadAction<boolean>) {
      state.meeting = action.payload;
    },
    setDefaultReservations(state, action: PayloadAction<boolean>) {
      state.meeting = action.payload;
      state.reservation = action.payload;
    },
  },
});

export const { hideMeeting, hideReservation,setDefaultReservations } =
  reservationSlice.actions;
export default reservationSlice.reducer;
