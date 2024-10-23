import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";

const Calendar = ({
  events,
}: {
  events: { title: string; date: string }[];
}) => {
  // const headerToolbarOptions = {
  //   right: "",
  // };

  const dayCellContent = (arg: any) => {
    const date = arg.date.getDate();
    const fullDate = new Date(arg.date.getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const price = getPriceForDate(fullDate);
    const isBold = price !== "";

    return (
      <div className="date-cell">
        <span className={`date text-base font-normal text-[#363941]`}>
          {date}
        </span>
      </div>
    );
  };

  const getPriceForDate = (date: any) => {
    // Return the corresponding price value or an empty string if no price is available
    const matchingEvent = events.find((event) => event.date === date);
    return matchingEvent ? matchingEvent.title : "";
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        // headerToolbar={headerToolbarOptions}
        headerToolbar={{
          end: "",
          center: "title",
          start: "prev, next, today",
        }}
        fixedWeekCount={false}
        dayCellContent={dayCellContent}
        dayHeaders={true}
        showNonCurrentDates={true}
        locales={[koLocale]}
        locale="ko"
      />
    </div>
  );
};

export default Calendar;
