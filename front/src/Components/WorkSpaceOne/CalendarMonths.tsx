import React from 'react';
import CalendarWeek from './CalendarWeek';

interface types{
    year:any[];
    month:any;
    Date?:string
}

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const CalendarMonths = (props: any) => {

    const { year, month, events } = props;

    const weeks = [];
    const firstDayInMonth = new Date(year, month - 1, 1),
        lastDayInMonth = new Date(year, month, 0),
        firstDayInCalendar = new Date(
            year,
            month - 1,
            1 - firstDayInMonth.getDay()
        ),
        lastDayInCalenDar = new Date(
            year,
            month - 1,
            lastDayInMonth.getDate() + 6 - lastDayInMonth.getDay()

        );

        let currentDate = firstDayInCalendar;
        while (currentDate <=  lastDayInCalenDar) {
          if (currentDate.getDay() === 0) {
            weeks.push([]);
          }
        //   weeks[weeks.length - 1].push(new Date(currentDate));
          currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        }
    return (
        <>
            <div className="calendar-container">
                <div className="calendar-header">
                    <h1>
                        {monthNames[month - 1]} {year}
                    </h1>
                </div>
                <div className="calendar-row-counter">
                    {weeks.map((dates, i) => (
                        <CalendarWeek
                            year={year}
                            month={month}
                            dates={dates}
                            events={events.filter(
                                (event:any) =>
                                    event.beginDate <= dates[dates.length - 1] &&
                                    event.endDate >= dates[0]
                            )}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};


// CalendarMonths.propTypes = {
//     year: PropTypes.number.isRequired,
//     month: PropTypes.number.isRequired,
//     events: PropTypes.arrayOf(PropTypes.object)
//   };
  CalendarMonths.defaultProps = {
    events: []
  };

export default CalendarMonths;