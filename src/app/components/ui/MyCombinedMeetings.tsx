import Heading3 from "./Heading3";

interface MeetingDetails {
  name: string;
  time: string;
  location: string;
}

interface BookingDetails {
  name: string;
  time: string;
  location: string;
  mygroup: string;
}

interface CombinedDetailsProps {
  meetings?: MeetingDetails[];
  bookings?: BookingDetails[];
}

export default function MyCombinedMeetings({ meetings, bookings }: CombinedDetailsProps) {
  return (
    <div className="mt-4 p-4 border rounded-lg shadow bg-white">
      {bookings && bookings.length > 0 && (
        <div className="mb-4">
          <Heading3 heading="My Bookings" />
          {bookings.map((booking, index) => (
            <div key={index} className="mb-4">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Location:</strong> {booking.location}</p>
              <p><strong>Group:</strong> {booking.mygroup}</p>
              <br />
            </div>
          ))}
        </div>
      )}
      
      {meetings && meetings.length > 0 && (
        <div className="mb-4">
          <Heading3 heading="My Meetings" />
          {meetings.map((meeting, index) => (
            <div key={index} className="mb-4">
              <p><strong>Name:</strong> {meeting.name}</p>
              <p><strong>Time:</strong> {meeting.time}</p>
              <p><strong>Location:</strong> {meeting.location}</p>
              <br />
            </div>
          ))}
        </div>
      )}

      {!meetings?.length && !bookings?.length && (
        <p>No meetings or bookings available.</p>
      )}
    </div>
  );
}
