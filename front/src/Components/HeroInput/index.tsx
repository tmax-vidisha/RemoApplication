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
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import { configuration } from "../../index";
import { PublicClientApplication } from "@azure/msal-browser";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PublishSharpIcon from "@mui/icons-material/PublishSharp";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useGetHeroImageQuery,useCreateHeroMutation,useGetHeroImageInputQuery,useCreateTokenwithDataMutation,useGetAllHeroQuery,
            useCreateTokenwithHeroDataMutation  } from "../../services/APIs";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import moment from "moment";
const HeroInput = () => {
    // const { data, error, isLoading } = useGetHeroImageInputQuery('');
    // console.log(data,'uuu')
    // const [sendItem] = useCreateHeroMutation();
    const [sendItem] = useCreateTokenwithHeroDataMutation();
    const [heroItems, setHeroItems] = useState<any>([]);
  const [HeroTitle, setHeroTitle] = useState<any>([]);
  const [name,setName] = useState<string>('');
  const [tokens, setTokens] = useState<string>();
  const pca = new PublicClientApplication(configuration);
  const classes = useStyles();
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

  const uploadFile = function (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
    }
  };

  const handleChangeTitleField = (event: any) => {
    setHeroTitle(event.target.value);
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

          // const heroItems = {
          //   fields: {
          //     Title: HeroTitle,
          //     HeroPic: fileSelected,
          //     Name:name
          //   },
          // };
          const  heroData ={
            token:tokens,
            herotitle:HeroTitle,
            heropic:fileSelected,
            picname:name
          }
          sendItem( heroData);

    //       var listId = app.listInfo?.HeroImages;
    //       if (listId != null) {
    //         let response = await postHeroImages(
    //           app.authProvider!,
    //           app.siteInfo?.siteId,
    //           listId,
    //           heroItems
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

  const { data, error, isLoading } =  useGetAllHeroQuery(tokens);
  console.log(data?.response.value,'888ddd88txcccsssssssssssssscccccccccccctuytuytu888')

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
              <Breadcrumbs
                className={classes.breadcrumbs}
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link className={classes.breadLinks} color="inherit" href="/">
                  Home
                </Link>
                <Typography>Hero Images</Typography>
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
              <TableCell sx={{ minWidth: 120 }}>Hero Images</TableCell>
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
                var heroTitle = fields?.Title;
                var heroIsActive = fields.IsActive;
                var createdDate = moment(
                  fields.Modified
                ).fromNow();
                var img = fields?.heroUrl
                // var heroImg = JSON.parse(fields.HeroPic);
                // var completePath;
                // if (heroImg.serverUrl) {
                //   completePath = heroImg.serverUrl + (heroImg.serverRelativeUrl).replace(heroImg.serverUrl, "");
                // } else {
                //   completePath = heroImg.serverRelativeUrl
                // }
                return (
                  <TableRow
                    className={classes.tableCell}
                    sx={{
                      verticalAlign: "top !important",
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>{heroTitle}</TableCell>
                    <TableCell><img style={{ width: "92px", height: "82px" }} src={img} /></TableCell>
                    <TableCell sx={{ minWidth: 80 }}>{createdDate}</TableCell>
                    <TableCell sx={{ minWidth: 80, textAlign: "center" }}>
                      <span className={classes.tableStatusNo}>{heroIsActive ? "Yes" : "No"}</span>
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

export default HeroInput