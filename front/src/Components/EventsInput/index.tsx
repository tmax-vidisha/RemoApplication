import { AuthenticatedTemplate } from "@azure/msal-react";
import { Fragment, useEffect, useState } from "react";
import {
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
  
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import { Link } from 'react-router-dom';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PublishSharpIcon from "@mui/icons-material/PublishSharp";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DateTimePicker from '@mui/lab/DateTimePicker';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { configuration } from "../../index";
import moment from "moment";


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from "@mui/lab";
import { useGetEventsQuery,useCreateEventMutation,useCreateTokenwithDataMutation, useUpdateTokenMutation,useGetAllEventsQuery,
              useCreateTokenwithEventDataMutation } from "../../services/APIs";
import { PublicClientApplication } from "@azure/msal-browser";
import SubCalendar from "../Events/SubCalendar";


interface IFolderProps {
  // event: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
  data:any;
  error:any;
  isLoading:any;
  onSubmit: (object: any) => void;
}

// const EventsInput = () => {
const EventsInput: React.FC<IFolderProps> = (props: IFolderProps) => {

    const classes = useStyles();
    const { data, error, isLoading, onSubmit } =  props;
    // const { data, error, isLoading } = useGetEventsQuery('');
    // const [sendItem] = useCreateEventMutation();
    
    // const [sendItem] = useCreateTokenwithEventDataMutation();
    // const [updateToken,{data,isLoading} ] = useUpdateTokenMutation();
    // console.log(data?.response,'thfhfhfhfhfhfh')
    const [eventTitle, setEventTitle] = useState<any>([]);
    const [tokens, setTokens] = useState<string>();
    // const pca = new PublicClientApplication(configuration);
    const [eventItems, setEventItems] = useState<any>([]);
  
    const [open, setOpen] = useState(false);


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
    //          setTokens(response.accessToken)
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


     console.log(data,'888ddd88ttuytuytu888')
    const handleClickOpen = () => {
      setOpen(true);
    };
     const handleClose = () => {
       setOpen(false);
     };
    

  const [startDate, setStartDate] = useState<Date | null>(
    new Date(),//2021-11-18T21:11:54
  );
  const [endDate, setEndDate] = useState<Date | null>(
    new Date(),//2021-11-18T21:11:54
  );
  const startDateHandleChange = (newValue: Date | null) => {
    setStartDate(newValue);
  };
  const endDateHandleChange = (newValue: Date | null) => {
    setEndDate(newValue);
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
    setEventTitle(event.target.value);
  };
  
  const eventObj = {
    fields: {
      Title: eventTitle,
      EventDate: startDate?.toUTCString(),
      EndDate: endDate?.toUTCString(),
      Description: convertedContent,
    },
  };
  // console.log(tokens,'oiululul')
  const Data = {
      // token:tokens,
      eventtitle: eventTitle,
      eventdate: startDate?.toUTCString(),
      enddate: endDate?.toUTCString(),
      eventdesc: convertedContent,
  
  };
  const handleSubmitClick = async () => {
    // var listId = app.listInfo?.Event;
    // if (listId != null) {
    //  // console.log(startDate?.toUTCString());
    //   let response = await postEvent(
    //     app.authProvider!,
    //     app.siteInfo?.siteId,
    //     listId,
    //     eventObj
    //   );
    //   handleClose();
    //   window.location.reload();
    // }
    // sendItem(eventObj);
  //  sendItem(Data);
      onSubmit(Data)
    console.log('click')
  };

  return (
    <AuthenticatedTemplate>
    <Container className={classes.contentEditorWidth}>
    <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
               <Link to="/ContentEditor" style={{color:"#009BAD", fontSize:"14px"}}>Content Editor</Link>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link to="/"  className={classes.breadLinks} color="inherit" >
                    Home
                  </Link>
                  <Typography>Events</Typography>
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
            <Link to="/ContentEditor" style={{color:"#009BAD", fontSize:"14px"}} >
                  Content Editor
                </Link>
         
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
              <TableCell sx={{ minWidth: 120 }}>Start Date</TableCell>
              <TableCell sx={{ minWidth: 120 }}>End Date</TableCell>
              <TableCell sx={{ minWidth: 80 }}>Modified On</TableCell>
              <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                Is Active
              </TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {eventItems &&
              eventItems.map((item: any, index: any) => {
                const { fields = {} } = item;

                var eventTitle = fields?.Title;
                var eventStart = moment(fields?.EventDate).format("llll");
                var eventDate = moment(fields?.EndDate).format("llll");

                var eventIsActive = fields.IsActive;
                var createdDate = moment(
                  fields.Modified
                ).fromNow();

                return (
                  <TableRow key={index}
                    className={classes.tableCell}
                    sx={{
                      verticalAlign: "top !important",
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>{eventTitle}</TableCell>

                    <TableCell sx={{ minWidth: 220 }}>{eventStart}</TableCell>
                    <TableCell sx={{ minWidth: 220 }}>{eventDate}</TableCell>
                    <TableCell sx={{ minWidth: 80 }}>{createdDate}</TableCell>
                    <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                      <span className={classes.tableStatusNo}>{eventIsActive ? "Yes" : "No"}</span>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody> */}
        </Table>
      </TableContainer>


              <Paper
                elevation={0}
                className={classes.ContentAreaBox}>
                <div>
                  <Grid item xs={12} >
                    <Typography component="div" sx={{ pb: 2 }}>
                      <TextField
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

                  <Grid xs={12}>
                  <SubCalendar/>
                      {/* <Grid item xs={12} >
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Typography component="div" sx={{ pb: 2 }}>
                          <DateTimePicker
                          //@ts-ignore
                            label="Event Start Date"
                            value={startDate}
                            onChange={startDateHandleChange}
                            renderInput={(params: any) => <TextField {...params} />}
                          />
                        </Typography>
                        <Typography component="div" sx={{ pb: 2 }}>
                          <DateTimePicker
                          //@ts-ignore
                            label="Event End Date"
                            value={endDate}
                            onChange={endDateHandleChange}
                            renderInput={(params: any) => <TextField {...params} />}
                          />
                         
                        </Typography>
                        </LocalizationProvider>
                      </Grid> */}
                      {/* <Grid xs={6} item>
                      
                      </Grid>
                   */}
                  </Grid>
                  <Grid xs={12} item>
                    <Typography component="div" sx={{ pb: 1 }}>
                      <div className={classes.richEditor}>
                        <Editor
                          editorState={editorState}
                          onEditorStateChange={handleEditorChange}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName={classes.toolbarClass}

                        />
                      </Typography>
                    </Grid>
                  </LocalizationProvider>
                </Grid>
                <Grid xs={12} item>
                  <Typography component="div" sx={{ pb: 1 }}>
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

                <Grid xs={12} item>
                  <Typography component="div" sx={{ pb: 1 }}>
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
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={startDate}
        onChange={startDateHandleChange}
      />
    </LocalizationProvider> */}
              </div>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </Container>
  </AuthenticatedTemplate>
  )
}

export default EventsInput