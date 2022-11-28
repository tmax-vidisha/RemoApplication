import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

interface type{
     date: Dayjs | null; onChange: (newDate: Dayjs | null) => void; 
}


export default function CalendarEvent() {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(''));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            {/* @ts-ignore */}
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </Grid>
       
        
        </Grid>
    
    </LocalizationProvider>
  );
}
