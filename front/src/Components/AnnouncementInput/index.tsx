import { Fragment, useEffect, useState } from "react";
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
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useStyles } from "./Styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PublishSharpIcon from "@mui/icons-material/PublishSharp";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";

import { PublicClientApplication } from "@azure/msal-browser";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { configuration } from "../../index";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useGetAnnouncementInfoQuery,useCreateAnnouncementMutation,useCreateTokenwithDataMutation,useGetAllAnnoncementsQuery } from '../../services/APIs';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import moment from "moment-timezone";

const AnnoncementInput = () => {
  
    // const { data, error, isLoading } =   useGetAnnouncementInfoQuery('');
    // const [sendItem] = useCreateAnnouncementMutation();
    const [sendItem] = useCreateTokenwithDataMutation();
    const classes = useStyles();
    const [AnnouncementTitle, setAnnouncementTitle] = useState<any>([]);
    const [AnnouncementItems, setAnnouncementItems] = useState<any>([]);
    const [tokens, setTokens] = useState<string>();
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
  
    const [fileSelected, setFileSelected] = useState<File>();
  
    const uploadFile = function (
      e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) {
      if (fileSelected) {
        const formData = new FormData();
        formData.append("image", fileSelected, fileSelected.name);
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
      // console.log(currentContentAsHTML);
      setConvertedContent(currentContentAsHTML);
    };
  
    const handleChangeTitleField = (event: any) => {
      setAnnouncementTitle(event.target.value);
    };

    const handleSubmitClick = async () => {
        // try {
          // const AnnouncementJSON = {
          //   fields: {
          //     Title: AnnouncementTitle,
          //     Desc: convertedContent,
          //   },
          // };
          const announcementData ={
            token :tokens,
            title:AnnouncementTitle,
            desc:convertedContent
          }
        //   var listId = app.listInfo?.Announcement;
        //   if (listId != null) {
        //     let response = await postAnnouncement(
        //       app.authProvider!,
        //       app.siteInfo?.siteId,
        //       listId,
        //       AnnouncementJSON
        //     );
        //   }
        // } catch (err: any) {
        //   app.displayError!(err.message);
        // }
        sendItem(announcementData)
        // sendItem(AnnouncementJSON)
        console.log('click');
      };

      const { data, error, isLoading } =   useGetAllAnnoncementsQuery(tokens)
      console.log(data,'980ccccccc9090')
  return (
    <AuthenticatedTemplate>
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                Announcements
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" className={classes.breadLinks} />}
                  aria-label="breadcrumb"
                >
                  <Link className={classes.breadLinks} color="inherit" href="/">
                    Home
                  </Link>
                  <Typography className={classes.breadLinks}>Announcements</Typography>
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

                <TableCell sx={{ minWidth: 80 }}>Modified On</TableCell>
                <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                  Is Active
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.response &&
                data?.response?.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  var annTitle = fields?.Title;
                  var annMessageAsText = fields.Desc;
                  var annIsActive = fields.IsActive;
                  var createdDate = moment(
                    fields.Modified
                  ).fromNow();
                  return (
                    <TableRow
                      className={classes.tableCell}
                      sx={{
                        verticalAlign: "top !important",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{annTitle}</TableCell>
                      <TableCell>
                        <div className={classes.tableDesc}>
                          <Fragment>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: annMessageAsText,
                              }}
                            />
                          </Fragment>
                        </div>
                      </TableCell>
                      <TableCell sx={{ minWidth: 80 }}>{createdDate}</TableCell>
                      <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                        <span className={classes.tableStatusNo}>{annIsActive ? "Yes" : "No"}</span>
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
              <Paper elevation={0}
              >
                <Typography component="div" sx={{ pb: 2 }}>
                  <Grid xs={12} item>
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
                  </Grid>
                </Typography>
                <Typography component="div" sx={{ pb: 2 }}>
                  <Grid xs={12} item>
                    <div className={classes.richEditor}>
                      <Editor
                        editorState={editorState}
                        onEditorStateChange={handleEditorChange}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName={classes.toolbarClass}
                      />
                    </div>
                  </Grid>
                </Typography>

                {/* <Grid xs={6} item>
                  <Typography component="div" sx={{ pb: 1 }}>
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
                </Grid> */}

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

export default AnnoncementInput