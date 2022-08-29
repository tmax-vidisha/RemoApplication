import React,{useState,useEffect} from 'react'
import CeoMessage from '../../Components/CeoMessage'
// import {CeoPage} from '../../Pages'
import HeroImages from '../../Components/HeroImages'
import News from '../../Components/News'
import RecentFiles from '../../Components/RecentFiles';
import Weather from '../../Components/Weather';
import QuickLinks from '../../Components/Quicklinks';
import axios from 'axios';
import Gallery from '../../Components/Gallery';
import EmployeeHighlight from '../../Components/EmployeeHighlight';
// import Events from '../../Components/Events';
import { 
        EventsPage,
        EmpHighlightPage,
        RecentFilePage,
        CeoPage,
        NewsPage,
        HeroImagePage,
        QuicklinkPage,
        HomeNavigationPage,
        AnnouncementPage
      } from '../../Pages';
import Announcement from '../../Components/Announcement';
import HomeTopNav from '../HomeTopNav';
import SocialMedia from '../../Components/SocialMedia';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { Container, Grid, Paper, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useUpdateTokenMutation,useCreateResponseMutation } from '../../services/APIs';
import Mymeeting from '../../Components/Mymeeting';
import LeftMenu from './../../Components/WorkSpaceOne/LeftMenu';
import { Link } from 'react-router-dom';
import WorkSpaceOne from './../../Components/WorkSpaceOne/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    bannerTop: {
      marginTop: 0,
    },
    containerWidth: {
      width: "95%",
    },
  })
);

const PortalHome = () => {
 
    const classes = useStyles();
    const pca = new PublicClientApplication(configuration);
    const [token, setToken] = useState<string>();
    const [data1, setData1] = useState<any>([]);
    // const accounts = pca.getAllAccounts();
    //   const [updateToken,{data} ] = useUpdateTokenMutation();
    // // const [sendItem,{data,isLoading}] =useCreateResponseMutation();

    //    console.log(data?.response,'ytjytjy')
    // // console.log(data,'juyjukkkik')
    // // setData1(data)
    // useEffect(() => {
    //   async function getAccessToken() {
    //     if (accounts.length > 0) {
    //       const request = {
    //         scopes: ['user.read'],
    //         account: accounts[0]
    //       }
    //       const accessToken = await pca.acquireTokenSilent(request).then((response) => {
           
    //         updateToken(response.accessToken);
    //           // setToken(response.accessToken)
    //         // console.log(token,'uuuuuu')
    //       }).catch(error => {
    //         // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
    //         console.log(error);
    //         return null;
    //       });
  
  
    //     }
  
    //     return null;
    //   }
    //   getAccessToken();
    //   // async function aaaa(){
    //   //   // console.log(token)
    //   //   await updateToken(token)
    //   // }
    //   // aaaa();
    //   // setDatas(data.Event)
    //   // console.log(datas.Event)
    //   // function send (){
    //   //       if (token) {
        
        
    //   //         const requestOptions = {
    //   //           method: 'POST',
    //   //           headers: { 'Content-Type': 'application/json' },
    //   //           body: JSON.stringify({ token })
    //   //         };
    //   //         // fetch('http://localhost:4000/user/post', requestOptions)
    //   //         fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
    //   //         // .then(response => console.log(response))
    //   //          .then(response => response.json())
    //   //          .then(data =>setData1(data));
        
    //   //       }
        
    //   //     }
    //   //     send();
       
      
    // }, [])
  //   useEffect(()=>{
  //   function send (){
  //     if (token) {
  
  
  //       const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ token })
  //       };
  //       // fetch('http://localhost:4000/user/post', requestOptions)
  //       fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
  //       // .then(response => console.log(response))
  //        .then(response => response.json())
  //        .then(data =>setData1(data));
  
  //     }
  
  //   }
  //   send();
  // },[token])
  // const E =data.Event
  // console.log(E)
    // console.log(data1,'u7i7i87i')
    //  console.log(data1.Event,'tyugdfgfdgdfgfdgccdvvdgfdg6tuu')
    //  const eventdata = data1.Event;
    //  const quicklinkdata = data1.QuickLinks;
    //  const recentdata = data1.RecentFiles;
    //  const accouncementdata = data1.Announcements;
    //  const navigationdata =data1.Navigation;
    //  const ceomsgdata = data1.CeoMsg;
    //  const newsdata = data1.News;
    //  const employeedata = data1.Employee;
    //  const herodata = data1.Hero;
    //  const gallerydata = data1.Gallery;
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.bannerTop}>
        <Grid item xs={8}>
          <Paper elevation={0}>
             <HeroImagePage />
             {/* HeroImagePage */}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <CeoPage  />
          {/* fefefefefefefe */}
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "16px", paddingTop: "16px",position: "relative" }}>
         {/* <Link to="/WorkSpaceOne/LeftMenu"><HomeNavigationPage /></Link>  */}
          {/* hghgjhgjhjhjhjhjhjhj */}
          <HomeNavigationPage />
         
          
        </Grid>
        {/* <Grid item xs={8}>
            <Mymeeting />
          </Grid> */}
           {/* <LeftMenu/> */}
           {/* <WorkSpaceOne/> */}
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={8}>
            <Mymeeting />
          </Grid>
          <Grid item xs={4}>
            <EmpHighlightPage />
            </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <NewsPage  />
            {/* jjhjhgjhgjhg */}
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              marginTop: 0,
              marginRight: 0,
              marginLeft: 0,
              width: "100%",
            }}
            spacing={2}
          >
            <Grid item xs={6} style={{ paddingLeft: 0 }}>
            <Gallery  />
              {/* <EventsPage  /> */}
              {/* hhjfghg */}
            </Grid>
            <Grid item xs={6} style={{ paddingRight: 0 }}>
              {/* <AnnouncementPage  /> */}
              <SocialMedia />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              marginTop: 0,
              marginRight: 0,
              marginLeft: 0,
              width: "100%",
            }}
            spacing={2}
          >
            <Grid item xs={6} style={{ paddingLeft: 0 }}>
              
                {/* <Gallery  /> */}
              {/* bfbbbfbfbfb */}
            </Grid>
            <Grid item xs={6} style={{ paddingRight: 0 }}>
              {/* <SocialMedia /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
           {/* <EmpHighlightPage />  */}
           {/* gfgfghghghghg */}
          <Grid item xs={12} style={{ marginTop: 16 }}>
            {/* <Weather /> */}
          </Grid>

          <Grid item xs={12} style={{ marginTop: 16 }}>
          <EventsPage  />
            {/* <QuicklinkPage  /> */}
            {/* hthhfhfhfgh */}
          </Grid>
          <Grid item xs={12} style={{ marginTop: 16 }}>
            <RecentFilePage />
            {/* rgrgtrhgthgd */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default PortalHome