import React, { useCallback, useState } from 'react'
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
//import AccountCircle from "@mui/icons-material/AccountCircle";
//import MailIcon from "@mui/icons-material/Mail";
import { Container, Grid } from "@mui/material";
import MailIcon from '@mui/icons-material/EmailOutlined';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { StyledAppBar } from "./Styles";
import logo from "../../Assets/Images/logo_white.svg";
import teams from "../../Assets/Images/tq2.svg";
import outlookIcon from "../../Assets/Images/tq3.svg";
import { useGetUnReadMailsQuery } from '../../services/APIs';
import userimg from "../../Assets/Images/userimg.svg";
import birthday from "../../Assets/Images/birthday.svg";
import temp from "../../Assets/Images/temp.svg";
import teamm from "../../Assets/Images/teamm.svg";
import calendarWhite from "../../Assets/Images/calendarWhite.svg";
import onenote from "../../Assets/Images/onenote.svg";
import WeatherMap from './WeatherMap';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Weather from '../Weather';
import Calendar from 'react-calendar';
import ToggleButton from './ToggleButton';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    width: "22%",
    marginRight: "12em",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface type {
  onClose: () => void;
}

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const { data, error, isLoading } =   useGetUnReadMailsQuery('') 
  //   console.log(data,'ttttttttt')
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };


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
  const [value, setValue] = useState();

  const onChange = useCallback(
    (value: any) => {
      setValue(value);
    },
    [setValue],
  );

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event: any) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };
  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     {/* <MenuItem onClick={handleMenuClose}>{app.currentUser?.displayName}</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>{app.currentUser?.email}</MenuItem> */}
  //     {/* <MenuItem onClick={app.signOut!}>Sign Out</MenuItem> */}
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <a target={"_blank"} href="https://outlook.office.com/mail/inbox">
  //         <IconButton
  //           size="large"
  //           aria-label="show 4 new mails"
  //           color="inherit"
  //         >
  //           <Badge badgeContent={data.length} color="error">
  //             <img src={outlookIcon} alt="Outlook" />
  //           </Badge>
  //         </IconButton>
  //       </a>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  // <MenuItem onClick={handleProfileMenuOpen}>
  //   <IconButton
  //     size="large"
  //     aria-label="account of current user"
  //     aria-controls="primary-search-account-menu"
  //     aria-haspopup="true"
  //     color="inherit"
  //   >
  //     <AccountCircle />
  //   </IconButton>
  //   <p>Profile</p>
  // </MenuItem>;
  return (
    // <AuthenticatedTemplate>
    //   <Box sx={{ flexGrow: 1 }}>
    //     <StyledAppBar position="static">
    //       <Container>
    //         <Toolbar variant="dense" sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}>
    //           <RouterNavLink to="/Home" >
    //             <img src={logo} alt="Remo Digital" />
    //           </RouterNavLink>
    //           <Typography
    //             variant="h6"
    //             noWrap
    //             component="div"
    //             sx={{ display: { xs: "none", sm: "block" } }}
    //           >

    //           </Typography>
    //           <Box sx={{ flexGrow: 1 }} />
    //           <Search>
    //             <SearchIconWrapper>
    //               <SearchIcon sx={{ color: "rgb(255 255 255 / 42%)" }} />
    //             </SearchIconWrapper>
    //             <StyledInputBase
    //               placeholder="Search…"
    //               inputProps={{ "aria-label": "search" }}
    //             />
    //           </Search>

    //           <Box sx={{ display: { xs: "none", md: "flex" } }}>
    //             <a
    //               target={"_blank"}
    //               href="https://outlook.office.com/mail/inbox"
    //             >
    //               <IconButton
    //                 size="large"
    //                 aria-label="unread mail count"
    //                 color="inherit"
    //               >
    //                 <Badge badgeContent={data.length} color="error" sx={{ top: "3px" }}>
    //                   {/* <MailIcon /> */}
    //                   <img src={outlookIcon} alt="Outlook" />
    //                 </Badge>
    //               </IconButton>
    //             </a>
    //             <IconButton
    //               size="large"
    //               aria-label="show 17 new notifications"
    //               color="inherit"
    //             >
    //               <Badge badgeContent={17} color="error" sx={{ top: "3px" }}>
    //                 <img src={teams} alt="teams" />
    //               </Badge>
    //             </IconButton>

    //             <IconButton sx={{ top: "3px" }}
    //               size="large"
    //               edge="end"
    //               aria-label="account of current user"
    //               aria-controls={menuId}
    //               aria-haspopup="true"
    //               onClick={handleProfileMenuOpen}
    //               color="inherit"
    //             >
    //               {/* <img src={profilePic} alt="pic" style={{ width: "23px", height: "23px", borderRadius: "30px" }} /> */}
    //             </IconButton>
    //           </Box>
    //           <Box sx={{ display: { xs: "flex", md: "none" } }}>
    //             <IconButton
    //               size="large"
    //               aria-label="show more"
    //               aria-controls={mobileMenuId}
    //               aria-haspopup="true"
    //               onClick={handleMobileMenuOpen}
    //               color="inherit"
    //             >
    //               <MoreIcon />
    //             </IconButton>
    //           </Box>
    //         </Toolbar>
    //       </Container>
    //     </StyledAppBar>
    //     {renderMobileMenu}
    //     {renderMenu}
    //   </Box>
    // </AuthenticatedTemplate>
    <AuthenticatedTemplate>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Container>
            <Toolbar
              variant="dense"
              sx={{
                paddingLeft: "0px !important",  
                paddingRight: "0px !important",
              }}>
              <RouterNavLink to="/Home">
                <img src={logo} alt="Remo Digital" />
              </RouterNavLink>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              ></Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "rgb(255 255 255 / 42%)" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Here"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div>
                  <ToggleButton/>
                </div>
                <div style={{marginLeft:"80px"}}>
                  <IconButton
                    size="large"
                    aria-label="unread mail count"
                    color="inherit"
                    onClick={handleClick}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Badge color="error" sx={{ top: "9px" }}>
                      <img src={birthday} alt="" />
                    </Badge>
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Ayesha's birthday Today</MenuItem>
                  </Menu>
                </div>
                <div>
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

                  >
                    <MenuItem onClick={handleOnClose}>
                      {/* <Grid style={{display:"flex" , justifyContent:"space-between", fontSize:"8px"}}>
                      <Grid> Dubai, UAE</Grid>
                      <Grid> Next Prayer</Grid>
                      <Grid>1.00 AED is</Grid>
                    </Grid> */}
                      <Weather />

                    </MenuItem>

                  </Menu>
                </div>

                {/* <div>
                  <IconButton
                    size="small"
                    aria-label="unread mail count"
                    color="inherit"
                    onClick={handleClickOpen}
                  >
                    <Badge color="error" sx={{ top: "3px" }}>
                      <img src={temp} alt=""  />
                    </Badge>
                     <WeatherMap/>
                  </IconButton>
                  
                  <Dialog
                    open={openFirst}
                    onClose={handleOnClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      asjsadjkd
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleOnClose}>Disagree</Button>
                      <Button onClick={handleOnClose} autoFocus>
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog> 

                </div>  */}

                <div style={{ marginTop: "7px" }}>
                  <IconButton
                    size="large"
                    aria-label="unread mail count"
                    color="inherit"
                    onClick={handleClickSecOpen}
                    aria-controls={openSecond ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSecond ? "true" : undefined}
                  >
                    <Badge color="error" sx={{ top: "3px" }}>
                      <img src={calendarWhite} alt="calendar" />
                    </Badge>
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorE3}
                    open={openSecond}
                    onClose={handleSecOnClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}>
                    <MenuItem onClick={handleSecOnClose}>
                      <Calendar
                        onChange={onChange}
                        value={value}
                      />
                    </MenuItem>

                  </Menu>
                </div>

                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                ><a
                  target={"_blank"}
                  href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                ><Badge badgeContent="1" color="error" sx={{ top: "3px" }}>
                      {/* badgeContent={17}  */}
                      <img src={teamm} alt="teams" />
                    </Badge>
                  </a>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="unread mail count"
                  color="inherit"
                >
                  <a
                    target={"_blank"}
                     href="https://outlook.office.com/mail/inbox"
                  >
                  <Badge badgeContent="0" color="error" sx={{ top: "3px" }}>
                    {/* <MailIcon /> */}
                    <img src={outlookIcon} alt="Outlook" />
                  </Badge>
                  </a>
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <a
                    target={"_blank"}
                    // href="https://outlook.office.com/mail/inbox"
                    href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=9199217e-2710-702d-8273-3869284ea20c&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638000473460699608.5e4b27b8-11e3-4083-a0cc-f12e7b6603f2&state=Dcu7DoIwFIDhou_iVjm92MtAHEgMMbigiYatp5REYgMBgvHt7fD9258RQvbJLskghWglDABILaQCZa0CczwFiVyjoYwFQSUYQR14T3vGg0alQPQ8S2-dj1-Xn5fVraFghzl07zn49TEWrmrAVzdV_-zWvZoFuZ3raGMbP0N7Pw3IYcPnZcLSThivWyjNHw"
                  >
                    <Badge color="error" sx={{ top: "3px" }}>
                      <img src={onenote} alt="teams" />
                    </Badge>
                  </a>
                </IconButton>

                <IconButton
                  sx={{ top: "3px" }}
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  color="inherit"
                >
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
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  //   aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  //   onClick={handleMobileMenuOpen}
                  color="inherit"
                  sx={{ top: "9px" }}
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
        {/* {renderMobileMenu}
      {renderMenu} */}
      </Box>
    </AuthenticatedTemplate>
  )
}

export default Header