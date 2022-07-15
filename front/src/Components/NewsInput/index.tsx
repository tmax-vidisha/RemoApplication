import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";

import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import { configuration } from "../../index";
import { PublicClientApplication } from "@azure/msal-browser";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useStyles } from "./Styles";
import { useGetNewsQuery,useCreateNewsInputMutation,useCreateTokenwithDataMutation,useUpdateNewsTokenMutation,useGetAllNewsQuery,useCreateTokenwithNewsDataMutation } from '../../services/APIs';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PublishSharpIcon from "@mui/icons-material/PublishSharp";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import moment from "moment";

const NewsInput = () => {
    const classes = useStyles();
    // const { data, error, isLoading } = useGetNewsQuery('')
    // const [sendItem] = useCreateNewsInputMutation();
    const [sendItem] = useCreateTokenwithNewsDataMutation();
    // const [updateToken,{data,isLoading} ] = useUpdateNewsTokenMutation();
    // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
  const [newsItems, setNewsItems] = useState<any>([]);
  const [newsTitle, setNewsTitle] = useState<any>([]);
  const [tokens, setTokens] = useState<string>();
  const [name,setName] = useState<string>('');
  const pca = new PublicClientApplication(configuration);
  const [open, setOpen] = useState(false);
  const accounts = pca.getAllAccounts();
  useEffect(()=>{
    async function getAccessToken() {
      if (accounts.length > 0) {
        const request = {
          scopes: ['user.read'],
          account: accounts[0]
        }
        const accessToken = await pca.acquireTokenSilent(request).then((response) => {
         
          // updateToken(response.accessToken);
           setTokens(response.accessToken)
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

  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const [fileSelected, setFileSelected] = useState<any>('');
  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    // if (!fileList) return;
    //@ts-ignore
    setName(fileList[0].name)
    // setFileSelected(fileList[0]);
    let reader = new FileReader();
    //@ts-ignore
    reader.readAsDataURL(fileList[0])
    reader.onload= (e) =>{
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
    //  console.log(currentContentAsHTML);
    setConvertedContent(currentContentAsHTML);
  };

  const handleChangeTitleField = (event: any) => {
    setNewsTitle(event.target.value);
  };
  
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

    //       const newContents = {
    //         fields: {
    //           Title: newsTitle,
    //           Description: convertedContent,
    //           NewsImage: JSON.stringify(json)
    //         },
    //       };

    //       var listId = app.listInfo?.News;
    //       if (listId != null) {
    //         let response = await postNews(
    //           app.authProvider!,
    //           app.siteInfo?.siteId,
    //           listId,
    //           newContents
    //         );
    //         handleClose();
    //         window.location.reload();
    //       }
    //     }
    //   }
    // } catch (err: any) {
    //   app.displayError!(err.message);
    // }
    const newContents = {
                fields: {
                  Title: newsTitle,
                  Description: convertedContent,
                  NewsImage: fileSelected,
                  Name:name
                },
              };
              const newData = {
                  token:tokens,
                  newstitle: newsTitle,
                  newsdesc: convertedContent,
                  newspic: fileSelected,
                  newspicname:name
               
              };
            sendItem(newData)
    console.log('click')
  };
  const { data, error, isLoading } =  useGetAllNewsQuery(tokens);
    console.log(data,'888ddd88ttuytuytu888')
  return (
    <AuthenticatedTemplate>
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                Content Editor
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs sx={{ color: "white", opacity: 0.8 }}
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link className={classes.breadLinks} color="inherit" href="/">
                    Home
                  </Link>
                  <Typography>News</Typography>
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
                  var newsTitle = fields?.Title;
                  var newsMessageAsText = fields.Description;
                  var newsIsActive = fields.IsActive;
                  var createdDate = moment(
                    fields.Modified
                  ).fromNow();
                  var img = fields?.newsUrl
                  // var completePath;
                  // if (fields.NewsImage != null) {
                  //   var profilePic = JSON.parse(fields.NewsImage);
                  //   if (profilePic.serverUrl) {
                  //     completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
                  //   } else {
                  //     completePath = profilePic.serverRelativeUrl
                  //   }
                  // }
                  // let RawImageTxt = fields.newsUrl;

                  // var ImgObj = JSON.parse(RawImageTxt);    
                  return (
                    <TableRow key={index}
                      className={classes.tableCell}
                      sx={{
                        verticalAlign: "top !important",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      {/* <TableCell sx={{ textAlign: "center" }}>1</TableCell> */}
                      <TableCell>{newsTitle}</TableCell>
                      <TableCell>
                        <div className={classes.tableDesc}>
                          <Fragment>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: newsMessageAsText,
                              }}
                            />
                          </Fragment>
                        </div>
                      </TableCell>
                      <TableCell><img style={{ width: "93px", height: "82px" }} src={img} /></TableCell>
                      <TableCell sx={{ minWidth: 80 }}>{createdDate}</TableCell>
                      <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                        <span className={classes.tableStatusNo}>{newsIsActive ? "Yes" : "No"}</span>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <Fragment>
          <Dialog
            fullWidth
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
              <Paper
                elevation={0}
                className={classes.ContentAreaBox}
              >
                <>
                  <Grid xs={12} item>
                    <Typography component="div" sx={{ pb: 2 }}>
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
                </>
              </Paper>
            </DialogContent>

          </Dialog>
        </Fragment>
      </Container>
    </AuthenticatedTemplate>
  )
}

export default NewsInput