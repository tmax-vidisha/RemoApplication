import React, { useCallback, useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import { AppBar, Container, Grid, Hidden } from "@mui/material";
import MailIcon from "@mui/icons-material/EmailOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { StyledAppBar } from "./Styles";
import logo from "../../Assets/Images/logo_white.svg";
import teams from "../../Assets/Images/tq2.svg";
import outlookIcon from "../../Assets/Images/tq3.svg";
// import { useGetUnReadMailsQuery } from '../../services/APIs';
import userimg from "../../Assets/Images/userimg.svg";
import birthday from "../../Assets/Images/birthday.svg";
import temp from "../../Assets/Images/temp.svg";
import teamm from "../../Assets/Images/teamm.svg";
import calendarWhite from "../../Assets/Images/calendarWhite.svg";
import onenote from "../../Assets/Images/onenote.svg";
// import WeatherMap from "./WeatherMap";
import Backdrop from "@mui/material/Backdrop";
import { Box, Paper, IconButton } from "@mui/material";
import ToggleButton from "../ToggleButton";
import account from "../../Assets/Images/accountNew.svg";
import banner from "../../Assets/Images/bannerviewNew.svg";
import admin from "../../Assets/Images/adminNew.svg";
import signOut from "../../Assets/Images/signoutNew.svg";
import { useStyles } from "./Styles";
// import SubCalendar from "./../Events/SubCalendar";
import { Calendar } from "react-calendar";
import SearchBar from "../SearchBar";
import useCustom from "../../../hooks/useCustom";
import { useGetAllUnReadMailsQuery } from "../../../services/graph";
import { WeatherPage } from "../../../Pages";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface type {
  onClose: () => void;
}

const ToggleHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { token } = useCustom();
  const { data, error, isLoading } = useGetAllUnReadMailsQuery(token);
  // console.log(data,'UnReadCount')
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    [setValue]
  );

  const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null);
  const open5 = Boolean(anchorEl5);
  const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  return (
    <AuthenticatedTemplate>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbarDiv}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <div>
                <RouterNavLink to="/Home">
                  <img src={logo} alt="Remo Digital" />
                </RouterNavLink>
              </div>
              <div style={{ marginLeft: "80px" }}>
                <SearchBar />
              </div>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex", marginLeft: "80px" },
              }}
            >
              <div>
                <ToggleButton />
              </div>
              <div style={{ marginLeft: "50px" }}>
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
                  PaperProps={{
                    style: {
                      marginTop: 15,
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    Ayesha's birthday Today
                  </MenuItem>
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
                  PaperProps={{
                    style: {
                      width: 350,
                      height: 150,
                      overflow: "Hidden",
                    },
                  }}
                >
                  <CloseIcon
                    onClick={handleOnClose}
                    style={{
                      width: "20px",
                      marginRight: "-270px",
                      cursor: "pointer",
                    }}
                  />
                  <MenuItem>
                    <WeatherPage />
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
                  <Badge
                    sx={{
                      top: "3px",
                    }}
                  >
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
                  }}
                  PaperProps={{
                    style: {
                      marginTop: 8,
                      width: 300,
                    },
                  }}
                >
                  <MenuItem onClick={handleSecOnClose}>
                    <Calendar onChange={onChange} value={value} />
                    {/* <SubCalendar/> */}
                  </MenuItem>
                </Menu>
              </div>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                >
                  <Badge
                    badgeContent="1"
                    color="error"
                    sx={{
                      top: "3px",
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#009BAD",
                      },
                    }}
                  >
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
                  rel="noreferrer"
                  href="https://outlook.office.com/mail/inbox"
                >
                  <Badge
                    badgeContent={data?.response?.unreadItemCount}
                    color="error"
                    sx={{
                      top: "3px",
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#009BAD",
                      },
                    }}
                  >
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
                  rel="noreferrer"
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
                color="inherit"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick5}
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
              <Menu
                id="basic-menu"
                anchorEl={anchorEl5}
                open={open5}
                onClose={handleClose5}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    marginTop: -2,
                  },
                }}
              >
                <Box>
                  <Grid style={{ color: "#009BAD", fontSize: "13px" }}>
                    Mohammed{" "}
                  </Grid>
                  <Grid style={{ fontSize: "12px" }}>mohammedB@tmax.in</Grid>
                </Box>

                <MenuItem onClick={handleClose5} className={classes.profile}>
                  <img src={account} alt="account" /> Manage your account
                </MenuItem>
                <MenuItem onClick={handleClose5} className={classes.profile}>
                  <img src={admin} alt="account" />
                  Admin
                </MenuItem>
                <MenuItem onClick={handleClose5} className={classes.profile}>
                  <img src={banner} alt="account" />
                  Display on your banner view
                </MenuItem>
                <MenuItem onClick={handleClose5} className={classes.profile}>
                  <img src={signOut} alt="account" />
                  SignOut
                </MenuItem>
              </Menu>
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
        </AppBar>
      </Box>
    </AuthenticatedTemplate>
  );
};

export default ToggleHeader;
