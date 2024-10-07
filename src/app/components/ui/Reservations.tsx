import ApartmentIcon from "@mui/icons-material/BusinessTwoTone";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoomTwoTone";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDefaultReservations } from "@/slices/hideshowmeetingSlice";

interface MeetingDetails {
  Id: number;
  Date: string;
  StartTime: string;
  EndTime: string;
  Userid: number;
  Booking: string;
  nearby: number;
  Type: string;
  status: string;
}

interface BookingDetails {
  Id: number;
  Date: string;
  StartTime: string;
  EndTime: string;
  Userid: number;
  Booking: string;
  nearby: number;
  Type: string;
  status: string;
}

interface ReservationsDetailsProps {
  meetings?: MeetingDetails[];
  bookings?: BookingDetails[];
}

export default function Reservations({
  meetings,
  bookings,
}: ReservationsDetailsProps) {

  const reservationState = useSelector(
    (state:RootState) => state.meetingreservation
  );

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(setDefaultReservations(true));
  }, [dispatch]);
 
  return (
    <>
      <div className="mt-4 border rounded-lg shadow bg-white px-4 pt-4 h-[12rem] overflow-scroll">
        {bookings && bookings.length > 0 && (
          <div className="flex items-center ">
            <ApartmentIcon color="success" />
            <div className="pl-4">
            <h2 className="text-sm font-bold text-black">My Office Bookings</h2>
              { reservationState.reservation == true ?  bookings.map((booking, index) => (
                <div key={index}>
                  <p className="text-gray-600 text-xs">
                    {" "}
                    {booking.StartTime} - {booking.EndTime}
                  </p>
                  <p className="text-gray-600 text-xs">{booking.Booking}</p>
                  <p className="text-gray-600 text-xs">{booking.nearby} in My Group booked nearby</p>
                  <br />
                </div>
              )) : <> <p className="text-gray-600 text-xs">No upcoming booking </p>
              <br/>
              <br/></>
              }
            </div>
          </div>
        )}

        {meetings && meetings.length > 0 && (
          <div className="flex items-center">
            {" "}
            <MeetingRoomIcon color="warning" />
            <div className="pl-4">
            <h2 className="text-sm font-bold text-black">My Meetings</h2>
              { reservationState.meeting == true ? meetings.map((meeting, index) => (
                <div key={index}>
                  <p className="text-gray-600 text-xs">
                    {" "}
                    {meeting.StartTime} - {meeting.EndTime}
                  </p>
                  <p className="text-gray-600 text-xs">{meeting.Booking}</p>
                  <br />
                </div>
              )             
            ) : <> <p className="text-gray-600 text-xs">No upcoming meetings </p>
            <br/>
            <br/></>}
            </div>
          </div>
        )}

        {!meetings?.length && !bookings?.length && (
          <p>No meetings or bookings available.</p>
        )}
      </div>
    </>
  );
}
