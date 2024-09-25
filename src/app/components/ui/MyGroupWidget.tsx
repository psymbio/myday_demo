"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/DoneRounded";
import RampRightIcon from "@mui/icons-material/RampRightRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import myGroupData from "../../data/mygroup.json"; // Import the JSON data

interface UserProfile {
  profile_picture: string;
  first_name: string;
  last_name: string;
}

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

export default function MyGroupWidget() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    // Load data from JSON
    setProfiles(myGroupData);
  }, []);

  const getRandomStatus = (): Status => {
    return statusOptions[Math.floor(Math.random() * statusOptions.length)];
  };

  return (
    <div className="mt-4 p-4 border rounded-lg shadow bg-white">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {profiles.slice(0, 10).map((profile, index) => {
          // Limit to first 10 profiles
          const status = getRandomStatus();

          return (
            <div key={index} className="relative flex flex-col items-center">
              <div className="relative group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-1 border-2 border-gray-200">
                {/* Image container without overflow-hidden */}
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
                {/* Status Icon */}
                <div
                  className={`absolute bottom-1 right-1 w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-[1.5px] border-gray-50 flex items-center justify-center ${status.color}`}
                  title={status.tooltip}
                >
                  <div className="scale-50 flex justify-center">{status.icon}</div>
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
      <div className="flex justify-between items-center">
        <span>Looking for someone else?</span>
        <a href="/mygroup" className="text-red-600 hover:underline">
          Go to My Group
        </a>
      </div>
    </div>
  );
}
