"use client";

import React, { useState } from 'react';
import EventCard from './EventCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { format, addMonths, subMonths, isSameMonth, isSameYear } from 'date-fns';

export default function EventCardDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = [
    { startDate: '2024-09-02T00:00:00Z', endDate: '2024-09-02T00:00:00Z', time: '16:00 - 17:00', text: 'DevOps', subtext: 'Event for DevOps Training' },
    { startDate: '2024-09-02T00:00:00Z', endDate: '2024-09-04T00:00:00Z', time: '16:00 - 17:00', text: 'Scrum Meeting', subtext: 'Daily Scrum Stand-up' },
    { startDate: '2024-09-02T00:00:00Z', endDate: '2024-09-04T00:00:00Z', time: 'All day', text: 'Frontend Review', subtext: 'Discuss UI Improvements' },
    { startDate: '2024-10-05T00:00:00Z', endDate: '2024-10-05T00:00:00Z', time: '09:00 - 10:00', text: 'Backend Review', subtext: 'Review backend architecture' }
  ];

  // Function to change the current month
  const changeMonth = (direction: 'back' | 'forward') => {
    if (direction === 'back') {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  // Function to check if there are events in a specific month
  const hasEventsInMonth = (date: Date) => {
    return events.some(event => {
      const eventStartDate = new Date(event.startDate);
      return isSameMonth(eventStartDate, date) && isSameYear(eventStartDate, date);
    });
  };

  // Check if there are events in the previous or next months
  const hasEventsInPreviousMonth = hasEventsInMonth(subMonths(currentDate, 1));
  const hasEventsInNextMonth = hasEventsInMonth(addMonths(currentDate, 1));

  // Filter events based on the selected month
  const filteredEvents = events.filter((event) => {
    const eventStartDate = new Date(event.startDate);
    return isSameMonth(eventStartDate, currentDate);
  });

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Events</h1>

      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-gray-800">
          {format(currentDate, 'MMMM yyyy')}
        </span>
        <div className="flex space-x-2">
          <ArrowBackIcon
            className={`cursor-pointer ${!hasEventsInPreviousMonth && 'text-gray-400'}`}
            onClick={() => hasEventsInPreviousMonth && changeMonth('back')}
            style={{ pointerEvents: hasEventsInPreviousMonth ? 'auto' : 'none' }}
          />
          <ArrowForwardIcon
            className={`cursor-pointer ${!hasEventsInNextMonth && 'text-gray-400'}`}
            onClick={() => hasEventsInNextMonth && changeMonth('forward')}
            style={{ pointerEvents: hasEventsInNextMonth ? 'auto' : 'none' }}
          />
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <EventCard eventData={filteredEvents} />
      ) : (
        <p className="text-gray-600">No events for this month.</p>
      )}
    </div>
  );
}
