
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CalendarMonths from './CalendarMonths';


interface types{
    newEvents:any[];
}

const StandUpCalendar = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [events, setEvents] = useState([]);

    const loadPrevMonth = () => {
        let prevMonth = month - 1;
        if (prevMonth < 1) {
            setYear(year - 1)
            prevMonth = 12;
        }
        setMonth(prevMonth);
    };

    const loadNextMonth = () => {
        let nextMonth = month + 1;
        if (nextMonth > 12) {
            setYear(year + 1);
            nextMonth = 1;
        }
        setMonth(nextMonth);
    };

    useEffect(() => {
        const newEvents = [];
        for (let i = 0; i < 5; i++) {
            const beginDay = Math.floor(Math.random() * 28),
                endDay = Math.min(beginDay + Math.floor(Math.random() * 8), 28);
            newEvents.push({
                id: i + 1,
                title: `Event ${i + 1}`,
                beginDate: new Date(year, month - 1, beginDay),
                endDate: new Date(year, month - 1, endDay)
            });
            //setEvents(newEvents);
            console.log(newEvents, "newwwwwwwwwwwwwwwww")
        }
    }, [year, month])

    return (
        <div>
            <p>calendar</p>
            <div className="app-container">
                <div className="app-controls">
                    <button className="next-prev-button" onClick={loadPrevMonth}>
                        &laquo;--
                    </button>
                    <button className="next-prev-button" onClick={loadNextMonth}>
                        --&raquo;
                    </button>
                </div>
                <CalendarMonths year={year} month={month} events={events} />
            </div>

        </div>
    );
};

export default StandUpCalendar;