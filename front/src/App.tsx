import { useState, useEffect } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useMsalAuthentication, useAccount } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import User from "./User";
import { configuration } from "./index";
import { IPublicClientApplication } from "@azure/msal-browser";
import { PublicClientApplication } from "@azure/msal-browser";
import My from "./My";
import {useGetIntranetQuery,
  useGetListInfoAnouncementIdQuery,
  useGetListInformationQuery,
  useGetListInfoQuickLinksIdQuery,
  useGetListEmployeeHighlightIdQuery,
  useGetListNewsIdQuery,
  useGetEventsIdQuery,
  useGetHeroImageIdQuery,
  useGetPhotoGalleryIdQuery,
  useGetNavigationIdQuery,
  useUpdateTokenMutation,
  useCreateResponseMutation,
  useGetDataQuery
} from './services/APIs'
import Welcome from "./Welcome";
import Main from "./Main";

type AppProps = {
  pca: IPublicClientApplication;
};
export  let AccessToken:any;
 function App() {
  // function App({ pca }: AppProps) {
  const { instance, inProgress } = useMsal();
  const [token, setToken] = useState<string>();
  const [data1, setData1] = useState<any>([]);
  const pca = new PublicClientApplication(configuration);
  const accounts = pca.getAllAccounts();
  // const [updateToken,{data} ] = useUpdateTokenMutation();
    //  const [postToken]  = useCreateResponseMutation();
  
  // const {data} = useGetIntranetQuery<any>('')
  // const {data,isLoading,error} = useGetDataQuery<any>('')
  //  const SiteId = data;
  //@ts-ignore
// const {Event = [{}],QuickLinks = [{}],RecentFiles = [{}]} = data;
// console.log(data,'thythyh')
// useEffect(()=>{
// setData1(data)
// },[])
  useEffect(() => {
    async function getAccessToken() {
      if (accounts.length > 0) {
        const request = {
          scopes: ['user.read'],
          account: accounts[0]
        }
        const accessToken = await pca.acquireTokenSilent(request).then((response) => {
         
          // setToken(response.accessToken);
            // console.log(token,'uuuuuu')
            AccessToken = response.accessToken
        }).catch(error => {
          // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
          console.log(error);
          return null;
        });

          // AccessToken = token;
      }

      return null;
    }
    getAccessToken();

  }, [])

  // console.log(token)
  
  // useEffect(() => {

  //   fetch("http://localhost:4000/user").then((result) => {
  //     result.json().then((res) => {
  //       console.log(res)
  //     })
  //   });
    // async function aaaa(){
    //   // console.log(token)
    //   await updateToken(token)
    // }
    // aaaa()
    // async function aaaa(){
    //    await postToken(token)
    // }
    // aaaa()
// function send (){
//     if (token) {


//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ token })
//       };
//       // fetch('http://localhost:4000/user/post', requestOptions)
//       fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
//       .then(response => response.json())
//         // .then(response => response.json())
//         .then(data =>setData1(data));

//     }

//   }
//   send();

  // function sendSiteId(){
  //   if (SiteId) {


  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ SiteId })
  //     };
  //     fetch('http://localhost:4000/site/SiteId', requestOptions)
  //       .then(response => response.json())

  //   }
  // }
  // sendSiteId()
  
  //   function myInfo(){
  //     fetch("http://localhost:4000/SiteId").then((result) => {
  //     result.json().then((res) => {
  //       console.log(res,'7u8')
  //     })
  //   });
  //   }
  //  myInfo();
  // }, [token])
// function Ceo(){
//   const { data, error, isLoading } = useGetListInformationQuery('')
//   console.log(data,'CEO')
//   const CeoMessageId = data;
//   useEffect(()=>{
//     function sendCeoId(){
//       if (CeoMessageId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ CeoMessageId })
//         };
//         fetch('http://localhost:4000/list/idceo', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendCeoId()
//   })

// }
// Ceo();
// function Announcement(){
//   const { data, error, isLoading } = useGetListInfoAnouncementIdQuery('');

//   console.log(data,'Announcement')
//   const AnouncementId = data;
//   useEffect(()=>{
//     function sendAnnouncementId(){
//       if (AnouncementId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ AnouncementId })
//         };
//         fetch('http://localhost:4000/list/announcementid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendAnnouncementId()
//   })

// }
// Announcement();
 
// function QuickLinks(){
//   const { data, error, isLoading } = useGetListInfoQuickLinksIdQuery('');

//   console.log(data,'QuickLinks')
//   const QLinkId = data;
//   useEffect(()=>{
//     function sendQuickLinkId(){
//       if (QLinkId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({QLinkId })
//         };
//         fetch('http://localhost:4000/list/quicklinkid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendQuickLinkId()
//   })
// }
// QuickLinks();
// function EmployeeHighlight(){
//   const { data, error, isLoading } =useGetListEmployeeHighlightIdQuery('');

//   console.log(data,'Emp')
//   const EmployeeHighlightId = data;
//   useEffect(()=>{
//     function sendEmployeeId(){
//       if (EmployeeHighlightId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({EmployeeHighlightId })
//         };
//         fetch('http://localhost:4000/list/employeehighlightid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendEmployeeId()
//   })
// }
// EmployeeHighlight();
// function News(){
//   const { data, error, isLoading } =useGetListNewsIdQuery('');

//   console.log(data,'News')
//   const NewsId = data;
//   useEffect(()=>{
//     function sendNewsId(){
//       if (NewsId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ NewsId })
//         };
//         fetch('http://localhost:4000/list/newsid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendNewsId()
//   })
// }
// News();
// function Events(){
//   const { data, error, isLoading } =useGetEventsIdQuery('');

//   console.log(data,'Events')
//   const EventId = data;
//   useEffect(()=>{
//     function sendEventId(){
//       if (EventId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ EventId })
//         };
//         fetch('http://localhost:4000/list/eventid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendEventId()
//   })
// }
// Events();
// function HeroImage(){
//   const { data, error, isLoading } =useGetHeroImageIdQuery('');

//   console.log(data,'Hero')
//   const HeroImageId = data;
//   useEffect(()=>{
//     function sendEventId(){
//       if (HeroImageId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ HeroImageId })
//         };
//         fetch('http://localhost:4000/list/heroimageid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendEventId()
//   })
// }
// HeroImage();
// function PhotoGallery(){
//   const { data, error, isLoading } =useGetPhotoGalleryIdQuery('');

//   console.log(data,'Photo');
//   const PhotoId = data;
//   useEffect(()=>{
//     function sendPhotoId(){
//       if (PhotoId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ PhotoId })
//         };
//         fetch('http://localhost:4000/list/photoid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendPhotoId()
//   })

// }
// PhotoGallery();

// function Navigation(){
//   const { data, error, isLoading } = useGetNavigationIdQuery('');

//   console.log(data,'Navigation');
//   const NavigationId = data;
//   useEffect(()=>{
//     function sendNavigationId(){
//       if (NavigationId) {
  
  
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ NavigationId })
//         };
//         fetch('http://localhost:4000/list/navigationid', requestOptions)
//           .then(response => response.json())
  
//       }
//     }
//     sendNavigationId()
//   })

// }
// Navigation();
// console.log(data1.Event,'tyugdfgfdgdfgfdgccdvvdgfdg6tuu')
  return (
    <div >

      {/* <AuthenticatedTemplate> */}
      {/* <Provider store={store}>
      <div className="App">
        
        <Images />
      </div>
    </Provider> */}
    
      {/* <User/> */}
    {/* <My/>   */}
     {/* <Main/> */}
      {/* </AuthenticatedTemplate> */}
      {/* <UnauthenticatedTemplate> 
        <p>No users are signed in!</p>
        <button onClick={() => instance.loginPopup()}>Sign in new user</button>
       </UnauthenticatedTemplate> */}
     {/* <Welcome/> */}
     
        <Main/>
     
     
    </div>
  );
}

export default App;
