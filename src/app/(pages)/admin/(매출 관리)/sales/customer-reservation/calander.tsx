"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles

const localizer = momentLocalizer(moment); // Set moment as the localizer

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "홍길동 10:00",
      start: new Date(2024, 10, 1, 10, 0), // Nov 1, 2024, 10:00 AM
      end: new Date(2024, 10, 1, 11, 0),
      allDay: false,
    },
    {
      title: "홍길동 10:00",
      start: new Date(2024, 10, 2, 10, 0), // Nov 2, 2024, 10:00 AM
      end: new Date(2024, 10, 2, 11, 0),
      allDay: false,
    },
  ]);

  return (
    <div style={{ height: "80vh", padding: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month"]} // Only show month view
        popup // Show popup for events
        defaultDate={new Date(2024, 10, 1)} // Set default month to November 2024
        messages={{
          next: "다음",
          previous: "이전",
          today: "오늘",
          month: "월",
        }}
      />
    </div>
  );
};

export default MyCalendar;
