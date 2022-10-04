import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import {
  NavLink as RouterNavLink,

} from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";

import {
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  
  Paper,
  Typography,
} from "@mui/material";
import { useGetCeoMessageQuery, useCreateCeoMessageMutation,useCreateTokenwithDataMutation,useUpdateCeoMsgTokenMutation,useGetAllCeoMsgQuery,useCreateTokenwithCeoDataMutation } from "../../services/APIs";
import { useStyles } from "./Styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PublicClientApplication } from "@azure/msal-browser";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { configuration } from "../../index";
import { Link } from 'react-router-dom';


var moment = require("moment-timezone");
interface IFolderProps {
  // ceomsg: any;
  data:any, 
  error:any,
  isLoading:any,
  onSubmit: (object: any) => void;
}

// const CeoMessageInput = () => {
const CeoMessageInput: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();

  // const { data, error, isLoading } = useGetCeoMessageQuery('')
  // const [sendItem] = useCreateCeoMessageMutation();
  // const [sendItem] = useCreateTokenwithCeoDataMutation();
  // const [sendData] = useCreatedataMutation();
  const { data, error, isLoading, onSubmit } =   props
  const [ceoMessage, setCEOMessage] = useState<any>([]);
  const [CeoTitle, setCeoTitle] = useState<any>([]);
  const [CeoPosition, setPosition] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [name,setName] = useState<string>('');
  // const [updateToken,{data,isLoading} ] = useUpdateCeoMsgTokenMutation();
  //   console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
  // const pca = new PublicClientApplication(configuration);
  const [token, setToken] = useState<string>();
  // const accounts = pca.getAllAccounts();
  // useEffect(()=>{
  //   async function getAccessToken() {
  //     if (accounts.length > 0) {
  //       const request = {
  //         scopes: ['user.read'],
  //         account: accounts[0]
  //       }
  //       const accessToken = await pca.acquireTokenSilent(request).then((response) => {
         
  //         // updateToken(response.accessToken);
  //          setToken(response.accessToken)
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

  // },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  const [fileSelected, setFileSelected] = useState<any>('');
 
  const handleImageChange = function (e: any) {
    const fileList = e.target.files;
    // console.log(fileList[0].name,'uuuu')
    setName(fileList[0].name)
    // console.log(name,'lllllll')
    // if (!fileList) return;
    // setFileSelected(fileList[0]);
    let reader = new FileReader();
    //@ts-ignore
    reader.readAsDataURL(fileList[0])
    reader.onload= (e) =>{
      // console.log(e.target?.result)
      setFileSelected(e.target?.result)
      
    }
     
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState<any>(null);
  const handleEditorChange = (state: any) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const handleChangeTitleField = (event: any) => {
    setCeoTitle(event.target.value);
  };
  const handleChangePosition = (event: any) => {
    setPosition(event.target.value);
  };
  // useEffect(()=>{
  //   fetch('http://localhost:4000/image')
  //   .then(response => response.json())
  //   .then(data => setCEOMessage(data.fields));

  // })
  
  const handleSubmitClick = async () => {
    // try {
    //   var AssetListId = app.driveInfo?.AssetLib;
    //   if (AssetListId != null) {
    //     const response = await uploadItem(
    //       app.authProvider!,
    //       app.siteInfo?.siteId,
    //       AssetListId,
    //       fileSelected
    //     );

    //     if (response != null) {
    //       var json = {
    //         fileName: response.name,
    //         serverRelativeUrl: response.webUrl,
    //       };
    //  console.log(fileSelected,'jjjjj')
    

          const CeoItems = {
            fields: {
              Title: "CEO Message",
              Description: convertedContent,
              UserName: CeoTitle,
              Position: CeoPosition,
              ProfilePhoto: fileSelected,
              Name:name
            },
          };
          const CeoData = {
              // token:tokens,
              ceotitle: "CEO Message",
              ceodesc: convertedContent,
              ceousername: CeoTitle,
              ceoposition: CeoPosition,
              ceopic: fileSelected,
              ceopicname:name
            
          };
      //  await sendItem(CeoData);
      onSubmit(CeoData)
      // var fff = fileSelected.name
      // console.log(fff,'rrr')
        // await sendData(fff)
    //       var listId = app.listInfo?.ceoMessage;
    //       if (listId != null) {
    //         let response = await postCeoMessage(
    //           app.authProvider!,
    //           app.siteInfo?.siteId,
    //           listId,
    //           CeoItems
    //         );
    //         handleClose();
    //         window.location.reload();
    //       }
    //     }
    //   }
    // } catch (err: any) {
    //   app.displayError!(err.message);
    // }
    console.log('click')
  };

  
  console.log(data,'980ccccccc9090')

  return (
    
    <AuthenticatedTemplate>
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
               <Link to="/ContentEditor">Content Editor</Link> 
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link className={classes.breadLinks} color="inherit" to="/">
                    Home
                  </Link>
                  <Typography>CEO Message</Typography>
                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>

        <CardContent className={classes.contentArea}>
          <Typography
            variant="h5"
            component="h5"
            className={classes.breadcrumbsHeader}
          >
            Content Editor
          </Typography>
          <Button
            variant="contained"
            className={classes.breadcrumbsLinks}
            size="small"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleClickOpen}
          >
            Add New
          </Button>
        </CardContent>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell sx={{ minWidth: 120 }}>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell sx={{ minWidth: 150 }}>Position</TableCell>
                <TableCell sx={{ minWidth: 80 }}>Image</TableCell>
                <TableCell sx={{ minWidth: 80 }}>Modified On</TableCell>
                <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                  Is Active
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.response &&
                data?.response?.value.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  var ceoTitle = fields?.Title;
                  var ceoUserName = fields?.UserName;
                  var ceoMessageAsText = fields.Description;
                  var ceoIsActive = fields.IsActive;
                  var createdDate = moment(
                    fields.Modified
                  ).fromNow();

                  var Position = fields.Position;
                  var img = fields?.profileUrl;
                  // var profilePic = JSON.parse(fields.ProfilePhoto);
                  // var completePath;
                  // if (profilePic.serverUrl) {
                  //   completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
                  // } else {
                  //   completePath = profilePic.serverRelativeUrl
                  // }

                  return (
                    <TableRow
                      className={classes.tableCell}
                      sx={{
                        verticalAlign: "top !important",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{ceoUserName}</TableCell>
                      <TableCell>
                        <p className={classes.tableDesc}>
                          <Fragment>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: ceoMessageAsText,
                              }}
                            />
                          </Fragment>
                        </p>
                      </TableCell>
                      <TableCell>{Position} </TableCell>
                      <TableCell><img style={{ width: "93px", height: "82px" }} src={img} /></TableCell>
                      <TableCell sx={{ minWidth: 80 }}>{createdDate}</TableCell>
                      <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                        <span className={classes.tableStatusNo}>{ceoIsActive ? "Yes" : "No"}</span>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
            
          </Table>
        </TableContainer>

        <Fragment>
          <Dialog
            maxWidth="md"
            open={open}
            onClose={handleClose}
          >
            <Box sx={{ display: "flex", padding: "20px 25px", background: "#f8f8f8" }}>
              <DialogTitle sx={{ pb: 0, padding: 0, lineHeight: "1.25rem", fontSize: "1.50rem" }}> Add New Item</DialogTitle>
              <Box sx={{ flexGrow: 1 }}></Box>
              <DialogActions sx={{ padding: 0 }}>
                <Button onClick={handleClose} sx={{ padding: 0, minWidth: "auto", color: "#a5a5a5" }}> <CloseOutlinedIcon /> </Button>
              </DialogActions>
            </Box>
            <DialogContent>
              <Paper elevation={0}>
                <Grid xs={12} item>
                  <Typography component="div" sx={{ pb: 1 }}>
                    <TextField
                      InputLabelProps={{ style: { color: '#333333' } }}
                      autoComplete="off"
                      label="Title"
                      placeholder="Please enter the title"
                      onChange={handleChangeTitleField}
                      fullWidth
                      margin="dense"
                      size="small"
                    />
                  </Typography>
                  <Typography component="div" sx={{ pb: 2 }}>
                    <TextField
                      InputLabelProps={{ style: { color: '#333333' } }}
                      autoComplete="off"
                      label="Position"
                      placeholder="Please enter the position"
                      onChange={handleChangePosition}
                      fullWidth
                      margin="dense"
                      size="small"
                    />
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Typography component="div" sx={{ pb: 2 }}>
                    <div className={classes.richEditor}>
                      <Editor
                        editorState={editorState}
                        onEditorStateChange={handleEditorChange}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName={classes.toolbarClass}
                      />
                    </div>
                  </Typography>
                </Grid>

                <Grid xs={6} item>
                  <Typography component="div" sx={{ pb: 2 }}>
                    <label style={{ fontSize: "12px" }}>Attachments</label>
                    <Card elevation={0}>
                      <input
                        accept="image/*"
                        id="photo"
                        name="photo"
                        type="file"
                        multiple={false}
                        onChange={handleImageChange}
                      />
                    </Card>
                  </Typography>
                </Grid>

                <Grid xs={12} item>
                  <Typography component="div" sx={{ pb: 2 }}>
                    <div className={classes.rootButton}>
                      <Button
                        variant="contained"
                        className={classes.buttonSubmit}
                        size="small"
                        onClick={handleSubmitClick}
                      >
                        Submit
                      </Button>
                      <Button
                        className={classes.buttonClear}
                        sx={{ textTransform: "capitalize" }}
                        size="small"
                      >
                        Clear
                      </Button>
                    </div>
                  </Typography>
                </Grid>

              </Paper>
            </DialogContent>

          </Dialog>
        </Fragment>
      </Container>
    </AuthenticatedTemplate>
   
  )
}

export default CeoMessageInput