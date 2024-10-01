"use client";
import { useState } from "react";
import TabCard from "./TabCard";
// hello
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsRounded';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantRounded';
import MapOutlinedIcon from '@mui/icons-material/MapRounded';
// import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
//import MyCombinedMeetings from "./MyCombinedMeetings";
import MyGroupWidget from "./MyGroupWidget";
import RestaurantDisplay from "./RestaurantWidget";
import ReservationData from "../../data/reservation.json"; // Import the JSON data
import Reservations from "./Reservations";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Meetings");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

 /* const meetings = [
    { name: "Meeting 1", time: "9:00 AM", location: "Room 101" },
    { name: "Meeting 2", time: "2:00 PM", location: "Room 202" },
  ];*/
  
 /* const bookings = [
    { name: "John Doe", time: "10:00 AM", location: "Office 1", mygroup: "Group A" },
  ];*/
  
  const filteredMeetingData = ReservationData.filter((item) => {
    if(item.Userid==125  && item.Type=="Meeting")
    {
    return  item
   
    }
    
   
  });

  const filteredReservationData = ReservationData.filter((item) => {
    if(item.Userid==125 && item.Type=="Desk")
    {
    return item
   
    }
    
   
  });

  return (
    <div>
      {/* Mobile dropdown */}
      <div className="sm:hidden">
        <nav className="flex justify-center border-b border-gray-300 gap-16">
          <a  className={`p-2 ${activeTab === "Meetings" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Meetings")}>
            <TableRestaurantOutlinedIcon />
          </a>

          <a  className={`p-2 ${activeTab === "My Group" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("My Group")}>
            <GroupsOutlinedIcon />
          </a>

          <a  className={`p-2 ${activeTab === "Food & Drink" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Food & Drink")}>
            <RestaurantOutlinedIcon />
          </a>

          <a  className={`p-2 ${activeTab === "Maps" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Maps")}>
            <MapOutlinedIcon />
          </a>
        </nav>
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-300 py-5">
          <nav className="-mb-px flex gap-8 justify-center" aria-label="Tabs">
            {/* Meetings Tab */}
            <a
              
              onClick={() => handleTabClick("Meetings")}
            className={`inline-flex items-center gap-2 border-b-2 ${
              activeTab === "Meetings" ? "border-red-600 text-red-600" : "border-transparent text-gray-700"
            } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <TableRestaurantOutlinedIcon />
              Meetings
            </a>

            {/* My Group Tab */}
            <a
              
              onClick={() => handleTabClick("My Group")}
            className={`inline-flex items-center gap-2 border-b-2 ${
              activeTab === "My Group" ? "border-red-600 text-red-600" : "border-transparent text-gray-700"
            } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <GroupsOutlinedIcon />
              My Group
            </a>

            {/* Food & Drink Tab */}
            <a
              
              onClick={() => handleTabClick("Food & Drink")}
            className={`inline-flex items-center gap-2 border-b-2 ${
              activeTab === "Food & Drink" ? "border-red-600 text-red-600" : "border-transparent text-gray-700"
            } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <RestaurantOutlinedIcon />
              Food & Drink
            </a>

            {/* Maps Tab */}
            <a
              
              onClick={() => handleTabClick("Maps")}
            className={`inline-flex items-center gap-2 border-b-2 ${
              activeTab === "Maps" ? "border-red-600 text-red-600" : "border-transparent text-gray-700"
            } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <MapOutlinedIcon />
              Maps
            </a>
          </nav>
        </div>
      </div>

      {/* Display TabCard based on active tab */}
      {/*activeTab === "Meetings" && <MyCombinedMeetings meetings={meetings} bookings={bookings} />*/}
      {activeTab === "Meetings" && <Reservations meetings={filteredMeetingData} bookings={filteredReservationData} /> }
 
      {activeTab === "My Group" && <MyGroupWidget></MyGroupWidget>}
      {activeTab === "Food & Drink" && <RestaurantDisplay></RestaurantDisplay>}
      {activeTab === "Maps" && <TabCard title="Maps Content" content="Here is your booking" />}
      
    </div>
  );
}
