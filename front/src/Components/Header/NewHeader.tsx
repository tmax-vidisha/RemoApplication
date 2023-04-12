import React, { useCallback, useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useStyles } from './Styles';
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo_white.svg";
import userimg from "../../Assets/Images/userimg.svg";
import birthday from "../../Assets/Images/birthday.svg";
import bdayIcon from "../../Assets/Images/bdayIcon.svg";
import temp from "../../Assets/Images/temp.svg";
import teamm from "../../Assets/Images/teamm.svg";
import calendarWhite from "../../Assets/Images/calendarWhite.svg";
import onenote from "../../Assets/Images/onenote.svg";
import { Popper, Paper, ClickAwayListener, MenuList, List, Grow, ListItem, ListItemAvatar, ListItemText, Grid } from '@mui/material';
import useCustom from '../../hooks/useCustom';
import moment from 'moment';
import { WeatherPage } from '../../Pages';
import close from "../../Assets/Images/close.svg";
import outlookIcon from "../../Assets/Images/tq3.svg";
import account from '../../Assets/Images/accountNew.svg';
import banner from '../../Assets/Images/bannerviewNew.svg';
import admin from '../../Assets/Images/adminNew.svg';
import signOut from '../../Assets/Images/signoutNew.svg';

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
            width: '30ch',
        },
    },
}));

interface type {
    onClose: () => void;
}
interface IFolderProps {
    data: any,
    error: any,
    isLoading: any,
    CountData: any,
    CountError: any,
    CountLoading: any,
    UserData: any,
    UserError: any,
    UserLoading: any,
    EmpData: any,
    EmpSuccess: any,
    EmpLoading: any
}

const NewHeader: React.FC<IFolderProps> = (props: IFolderProps) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const classes = useStyles();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { data, error, isLoading, CountData, CountError, CountLoading, UserData, UserError, UserLoading, EmpData, EmpSuccess, EmpLoading } = props

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const [open1, setOpen1] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [userData, setUserdata] = useState<any>([]);
    let CurrentDate: any = moment(new Date()).format("DD-MM");
    console.log(CurrentDate, "Date")
    const handleToggle = () => {
        setOpen1((prevOpen) => !prevOpen);
        Object.freeze(EmpData?.response);
        const arrCopy = [...EmpData?.response];

        // const rr = arrCopy.filter((movie: any) => moment(movie.fields.DOB).format("DD-MM") === CurrentDate).map((i: any) => {return i.fields.Name})
        // console.log(rr,'yyyyy')
        setUserdata(arrCopy.filter((movie: any) => moment(movie.fields.DOB).format("DD-MM") === CurrentDate).map((i: any) => {
            return i.fields.Name
        }))
        console.log(userData, 'kkkkrtuyytryhtyr')
    };
    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen1(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen1(false);
        } else if (event.key === 'Escape') {
            setOpen1(false);
        }
    }
    const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);

    const openFirst = Boolean(anchorE2);

    const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorE2(event.currentTarget);
    };
    const handleOnClose = () => {
        setAnchorE2(null);
    };
    const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
    const openSecond = Boolean(anchorE3);

    const handleClickSecOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorE3(event.currentTarget);
    };
    const handleSecOnClose = () => {
        setAnchorE3(null);
    };
    const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null);
    const open5 = Boolean(anchorEl5);
    const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl5(event.currentTarget);
    };
    const handleClose5 = () => {
        setAnchorEl5(null);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    size="large"
                    aria-label="unread mail count"
                    color="inherit"
                    aria-controls={open1 ? 'composition-menu' : undefined}
                    aria-expanded={open1 ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}>
                    <Badge color="error" sx={{ top: "9px" }}>
                        <img src={birthday} alt="" />
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className={classes.header}>
                <Toolbar
                    sx={{
                        justifyContent: "space-between"
                    }}>
                    <RouterNavLink to="/">
                        <img src={logo} alt="Remo Digital" />
                    </RouterNavLink>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search here…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            ref={anchorRef}
                            id="composition-button"
                            size="large"
                            aria-label="unread mail count"
                            color="inherit"
                            aria-controls={open1 ? 'composition-menu' : undefined}
                            aria-expanded={open1 ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <Badge color="error" sx={{ top: "9px" }}>
                                <img src={birthday} alt="" />
                            </Badge>
                        </IconButton>
                        <Popper
                            open={open1}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open1}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                                style={{ marginTop: "14px", padding: "0px" }}
                                            >
                                                {userData.length > 0 ? userData.map((i: any) => {
                                                    return (
                                                        <>
                                                            <MenuItem onClick={handleClose} className={classes.bdayText}>
                                                                <List style={{ padding: "0px !important" }}>
                                                                    <ListItem style={{ padding: "0px !important", margin: "0px" }}>
                                                                        <ListItemAvatar>
                                                                            <img src={bdayIcon} alt="" />
                                                                        </ListItemAvatar>
                                                                        <ListItemText
                                                                            primary={`${i} birthday today!!!`} secondary="Lets wish!"
                                                                            primaryTypographyProps={{
                                                                                fontSize: '12px',
                                                                                color: "gray !important",
                                                                            }}
                                                                            secondaryTypographyProps={{
                                                                                fontSize: '12px',
                                                                                color: "#009BAD !important",
                                                                            }} />
                                                                    </ListItem>
                                                                </List>
                                                                {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div>
                                          <img src={bdayIcon} alt="" />
                                        </div>
                                        <div>
                                          <p>{i} birthday today!!!</p>
                                          <p className={classes.wish}>Lets wish!</p>
                                        </div>
                                      </div> */}
                                                            </MenuItem>

                                                        </>
                                                    )
                                                }) : <MenuItem onClick={handleClose} className={classes.bdayText}>No Birthday Today</MenuItem>}
                                                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>My account</MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <IconButton
                            size="large"
                            aria-label="unread mail count"
                            color="inherit"
                            onClick={handleClickOpen}
                            aria-controls={openFirst ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openFirst ? "true" : undefined}
                        >
                            <Badge color="error" sx={{ top: "9px" }}>
                                <img src={temp} alt="" />
                            </Badge>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorE2}
                            open={openFirst}
                            onClose={handleOnClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            style={{ paddingTop: "8px", marginTop: "15px" }}
                            PaperProps={{
                                style: {
                                    width: 350,
                                    height: 150,
                                    overflow: "Hidden",
                                },
                            }} >
                            <img src={close} alt="" onClick={handleOnClose} style={{ width: "15px", marginRight: "-290px", cursor: "pointer" }} />
                            <MenuItem>
                                <WeatherPage />
                            </MenuItem>
                        </Menu>
                        <div style={{ paddingTop: "10px" }}>
                            <IconButton
                                size="large"
                                aria-label="unread mail count"
                                color="inherit"
                                onClick={handleClickSecOpen}
                                aria-controls={openSecond ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={openSecond ? "true" : undefined}
                            >
                                <a
                                    target={"_blank"}
                                    //href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                                    href="https://outlook.office.com/calendar/view/month"
                                >
                                    <img src={calendarWhite} alt="calendar" />
                                </a>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"><a
                                target={"_blank"}
                                href="https://teams.microsoft.com/_?culture=en-in&country=in"
                            //href="https://www.onenote.com/signin?showHrd=true&wdorigin=poc&culture=en-in&country=IN"
                            //href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                            //href="https://teams.microsoft.com/_?culture=en-in&country=in#/conversations/19:meeting_NzdhM2FkNDMtOWU1ZC00NzVhLTgxZmEtYzA0ZjU4YjBhYTkz@thread.v2?ctx=chat"
                            >
                                    <Badge badgeContent={CountData?.response.length} color="error" sx={{
                                        top: "3px",
                                        "& .MuiBadge-badge": {
                                            color: "white",
                                            backgroundColor: "#009BAD"
                                        }
                                    }}>
                                        <img src={teamm} alt="teams" />
                                    </Badge>
                                </a>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="unread mail count"
                                color="inherit">
                                <a
                                    target={"_blank"}
                                    href="https://outlook.office.com/mail/inbox">
                                    <Badge badgeContent={data?.response?.unreadItemCount} color="error" sx={{
                                        top: "3px",
                                        "& .MuiBadge-badge": {
                                            color: "white",
                                            backgroundColor: "#009BAD"
                                        }
                                    }}>
                                        <img src={outlookIcon} alt="Outlook" />
                                    </Badge>
                                </a>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit">
                                <a
                                    target={"_blank"}
                                    href="https://myaccount.microsoft.com/?ref=MeControl"
                                //href="https://login.microsoftonline.com/common/oauth2/logout?ui_locales=en-US&mkt=en-US&ru=https%3A%2F%2Finc-onenote.officeapps.live.com%2Fo%2Fonenoteframe.aspx%3Fui%3Den%252DUS%26rs%3Den%252DUS%26wopisrc%3Dhttps%253A%252F%252Ftmxin-my.sharepoint.com%252Fpersonal%252Fjahanara_k_tmax_in%252F_vti_bin%252Fwopi.ashx%252Ffolders%252F508c8e64cf5d418486184cb0921a6636%26wdorigin%3DSharepoint%26wdenableroaming%3D1%26wdfr%3D1%26mscc%3D1%26wdodb%3D1%26hid%3D83FBA1A0-C09B-2000-219C-C86DF414FC9F%26wdhostclicktime%3D1679559448974%26wd%3Dtarget%2528Untitled%2520Section.one%257Ca6be0272-f928-4820-a903-2578f60c9417%252FUntitled%2520Page%257C505df744-5027-4146-8943-9ce139323226%252F%2529%26jsapi%3D1%26jsapiver%3Dv1%26newsession%3D1%26corrid%3D11e33fee-7c63-4510-b606-03d118e4a082%26usid%3D11e33fee-7c63-4510-b606-03d118e4a082%26sftc%3D1%26cac%3D1%26mtf%3D1%26sfp%3D1%26wdredirectionreason%3DForce_SingleStepBoot%26rct%3DNormal%26ctp%3DLeastProtected"
                                //href="https://login.microsoftonline.com/common/oauth2/authorize?response_mode=form_post&response_type=id_token+code&scope=openid&msafed=0&nonce=3587ee97-ed5e-4e16-bb94-7f1af1203849.638139440948541424&state=https%3a%2f%2fwww.onenote.com%2fnotebooks%3fwdoriginpoc%26auth%3d2%26nf%3d1&client_id=2d4d3d8e-2be3-4bef-9f87-7875a61c29de&redirect_uri=https%3a%2f%2fwww.onenote.com%2fauth%2fsignin"
                                // href="https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app"
                                >
                                    <Badge color="error" sx={{ top: "3px" }}>
                                        <img src={onenote} alt="teams" />
                                    </Badge>
                                </a>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton
                                sx={{ top: "3px" }}
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                color="inherit"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick5}>
                                <img
                                    src={userimg}
                                    alt="pic"
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "30px",
                                    }}
                                />
                            </IconButton>
                        </div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl5}
                            open={open5}
                            onClose={handleClose5}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            PaperProps={{
                                style: {
                                    marginTop: -2
                                },
                            }}>
                            <Box>
                                <Grid style={{ color: "#009BAD", fontSize: "13px" }}>{UserData?.response?.name}</Grid>
                                <Grid style={{ fontSize: "12px" }}>{UserData?.response?.email}</Grid>
                            </Box>
                            <MenuItem onClick={handleClose5} className={classes.profile}><img src={account} alt="account" /> Manage your account</MenuItem>
                            <MenuItem onClick={handleClose5} className={classes.profile}><img src={admin} alt="account" />Admin</MenuItem>
                            <MenuItem onClick={handleClose5} className={classes.profile}><img src={banner} alt="account" />Display on your banner view</MenuItem>
                            <MenuItem onClick={handleClose5} className={classes.profile}><img src={signOut} alt="account" />SignOut</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}


export default NewHeader;