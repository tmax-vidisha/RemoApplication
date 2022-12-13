import React from 'react'
import { AuthenticatedTemplate } from "@azure/msal-react";
import { Fragment, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import { configuration } from "../../index";
import { PublicClientApplication } from "@azure/msal-browser";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useGetEmployeeHighLightQuery, useCreateEmployeeHighlightMutation, useCreateTokenwithDataMutation, useUpdateEmpTokenMutation, useGetAllEmpQuery, useCreateTokenwithEmpDataMutation } from '../../services/APIs';
import { Link } from 'react-router-dom';

var moment = require("moment-timezone");


interface IFolderProps {
  // employee: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
  data: any;
  error: any;
  isLoading: any;
  onSubmit: (object: any) => void;
}

// const EmployeeHighlightInput = () => {
const EmployeeHighlightInput: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { data, error, isLoading, onSubmit } = props
  // const { data, error, isLoading } = useGetEmployeeHighLightQuery('');
  // const [sendItem] = useCreateEmployeeHighlightMutation();

  // const [sendItem] = useCreateTokenwithEmpDataMutation();
  // const [updateToken,{data,isLoading} ] = useUpdateEmpTokenMutation();
  // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
  const [empHight, setEmpHight] = useState<any>([]);
  const [empTitle, setEmpTitle] = useState<any>([]);
  const [dept, setDept] = useState<any>([]);
  const [name, setName] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<string>('');
  const [tokens, setTokens] = useState<string>();
  // const pca = new PublicClientApplication(configuration);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [fileSelected, setFileSelected] = useState<any>('');
  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    //@ts-ignore
    setPhoto(fileList[0].name)
    //   if (!fileList) return;
    //   setFileSelected(fileList[0]);
    let reader = new FileReader();
    //@ts-ignore
    reader.readAsDataURL(fileList[0])
    reader.onload = (e) => {
      setFileSelected(e.target?.result)

    }
  };

  const handleChangeEmpTitle = (event: any) => {
    setEmpTitle(event.target.value);
  };
  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleChangeDept = (event: any) => {
    setDept(event.target.value);
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

    //       const empItems = {
    //         fields: {
    //           EmployeeTitle: empTitle,
    //           Title: name,
    //           Dept: dept,
    //           EmpImage: JSON.stringify(json)
    //         },
    //       };

    //       var listId = app.listInfo?.EmployeeHighlights;
    //       if (listId != null) {
    //         let response = await postEmployeeHight(
    //           app.authProvider!,
    //           app.siteInfo?.siteId,
    //           listId,
    //           empItems
    //         );
    //         handleClose();
    //         window.location.reload();
    //       }
    //     }
    //   }
    // } catch (err: any) {
    //   app.displayError!(err.message);
    // }
    const empItems = {
      fields: {
        EmployeeTitle: empTitle,
        Title: name,
        Dept: dept,
        EmpImage: fileSelected,
        PhotoName: photo
      },
    };
    const Data = {
      // token:tokens,
      employyetitle: empTitle,
      empname: name,
      empdept: dept,
      emppic: fileSelected,
      emppicname: photo
    }
    // sendItem(Data);
    onSubmit(Data)
    console.log('click')
  };

  console.log(data, '980ccccccc9090')

  return (
    <AuthenticatedTemplate>
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                <Link to="/ContentEditor" color="inherit" >
                  Content Editor
                </Link>

              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link to="/" className={classes.breadLinks} color="inherit" >
                    Home
                  </Link>
                  <Typography>Employee Highlights </Typography>
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

        {/* <TableContainer component={Paper} elevation={0} sx={{ marginBottom: "15px" }}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell sx={{ minWidth: 120 }}>Employee Title</TableCell>
                <TableCell>Name</TableCell>
                <TableCell sx={{ minWidth: 150 }}>Department</TableCell>
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
                  var empTitle = fields?.EmployeeTitle;
                  var name = fields?.Title;
                  var dept = fields.Dept;
                  var img = fields?.empUrl;
                  var isActive = fields.IsActive;
                  var createdDate = moment(
                    fields.Modified
                  ).fromNow();

                  // var profilePic = JSON.parse(fields.EmpImage);
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
                      <TableCell>{empTitle}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{dept} </TableCell>
                      <TableCell><img style={{ width: "93px", height: "82px" }} src={img} /></TableCell>
                      <TableCell sx={{ minWidth: 80 }}>{createdDate}</TableCell>
                      <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                        <span className={classes.tableStatusNo}>{isActive ? "Yes" : "No"}</span>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer> */}
        <Fragment>
          <Dialog
            maxWidth="md"
            fullWidth
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
                      label="Employee Title"
                      placeholder="Please enter the employee title"
                      onChange={handleChangeEmpTitle}
                      fullWidth
                      margin="dense"
                      size="small"
                    />
                  </Typography>
                  <Typography component="div" sx={{ pb: 1 }}>
                    <TextField
                      InputLabelProps={{ style: { color: '#333333' } }}
                      autoComplete="off"
                      label="Employee Name"
                      placeholder="Please enter the employee name"
                      onChange={handleChangeName}
                      fullWidth
                      margin="dense"
                      size="small"
                    />
                  </Typography>
                  <Typography component="div" sx={{ pb: 1 }}>
                    <TextField
                      InputLabelProps={{ style: { color: '#333333' } }}
                      autoComplete="off"
                      label="Department"
                      placeholder="Please enter the department"
                      onChange={handleChangeDept}
                      fullWidth
                      margin="dense"
                      size="small"
                    />
                  </Typography>
                </Grid>

                <Grid xs={6} item>
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
              </Paper>
            </DialogContent>
          </Dialog>
        </Fragment>
      </Container>
    </AuthenticatedTemplate>
  )
}

export default EmployeeHighlightInput