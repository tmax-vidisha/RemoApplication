import React, { useEffect, useReducer, useState } from 'react';
import { breadcrumbsReducer, foldersReducer } from '../../../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../../../Store copy/Actions/actionTypes';
import { useGetFoldersQuery,useCreateTokenwithSubSitesofItemsIdMutation } from '../../../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import { Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import Loader from '../components/Loader';
import Folders from '../components/Folders';
import Breadcrumb from '../components/Breadcrumb';
import { deleteFileReducer, renameFileReducer } from '../../../../Store copy/Reducer/drivesReducer';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
import { useStyles } from './Styles';
import WorkspaceNavigation from "../../WorkspaceNavigation"
import SubFolder from '../components/SubFolder';
// const initialState = {
//   loading: true,
//   error: '',
//   folders: [],
// };
const FolderScreen = () => {
  const classes = useStyles();
  const [subdrive, setSubDrive] = useState<any>([]);
// const { data, error, isLoading } = useGetFoldersQuery('');
const [sendItem, { data, isLoading, error }] = useCreateTokenwithSubSitesofItemsIdMutation();

console.log(data?.response,'tttttttttttttttttttttttttttttttttttttttttttttt')
let location = useLocation();
console.log(location.state);
//@ts-ignore
const {tokens,sitesId,drivesId,folderData = []} = location.state;
console.log(tokens,sitesId,drivesId,'yjytjtyjtj')
console.log(folderData,'yyjyjyjyjyyj')
//   console.log(data,'jjhgdfhgfdhfghfj')
const [visible, setVisible] = useState(true);
const navigate = useNavigate();
const folderClickHandler =  (id: string,name:string) => {
  
  console.log(id,name,'thj7j76k7kjtyjfyjfjffffffffffffffffffffffff')

  const Data = {
    // token:tokens,
    subSiteId:sitesId,
    subDriveId:drivesId,
    itemId:id
  }
 console.log(Data,'ytrrttutyututyut')
 sendItem(Data)

//  function sendId(){
//   const requestOptions = {
//       method: 'POST',
//       // mode:'no-cors',
//       headers: { 
//           'Content-Type': 'application/json',

//       },
//       body: JSON.stringify(Data)
     
//   };
//   fetch('http://localhost:4000/api/v1/sites/subSites', requestOptions)
//       .then(response => response.json())
//        .then(data =>setSubDrive(data.DriveSubItems));
// }
// sendId();
//   function send(){
//       if (id) {
  // navigate('/workspace/drives/sites', { state:id   });

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id})
//     };
//     fetch('http://localhost:4000/ItemId', requestOptions)
//       .then(response => response.json())

//   }
//    navigate('/workspace/drives/subfolders')
//    setVisible(!visible)
// }
// send();

};

console.log(subdrive,'thtj7j7jujhththtrhtjyttjuk8kklillloililikuyjujyujuy')

const deleteFileHandler = async (id: string,name:string) => {

    console.log(id,name,'uyukukuikuyk')
    // @ts-ignore
    // await deleteFileAction(id).then(() => getRootFolderAction(driveId));
    // // @ts-ignore
    // await getRootFolderAction(driveId);
};


  return (
    // <div>
    //   {/* {isLoading ? (
    //   <p>Loading...</p>
    // ) : data ? (
    //   <pre>{JSON.stringify(data, undefined, 2)}</pre>
    // ) : error ? (
    //   <p>ERROR</p>
    // ) : null} */}
    // {visible ? (
    // <Folders  onClick={folderClickHandler}/>)
    // :(
    //  <SubFolder />
    // )}
    // </div>
    <>
    {/* bdfbfdbfdbdfbfb */}
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
                                    <IconButton color="primary"
                                        sx={{ padding: '0', float: 'right' }}>
                                        <CachedIcon sx={{ color: '#333333', opacity: 0.5 }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12}>
                                        {/* {loadingDeleteFile && <Loader />}
                                        {errorDeleteFile && <p>{errorDeleteFile}</p>}
                                        {loadingRenameFile && <Loader />}
                                        {errorRenameFile && <p>{errorRenameFile}</p>} */}
                                        {/* {loadingFolder ? (
                                            <Loader />
                                        ) : errorFolder ? (
                                            <p>{errorFolder}</p>
                                        ) : ( */}
                                            <>
                                                {/* <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs}
                                                    getChildHandler={breadcrumbClickHandler} /> */}
                                                <Folders folders={folderData}
                                                    onClick={folderClickHandler}
                                                    subfolder={data?.response}
                                                    onDelete={deleteFileHandler}
                                                    // onDownload={downloadHandler}
                                                    // onRename={renameFileHandler}
                                                />
                                                {/* thtyhrth */}
                                            </>
                                        {/* )} */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </AuthenticatedTemplate>
    </>
    // <>hhhhhhhhhhhhhhh</>
  )
}

export default FolderScreen