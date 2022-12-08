import React from 'react';
import { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
// import ruLocale from "date-fns/locale/ru";
import { enIN } from 'date-fns/locale';
import { Box, Paper } from '@mui/material';

const CalendarEvent = () => {

    
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        console.log("Date is: ", date);
    };

    return (
        <div>
            <Box>

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enIN}>
                    <Paper style={{ overflow: "hidden"}}>
                        <Calendar date={selectedDate} onChange={handleDateChange}  />
                    </Paper>
                </MuiPickersUtilsProvider>

            </Box>
        </div>
    );
};

export default CalendarEvent;