"use client";

import React from "react";
import Calendar from "./Calender";
import CommonHeader from "@/components/CommonHeader";

const page = () => {
  const events = [
    { title: "홍길동 10:00", date: "2024-10-01" },
    { title: "홍길동 10:00", date: "2024-10-10" },
    { title: "홍길동 10:00", date: "2024-10-11" },
    { title: "홍길동 10:00", date: "2024-10-12" },
    { title: "홍길동 10:00", date: "2024-10-13" },
    { title: "홍길동 10:00", date: "2024-10-14" },
    { title: "홍길동 10:00", date: "2024-10-15" },
    { title: "홍길동 10:00", date: "2024-10-16" },
    { title: "홍길동 10:00", date: "2024-10-17" },
    { title: "홍길동 10:00", date: "2024-10-18" },
    { title: "홍길동 10:00", date: "2024-10-19" },
    { title: "홍길동 10:00", date: "2024-10-20" },
    { title: "홍길동 10:00", date: "2024-10-21" },
    { title: "홍길동 10:00", date: "2024-10-22" },
    { title: "홍길동 10:00", date: "2024-10-23" },
    { title: "홍길동 10:00", date: "2024-10-24" },
    { title: "홍길동 10:00", date: "2024-10-25" },
    { title: "홍길동 10:00", date: "2024-10-30" },
  ];

  return (
    <div>
      <CommonHeader title="고객예약 현황" />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <Calendar events={events} />
      </div>
    </div>
  );
};

export default page;
