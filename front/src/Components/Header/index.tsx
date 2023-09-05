import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import {
  Container,
  Grid,
  Hidden,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import MailIcon from "@mui/icons-material/EmailOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { AuthenticatedTemplate } from "@azure/msal-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { StyledAppBar } from "./Styles";
import logo from "../../Assets/Images/logo_white.svg";
import teams from "../../Assets/Images/tq2.svg";
import outlookIcon from "../../Assets/Images/tq3.svg";
// import { useGetUnReadMailsQuery } from '../../services/APIs';
import userimg from "../../Assets/Images/userimg.svg";
import birthday from "../../Assets/Images/birthday.svg";
import bdayIcon from "../../Assets/Images/bdayIcon.svg";
import temp from "../../Assets/Images/temp.svg";
import teamm from "../../Assets/Images/teamm.svg";
import calendarWhite from "../../Assets/Images/calendarWhite.svg";
import onenote from "../../Assets/Images/onenote.svg";
import WeatherMap from "./WeatherMap";
import Backdrop from "@mui/material/Backdrop";
import { Box, Paper, IconButton } from "@mui/material";
import ToggleButton from "./ToggleButton";
import account from "../../Assets/Images/accountNew.svg";
import banner from "../../Assets/Images/bannerviewNew.svg";
import admin from "../../Assets/Images/adminNew.svg";
import signOut from "../../Assets/Images/signoutNew.svg";
import { useStyles } from "./Styles";
import SubCalendar from "../Events/SubCalendar";
import { Calendar } from "react-calendar";
import { WeatherPage } from "../../Pages";
import close from "../../Assets/Images/close.svg";

import SearchBar from "./SearchBar";

import {
  useGetAllUnReadMailsQuery,
  useGetAllUnReadMeetingsQuery,
  useGetAllUserInfoQuery,
} from "../../services/graph";
import useCustom from "../../hooks/useCustom";
import moment from "moment";
import SearchComponent from "./SearchComponent";
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
interface IFolderProps {
  data: any;
  error: any;
  isLoading: any;
  CountData: any;
  CountError: any;
  CountLoading: any;
  UserData: any;
  UserError: any;
  UserLoading: any;
  EmpData: any;
  EmpSuccess: any;
  EmpLoading: any;
}
// const Header = () => {
const Header: React.FC<IFolderProps> = (props: IFolderProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const {
    data,
    error,
    isLoading,
    CountData,
    CountError,
    CountLoading,
    UserData,
    UserError,
    UserLoading,
    EmpData,
    EmpSuccess,
    EmpLoading,
  } = props;
  const { token } = useCustom();
  //@ts-ignore

  // const { data, error, isLoading } = useGetAllUnReadMailsQuery(token)
  // const { data:CountData, error:CountError, isLoading:CountLoading } = useGetAllUnReadMeetingsQuery(token)
  // const { data:UserData, error:UserError, isLoading:UserLoading } = useGetAllUserInfoQuery(token)

  console.log(EmpData?.response, "EmpInfo");
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [userData, setUserdata] = useState<any>([]);
  let CurrentDate: any = moment(new Date()).format("DD-MM");
  console.log(CurrentDate, "Date");
  const handleToggle = () => {
    setOpen1((prevOpen) => !prevOpen);
    Object.freeze(EmpData?.response);
    const arrCopy = [...EmpData?.response];

    // const rr = arrCopy.filter((movie: any) => moment(movie.fields.DOB).format("DD-MM") === CurrentDate).map((i: any) => {return i.fields.Name})
    // console.log(rr,'yyyyy')
    setUserdata(
      arrCopy
        .filter(
          (movie: any) =>
            moment(movie.fields.DOB).format("DD-MM") === CurrentDate
        )
        .map((i: any) => {
          return i.fields.Name;
        })
    );
    console.log(userData, "kkkkrtuyytryhtyr");
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
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
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    } else if (event.key === "Escape") {
      setOpen1(false);
    }
  }
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open1);
  React.useEffect(() => {
    if (prevOpen.current === true && open1 === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open1;
  }, [open1]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [birthdayName, setBirthdayName] = useState<string[]>([]);
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
  const [anchorEl0, setAnchorEl0] = React.useState<null | HTMLElement>(null);
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
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.menu}
    >
      <MenuItem>
        <IconButton
          ref={anchorRef}
          id="composition-button"
          size="large"
          aria-label="unread mail count"
          color="inherit"
          aria-controls={open1 ? "composition-menu" : undefined}
          aria-expanded={open1 ? "true" : undefined}
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
          style={{ paddingLeft: "825px" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open1}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{ padding: "0px" }}
                  >
                    {userData.length > 0 ? (
                      userData.map((i: any) => {
                        return (
                          <>
                            <MenuItem
                              onClick={handleClose}
                              className={classes.bdayText}
                            >
                              <List style={{ padding: "0px !important" }}>
                                <ListItem
                                  style={{
                                    padding: "0px !important",
                                    margin: "0px",
                                  }}
                                >
                                  <ListItemAvatar>
                                    <img src={bdayIcon} alt="" />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={`${i} birthday today!!!`}
                                    secondary="Lets wish!"
                                    primaryTypographyProps={{
                                      fontSize: "12px",
                                      color: "gray !important",
                                    }}
                                    secondaryTypographyProps={{
                                      fontSize: "12px",
                                      color: "#009BAD !important",
                                    }}
                                  />
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
                        );
                      })
                    ) : (
                      <MenuItem
                        onClick={handleClose}
                        className={classes.bdayText}
                      >
                        No Birthday Today
                      </MenuItem>
                    )}
                    {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>My account</MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </MenuItem>
      <MenuItem>
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
          }}
        >
          <img
            src={close}
            alt=""
            onClick={handleOnClose}
            style={{
              width: "15px",
              marginRight: "-290px",
              cursor: "pointer",
            }}
          />
          <MenuItem>
            <WeatherPage />
          </MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem>
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
            rel="noreferrer"
            target="_blank"
            //href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
            href="https://outlook.office.com/calendar/view/month"
          >
            <img src={calendarWhite} alt="calendar" />
          </a>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://teams.microsoft.com/_?culture=en-in&country=in"
          >
            <Badge
              badgeContent={CountData?.response.length}
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
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="unread mail count" color="inherit">
          <a
            rel="noreferrer"
            target={"_blank"}
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
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.onenote.com/signin?showHrd=true&wdorigin=poc&culture=en-in&country=IN"
          >
            <Badge color="error" sx={{ top: "3px" }}>
              <img src={onenote} alt="teams" />
            </Badge>
          </a>
        </IconButton>
      </MenuItem>
      <MenuItem>
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
              {UserData?.response?.name}
            </Grid>
            <Grid style={{ fontSize: "12px" }}>
              {UserData?.response?.email}
            </Grid>
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
      </MenuItem>
    </Menu>
  );

  // useEffect(() => {
  //     if(EmpLoading){
  //       <>Loading</>
  //     }
  //     else if(EmpSuccess){
  //     Object.freeze(EmpData?.response);
  //     const arrCopy = [...EmpData?.response];
  //     // setUserdata(arrCopy)
  //     const EmpN =arrCopy.filter((movie: any) => moment(movie.fields.DOB).format("DD-MM") === CurrentDate).map((i: any) => {
  //       return i.fields.Name
  //     })
  //     setBirthdayName(EmpN)
  //   }
  //     // console.log(birthdayName, 'ggggggeeeeeeeee')
  //     // if (birthdayName.length > 0) {
  //     //   console.log('Birhdadddy')
  //     //   {
  //     //     birthdayName.map((i: any) => {
  //     //       return console.log(i,'tytryhrthtrhrthsaasass')
  //     //     })
  //     //   }
  //     // } else {
  //     //   console.log('No Birthday')
  //     // }

  //     // console.log(EmpN ,'rgregreg')
  //     //   let modifiedArr = EmpN.map(function(element:any){
  //     //     return element ;

  //     // });

  // }, [])
  //   const  EmpN = EmpData?.response && EmpData?.response?.filter((movie:any) => moment(movie.fields.DOB).format("DD-MM") === CurrentDate).map((i:any)=>{
  //     return i.fields.Name
  //   })
  //   // console.log(EmpN ,'rgregreg')
  //   let modifiedArr = EmpN.map(function(element:any){
  //     return element ;

  // });
  // setBirthdayName(modifiedArr)

  // console.log(modifiedArr,'mm')
  return (
    <AuthenticatedTemplate>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbarDiv}>
            <div>
              <RouterNavLink to="/">
                <img src={logo} alt="Remo Digital" />
              </RouterNavLink>
            </div>
            <div className={classes.ml80pt20}>
              <SearchBar />
              {/* <SearchComponent /> */}
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <div className={classes.pl50}>
                {/* <IconButton
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
                        marginTop: 15
                      },
                    }}

                  >

                  
                    {birthdayName.length > 0 ? (
                    birthdayName.map((i: any) => {
                      console.log(i,'kkkkkkkkkkkk')
                      return <MenuItem onClick={handleClose}>{i}'s birthday Today</MenuItem>
                    })
                  ) : (
                    <MenuItem onClick={handleClose}>No birthday Today</MenuItem>
                  )}
                  </Menu> */}
                <IconButton
                  ref={anchorRef}
                  id="composition-button"
                  size="large"
                  aria-label="unread mail count"
                  color="inherit"
                  aria-controls={open1 ? "composition-menu" : undefined}
                  aria-expanded={open1 ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Badge color="error" sx={{ top: "4px" }}>
                    <img src={birthday} alt="" className={classes.iconImg} />
                  </Badge>
                </IconButton>
                <Popper
                  open={open1}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                  style={{ paddingLeft: "825px" }}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open1}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                            style={{ padding: "0px" }}
                          >
                            {userData.length > 0 ? (
                              userData.map((i: any) => {
                                return (
                                  <>
                                    <MenuItem
                                      onClick={handleClose}
                                      className={classes.bdayText}
                                    >
                                      <List
                                        style={{ padding: "0px !important" }}
                                      >
                                        <ListItem
                                          style={{
                                            padding: "0px !important",
                                            margin: "0px",
                                          }}
                                        >
                                          <ListItemAvatar>
                                            <img src={bdayIcon} alt="" />
                                          </ListItemAvatar>
                                          <ListItemText
                                            primary={`${i} birthday today!!!`}
                                            secondary="Lets wish!"
                                            primaryTypographyProps={{
                                              fontSize: "12px",
                                              color: "gray !important",
                                            }}
                                            secondaryTypographyProps={{
                                              fontSize: "12px",
                                              color: "#009BAD !important",
                                            }}
                                          />
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
                                );
                              })
                            ) : (
                              <MenuItem
                                onClick={handleClose}
                                className={classes.bdayText}
                              >
                                No Birthday Today
                              </MenuItem>
                            )}
                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>My account</MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
                {/* {EmpData?.response && EmpData?.response?.filter((movie:any) => moment(movie.fields.DOB).format("DD-MM") === CurrentDate).map((i:any)=>{
                        //  return <MenuItem onClick={handleClose}></MenuItem>
                          // return  console.log(i.fields.Name)
                          if( i?.fields.Name !== undefined ){
                            return <MenuItem onClick={handleClose}>{i.fields.Name}'s birthday Today</MenuItem>
                            // console.log("Birthday")
                          }else {
                              return <MenuItem onClick={handleClose}>No birthday Today</MenuItem>
                            // console.log(" No Birthday")
                          }
                          // if(i.length >0) {
                          //   return true
                          // }
                          
                        //  return <MenuItem onClick={handleClose}>{i.fields.Name}</MenuItem>
            })} */}
              </div>
              <div style={{ paddingTop: "10px" }}>
                <IconButton
                  size="large"
                  aria-label="unread mail count"
                  color="inherit"
                  onClick={handleClickOpen}
                  aria-controls={openFirst ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openFirst ? "true" : undefined}
                >
                  <Badge color="error">
                    <img src={temp} alt="" className={classes.iconImg} />
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
                  }}
                >
                  <img
                    src={close}
                    alt=""
                    onClick={handleOnClose}
                    style={{
                      width: "15px",
                      marginRight: "-290px",
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
              <div style={{ paddingTop: "6px" }}>
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
                    rel="noreferrer"
                    target="_blank"
                    //href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                    href="https://outlook.office.com/calendar/view/month"
                  >
                    <img
                      src={calendarWhite}
                      alt="calendar"
                      className={classes.calendarImg}
                    />
                  </a>
                </IconButton>
                {/* <Menu
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
                        width: 300
                      },
                    }}
                  >
                    <MenuItem onClick={handleSecOnClose}>
                      <Calendar
                        onChange={onChange}
                        value={value}
                      />
                    </MenuItem>
                  </Menu> */}
              </div>
              <div>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://teams.microsoft.com/_?culture=en-in&country=in"
                    //href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                    //href="https://teams.microsoft.com/_?culture=en-in&country=in#/conversations/19:meeting_NzdhM2FkNDMtOWU1ZC00NzVhLTgxZmEtYzA0ZjU4YjBhYTkz@thread.v2?ctx=chat"
                  >
                    <Badge
                      badgeContent={CountData?.response.length}
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
              </div>
              <div>
                <IconButton
                  size="large"
                  aria-label="unread mail count"
                  color="inherit"
                >
                  <a
                    rel="noreferrer"
                    target={"_blank"}
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
              </div>
              <div>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    // href="https://login.microsoftonline.com/common/oauth2/authorize?response_mode=form_post&response_type=id_token+code&scope=openid&msafed=0&nonce=3587ee97-ed5e-4e16-bb94-7f1af1203849.638139440948541424&state=https%3a%2f%2fwww.onenote.com%2fnotebooks%3fwdoriginpoc%26auth%3d2%26nf%3d1&client_id=2d4d3d8e-2be3-4bef-9f87-7875a61c29de&redirect_uri=https%3a%2f%2fwww.onenote.com%2fauth%2fsignin"
                    // href="https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app"
                    href="https://www.onenote.com/signin?showHrd=true&wdorigin=poc&culture=en-in&country=IN"
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
              </div>
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
                    {UserData?.response?.name}
                  </Grid>
                  <Grid style={{ fontSize: "12px" }}>
                    {UserData?.response?.email}
                  </Grid>
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
    </AuthenticatedTemplate>
  );
};

export default Header;
