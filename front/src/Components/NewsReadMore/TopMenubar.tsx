import React from 'react';
import { Link } from 'react-router-dom';
import content from "./../../Assets/Images/content_editor.svg";
import department from "./../../Assets/Images/department.svg";
import home from "./../../Assets/Images/home-remo.svg";
import orgChart from "./../../Assets/Images/orgchart.svg";
import policy from "./../../Assets/Images/polices.svg";
//import quickLinks from "./../../Assets/Images/Quicklinks.svg";
import workspace from "./../../Assets/Images/workspace.svg";
import { useLocation } from 'react-router-dom';
import { useStyles } from './Styles';
import { useState } from 'react';
import { Grid } from '@mui/material';




const TopMenubar = (props:any) => {
    const classes = useStyles();
    const { history } = props;
    const location = useLocation();

   const [id1 , setId1]= useState(0);

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
          to: '/ContentEditor',
        },
        {
          id: 5,
          label: 'Department',
          Icon: department,
          iconHover: department,
          onClick: () => history.push("/departmentContentPage"),
          to: '/departmentContentPage',
    
        },
        {
          id: 6,
          label: "Quick Links",
          // Icon: quickLinks,
          // iconHover: quickLinks,
          onClick: () => history.push("/quickLinks"),
          to: '/quickLinks',
        },
        {
          id: 7,
          label: "Org Chart",
          Icon: orgChart,
          iconHover: orgChart,
          onClick: () => history.push("/quickLinks"),
          to: '/quickLinks',
        },
      ];


    return (
        <div>
           <Grid item xs={9} className={classes.textPart}>
            
            </Grid> 
        </div>
    );
};

export default TopMenubar;