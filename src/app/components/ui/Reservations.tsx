import Heading3 from "./Heading3";
import ApartmentIcon from '@mui/icons-material/BusinessTwoTone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoomTwoTone';

interface MeetingDetails {
    Id: number,
    Date: string,
    StartTime: string,
    EndTime: string,
    Userid: number,
    Booking:string,
    nearby: number,
    Type: string,
    status: string
}

interface BookingDetails {
  Id: number,
        Date: string,
        StartTime: string,
        EndTime: string,
        Userid: number,
        Booking:string,
        nearby: number,
        Type: string,
        status: string
}

interface ReservationsDetailsProps {
  meetings?: MeetingDetails[];
  bookings?: BookingDetails[];
} 
  


export default function Reservations({ meetings, bookings }: ReservationsDetailsProps) {
  return (
    <>
    
    <div className="mt-4 border rounded-lg shadow bg-white">
    
      {bookings && bookings.length > 0 && (
        <div className="flex items-center p-1">
        <ApartmentIcon color="success"/>
       <div className="">
          <Heading3 heading="My Office Bookings" />
          {bookings.map((booking, index) => (
            <div key={index} className="pl-4">
              <p> {booking.StartTime} - {booking.EndTime}</p>
              <p>{booking.Booking}</p>
              <p>{booking.nearby} in My Group booked nearby</p>
              <br />
            </div>
          ))}
        </div>
        </div>
      )}
      
      {meetings && meetings.length > 0 && (
       <div className="flex items-center p-1"> <MeetingRoomIcon color="warning"/>
        <div className="">
          <Heading3 heading="My Meetings" />
          {meetings.map((meeting, index) => (
            <div key={index} className="pl-4">
              <p> {meeting.StartTime} - {meeting.EndTime}</p>
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
