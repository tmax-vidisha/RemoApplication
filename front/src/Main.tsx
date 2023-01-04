import React,{useEffect,useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
    EmpHighlightInputPage,
    MyFilePage,
    MeetingsPage,
    SubNewss,
    MoreNewsPage,
    ImagesAndVideosPage,
    ViewAllEventPage,
    HeaderPage
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

import { Grid, Paper, Typography } from '@mui/material';
import Footer from './Components/Footer';
import UploadFile from './UploadFile';
// import LeftMenu from './Components/WorkSpaceOne/LeftMenu';
import WorkSpaceOne from './Components/WorkSpaceOne/index';
// import SecondWorkSpace from './Layout/SecondWorkSpace';
// import ContentEditor from './Components/ContentEditor';
import AllLinks from './Components/Quicklinks/AllLinks';
import SecondWorkSpace from './Layout/SecondWorkSpace';
import TableAnnouncementPage from './Pages/TableAnnouncementPage';
import ContentEditor from './Components/ContentEditor';
import SharedWithMe from './Components/WorkSpaceOne/SharedwithMe/index';
import RecentFiles from './Components/WorkSpaceOne/RecentFiles';
import StarredFile from './Components/WorkSpaceOne/StarredFile/index';
import SubNews from './Components/NewsReadMore/SubNews';
import ImagesVideos from './Components/ImagesVideos';

import GalleryFolder from './Components/ImagesVideos/GalleryFolder';

import FolderItems from './Components/ImagesVideos/FolderItems';
// import PluginImgVideo from './Components/ImagesVideos/PluginImgVideo';
import SimpleReactLightbox from 'simple-react-lightbox'
import Birthday from './Components/Birthday';
import ViewAllEvents from './Components/ViewAllEvents';
import HeroBannerMore from './Components/HeroImages/HeroBannerMore';
import HeroThumbnail from './Components/HeroImages/HeroThumbnail';
import BirthdayEditor from './Components/BirthdayEditor/BirthdayEditor';
import BirthdayContentPage from './Components/BirthdayEditor/BirthdayContentPage';
import CeoEditor from './Components/CeoEditor/CeoEditor';
import CeoContentPage from './Components/CeoEditor/CeoContentPage';
import HeroContentPage from './Components/HeroEditor/HeroContentPage';
import ContentEditorPage from './Components/EditorContent/ContentEditorPage';
import DepartmentContentPage from './Components/DepartmentEditor/DepartmentContentPage';
import EventsContentPage from './Components/EventsEditor/EventsContentPage';
import GalleryContentPage from './Components/GalleryEditor/GalleryContentPage';
import HighlightsContentPage from './Components/HighlightsEditor/HighlightsContentPage';
import LogoContentPage from './Components/LogoMasterEditor/LogoContentPage';
import NavigationContentPage from './Components/NavigationEditor/NavigationContentPage';
import NewsContentPage from './Components/NewsEditor/NewsContentPage';
import PoliciesContentPage from './Components/PoliciesEditor/PoliciesContentPage';
import QuickContentPage from './Components/QuickLinksEditor/QuickContentPage';
import DocumentLibrary from './Components/WorkSpaceOne/DocumentLibrary';
import TrashFiles from './Components/WorkSpaceOne/Trash/TrashFiles';
import Trash from './Components/WorkSpaceOne/Trash';
import HeroBannerMoreImages from './Components/HeroImages/HeroBannerMoreImages';




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
                    <AuthenticatedTemplate>
                            <HeaderPage />
                            {/* <Grid item xs={12}>
                                <Paper style={{ height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }} elevation={0}>
                                    <Typography> <b>WHAT'S NEW</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus in blanditiis dolorum Optio voluptatibus  </Typography>
                                </Paper>
                            </Grid> */}
                        </AuthenticatedTemplate>
                        <Routes>
                            <Route
                                path="/"
                                element={<Welcome />}
                            />
                            <Route
                                path="/userQuickLink"
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

                                path="/Myfiles/"
                                element={<WPOneDrive />} />
                            <Route
                                path="/workspace/drives/folders"
                                element={<FolderScreen />} />
                            <Route
                                path="/workspace/drives/sites"
                                element={<SitesScreen />} />
                            <Route
                                path="/workspace/drives/subfolders"
                                element={<SubFolder />} />
                            <Route
                                path="/upload"
                                element={<UploadFile />} />   
                             <Route
                              path="/workspace/drives/subfolders"
                              element={<SubFolder />} />

                            <Route
                              path="/WorkSpaceOne"
                              element={<WorkSpaceOne/>} />
                            <Route
                              path="/SecondWorkSpace"
                              element={<SecondWorkSpace/>} />
                            <Route
                              path="/Policy"
                              element={<SecondWorkSpace/>} />
                            <Route
                              path="/ContentEditor"
                              element={<ContentEditor/>} />
                            <Route
                              path="/tableAnnouncementPage"
                              element={<TableAnnouncementPage/>} />
                            <Route
                              path="/sharedWithMe"
                              element={<SharedWithMe/>} />
                             <Route
                              path="/recentFilesOneDrive"
                              element={<RecentFiles/>} />
                            <Route
                              path="/allLinks"
                              element={<AllLinks/>} />
                            <Route
                              path="/myFilePage"
                              element={<MyFilePage/>} />
                            <Route
                              path="/MeetingsPage"
                              element={<MeetingsPage/>} />
                            <Route
                              path="/StarredFile"
                              element={<StarredFile/>} />
                            <Route
                              path="/SubNews"
                              element={<SubNewss/>} />
                            <Route
                              path="/MoreNews"
                              element={<MoreNewsPage/>} />
                            <Route
                              path="/GalleryFolder"
                              element={<ImagesAndVideosPage/>} />
                            <Route
                              path="/GalleryFolder"
                              element={<ImagesAndVideosPage/>} />
                            <Route
                              path="/ImagesAndVideos"
                              element={ <SimpleReactLightbox><FolderItems/></SimpleReactLightbox>} />
                            <Route
                              path="/PluginImgVideo"
                              element={<GalleryFolder/>} />
                            <Route
                              path="/birthday"
                              element={<Birthday/>} />
                            <Route
                              path="/viewAllEvents"
                              element={<ViewAllEventPage/>} />
                            <Route
                              path="/heroBannerMore"
                              element={<HeroBannerMore/>} />
                               <Route
                              path="/heroBannerMoreImages"
                              element={<HeroBannerMoreImages/>} />
                            <Route
                              path="/heroBannerMoreImages"
                              element={<HeroBannerMoreImages/>} />
                            <Route
                              path="/heroThumbnail"
                              element={<HeroThumbnail/>} />
                              
                            <Route
                              path="/birthdayContentPage"
                              element={<BirthdayContentPage/>} />
                            <Route
                              path="/ceoContentPage"
                              element={<CeoContentPage/>} />
                            <Route
                              path="/heroContentPage"
                              element={<HeroContentPage/>} />
                            <Route
                              path="/contentEditorPage"
                              element={<ContentEditorPage/>} />
                            <Route
                              path="/departmentContentPage"
                              element={<DepartmentContentPage/>} />
                            <Route
                              path="/eventsContentPage"
                              element={<EventsContentPage/>} />
                            <Route
                              path="/galleryContentPage"
                              element={<GalleryContentPage/>} />
                            <Route
                              path="/highlightsContentPage"
                              element={<HighlightsContentPage/>} />
                            <Route
                              path="/logoContentPage"
                              element={<LogoContentPage/>} />
                            <Route
                              path="/navigationContentPage"
                              element={<NavigationContentPage/>} />
                            <Route
                              path="/newsContentPage"
                              element={<NewsContentPage/>} />
                            <Route
                              path="/policiesContentPage"
                              element={<PoliciesContentPage/>} />
                            <Route
                              path="/quickContentPage"
                              element={<QuickContentPage/>} />
                            <Route
                              path="/documentLibrary"
                              element={<DocumentLibrary/>} />
                            <Route
                              path="/trash"
                              element={<Trash/>} />
                        
                        </Routes>
                    </ThemeProvider>
                    <Footer />
                </Router>
            </HelmetProvider>
        </>
    )
}

export default Main;
