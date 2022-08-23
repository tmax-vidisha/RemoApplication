import React,{useEffect,useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticatedTemplate} from "@azure/msal-react";
import Welcome from './Welcome';
import UserQuickLinks from './Components/UserQuickLinks';
import CeoMessageInput from './Components/CeoMessageInput';
import AnnoncementInput from './Components/AnnouncementInput';
import EventsInput from './Components/EventsInput';
import HeroInput from './Components/HeroInput';
import EmployeeHighlightInput from './Components/EmployeeHighlightInput';
import NewsInput from './Components/NewsInput';
// import EventsReadMore from './Components/EventsReadMore';
import { 
    EventsPageMore,
    CeoPageMore,
    CeoInputPage,
    NewsPageMore,
    AnnouncementPageMore,
    AnnouncementInputPage,
    UserQuickLinkPage,
    HeroInputPage,
    NewsInputPage,
    EventsInputPage,
    EmpHighlightInputPage
     } from './Pages';
import AnnouncementReadMore from './Components/AnnouncementReadMore';
import CeoMessageInformation from './Components/CeoMessageInformation';
import NewsReadMore from './Components/NewsReadMore';
import WPDropBox from './Components/Workspace/DropBox';
import WPGoogleDrive from './Components/Workspace/GoogleDrive';
import WPOneDrive from './Components/Workspace/OneDrive';
import Header from './Components/Header';
import SitesScreen from "./Components/Workspace/Sharepoint/Sites";
import FolderScreen from './Components/Workspace/Sharepoint/Folders';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "./index";
import SubFolder from './Components/Workspace/Sharepoint/components/SubFolder';
// import {LeftMenu} from './Components/WorkSpaceOne/LeftMenu';
const theme = createTheme({
    palette: {
        background: {
            paper: "#fff",
        },
        text: {
            primary: "#333333",
            secondary: "#009BAD",
        },
        action: {
            active: "#001E3C",
        },
    },
});

const TITLE = "REMO Digital";
const Main = () => {
    const pca = new PublicClientApplication(configuration);
    const [token, setToken] = useState<string>();
    const [data1, setData1] = useState<any>([]);
    const accounts = pca.getAllAccounts();

    // useEffect(() => {
    //     async function getAccessToken() {
    //       if (accounts.length > 0) {
    //         const request = {
    //           scopes: ['user.read'],
    //           account: accounts[0]
    //         }
    //         const accessToken = await pca.acquireTokenSilent(request).then((response) => {
             
    //           // updateToken(response.accessToken);
    //            setToken(response.accessToken)
    //           // console.log(token,'uuuuuu')
    //         }).catch(error => {
    //           // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
    //           console.log(error);
    //           return null;
    //         });
    
    
    //       }
    
    //       return null;
    //     }
    //     getAccessToken();
    //     // async function aaaa(){
    //     //   // console.log(token)
    //     //   await updateToken(token)
    //     // }
    //     // aaaa();
    //     // setDatas(data.Event)
    //     // console.log(datas.Event)
    //     // function send (){
    //     //       if (token) {
          
          
    //     //         const requestOptions = {
    //     //           method: 'POST',
    //     //           headers: { 'Content-Type': 'application/json' },
    //     //           body: JSON.stringify({ token })
    //     //         };
    //     //         // fetch('http://localhost:4000/user/post', requestOptions)
    //     //         fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
    //     //         // .then(response => console.log(response))
    //     //          .then(response => response.json())
    //     //          .then(data =>setData1(data));
          
    //     //       }
          
    //     //     }
    //     //     send();
         
        
    //   }, [])
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
    
    // // console.log(data1,'u7i7i87i')
    // const quicklinkdata = data1.QuickLinks;
    // const ceomsgdata = data1.CeoMsg;
    // const accouncementdata = data1.Announcements;
    // const eventdata = data1.Event;
    // const newsdata = data1.News;
    return (
        <>
            <p style={{ display: "none" }}>collaboration driven</p>
            <HelmetProvider>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <Router>
                    <ThemeProvider theme={theme}>
                    {/* <AuthenticatedTemplate>
                        <Header />
                   </AuthenticatedTemplate> */}
                        <Routes>
                            <Route
                                path="/"
                                element={<Welcome />}
                            />
                            <Route
                                path="/userquicklink"
                                element={<UserQuickLinkPage/>}
                            />
                            <Route
                                path="/CEOInput"
                                element={<CeoInputPage />}
                            />
                            <Route
                                path="/AnnoncementInput"
                                element={<AnnouncementInputPage />}
                            />
                            <Route
                                path="/EventsInput"
                                element={<EventsInputPage />}
                            />
                            <Route
                                path="/HeroInput"
                                element={<HeroInputPage />}
                            />
                            <Route
                                path="/EmpHighInput"
                                element={<EmpHighlightInputPage />}
                            />
                             <Route
                                path="/NewsInput"
                                element={<NewsInputPage />}
                            />
                            <Route
                                path="/NewsInfo"
                                element={<NewsPageMore  />}
                            />
                             <Route
                                path="/EventReadMore"
                                element={<EventsPageMore  />}
                            />
                             <Route
                               path="/AnnouncementReadMore"
                               element={<AnnouncementPageMore  />}
                            />
                             <Route
                               path="/CeoInfo"
                               element={<CeoPageMore   />}
                            />
                            <Route
                               path="/workspace/dropbox"
                               element={<WPDropBox />} />
                            <Route
                              path="/workspace/google-drive"
                              element={<WPGoogleDrive />} />
                            <Route
                              path="/Myfiles/"
                              element={<WPOneDrive />} />
                            <Route
                              path="/workspace/drives/folders"
                              element={<FolderScreen />} />
                            <Route
                              path="/workspace/drives/sites"
                              element={<SitesScreen  />} />
                             <Route
                              path="/workspace/drives/subfolders"
                              element={<SubFolder />} />
                             {/* <Route
                              path="/WorkSpaceOne/LeftMenu"
                              element={<LeftMenu />} /> */}
                        </Routes>
                    </ThemeProvider>
                </Router>
            </HelmetProvider>
        </>
    )
}

export default Main