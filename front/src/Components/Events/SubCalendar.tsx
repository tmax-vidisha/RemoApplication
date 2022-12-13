import * as React from "react";

import { enIN } from 'date-fns/locale';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import { Paper } from '@mui/material';


export default function SubCalendar() {
  
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date: any) => {
      setSelectedDate(date);
      console.log("Date is: ", date);
  };
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enIN}>
        <Paper style={{ overflow: "hidden" }}>
          <Calendar date={selectedDate} onChange={handleDateChange} />
        </Paper>
      </MuiPickersUtilsProvider>
    </>

  );
}


