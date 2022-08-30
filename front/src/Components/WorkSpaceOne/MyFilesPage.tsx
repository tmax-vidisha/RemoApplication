import React from 'react';
import WPOneDrive from './../Workspace/OneDrive/index';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const MyFilesPage = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Grid style={{display:"flex", justifyContent:"space-between"}}>
                <Grid>
                  
                <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                <InputLabel id="demo-simple-select-standard-label"><span>Sort by</span> Newest</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
              
                <Grid style={{marginTop:"20px",marginRight:"20px" }}>
                    <GridViewOutlinedIcon />
                    <FormatListBulletedOutlinedIcon />
                </Grid>

            </Grid>
        </>
    );
};

export default MyFilesPage;