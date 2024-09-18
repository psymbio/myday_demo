"use client";
import { useState } from "react";
import TabCard from "./TabCard";
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Meetings");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      {/* Mobile dropdown */}
      <div className="sm:hidden">
        <nav className="flex justify-center border-b border-gray-300 py-5 gap-10">
          <a href="#" className={`p-2 ${activeTab === "Meetings" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Meetings")}>
            <TableRestaurantOutlinedIcon />
          </a>

          <a href="#" className={`p-2 ${activeTab === "My Group" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("My Group")}>
            <GroupsOutlinedIcon />
          </a>

          <a href="#" className={`p-2 ${activeTab === "Food & Drink" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Food & Drink")}>
            <RestaurantOutlinedIcon />
          </a>

          <a href="#" className={`p-2 ${activeTab === "Maps" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Maps")}>
            <MapOutlinedIcon />
          </a>

          <a href="#" className={`p-2 ${activeTab === "Events" ? "text-red-600" : "text-gray-700"}`}
          onClick={() => handleTabClick("Events")}>
            <EventAvailableOutlinedIcon />
          </a>
        </nav>
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-300 py-5">
          <nav className="-mb-px flex gap-8 justify-center" aria-label="Tabs">
            {/* Meetings Tab */}
            <a
              href="#"
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
              href="#"
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
              href="#"
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
              href="#"
              onClick={() => handleTabClick("Maps")}
            className={`inline-flex items-center gap-2 border-b-2 ${
              activeTab === "Maps" ? "border-red-600 text-red-600" : "border-transparent text-gray-700"
            } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <MapOutlinedIcon />
              Maps
            </a>

            {/* Events Tab */}
            <a
              href="#"
              onClick={() => handleTabClick("Events")}
            className={`inline-flex items-center gap-2 border-b-2 ${
              activeTab === "Events" ? "border-red-600 text-red-600" : "border-transparent text-gray-700"
            } px-2 pb-4 text-sm font-medium transition-colors duration-200`}
            >
              <EventAvailableOutlinedIcon />
              Events
            </a>
          </nav>
        </div>
      </div>

      {/* Display TabCard based on active tab */}
      {activeTab === "Meetings" && <TabCard title="Meetings Content" content="Here are the Meetings..." />}
      {activeTab === "My Group" && <TabCard title="My Group Content" content="Here are the Meetings..." />}
      {activeTab === "Food & Drink" && <TabCard title="Food & Drink Content" content="Here are the Meetings..." />}
      {activeTab === "Maps" && <TabCard title="Maps Content" content="Here are the Meetings..." />}
      {activeTab === "Events" && <TabCard title="Events Content" content="Here are the Meetings..." />}
    </div>
  );
}
