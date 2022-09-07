import React from 'react';
import { Grid, ListItemText, ListItemIcon, TextField, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
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
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import Swal from 'sweetalert2';


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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme: any) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};
const data = [
    { id: 1, icon: <img src={folder} alt="folder" />, label: 'Folders' },
    { id: 2, icon: <img src={word} alt="folder" />, label: 'Word' },
    { id: 3, icon: <img src={excel} alt="folder" />, label: 'Excel' },
    { id: 4, icon: <img src={pdf} alt="folder" />, label: 'PDF' },
    { id: 5, icon: <img src={ppt} alt="folder" />, label: 'PPT' },

];

const handleOnChange = (label: any) => {
    console.log(label, "all label")
     
}


const SearchPart = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openOn = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const handleClickToOpen = () => {
    //     setOpen(true);
    // };

    const handleToClose = () => {
        setOpen(false);
    };
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top',
        //     showConfirmButton: false,
        //     timer: 1500,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //         toast.addEventListener('mouseenter', Swal.stopTimer)
        //         toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        // });

        // Toast.fire({
        //     icon: 'success',
        //     title: 'Folder Create Successfully'
        // }),
            handleToClose();
    }


    return (
        <Grid container spacing={2} item xs={12} style={{ marginTop: "20px", position: "static", display: "flex", justifyContent: "space-around" }}>

            <Grid>
                <Search style={{ padding: "5px 5px", backgroundColor: "white", }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search something..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>

            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid>
                <Grid style={{ textTransform: "capitalize", borderRadius:"10px"  }} className={classes.create}>
                    
                    
                        <ListItemButton
                            className={classes.createNew}
                            // alignItems="flex-start"

                            onClick={() => setOpen(!open)}
                            sx={{
                                px: 3,
                                pt: 2.5,
                                pb: open ? 0 : 2.5,
                                '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                backgroundColor:"rgb(50 168 189) !important"
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
        
                                sx={{ my: 0, }}
                            />
                            
                        </ListItemButton>
                        {open &&
                            data.map((item) => (
                                <ListItemButton
                                    sx={{
                                        bgcolor: open ? 'white' : 'blue',
                                        py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)'}}
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


                </Grid>

                </Grid>
                <Button className={classes.linkBtn} style={{ textTransform: "capitalize", height: "45px" }}>
                    <span className={classes.quick} ><LinkOffSharpIcon /></span>Quick Links</Button>
                <Button style={{ color: "gray", textTransform: "capitalize", backgroundColor: " #e6ffe6", border: "5px solid white", maxHeight:"48px" }}>
                    <span className={classes.quick}><CalendarMonthOutlinedIcon /></span>
                    Daily Standup Meeting ...
                    {/* <StandUpCalendar/> */}
                </Button>

            </Grid>


        </Grid>
    );
};

export default SearchPart;

/*
                    <Button
                        id="fade-button"
                        aria-controls={openOn ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openOn ? 'true' : undefined}
                        onClick={handleClick}
                        className={classes.create}
                        sx={{ textTransform: "capitalize", }}
                    >
                        <span className={classes.plus}><LocalHospitalIcon /></span>
                        Create New
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={openOn}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                        className={classes.menu}
                    >

                        <MenuItem onClick={handleClose}>
                            <div onClick={handleClickToOpen}>
                                <img src={folder} alt="folder" className={classes.menuImage} /> Folders
                            </div>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>{"Create New Folder"}</DialogTitle>
                                <DialogContent>
                                   
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="" variant="outlined" />

                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleToClose}
                                        color="primary" autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <div onClick={handleClickToOpen}>
                                <img src={word} alt="folder" className={classes.menuImage} /> Word
                            </div>
                            <Dialog open={open} onClose={handleToClose}>
                                <DialogTitle>{"Create New Folder"}</DialogTitle>
                                <DialogContent>
                                    
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="" variant="outlined" />

                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleToClose}
                                        color="primary" autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <div onClick={handleClickToOpen}>
                                <img src={excel} alt="folder" className={classes.menuImage} /> Excel
                            </div>
                            <Dialog open={open} onClose={handleToClose}>
                                <DialogTitle>{"Create New Folder"}</DialogTitle>
                                <DialogContent>
                                  
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="" variant="outlined" />

                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleToClose}
                                        color="primary" autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div onClick={handleClickToOpen}>
                                <img src={pdf} alt="folder" className={classes.menuImage} /> Pdf
                            </div>
                            <Dialog open={open} onClose={handleToClose}>
                                <DialogTitle>{"Create New Folder"}</DialogTitle>
                                <DialogContent>                                
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="" variant="outlined" />

                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleToClose}
                                        color="primary" autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </MenuItem>
                       
                            {/* <MenuItem onClick={handleClose}>
                                <Button onClick={handleClickToOpen}>
                                    <img src={ppt} alt="folder" className={classes.menuImage} /> Ppt
                                </Button>
                                <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                fullWidth
                                maxWidth="sm"
                            >
                                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                                    <Typography > Create New Folder</Typography>
                                </BootstrapDialogTitle>
                                <DialogContent dividers>
                                        <form >
                                            <Grid>
                                                <div>
                                                    <input type="text" placeholder='.' />
                                                </div>
                                                <input type="button" value="Submit" onClick={handleFormSubmit} />
                                            </Grid>
                                        </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose} style={{ marginRight: "15px" }}>
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </BootstrapDialog>
                            </MenuItem> 

                       
                    </Menu>
                */
                
