import React from 'react';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useStyles } from './Styles';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LinkOffSharpIcon from '@mui/icons-material/LinkOffSharp';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StandUpCalendar from './StandUpCalendar';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const SearchPart = () => {
const classes=useStyles();

    return (
        <Grid container spacing={2} item xs={12} style={{ marginTop: "20px", position:"static" }}>

            <Grid style={{marginRight:"12%"}}>
            <Search style={{padding:"0px 2px"}}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search something..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            </Grid>
 
            <Stack>
                <Grid>
                    <Button style={{backgroundColor:"rgb(50 168 189)", color:"white", textTransform:"capitalize", marginRight:"30px", padding:"2px 10px"}}>                    
                       <span className={classes.plus}><LocalHospitalIcon/></span> Create New</Button>
                    <Button  style={{backgroundColor:"rgb(50 168 189)", color:"white", textTransform:"capitalize", marginRight:"30px",padding:"2px 10px" }}>
                        <span className={classes.quick} ><LinkOffSharpIcon/></span>Quick Links</Button>
                    <Button style={{ color:"gray", textTransform:"capitalize", backgroundColor:" #e6ffe6", border:"5px solid white"}}>
                        <span className={classes.quick}><CalendarMonthOutlinedIcon/></span>
                        Daily Standup Meeting ...
                        {/* <StandUpCalendar/> */}
                        </Button>
                        
                </Grid>
            </Stack>

        </Grid>
    );
};

export default SearchPart;