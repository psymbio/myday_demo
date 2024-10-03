import Heading3 from "./Heading3";
import ApartmentIcon from "@mui/icons-material/BusinessTwoTone";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoomTwoTone";

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
  return (
    <>
      <div className="mt-4 border rounded-lg shadow bg-white px-4 pt-4">
        {bookings && bookings.length > 0 && (
          <div className="flex items-center ">
            <ApartmentIcon color="success" />
            <div className="pl-4">
              <b>
                <Heading3 heading="My Office Bookings" />
              </b>
              {bookings.map((booking, index) => (
                <div key={index}>
                  <p>
                    {" "}
                    {booking.StartTime} - {booking.EndTime}
                  </p>
                  <p>{booking.Booking}</p>
                  <p>{booking.nearby} in My Group booked nearby</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        )}

        {meetings && meetings.length > 0 && (
          <div className="flex items-center">
            {" "}
            <MeetingRoomIcon color="warning" />
            <div className="pl-4">
              <b>
                {" "}
                <Heading3 heading="My Meetings" />
              </b>
              {meetings.map((meeting, index) => (
                <div key={index}>
                  <p>
                    {" "}
                    {meeting.StartTime} - {meeting.EndTime}
                  </p>
                  <p>{meeting.Booking}</p>
                  <br />
                </div>
              ))}
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
