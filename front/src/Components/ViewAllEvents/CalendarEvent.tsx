import React, { useCallback } from 'react';
import { useState } from 'react';
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
// import ruLocale from "date-fns/locale/ru";
import { enIN } from 'date-fns/locale';
import { Box, Paper } from '@mui/material';
import { Calendar } from 'react-calendar';
const CalendarEvent = () => {

    const [value, setValue] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        console.log("Date is: ", date);
    };
    const onChange = useCallback(
        (value: any) => {
          setValue(value);
        },
        [setValue],
      );

    return (
        <div>
            <Box>

                {/* <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enIN}>
                    <Paper style={{ overflow: "hidden"}}>
                        <Calendar date={selectedDate} onChange={handleDateChange}  />
                    </Paper>
                </MuiPickersUtilsProvider> */}
                <Calendar
                    // className={classes.border}
                    onChange={onChange}
                    value={value}
                />
            </Box>
        </div>
    );
};

export default CalendarEvent;