// @ts-nocheck
import React from 'react'
import { useStyles } from "./Styles";
import { Timeline } from "react-twitter-widgets";
import { AppBar, Box, Tabs, Tab, Typography, Card, Paper } from "@mui/material";
import FacebookIcon from "../../Assets/Images/s1.svg";
import InstagramIcon from "../../Assets/Images/s2.svg";
import TwitterIcon from "../../Assets/Images/s3.svg";
import LinkedInIcon from "../../Assets/Images/s4.svg";
import { FacebookEmbed, LinkedInEmbed, InstagramEmbed } from 'react-social-media-embed';
import { FacebookProvider, Page } from 'react-facebook';
// import LinkedinSDK from 'react-linkedin-sdk'

// import { Facebook } from 'reactjs-social-embed';
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface type {
  clientAccessToken: string;
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
              screenName: "remo_digital",

            }}
            options={{
              height: "307",
            }}
          />
          {/* <div id="twitter">
            <a className="twitter-timeline" href="https://twitter.com/remo_digital">Tweets by Remo Digital</a>
          </div> */}
        </TabPanel>
        <TabPanel value={value} index={1}>

          {/* <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            clientAccessToken='123|456'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
          /> */}

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <InstagramEmbed
              //protocol=''
              //injectScript
              //onLoading={() => { }}
              //onSuccess={() => { }}
              //onAfterRender={() => { }}
              // onFailure={() => { }}
              //url="https://www.instagram.com/p/CUbHfhpswxt/"
              url="https://www.instagram.com/p/CgL9BRHJ4ns/"
            // clientAccessToken="123|456"
            //maxWidth={320}
            //hideCaption={false}
            //containerTagName='div'

            />
          </div>

        </TabPanel>
        <TabPanel value={value} index={2}>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LinkedInEmbed
              //url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
              //url="https://www.linkedin.com/embed/feed/update/urn:li:share:6955728295980056577"
              //url="https://www.linkedin.com/embed/feed/update/urn:li:share:6955091372349542400"
              //url="https://www.linkedin.com/company/google/?originalSubdomain=in"
              //postUrl="https://www.linkedin.com/posts/google_interviewing-is-not-one-sided-as-an-aspiring-activity-6954114739874512897-N4OR?utm_source=linkedin_share&utm_medium=member_desktop_web"
              postUrl="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7034478094585315328"
              url="https://widgets.sociablekit.com/linkedin-page-posts/iframe/106017"
              width={325}
              height={370}
            />
            {/* <LinkedinSDk
              clientId="123456789010"
              callBack={responseLinkedin}
              fields=":(id,num-connections,picture-url)"
              className={'className'}
              loginButtonText={'Login with Linkedin'}
              logoutButtonText={'Logout from Linkedin'}
              buttonType={'button'}
              // icon={<Icon />}
              getOAuthToken
            />, */}

          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <FacebookEmbed
              //url="https://www.facebook.com/andrewismusic/posts/451971596293956" 
              //url="https://www.facebook.com/taqeefmiddleeast/posts/" 
              //url="https://www.facebook.com/taqeefmiddleeast/photos" 
              // url="https://fb.watch/eqiJfx_kmH/"
              url="https://www.sociablekit.com/app/embed/64772"
              width={350} /> */}

            {/* <Facebook type="post" width="100%" height="680px" show_text={true}
              url="https://www.facebook.com/postmalone/posts/1992925354174335" /> */}

            <iframe src='https://www.sociablekit.com/app/embed/64772' width='350' height='370' ></iframe>

          </div>



        </TabPanel>
      </Paper>
    </>
  )
}

export default SocialMedia;

/*
linkedin
<iframe src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/106017' frameborder='0' width='100%' height='1000'></iframe>
https://widgets.sociablekit.com/linkedin-page-posts/iframe/106017

*/