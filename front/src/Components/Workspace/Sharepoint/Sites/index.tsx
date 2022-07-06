import React, { useEffect, useState, useReducer } from 'react'
import { useStyles } from './Styles';
import {  useNavigate,useLocation } from 'react-router-dom';
import Sites from '../components/Sites';
import { getRootDriveReducer } from '../../../../Store copy/Reducer/drivesReducer';
import { ActionType } from '../../../../Store copy/Actions/actionTypes';
import { useCreatesubSiteMutation, useGetDrivesQuery, useGetAllSubSitesQuery,useCreateTokenwithDataWorkspaceMutation } from '../../../../services/APIs';
import Drives from '../components/Drives';
import { AuthenticatedTemplate } from '@azure/msal-react';
import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import WorkspaceNavigation from '../../WorkspaceNavigation';
import Loader from '../components/Loader';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../../../index";

const initialStateDrives = {
  loading: true,
  error: '',
  drives: [],
};

interface IFolderProps {
  tokens: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}
const SitesScreen = () => {
  // const SitesScreen: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  // const { data, error, isLoading } = useGetFoldersQuery('');
  // console.log(data,'uuiui')
  // let location = useLocation();
  // console.log(location.state,'wfe5eyrthtfhfgh');
  const [sendItem] = useCreateTokenwithDataWorkspaceMutation();
  const pca = new PublicClientApplication(configuration);
    const [token, setToken] = useState<string>();
    const [site, setSite] = useState<string>();
    const [driveid, setDriveid] = useState<string>();
  const [sitesDrivesState, DrivesDispatch] = useReducer(getRootDriveReducer, initialStateDrives);
  const { loadingDrives, errorDrives, drives } = sitesDrivesState;
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [data1, setData1] = useState<any>([]);
  const [drive, setDrive] = useState<any>([]);
  const [folder, setFolder] = useState<any>([]);
  const accounts = pca.getAllAccounts();
  // const {tokens } = props;
  const navigate = useNavigate();

  useEffect(() => {
    async function getAccessToken() {
      if (accounts.length > 0) {
        const request = {
          scopes: ['user.read'],
          account: accounts[0]
        }
        const accessToken = await pca.acquireTokenSilent(request).then((response) => {
         
          // updateToken(response.accessToken);
           setToken(response.accessToken)
          // console.log(token,'uuuuuu')
        }).catch(error => {
          // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
          console.log(error);
          return null;
        });


      }

      return null;
    }
    getAccessToken();
    
     
    
  }, [])
   
  useEffect(()=>{
    function send (){
      if (token) {
  
  
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        };
        // fetch('http://localhost:4000/user/post', requestOptions)
        fetch(`http://localhost:4000/api/v1/sites/subSites`, requestOptions)
        // .then(response => console.log(response))
         .then(response => response.json())
         .then(data =>setData1(data));
  
      }
  
    }
    send();
  },[token])


  console.log(data1.subSites,'hytjyjytj')
  const SubSite =data1.subSites

  // if (data1.Drives){
  //   setDrive(data1.Drive)
  // }

 
  //   const getRootDrivesAction = async () => {
  //     DrivesDispatch({ type: ActionType.GET_ROOT_DRIVES_REQUEST });
  //     try {
  //       DrivesDispatch({
  //         type: ActionType.GET_ROOT_SITES_SUCCESS,
  //         payload: data,
  //     });
  //     }catch (err: any){
  //       DrivesDispatch({
  //         type: ActionType.GET_ROOT_DRIVES_FAILED,
  //         payload: err.message,
  //     });
  //     console.log(err);

  //     }
  // };


  const sitesClickHandler =  (
    sitesId: string,
  ) => {
    // const { value = [] } = await GetSubSitesofSites(app.authProvider!, sitesId);
    // console.log(value);
    // await getRootFolderAction(id);
    setSite(sitesId)
    console.log('sitesClickHandler', sitesId);
    
    const Data = {
      token:token,
      subSiteId:sitesId
    }
    // sendItem(Data)

    function sendId(){
        const requestOptions = {
            method: 'POST',
            // mode:'no-cors',
            headers: { 
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(Data)
           
        };
        fetch('http://localhost:4000/api/v1/sites/subSites', requestOptions)
            .then(response => response.json())
            .then(data =>setDrive(data.Drives));
    }
    sendId();
    console.log(sitesId,'uuufffuu')
    // function sendNavigationId() {
    //   if (sitesId) {


    //     const requestOptions = {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ sitesId })
    //     };
    //     fetch('http://localhost:4000/subsite', requestOptions)
    //       .then(response => response.json())

    //   }
    // }
    // sendNavigationId();
    setVisible(!visible)
    setShow(!show);
  };


    console.log(drive,'thj76iji67dvdvdsvsik87k87k87l98l89l98l9l')


  const driveClickHandler = (
    driveId: string,
  ) => {
    // setDriveid(driveId)
    console.log(driveId,'yhhh')
    console.log(driveid,'thtrhthth')
    const Data = {
      token:token,
      subSiteId:site,
      subDriveId:driveId
    }
    console.log(Data,'hytjhyjyjyjyjyjytjtjyj')

    function sendId(){
      const requestOptions = {
          method: 'POST',
          // mode:'no-cors',
          headers: { 
              'Content-Type': 'application/json',

          },
          body: JSON.stringify(Data)
         
      };
      fetch('http://localhost:4000/api/v1/sites/subSites', requestOptions)
          .then(response => response.json())
           .then(data =>
            navigate('/Workspace/drives/folders', { state:  {tokens:token,sitesId:site,drivesId:driveId,folderData:data.DriveItems}  }))
            // navigate('/Workspace/drives/folders', { state: data.DriveItems   }));
          //  setFolder(data.DriveItems));
          //  console.log(folder,'jyjyjyjyjyjyjyyyyyyyy')
          //  if(folder){
          //  navigate('/Workspace/drives/folders', { state: folder });
          //  }
         
          //  navigate('/Workspace/drives/folders', { state:  {tokens:token,sitesId:site,drivesId:driveId}  })
  }
  sendId();
  // console.log(folder,'thththththththththt')
    // await sendItem(sitesId)
    // function sendId() {
    //   if (driveId) {


    //     const requestOptions = {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ driveId })
    //     };
    //     fetch('http://localhost:4000/drive', requestOptions)
    //       .then(response => response.json())

    //   }
    // }
    // sendId();
    // navigate('/Workspace/drives/folders');
  }
  
  // console.log(folder,'ukukukuykuykydgrdgdu')
  //  if(folder){
  //   navigate('/Workspace/drives/folders', { state: folder });
  //  }
  


  

  return (
    // <div>
    //     { visible ? (
    //        <>
    //        <Sites onClick={sitesClickHandler}/>
    //        </>
    //     ) :null
    //     }
    //     {
    //       show ?(
    //         <>
    //          <Drives onClick={driveClickHandler}/>
    //         </>
    //       ):null
    //     }

    //     {/* <Sites /> */}
    // </div>
    <>
      <AuthenticatedTemplate>
        <Container className={classes.root}>
          <Grid container className={classes.bannerTop}>
            <Grid item xs={1}>
              <WorkspaceNavigation />
            </Grid>
            <Grid item xs={11} sx={{ paddingLeft: "15px" }}>
              <Paper elevation={0}>
                <Grid container className={classes.workspaceHeader}>
                  <Grid item xs={6}>
                    <Typography
                      variant="h3"
                      className={classes.workspaceTopHeader}
                      component="h3"
                    >
                      SharePoint
                      <Typography variant="caption" component="span">
                        (35 Items)
                      </Typography>
                    </Typography>
                  </Grid>
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <Grid item xs={1}>
                    {/* <IconButton color="primary" onClick={() => getRootDrivesAction}
                                            sx={{ padding: '0', float: 'right' }}>
                                            <CachedIcon sx={{ color: '#333333', opacity: 0.5 }} />
                                        </IconButton> */}
                  </Grid>
                </Grid>
                <Box>
                  <Grid container>
                    <Grid item xs={12}>
                      {/* <TableHeader /> */}
                      {visible ? (
                        <>
                          <Sites subSites={SubSite} onClick={sitesClickHandler} />
                        </>
                      ) : null
                      }
                      {
                         show ? ( 
                           <>
                            {/* <Drives /> */}
                            {/* tyjytjyjyj */}
                            <Drives drives={drive} onClick={driveClickHandler}/>
                            {/* uyukuykuk */}
                           </> 
                        ) : null
                       } 
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </AuthenticatedTemplate>
    </>
  //  <>fbfdbfgbgnnfn</> 
  )
}

export default SitesScreen