import React from 'react';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import IconText from './../Header/IconText';
import { useStyles } from './Styles';
import birthdayIcon from '../../Assets/Images/birthday.jpg'

const Birthday = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.contentEditorWidth}>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 2 }}>
                    <IconText />
                </Paper>
                <Paper>
                    <img src={birthdayIcon} alt=" image" />
                </Paper>
            </Container>
        </div>
    );
};

export default Birthday;