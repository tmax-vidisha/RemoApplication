import React from 'react';
import WhatsNew from './../Header/WhatsNew';
import { Grid ,Box } from '@mui/material';
import SideBar from './../WorkSpaceOne/SideBar';
import { useStyles } from './Styles';
import BirthdayEditor from './BirthdayEditor';

const BirthdayContentPage = () => {
    const classes=useStyles()
    return (
        <div>
            <Grid>

                {/* <IconText /> */}
                <Grid item xs={12}>
                    <WhatsNew />
                </Grid>
                <Box style={{ marginTop: "30px", marginLeft:"30px", marginRight:"57px"}}>

                    <Grid container item xs={12} className={classes.bigPaper}>
                        <Grid item xs={1} >
                            <SideBar />
                        </Grid>
                        <Grid item xs={11} >
                            <BirthdayEditor />
                        </Grid>
                       
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default BirthdayContentPage;