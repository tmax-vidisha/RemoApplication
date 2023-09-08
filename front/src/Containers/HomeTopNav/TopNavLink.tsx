import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import admin from "./../../Assets/Images/admin.svg";
import adminHover from "./../../Assets/Images/adminHn.svg";
import hub from "./../../Assets/Images/hub.svg";
import hubHover from "./../../Assets/Images/hubHn.svg";
import ITservice from "./../../Assets/Images/ITservice.svg";
import ITserviceHover from "./../../Assets/Images/ITserviceHn.svg";
import sales from "./../../Assets/Images/sales.svg";
import salesHover from "./../../Assets/Images/salesHn.svg";
import vehicle from "./../../Assets/Images/vehicleRequest.svg";
import vehicleH from "./../../Assets/Images/vehicleHn.svg";
import content from "./../../Assets/Images/contentEditor.svg";
import contentHover from "./../../Assets/Images/contentEditorHover.svg";
import department from "./../../Assets/Images/department.svg";
import departmentHover from "./../../Assets/Images/departmentHover.svg";
import home from "./../../Assets/Images/Home.svg";
import homeHover from "./../../Assets/Images/homeHover.svg";
import orgChart from "./../../Assets/Images/orgchart.svg";
import orgChartHover from "./../../Assets/Images/orgChartHover.svg";
import policy from "./../../Assets/Images/policies.svg";
import policyHover from "./../../Assets/Images/policiesHover.svg";
import quickLinks from "./../../Assets/Images/Quicklinks.svg";
import quickLinksHover from "./../../Assets/Images/quickLinksHover.svg";
import workspace from "./../../Assets/Images/workspace.svg";
import workspaceHover from "./../../Assets/Images/workspaceHover.svg";
import { NavLink } from "react-router-dom";
import { useStyles } from "./Styles";
import {
  Box,
  CardContent,
  List,
  ListItem,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface IFolderProps {
  data: any;
  error: any;
  isLoading: any;
  quicklinkdata: any;
  quicklinkerror: any;
  quicklinkisloading: any;
}
// const TopNavLink = () => {
const TopNavLink: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(false);
  const HandleClick = () => setShowResults(true);
  const {
    data,
    error,
    isLoading,
    quicklinkdata,
    quicklinkerror,
    quicklinkisloading,
  } = props;
  console.log(data?.response, "quick link and my link");
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const itemsList = [
    {
      id: 0,
      label: "Home",
      Icon: home,
      IconHover: homeHover,
      onClick: () => navigate("/"),
      to: "/",
    },
    {
      id: 1,
      label: "WorkSpace",
      Icon: workspace,
      IconHover: workspaceHover,
      onClick: () => navigate("/WorkSpaceOne"),
      to: "/WorkSpaceOne",
    },
    {
      id: 2,
      label: "Policies & Procedure",
      Icon: policy,
      IconHover: policyHover,
      onClick: () => navigate("/policiesContentPage"),
      to: "/policiesContentPage",
    },
    {
      id: 3,
      label: "Content Editor",
      Icon: content,
      IconHover: contentHover,
      onClick: () => navigate("/ContentEditor"),
      to: "/ContentEditor",
    },
    {
      id: 4,
      label: "Department",
      Icon: department,
      IconHover: departmentHover,
      // onClick: () => navigate("/departmentContentPage"),
      // to: "/departmentContentPage",
    },
    // {
    //   id: 5,
    //   label: "Quick Links",
    //   Icon: quickLinks,
    //   IconHover: quickLinksHover,
    //   onClick: () => navigate("/quickLinksPage"),
    //   to: "/quickLinksPage",
    // },
    // {
    //   id: 6,
    //   label: "Org Chart",
    //   Icon: orgChart,
    //   IconHover: orgChartHover,
    //   onClick: () => navigate("/orgChart"),
    //   to: "/orgChart",
    // },
  ];

  const myLinkList = [
    {
      id: 0,
      label: "Sales",
      Icon: sales,
      IconHover: salesHover,
      onClick: () => navigate("/"),
      to: "/",
    },
    {
      id: 1,
      label: "Vehicle",
      Icon: vehicle,
      IconHover: vehicleH,
      onClick: () => navigate("/WorkSpaceOne"),
      to: "/WorkSpaceOne",
    },
    {
      id: 2,
      label: "IT service",
      Icon: ITservice,
      IconHover: ITserviceHover,
      onClick: () => navigate("/policiesContentPage"),
      to: "/policiesContentPage",
    },
    {
      id: 3,
      label: "Hub",
      Icon: hub,
      IconHover: hubHover,
      onClick: () => navigate("/ContentEditor"),
      to: "/ContentEditor",
    },
    {
      id: 4,
      label: "Admin",
      Icon: admin,
      IconHover: adminHover,
      onClick: () => navigate("/departmentContentPage"),
      to: "/departmentContentPage",
    },
  ];
  const departmentList = [
    // {
    //   id: 0,
    //   label: "Home",
    //   // Icon: home,
    //   // IconHover: homeHover,
    //   onClick: () => navigate("/"),
    //   to: "/",
    // },
    {
      id: 0,
      label: "All Menu",
      // Icon: home,
      // IconHover: homeHover,
      onClick: () => navigate("/"),
      to: "/",
    },
    {
      id: 1,
      label: "IT",
      // Icon: home,
      // IconHover: homeHover,
      onClick: () => navigate("/itDepartment"),
      to: "/itDepartment",
    },
    {
      id: 2,
      label: "HR",
      // Icon: home,
      // IconHover: homeHover,
      onClick: () => navigate("hrDepartment"),
      to: "hrDepartment",
    },
  ];

  const [isShowDepartment, setIsShowDepartment] = useState(true);
  // const [innerTabValue, setInnerTabValue] = useState(0);
  // const handleInnerTabChange = (event: any, newValue: any) => {
  //   setInnerTabValue(newValue);
  // };
  const onClickToggleDepartment=()=>{
    setIsShowDepartment((prev:any) => !prev)
  }
  return (
    <>
      <Paper elevation={0}>
        <CardContent style={{ paddingBottom: "10px", paddingTop: "20px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{}} className={classes.tabContainer}>
              <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabs}
              >
                <Tab label="Quick Links" {...a11yProps(0)} />
                <Tab label="My Links" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <List className={classes.topItems}>
                {data?.response &&
                  data?.response.map((item: any) => {
                    const { fields = {} } = item;
                    // console.log(itemsList, "itemsList");
                    if (
                      item.index === 4
                      // item.id === ||
                      //item.title === department
                    ) {
                      return (
                        <List
                          className={classes.topItems}
                          style={{ width: "60%" }}
                        >
                          {departmentList.map(
                            (item: any, id: any, index: any) => {
                              const { onClick, path } = item;
                              console.log(departmentList, "departmentList");

                              return (
                                <ListItem
                                  key={id}
                                  onClick={onClick}
                                  className={classes.topMenu}
                                >
                                  {departmentList && (
                                    <NavLink
                                      end
                                      to={path}
                                      className={classes.topLink}
                                    >
                                      <p className={classes.topText}>
                                        {" "}
                                        {item.label}
                                      </p>
                                    </NavLink>
                                  )}
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      );
                    }
                    return (
                      <ListItem
                        key={fields.id}
                        onClick={() => navigate(fields.PageDetailsUrl)}
                        className={classes.topMenu}
                      >
                        {data?.response && (
                          <NavLink
                            end
                            to={fields.PageDetailsUrl}
                            className={classes.topLink}
                          >
                            <img
                              src={fields.HoverOff}
                              alt="..."
                              className="topImg"
                            />
                            <img
                              src={fields.HoverOn}
                              alt=""
                              className="topImgH"
                            />
                            <p className={classes.topText}> {fields.Title}</p>
                          </NavLink>
                        )}
                      </ListItem>
                    );
                  })}
              </List>
            </TabPanel>
            {/* <TabPanel value={value} index={0}>
              <List className={classes.topItems}>
                {itemsList.map((item: any, id: any, index: any) => {
                  const { onClick, path } = item;
                  if (item.id === 4 || item.title === department) {
                    return (
                      <List
                        className={classes.topItems}
                        style={{ width: "60%" }}
                      >
                        {departmentList.map(
                          (item: any, id: any, index: any) => {
                            const { onClick, path } = item;
                            console.log(departmentList, "departmentList");

                            return (
                              <ListItem
                                key={index}
                                onClick={onClick}
                                className={classes.topMenu}
                              >
                                {departmentList && (
                                  <NavLink
                                    end
                                    to={path}
                                    className={classes.topLink}
                                  >
                                    <p className={classes.topText}>
                                      {" "}
                                      {item.label}
                                    </p>
                                  </NavLink>
                                )}
                              </ListItem>
                            );
                          }
                        )}
                      </List>
                    );
                  }
                  return (
                    <ListItem
                      key={index}
                      onClick={onClick}
                      className={classes.topMenu}
                    >
                      {data?.response && (
                        <NavLink
                          end
                          to={item.onClick}
                          className={classes.topLink}
                        >
                          <img src={item.Icon} alt="..." className="topImg" />
                          <img
                            src={item.IconHover}
                            alt=""
                            className="topImgH"
                          />
                          <p className={classes.topText}> {item.label}</p>
                        </NavLink>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            </TabPanel> */}
            <TabPanel value={value} index={1}>
              <List className={classes.topItems}>
                {quicklinkdata?.response &&
                  quicklinkdata?.response.map(
                    (item: any, id: any, index: any) => {
                      const { fields = {} } = item;
                      return (
                        <ListItem
                          key={index}
                          onClick={onClick}
                          className={classes.topMenu}
                        >
                          {quicklinkdata?.response && (
                            <NavLink
                              end
                              to={fields.Url}
                              className={classes.topLink}
                            >
                              <img
                                src={fields.HoverOff}
                                alt="..."
                                className="topImg"
                              />
                              <img
                                src={fields.HoverOn}
                                alt=""
                                className="topImgH"
                              />
                              <p className={classes.topText}> {fields.Title}</p>
                            </NavLink>
                          )}
                        </ListItem>
                      );
                    }
                  )}
              </List>
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
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
            </TabPanel> */}
          </Box>
        </CardContent>
      </Paper>
    </>
  );
};

export default TopNavLink;
