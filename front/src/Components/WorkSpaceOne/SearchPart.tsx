import React from 'react';
import { Grid, ListItemText, ListItemIcon } from '@mui/material';
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
import folder from "./../../Assets/Images/folder.svg";
import excel from "./../../Assets/Images/excel.svg";
import pdf from "./../../Assets/Images/pdf.svg";
import ppt from "./../../Assets/Images/ppt.svg";
import word from "./../../Assets/Images/word.svg";
import { Box } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { Paper } from '@mui/material';



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

const data = [
    { id:1, icon: <img src={folder} alt="folder" />, label: 'Folders' },
    { id:2, icon: <img src={word} alt="folder" />, label: 'Word' },
    { id:3, icon: <img src={excel} alt="folder" />, label: 'Excel' },
    { id:4, icon: <img src={pdf} alt="folder" />, label: 'PDF' },
    { id:5, icon: <img src={ppt} alt="folder" />, label: 'PPT' },

];


const handleOnChange=(label:any)=>{
console.log(label,"all label")
}

const SearchPart = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [fileOpen, setFileOpen] = React.useState(false);

    return (
        <Grid container spacing={2} item xs={12} style={{ marginTop: "20px", position: "static", display: "flex", justifyContent:"space-around" }}>

            <Grid>
                <Search style={{ padding: "5px 5px", backgroundColor: "white", marginTop: "8px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search something..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>
            <Grid style={{display:"block"}}>
                <Button style={{ textTransform: "capitalize", marginRight:"30px" }} className={classes.create}>
                    {/*  <span className={classes.plus}><LocalHospitalIcon /></span> */}
                    <Box
                        sx={{
                            bgcolor: open ? 'white' : null,
                            pb: open ? 2 : 0,
                            width: "160px"
                        }}

                    >

                        <ListItemButton
                            className={classes.create}
                            // alignItems="flex-start"
                            onClick={() => setOpen(!open)}
                            sx={{
                                px: 3,
                                pt: 2.5,
                                pb: open ? 0 : 2.5,
                                '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                            }}
                        >
                            <span className={classes.plus}><LocalHospitalIcon /></span>
                            <ListItemText
                                primary="Create New"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                    mb: '2px',
                                    color: open ? 'white' : 'white',
                                }}
                                // secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                                // secondaryTypographyProps={{
                                //     noWrap: true,
                                //     fontSize: 12,
                                //     lineHeight: '16px',
                                //     color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                // }}
                                sx={{ my: 0, }}
                            />
                            {/* <KeyboardArrowDown
                                    sx={{
                                        mr: -1,
                                        opacity: 0,
                                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                        transition: '0.2s',
                                    }}
                                /> */}
                        </ListItemButton>
                        {open &&
                            data.map((item) => (
                                <ListItemButton
                                    sx={{
                                        bgcolor: open ? 'white' : 'rgb(50 168 189) !important',
                                        py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)'
                                    }}
                                    key={item.label}
                                    onClick={ () => handleOnChange(item.label)}
                                >
                                    <ListItemIcon sx={{ color: 'inherit' }} >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: 14, color: "#166694", fontWeight: "600" }}
                                    />
                                </ListItemButton>
                            ))}

                    </Box>

                </Button>
                <Button className={classes.linkBtn} style={{ textTransform: "capitalize", }}>
                    <span className={classes.quick} ><LinkOffSharpIcon /></span>Quick Links</Button>
                <Button style={{ color: "gray", textTransform: "capitalize", backgroundColor: " #e6ffe6", border: "5px solid white" }}>
                    <span className={classes.quick}><CalendarMonthOutlinedIcon /></span>
                    Daily Standup Meeting ...
                    {/* <StandUpCalendar/> */}
                </Button>

            </Grid>


        </Grid>
    );
};

export default SearchPart;