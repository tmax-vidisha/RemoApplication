import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import admin from "./../../Assets/Images/admin.svg";
import adminHover from "./../../Assets/Images/admin.svg";
import hub from "./../../Assets/Images/hub.svg";
import hubHover from "./../../Assets/Images/hubHover.svg";
import ITservice from "./../../Assets/Images/ITservice.svg";
import ITserviceHover from "./../../Assets/Images/ITserviceHover.svg";
import sales from "./../../Assets/Images/sales.svg";
import salesHover from "./../../Assets/Images/salesHover.svg";
import vehicle from "./../../Assets/Images/vehicleRequest.svg";
import vehicleH from "./../../Assets/Images/vehicleRHover.svg";
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
import { NavLink } from 'react-router-dom';
import { useStyles } from "./Styles";
import {
    Box,
    CardContent,
    List,
    ListItem,
    Typography,
    Paper,
    Tabs, Tab
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const TopNavLink = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    const [showResults, setShowResults] = useState(true);
    const onClick = () => setShowResults(false);
    const HandleClick = () => setShowResults(true);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const itemsList = [
        {
            id: 0,
            label: 'Home',
            Icon: home,
            iconHover: homeHover,
            onClick: () => navigate("/"),
            to: '/',
        },
        {
            id: 1,
            label: 'WorkSpace',
            Icon: workspace,
            iconHover: workspaceHover,
            onClick: () => navigate("/WorkSpaceOne"),
            to: '/WorkSpaceOne',
        },
        {
            id: 2,
            label: 'Policies & Procedure',
            Icon: policy,
            iconHover: policyHover,
            onClick: () => navigate("/policiesContentPage"),
            to: '/policiesContentPage',

        },
        {
            id: 3,
            label: 'Content Editor',
            Icon: content,
            iconHover: contentHover,
            onClick: () => navigate("/ContentEditor"),
            to: '/ContentEditor',
        },
        {
            id: 4,
            label: 'Department',
            Icon: department,
            iconHover: departmentHover,
            onClick: () => navigate("/security"),
            to: '/security',

        },
        {
            id: 5,
            label: "Quick Links",
            Icon: quickLinks,
            iconHover: quickLinksHover,
            onClick: () => navigate("/quickLinks"),
            to: '/quickLinks',
        },
        {
            id: 6,
            label: "Org Chart",
            Icon: orgChart,
            iconHover: orgChartHover,
            onClick: () => navigate("/quickLinks"),
            to: '/quickLinks',
        },
    ];

    const myLinkList = [
        {
            id: 0,
            label: 'Sales',
            icon: sales,
            iconHov: salesHover,
            onClick: () => navigate("/"),
            to: '/',
        },
        {
            id: 1,
            label: 'Vehicle',
            icon: vehicle,
            iconHov: vehicleH,
            onClick: () => navigate("/WorkSpaceOne"),
            to: '/WorkSpaceOne',
        },
        {
            id: 2,
            label: 'IT service',
            icon: ITservice,
            iconHov: ITserviceHover,
            onClick: () => navigate("/policiesContentPage"),
            to: '/policiesContentPage',

        },
        {
            id: 3,
            label: 'Hub',
            icon: hub,
            iconHov: hubHover,
            onClick: () => navigate("/ContentEditor"),
            to: '/ContentEditor',
        },
        {
            id: 4,
            label: 'Admin',
            icon: admin,
            iconHov: adminHover,
            onClick: () => navigate("/security"),
            to: '/security',

        },

    ];

    return (
        <div>
            <Paper elevation={0}>
                <CardContent style={{ marginBottom: "16px" }} >
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ backgroundColor: "white", width: "250px", margin: "auto", }}>
                            <Tabs value={value} onChange={handleChange} className={classes.tabs}>
                                <Tab label="Quick Links" {...a11yProps(0)} />
                                <Tab label="My Links" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <List className={classes.topItems}>
                                {itemsList.map((item: any, id: any, index: any) => {
                                    const { Icon, iconHover, onClick, path } = item;
                                    console.log(itemsList, "itemsList");

                                    return (
                                        <ListItem key={index} onClick={onClick} className={classes.topMenu}>
                                            {itemsList && (
                                                <NavLink end to={path} className={classes.topLink}>
                                                    <img src={Icon} alt="..." className="topImg" />
                                                    <img
                                                        src={iconHover}
                                                        alt=""
                                                        className="topImgH"
                                                    />
                                                    <p className={classes.topText} > {item.label}</p>
                                                </NavLink>)
                                            }
                                        </ListItem>
                                    )
                                })}


                            </List>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <List className={classes.topItems}>
                                {myLinkList.map((item: any, id: any, index: any) => {
                                    const { icon, iconHov, onClick, path } = item;
                                    console.log(myLinkList, "itemsList");

                                    return (
                                        <ListItem key={index} onClick={onClick} className={classes.topMenu}>
                                            {myLinkList && (
                                                <NavLink end to={path} className={classes.topLink}>
                                                    <img src={icon} alt="..." className={classes.topImg} />
                                                    <img
                                                        src={iconHov}
                                                        alt=""
                                                        className={classes.topImgH}/>
                                                    <p className={classes.topText} > {item.label}</p>
                                                </NavLink>)
                                            }
                                        </ListItem>
                                    )
                                })}


                            </List>
                        </TabPanel>
                    </Box>
                </CardContent>
            </Paper>
        </div>
    );
};

export default TopNavLink;