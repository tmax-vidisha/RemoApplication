import React, { useState } from 'react';
import { Grid, ListItemText, ListItemIcon, TextField, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useStyles } from './Styles';
import { Link } from 'react-router-dom';
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
import { useUploadFileOneDriveMutation } from '../../services/graph'
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";



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
    { id: 1, icon: <img src={folder} alt="folder" />, label: 'Folders', popup: "Create New Folder" },
    { id: 2, icon: <img src={word} alt="folder" />, label: 'Word', popup: "Create New Document" },
    { id: 3, icon: <img src={excel} alt="folder" />, label: 'Excel', popup: "Create New Excel File" },
    { id: 4, icon: <img src={pdf} alt="folder" />, label: 'PDF', popup: "Create New PDF" },
    { id: 5, icon: <img src={ppt} alt="folder" />, label: 'PPT', popup: "Create New PPT" },

];



const handleOnChange = (label: any) => {
    console.log(label, "all label")

}

// const dataPopup = [
//     { id: 1, popup: "Create New Folder" },
//     { id: 2, popup: "Create New Document" },
//     { id: 3, popup: "Create New Excel File" },
//     { id: 4, popup: "Create New PDF" },
//     { id: 5, popup: "Create New PPT" },
// ]




const SearchPart = (id: any) => {
    const classes = useStyles();
    const [sendItem] = useUploadFileOneDriveMutation();

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

    const [openOne, setOpenOne] = React.useState(false);
    const handleClickOne = (popup: any) => {
        setOpenOne(true);
    };

    const handleCloseOne = () => {
        setOpenOne(false);
    };

    const [text, setText] = useState<string>('');

    const handleOnChange = (e: any) => {
        setText(e.target.value);
        console.log(e.target.value);
    }


    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        const Data = {
            name: text,

        }
        //  console.log(fd)
        await sendItem(Data)
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
        //     title: 'Create Successfully'
        // });


        handleCloseOne();
    }
    const [openDialog2, setDialog2Open] = React.useState(false);
    const [id1, setId1] = React.useState(0);
    const [openTwo, setOpenTwo] = React.useState(false);
    const handleOpenTwo = () => {
        // setDialog2Open(true);
        setOpenTwo(true);
    }
    const handleCloseTwo = () => {
        // setDialog2Open(true);
        setOpenTwo(false);
    }

    const [openThree, setOpenThree] = React.useState(false);
    const handleOpenThree = () => {
        // setDialog2Open(true);
        setOpenThree(true);
    }
    const handleCloseThree = () => {
        // setDialog2Open(true);
        setOpenThree(false);
    }
    //dsfsdf

    const [openFour, setOpenFour] = React.useState(false);

    const handleOpenFour = () => {
        // setDialog2Open(true);
        setOpenFour(true);
    }
    const handleCloseFour = () => {
        // setDialog2Open(true);
        setOpenFour(false);
    }
    const [openFive, setOpenFive] = React.useState(false);
    const handleOpenFive = () => {
        // setDialog2Open(true);
        setOpenFive(true);
    }

    const handleCloseFive = () => {
        // setDialog2Open(true);
        setOpenFive(false);
    }

    const Dialog2 = (open: any) => {

        return (
            <div>
                {/* <Button variant="outlined" onClick={handleClickToOpen}>
                    Open form dialog
                </Button> */}
                {
                    open && data.map((item) => {

                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                                {item.popup}
                            </DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="folder"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Create</Button>
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>

                    })
                }

            </div>
        )
    }
    const [openSix, setOpenSix] = React.useState(false);

    const handleClickOpenSix = () => {
        setOpenSix(true);
    };

    const handleCloseSix = () => {
        setOpenSix(false);
    };

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
                    <Grid style={{ textTransform: "capitalize", borderRadius: "10px", }} className={classes.create}>
                        <Button
                            id="fade-button"
                            aria-controls={openOn ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openOn ? 'true' : undefined}
                            onClick={handleClick}
                            className={classes.create}
                            sx={{ textTransform: "capitalize", backgroundColor: "rgb(50 168 189) !important" }}
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

                            <MenuItem >
                                <div onClick={handleClickOne}>
                                    <img src={folder} alt="folder" className={classes.menuImage} /> Folders
                                </div>
                                <Dialog open={openOne} onClose={handleCloseOne}>
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
                                            <TextField id="outlined-basic" onChange={handleOnChange} variant="outlined" />

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleFormSubmit}
                                            color="primary" autoFocus>
                                            Create
                                        </Button>
                                        <Button onClick={handleCloseOne}
                                            color="primary" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </MenuItem>

                            <MenuItem>
                                <div onClick={handleOpenTwo}>
                                    <img src={word} alt="folder" className={classes.menuImage} /> Word
                                </div>
                                <Dialog open={openTwo} onClose={handleCloseTwo}>
                                    <DialogTitle>{"Create New Word"}</DialogTitle>
                                    <DialogContent>

                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" onChange={handleOnChange} variant="outlined" />

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleFormSubmit}
                                            color="primary" autoFocus>
                                            Create
                                        </Button>
                                        <Button onClick={handleCloseTwo}
                                            color="primary" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </MenuItem>
                            <MenuItem>
                                <div onClick={handleOpenThree}>
                                    <img src={excel} alt="folder" className={classes.menuImage} /> Excel
                                </div>
                                <Dialog open={openThree} onClose={handleCloseThree}>
                                    <DialogTitle>{"Create New Excel"}</DialogTitle>
                                    <DialogContent>

                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" onChange={handleOnChange} variant="outlined" />

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleFormSubmit}
                                            color="primary" autoFocus>
                                            Create
                                        </Button>
                                        <Button onClick={handleCloseThree}
                                            color="primary" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </MenuItem>
                            <MenuItem>
                                <div onClick={handleOpenFour}>
                                    <img src={pdf} alt="folder" className={classes.menuImage} /> Pdf
                                </div>
                                <Dialog open={openFour} onClose={handleCloseFour}>
                                    <DialogTitle>{"Create New PDF"}</DialogTitle>
                                    <DialogContent>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" onChange={handleOnChange} variant="outlined" />

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleFormSubmit}
                                            color="primary" autoFocus>
                                            Create
                                        </Button>
                                        <Button onClick={handleCloseFour}
                                            color="primary" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </MenuItem>
                            <MenuItem>
                                <div onClick={handleOpenFive}>
                                    <img src={ppt} alt="folder" className={classes.menuImage} /> Ppt
                                </div>
                                <Dialog open={openFive} onClose={handleCloseFive}>
                                    <DialogTitle>{"Create New PPT"}</DialogTitle>
                                    <DialogContent>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" onChange={handleOnChange} variant="outlined" />

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleFormSubmit}
                                            color="primary" autoFocus>
                                            Create
                                        </Button>
                                        <Button onClick={handleCloseFive}
                                            color="primary" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>

                <Button className={classes.linkBtn} style={{ textTransform: "capitalize", height: "45px" }} onClick={handleClickOpenSix}>
                    <span className={classes.quick} ><LinkOffSharpIcon /></span>Quick Links</Button>
                <Dialog
                    open={openSix}
                    onClose={handleCloseSix}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Quick Links"}
                    </DialogTitle>
                    <DialogContent>
                        <Grid className={classes.mainPart}>
                            <Box className={classes.boxContent}>
                                <img src={admin} alt="admin" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/AnnoncementInput">IT -Service
                                    </Link></Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={ITService} alt="ITService" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/CEOInput">
                                        Admin
                                    </Link></Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={sales} alt="sales" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/ContentEditor">
                                        Sales
                                    </Link>
                                </Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={vehicle} alt="vehicle" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/AnnouncementReadMore">
                                        Vehicle Request
                                    </Link>

                                </Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={sales} alt="announce" />
                                <Grid component="p" className={classes.texts}>

                                    <Link to="/EventsInput">
                                        Hub
                                    </Link>
                                </Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={ITService} alt="announce" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/ContentEditor">
                                        IT Service
                                    </Link>
                                </Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={admin} alt="announce" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/HeroInput">
                                        Admin
                                    </Link>
                                </Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={sales} alt="announce" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/EmpHighInput">
                                        Hub
                                    </Link> </Grid>
                            </Box>
                            <Box className={classes.boxContent}>
                                <img src={vehicle} alt="announce" />
                                <Grid component="p" className={classes.texts}>
                                    <Link to="/EmpHighInput">
                                        Vehicle Request
                                    </Link> </Grid>
                            </Box>

                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseSix}>Close</Button>
                        <Button onClick={handleCloseSix} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* <Dialog2 open={openDialog2} close={() => setDialog2Open(false)} ></Dialog2> */}
                <Button style={{ color: "gray", textTransform: "capitalize", backgroundColor: " #e6ffe6", border: "5px solid white", maxHeight: "48px" }}>
                    <span className={classes.quick}><CalendarMonthOutlinedIcon /></span>
                    Daily Standup Meeting ...
                    {/* <StandUpCalendar/> */}
                </Button>

            </Grid>


        </Grid >
    );
};

export default SearchPart;

/*
                        <ListItemButton
                            className={classes.createNew}
                            // alignItems="flex-start"
                            onClick={() => setOpen(!open)}
                            sx={{
                                px: 3,
                                pt: 2.5,
                                pb: open ? 0 : 2.5,
                                '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                backgroundColor: "rgb(50 168 189) !important"
                            }}import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

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
                                        py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)'
                                    }}
                                    key={item.id}
                                    onClick={() => handleOnChange(item.id)
                                    }
                                >
                                    <Button 
                                   onClick={handleClickToOpen}
                                    >
                                        
                                        <ListItemIcon sx={{ color: 'inherit' }} >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{ fontSize: 14, color: "#166694", fontWeight: "600" }}
                                        />
                                    </Button>
                                    <Dialog open={open} onClose={handleToClose}>
                                        <DialogTitle>
                                            {item.popup}
                                        </DialogTitle>
                                        <DialogContent>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="folder"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleToClose}>Create</Button>
                                            <Button onClick={handleToClose}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                </ListItemButton>
                            ))}
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