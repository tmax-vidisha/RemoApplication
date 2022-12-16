import React, { useCallback } from 'react';
import { useState } from 'react';
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
// import ruLocale from "date-fns/locale/ru";
import { enIN } from 'date-fns/locale';
import { Box, Paper } from '@mui/material';
import { Calendar } from 'react-calendar';
import "moment-timezone"

interface IFolderProps {
    // data:any, 
    // error:any,
    // isLoading:any
    onClick?:(Date: any) => void;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
  }
// const CalendarEvent = () => {
const CalendarEvent: React.FC<IFolderProps> = (props: IFolderProps) => { 
    const { onClick } =  props
    const [value, setValue] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        console.log("Date is: ", date);
    };
    const onChange = useCallback(
        (value: any) => {
          setValue(value);
        //   const localDate = new Date(value).toLocaleDateString();
        //   console.log(localDate)
          onClick?.(value)
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