import React from 'react'
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
import { Container } from "@mui/material";
import MailIcon from '@mui/icons-material/EmailOutlined';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { StyledAppBar } from "./Styles";
import logo from "../../Assets/Images/logo_white.svg";
import teams from "../../Assets/Images/tq2.svg";
import outlookIcon from "../../Assets/Images/tq3.svg";
import { useGetUnReadMailsQuery } from '../../services/APIs';

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
      marginLeft: theme.spacing(3),
      width: "auto",
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
const Header = () => {
    const { data, error, isLoading } =   useGetUnReadMailsQuery('') 
    console.log(data,'ttttttttt')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
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
      {/* <MenuItem onClick={handleMenuClose}>{app.currentUser?.displayName}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{app.currentUser?.email}</MenuItem> */}
      {/* <MenuItem onClick={app.signOut!}>Sign Out</MenuItem> */}
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
    >
      <MenuItem>
        <a target={"_blank"} href="https://outlook.office.com/mail/inbox">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={data.length} color="error">
              <img src={outlookIcon} alt="Outlook" />
            </Badge>
          </IconButton>
        </a>
        <p>Messages</p>
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
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <AuthenticatedTemplate>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Container>
            <Toolbar variant="dense" sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}>
              <RouterNavLink to="/Home" >
                <img src={logo} alt="Remo Digital" />
              </RouterNavLink>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >

              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "rgb(255 255 255 / 42%)" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <a
                  target={"_blank"}
                  href="https://outlook.office.com/mail/inbox"
                >
                  <IconButton
                    size="large"
                    aria-label="unread mail count"
                    color="inherit"
                  >
                    <Badge badgeContent={data.length} color="error" sx={{ top: "3px" }}>
                      {/* <MailIcon /> */}
                      <img src={outlookIcon} alt="Outlook" />
                    </Badge>
                  </IconButton>
                </a>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error" sx={{ top: "3px" }}>
                    <img src={teams} alt="teams" />
                  </Badge>
                </IconButton>

                <IconButton sx={{ top: "3px" }}
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {/* <img src={profilePic} alt="pic" style={{ width: "23px", height: "23px", borderRadius: "30px" }} /> */}
                </IconButton>
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
          </Container>
        </StyledAppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </AuthenticatedTemplate>
  )
}

export default Header