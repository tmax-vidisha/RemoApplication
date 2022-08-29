import React from 'react';
import CalendarEvent from './CalendarEvent';

const CalendarWeek = (props:any) => {
    const { year, month, dates, events } = props;
    return (
        <div className="calendar-week-row-container">
        {dates.map((date:any) => (
          <span
            className="calendar-week-row-day-header"
            style={
              date.getFullYear() !== year || date.getMonth() !== month - 1
                ? { color: "#bbb", fontWeight: "400" }
                : { color: "#000", fontWeight: "600" }
            }
            key={date}
          >
            {date.getDate()}
          </span>
        ))}
        {events.map((event:any) => {
          const col =
              dates.findIndex(
                (date:any) => date.valueOf() === event.beginDate.valueOf()
              ) + 1 || 1,
            colSpan =
              (dates.findIndex(
                (date:any) => date.valueOf() === event.endDate.valueOf()
              ) + 1 || 7) -
              col +
              1;
  
          return (
            <CalendarEvent
              title={event.title}
              col={col}
              colSpan={colSpan}
              key={event.id}
              onClick={() => alert(`${event.title} Clicked!`)}
            />
          );
        })}
      </div>
    );
  };
//   CalendarWeek.propTypes = {
//     year: PropTypes.number.isRequired,
//     month: PropTypes.number.isRequired
//   };
  CalendarWeek.defaultProps = {
    events: []
  };

export default CalendarWeek;