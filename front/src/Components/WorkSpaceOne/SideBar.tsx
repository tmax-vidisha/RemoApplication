import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import content from "./../../Assets/Images/contentELeft.svg";
import department from "./../../Assets/Images/departmentLeft.svg";
import departmentTwo from "./../../Assets/Images/departmentLeft-nav.svg";
import home from "./../../Assets/Images/home-remo.svg";
import orgChart from "./../../Assets/Images/orgchartLeft.svg";
import policy from "./../../Assets/Images/policesLeft.svg";
import quickLinks from "./../../Assets/Images/quicklinksLeft.svg";
import workspace from "./../../Assets/Images/workspaceLeft.svg";
import Menu from '@mui/material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Grid, Box, List, ListItem } from '@mui/material';
import { useStyles } from './Styles';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { Tooltip } from 'office-ui-fabric-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import upload from "../../Assets/Images/uploadWhite.svg";
import menuBlue from "../../Assets/Images/menu-blue.svg";
import setting from "../../Assets/Images/settingWhite.svg";
import { Link } from 'react-router-dom';


const SideBar = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { history } = props;
  const location = useLocation();
  const theme = useTheme();


  const itemsList = [
    {
      id: 1,
      label: 'Home',
      Icon: home,
      iconHover: home,
      onClick: () => history.push("/"),
      to: '/',
    },
    {
      id: 2,
      label: 'WorkSpace',
      Icon: workspace,
      iconHover: workspace,
      onClick: () => history.push("/profile"),
      to: '/profile',
    },
    {
      id: 3,
      label: 'Policies & Procedure',
      Icon: policy,
      iconHover: policy,
      onClick: () => history.push("/settings"),
      to: '/settings',

    },
    {
      id: 4,
      label: 'Content Editor',
      Icon: content,
      iconHover: content,
      onClick: () => history.push("/account"),
      to: '/account',
    },
    {
      id: 5,
      label: 'Department',
      Icon: department,
      iconHover: department,
      onClick: () => history.push("/security"),
      to: '/security',

    },
    {
      id: 6,
      label: "Quick Links",
      Icon: quickLinks,
      iconHover: quickLinks,
      onClick: () => history.push("/quickLinks"),
      to: '/quickLinks',
    },
    {
      id: 7,
      label: "Org Chart",
      Icon: orgChart,
      iconHover: orgChart,
      onClick: () => history.push("/orgChart"),
      to: '/orgChart',
    },
  ];

  const [id1, setId1] = useState(0);

  return (
    <Grid className={classes.sideBar}>
      <Box>
        <Grid aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/">
                  <img src={home} alt="home" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/WorkSpaceOne">
                <img src={workspace} alt="workspace" />
                </Link>     
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/policiesContentPage">
                <img src={policy} alt="policy" />
                </Link>       
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/ContentEditor">
                <img src={content} alt="content" />
                </Link>               
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/departmentContentPage">
                <img src={departmentTwo} alt="department" />
                </Link>       
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/quickContentPage">
                  <img src={quickLinks} alt="quickLinks" />
                </Link>

              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className={classes.sideIcon}>
              <ListItemButton>
                <Link to="/orgChart">
                  <img src={orgChart} alt="orgChart" />
                </Link>

              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        {/* <List className={classes.LeftMenu}>
          {itemsList.map((item: any, id: any, index: any) => {
            const { icon, iconHover, onClick, path } = item;
            console.log(itemsList, "itemsList");

            return (
              <ListItem disableGutters={true} key={id} className="quickLinkIcon" onClick={onClick}>
                {itemsList && (

                  <NavLink end to={path}>
                    <div>

                      <ListItemIcon onClick={() => {setId1(id);}}>

                        {(id1 === id) ? (//activeStar && 

                          <img src={iconHover} alt="icon" />

                        ) : (

                          <img src={icon} alt="icon" />
                        )}

                      </ListItemIcon>




                    </div>
                  </NavLink>


                )}

              </ListItem>
            );

          })}
        </List> */}
        <Grid style={{ marginTop: "210px" }}>
          <List>
            <ListItem>
              <ListItemButton>
                <MoreHorizIcon style={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <img src={upload} alt="upload" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <img src={setting} alt="setting" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Box>

    </Grid>
  );
};

export default SideBar;

/*
{open && sideMenu.map( (item) =>( 
  <ListItemButton
  sx={{
      bgcolor: open ? 'white' : 'blue',
      py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)'
  }}
  key={item.id}
  //onClick={() => handleOnChange(item.id)}
>
  <Button 
//    onClick={() => handleClickOpen(item.id)}
  >
      <ListItemIcon sx={{ color: 'inherit' }} >

          {item.Icon}
      </ListItemIcon>
      <ListItemText
          primary={item.label}
          primaryTypographyProps={{ fontSize: 14, color: "#166694", fontWeight: "600" }}
      />

  </Button>
  </ListItemButton>
))
}

*/