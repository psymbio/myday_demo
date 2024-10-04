"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/DoneRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import myGroupData from "../../data/mygroup.json"; // Import the JSON data

interface UserProfile {
  profile_picture: string;
  first_name: string;
  last_name: string;
}

interface Status {
  color: string; // Tailwind color class for background
  borderColor: string; // Tailwind color class for border
  icon: JSX.Element;
  tooltip: string;
}

// Predefined status options with explicit border colors
const statusOptions: Status[] = [
  {
    color: "bg-lime-500",
    borderColor: "border-lime-500",
    icon: <DoneIcon fontSize="small" className="text-white" />,
    tooltip: "In office",
  },
  {
    color: "bg-gray-600",
    borderColor: "border-gray-600",
    icon: <CloseIcon fontSize="small" className="text-white" />,
    tooltip: "Not in Office",
  },
];

export default function MyGroupWidget() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    // Load data from JSON
    setProfiles(myGroupData);
  }, []);

  const getStatusByIndex = (index: number): Status => {
    // Assign lime status to first 4, gray to the rest
    if (index < 3) {
      return statusOptions[0]; // lime status
    } else {
      return statusOptions[1]; // gray status
    }
  };

  return (
    <div className="mt-4 p-4 border rounded-lg shadow bg-white h-[12rem] overflow-scroll">
      <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {profiles.slice(0, 5).map((profile, index) => {
          // Limit to first 10 profiles
          const status = getStatusByIndex(index); // Get status based on index

          return (
            <div key={index} className="relative flex flex-col items-center">
              <div
                className={`relative group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-1 border-4 ${status.borderColor}`}
              >
                {/* Image container */}
                <Image
                  src={`/people/${profile.profile_picture}`}
                  alt={`${profile.first_name} ${profile.last_name}`}
                  fill={true}
                  unoptimized={true}
                  className="object-cover object-center rounded-full"
                />
                {/* Tooltip */}
                <div className="absolute left-1/2 bottom-full mb-2 px-2 py-1 min-w-20 max-w-30 bg-gray-800 text-white text-xs text-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2">
                  {status.tooltip}
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center">
                {profile.first_name} {profile.last_name}
              </p>
            </div>
          );
        })}
      </div>
      <br />
      <div className="flex justify-between items-center text-xs mt-4">
        <span>Looking for someone else?</span>
        <a href="/mygroup" className="text-red-600 hover:underline">
          Search
        </a>
      </div>
    </div>
  );
}
