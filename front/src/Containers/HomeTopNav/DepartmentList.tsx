import { ListItem } from '@mui/material';
import { List } from 'antd';
import React from 'react';
import { useStyles } from './Styles';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const DepartmentList = () => {
    let navigate = useNavigate();
    const classes=useStyles();
    const departmentList = [
        {
          id: 0,
          label: "Home",
          // Icon: home,
          // IconHover: homeHover,
          onClick: () => navigate("/"),
          to: "/",
        },
        {
          id: 1,
          label: "All Menu",
          // Icon: home,
          // IconHover: homeHover,
          onClick: () => navigate("/"),
          to: "/",
        },
        {
          id: 2,
          label: "IT",
          // Icon: home,
          // IconHover: homeHover,
          onClick: () => navigate("/itDepartment"),
          to: "/itDepartment",
        },
        {
          id: 3,
          label: "HR",
          // Icon: home,
          // IconHover: homeHover,
          onClick: () => navigate("hrDepartment"),
          to: "hrDepartment",
        },
      ];
    return (
        <div>
              <List className={classes.topItems} style={{ width: "60%" }}>
                {departmentList.map((item: any, id: any, index: any) => {
                  const { onClick, path } = item;
                  console.log(departmentList, "departmentList");

                  return (
                    <ListItem
                      key={index}
                      onClick={onClick}
                      className={classes.topMenu}
                    >
                      {departmentList && (
                        <NavLink end to={path} className={classes.topLink}>
                          <p className={classes.topText}> {item.label}</p>
                        </NavLink>
                      )}
                    </ListItem>
                  );
                })}
              </List>
        </div>
    );
};

export default DepartmentList;