import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import { useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import content from "./../../Assets/Images/content_editor.svg";
import department from "./../../Assets/Images/department.svg";
import home from "./../../Assets/Images/home-remo.svg";
import orgChart from "./../../Assets/Images/orgchart.svg";
import policy from "./../../Assets/Images/polices.svg";
//import quickLinks from "./../../Assets/Images/Quicklinks.svg";
import workspace from "./../../Assets/Images/workspace.svg";


const IconText = (props: any) => {

  const classes = useStyles();
  const { history } = props;
  const location = useLocation();

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
      onClick: () => history.push("/security"),
      to: '/security',

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
  const [id1, setId1] = useState(0);
  return (
    <Grid item xs={9} className={classes.textPart}>
      <Grid style={{ marginLeft: "30px" }}>
        <Link to="/">
          Home
        </Link>
      </Grid>
      <Grid>
        <Link to="/WorkSpaceOne">
          WorkSpace
        </Link>
      </Grid>
      <Grid>
        <Link to="/WorkSpaceOne">
          Policy & Procedure
        </Link>
      </Grid>
      <Grid>
        <Link to="/ContentEditor">
          Content Editor
        </Link>
      </Grid>
      <Grid>Department</Grid>
      <Grid>Quick Links</Grid>
      <Grid>Org Chart</Grid>
      {/* <Grid>
                {itemsList.map((item: any, id: any, index: any) => {
                    const { icon, label, onClick, path } = item;
                    console.log(itemsList, "itemsList icon");

                    return (
                        <Grid key={id}  onClick={onClick}>
                            {itemsList && (

                                <Link to={path}>
                                    <div>

                                        <Grid onClick={() => { setId1(id); }}>

                                            {(id1 === id) ? (//activeStar && 

                                                <Grid style={{color:"blue"}}>{item.label}</Grid>

                                            ) : (
                                                <Grid>{item.label}</Grid>

                                            )}

                                        </Grid>




                                    </div>
                                </Link>


                            )}

                        </Grid>
                    );

                })}
            </Grid> */}
    </Grid>
  );
};

export default IconText;