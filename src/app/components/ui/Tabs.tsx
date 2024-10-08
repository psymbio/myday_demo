"use client";
import { useState } from "react";
// import TabCard from "./TabCard";
import TableLocalDiningOutlinedIcon from "@mui/icons-material/TableRestaurantTwoTone";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsTwoTone";
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningTwoTone';
import MapOutlinedIcon from "@mui/icons-material/MapTwoTone";
import MyGroupWidget from "./MyGroupWidget";
import RestaurantDisplay from "./RestaurantWidget";
import ReservationData from "../../data/reservation.json";
import Reservations from "./Reservations";
import IndoorMapWidget from "./IndoorMapWidget";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Meetings");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const filteredMeetingData = ReservationData.filter((item) => {
    if (item.Userid == 125 && item.Type == "Meeting") {
      return item;
    }
  });

  const filteredReservationData = ReservationData.filter((item) => {
    if (item.Userid == 125 && item.Type == "Desk") {
      return item;
    }
  });

  return (
    <div className="mx-5 -translate-y-3">
      {/* Mobile dropdown */}
      <div className="sm:hidden">
        <nav className="flex justify-center border-b border-gray-300 gap-16">
          <a
            className={`p-2 ${
              activeTab === "Meetings" ? "text-red-600" : "text-gray-700"
            }`}
            onClick={() => handleTabClick("Meetings")}
          >
            <TableLocalDiningOutlinedIcon />
          </a>

          <a
            className={`p-2 ${
              activeTab === "My Group" ? "text-red-600" : "text-gray-700"
            }`}
            onClick={() => handleTabClick("My Group")}
          >
            <GroupsOutlinedIcon />
          </a>

          <a
            className={`p-2 ${
              activeTab === "Food & Drink" ? "text-red-600" : "text-gray-700"
            }`}
            onClick={() => handleTabClick("Food & Drink")}
          >
            <LocalDiningOutlinedIcon />
          </a>

          <a
            className={`p-2 ${
              activeTab === "Maps" ? "text-red-600" : "text-gray-700"
            }`}
            onClick={() => handleTabClick("Maps")}
          >
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
                activeTab === "Meetings"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-700"
              } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <TableLocalDiningOutlinedIcon />
              Meetings
            </a>

            {/* My Group Tab */}
            <a
              onClick={() => handleTabClick("My Group")}
              className={`inline-flex items-center gap-2 border-b-2 ${
                activeTab === "My Group"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-700"
              } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <GroupsOutlinedIcon />
              My Group
            </a>

            {/* Food & Drink Tab */}
            <a
              onClick={() => handleTabClick("Food & Drink")}
              className={`inline-flex items-center gap-2 border-b-2 ${
                activeTab === "Food & Drink"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-700"
              } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <LocalDiningOutlinedIcon />
              Food & Drink
            </a>

            {/* Maps Tab */}
            <a
              onClick={() => handleTabClick("Maps")}
              className={`inline-flex items-center gap-2 border-b-2 ${
                activeTab === "Maps"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-700"
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
      {activeTab === "Meetings" && (
        <Reservations
          meetings={filteredMeetingData}
          bookings={filteredReservationData}
        />
      )}

      {activeTab === "My Group" && <MyGroupWidget></MyGroupWidget>}
      {activeTab === "Food & Drink" && <RestaurantDisplay></RestaurantDisplay>}
      {activeTab === "Maps" && <IndoorMapWidget></IndoorMapWidget>}
    </div>
  );
}
