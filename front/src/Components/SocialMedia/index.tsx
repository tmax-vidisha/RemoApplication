import React from 'react'

import { useStyles } from "./Styles";
import { Timeline } from "react-twitter-widgets";
import { AppBar, Box, Tabs, Tab, Typography, Card, Paper } from "@mui/material";
import FacebookIcon from "../../Assets/Images/s1.svg";
import InstagramIcon from "../../Assets/Images/s2.svg";
import TwitterIcon from "../../Assets/Images/s3.svg";
import LinkedInIcon from "../../Assets/Images/s4.svg";


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={0}>
            <Typography component="span" variant="body2">
              {children}
            </Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      "aria-controls": `scrollable-prevent-tabpanel-${index}`,
    };
  }
  

const SocialMedia = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
      };
  return (
    // <div>SocialMedia</div>
    <>
      <Paper elevation={0} className={classes.root}>
        <AppBar elevation={0} position="static" className={classes.tabHeader}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            visibleScrollbar={false}
            textColor="primary"
            aria-label="fullWidth prevent tabs example"
          >
            <Tab
              wrapped={true}
              className={classes.tab1Header}
              //icon={<TwitterIcon />}
              aria-label="phone"
              sx={{
                backgroundImage: `url(${TwitterIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#F3FAFE!important",
                borderTopLeftRadius: "7px",
              }}
              {...a11yProps(0)}
            />
            <Tab
              wrapped={true}
              className={classes.tab2Header}
              //icon={<InstagramIcon />}
              sx={{
                backgroundImage: `url(${InstagramIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#FEF3F6!important",
              }}
              aria-label="favorite"
              {...a11yProps(1)}
            />
            <Tab
              wrapped={true}
              className={classes.tab3Header}
              //icon={<LinkedInIcon />}
              sx={{
                backgroundImage: `url(${LinkedInIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#F2F7FC!important",
              }}
              aria-label="person"
              {...a11yProps(2)}
            />
            <Tab
              wrapped={true}
              className={classes.tab4Header}
              sx={{
                backgroundImage: `url(${FacebookIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#F5F7FB!important",
                borderTopRightRadius: "7px",
              }}
              //icon={<FacebookIcon />}
              aria-label="help"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "DPWorldUAE",
            }}
            options={{
              height: "307",
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Paper>
    </>
  )
}

export default SocialMedia