"use client";

import React, { useState, useEffect } from "react";
import mygroup from "../../data/mygroup.json";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/DoneRounded";
import RampRightIcon from "@mui/icons-material/RampRightRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";

interface Status {
  color: string;
  icon: JSX.Element;
  tooltip: string;
}

// Predefined status options
const statusOptions: Status[] = [
  {
    color: "bg-lime-500",
    icon: <DoneIcon fontSize="small" className="text-white" />,
    tooltip: "In office",
  },
  {
    color: "bg-cyan-500",
    icon: <RampRightIcon fontSize="small" className="text-white" />,
    tooltip: "On the way",
  },
  {
    color: "bg-fuchsia-500",
    icon: <ArrowOutwardIcon fontSize="small" className="text-white" />,
    tooltip: "OOO",
  },
  {
    color: "bg-red-600",
    icon: <CloseIcon fontSize="small" className="text-white" />,
    tooltip: "In a meeting",
  },
  {
    color: "bg-yellow-400",
    icon: <CloseIcon fontSize="small" className="text-white" />,
    tooltip: "Away",
  },
];

export default function MyGroupDisplay() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statuses, setStatuses] = useState<Status[]>([]); // State to hold statuses

  // Function to filter users based on search query
  const filteredUsers = mygroup.filter((user) => {
    const searchValue = searchQuery.toLowerCase();
    return (
      user.first_name.toLowerCase().includes(searchValue) ||
      user.last_name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.department.toLowerCase().includes(searchValue) ||
      user.job_title.toLowerCase().includes(searchValue)
    );
  });

  // Function to get a random status
  const getRandomStatus = (): Status => {
    return statusOptions[Math.floor(Math.random() * statusOptions.length)];
  };

  // Effect to set random statuses on mount
  useEffect(() => {
    const newStatuses = mygroup.map(() => getRandomStatus());
    setStatuses(newStatuses);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Group</h1>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-3 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-red-600 text-gray-900"
        />
        <SearchRoundedIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Display Filtered Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user, index) => {
          // Calculate status index safely
          const statusIndex = mygroup.indexOf(user); // Find original index in mygroup
          const status = statusIndex !== -1 ? statuses[statusIndex] : undefined; // Get status if valid

          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center"
            >
              {/* Profile Picture */}
              <div className="relative group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-1 border-2 border-gray-200">
                {/* Image container without overflow-hidden */}
                <Image
                  src={`/people/${user.profile_picture}`}
                  alt={`${user.first_name} ${user.last_name}`}
                  fill={true}
                  unoptimized={true}
                  className="object-cover object-center rounded-full"
                />
                {/* Tooltip */}
                <div className="absolute left-1/2 bottom-full mb-2 px-2 py-1 min-w-20 max-w-30 bg-gray-800 text-white text-xs text-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2">
                  {status?.tooltip}
                </div>
                {/* Status Icon */}
                <div
                  className={`absolute bottom-1 right-1 w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-[1.5px] border-gray-50 flex items-center justify-center ${status?.color}`}
                  title={status?.tooltip}
                >
                  <div className="scale-50 flex justify-center">
                    {status?.icon}
                  </div>
                </div>
              </div>
              {/* User Info */}
              <h2 className="text-lg font-semibold text-gray-800">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600 text-sm">{user.job_title}</p>
              <p className="text-gray-500 text-xs">{user.department}</p>
              <a
                href={`mailto:${user.email}`}
                className="text-red-600 text-xs hover:underline"
              >
                {user.email}
              </a>
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No users found matching your search.
        </p>
      )}
    </div>
  );
}
