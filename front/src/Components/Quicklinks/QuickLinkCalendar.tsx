import React, { useCallback } from 'react';
import { useStyles } from './Styles';
import { Calendar } from 'react-calendar';
import { useState } from 'react';
import { Grid } from '@mui/material';
const QuickLinkCalendar = () => {
    const classes = useStyles();
    const [value, setValue] = useState();

    const onChange = useCallback(
        (value: any) => {
            setValue(value);
        },
        [setValue],
    );
    return (
        <Grid>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    className={classes.calendar}
                />
            </div>
        </Grid>

    );
};

export default QuickLinkCalendar;