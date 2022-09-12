import React from 'react';
import  MenuItem  from '@mui/material/MenuItem';
import content from "./../../Assets/Images/content_editor.svg";
import department from "./../../Assets/Images/department.svg";
import home from "./../../Assets/Images/home-remo.svg";
import orgChart from "./../../Assets/Images/orgchart.svg";
import policy from "./../../Assets/Images/polices.svg";
import quickLinks from "./../../Assets/Images/Quicklinks.svg";
import workspace from "./../../Assets/Images/workspace.svg";
import  Menu  from '@mui/material/Menu';
import  ListItemButton  from '@mui/material/ListItemButton';
import  ListItemIcon  from '@mui/material/ListItemIcon';
import  ListItemText  from '@mui/material/ListItemText';
import Button  from '@mui/material/Button';

const SideBar = () => {

  const [open, setOpen]  =React.useState(false)
 const sideMenu = [
        { id:1,
          label: 'Home',
          Icon: home,
          to: '/',
        },
        {id:2,
          label: 'WorkSpace',
          Icon: workspace,
          to: '/profile',
        },
        {
            id:3,
          label: 'Policies & Procedure',
          Icon: policy,
          to: '/settings',
          
        },
        {id:4,
            label: 'Content Editor',
            Icon: content,
            to: 'account',
          },
          {
            id:5,
            label: 'Department',
            Icon: department,
            to: 'security',
            
          },
          { id:6,
              label:"Quick Links",
              Icon:quickLinks ,
              to:'quickLinks',
          },
          {
            id:7,
              label:"Org Chart",
              Icon: orgChart,
              to:'quickLinks',
          }
      ];

    return (
        <>
            
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
        </>
    );
};

export default SideBar;