import React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from '../Birthday/index';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar, Typography, Paper } from '@mui/material';
import Dropzone from "react-dropzone";
import title from '../../Assets/Images/title.svg';
import image from '../../Assets/Images/image.svg';
import isActive from '../../Assets/Images/isActive.svg';
import Attachment from '../../Assets/Images/Attachment.svg';
import recipientEmail from '../../Assets/Images/recipientEmail.svg';
import shareasemail from '../../Assets/Images/shareasemail.svg';
import descripton from '../../Assets/Images/description.svg';
import comments from '../../Assets/Images/comments.svg';
import publish from '../../Assets/Images/publish.svg';
import Asterisk from '../../Assets/Images/Asterisk.svg';
import like1 from '../../Assets/Images/like1.svg'
import save from '../../Assets/Images/save.svg'
import cancel from '../../Assets/Images/cancel.svg'
import birthday from '../../Assets/Images/birthday.jpg'
import copylink from '../../Assets/Images/copy link.svg';
import { Link } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
import calenderIcon from '../../Assets/Images/calenderGrey.svg';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Menu, MenuItem, Fade, Breadcrumbs, } from '@mui/material';
import { useStyles } from './Styles';
import FileUpload from "react-material-file-upload";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Switch from '@mui/material/Switch';
import girl from "../../Assets/Images/girl.jpg";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import uploadB from "../../Assets/Images/uploadB.svg";
import folder from "../../Assets/Images/folder.svg";
import success from "../../Assets/Images/successB.svg";
import folderW from "../../Assets/Images/whiteFolder.svg";
import UploadFile from './UploadFile';
import Swal from 'sweetalert2';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LightBoxGallery from './LightBoxGallery';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
interface IFolderProps {

  // onClick?: (obj: any) => void;
  data:any,
  isLoading:any,
  isSuccess:any,
}

// const GalleryEditor = () => {
  const GalleryEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const {data,isLoading,isSuccess} =props
  console.log(data,'lllsssssssslll')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openOn = Boolean(anchorEl);

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const openTwo = Boolean(anchorE2);
  const handleClickTwo = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorE2(null);
  };

  const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
  const openThree = Boolean(anchorE3);
  const handleClickThree = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseThree = () => {
    setAnchorE3(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openOne, setOpenOne] = React.useState(false);
  const handleClickOne = (popup: any) => {
    setOpenOne(true);
  };

  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const [text, setText] = useState<string>('');

  const handleOnChange = (e: any) => {
    setText(e.target.value);
    console.log(e.target.value);
  }
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const Data = {
      name: text,

    }
    //  console.log(fd)
    // await sendItem(Data)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Create Successfully'
    });


    handleCloseOne();
  }
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files: any) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file: any, MAX_COUNT: any) => {
      // @ts-ignore
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        // @ts-ignore
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(` you can only ass a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    })

    if (!limitExceeded) setUploadedFiles(uploaded)
  }
  const handleFileEvent = (e: any) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles);
  }
  const [showResults, setShowResults] = React.useState(false)
  const onClickShow = () => {
    setShowResults(true);
  }
  const [show, setShow] = useState<boolean>(false);
  const handleClickHide=()=>{
    setShow(true)
}

  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        <Grid className={classes.upperPart}>
          {/* <Grid style={{color:'#18496a'}}>Picture Gallery </Grid> */}
          <div className={classes.contentHeader} >
            <Typography variant="caption" display="block" gutterBottom>
              <Breadcrumbs
                className={classes.breadcrumbs}
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link to="/" className={classes.breadLinks}  >
                  Picture Gallery
                </Link>
                {/* <Typography className={classes.breadLinks}>
                  Approvals Folder
                </Typography> */}
                {showResults ? <Typography>Approvals Folder</Typography>
                  : <Typography>Remo Folder </Typography>}
              </Breadcrumbs>
            </Typography>
          </div>
          {/* <Grid>
            <input type='file' id='fileUpload' accept='application/pdf, image/png, mp4/video '
              onChange={handleFileEvent}
              disabled={fileLimit} />
            <label htmlFor="fileUpLoad">
              <a className={`btn btn-primary ${!fileLimit ? '' : 'disabled'}`}>Upload </a>
            </label>
          </Grid> */}
          <Grid style={{ width: "230px", display: "flex", justifyContent: "space-between", marginRight: "20px" }}>
            <Grid style={{ textTransform: "capitalize", borderRadius: "10px", }} >
              <Button
                id="fade-button"
                aria-controls={openTwo ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openOn ? 'true' : undefined}
                onClick={handleClickTwo}
                // className={classes.create}
                sx={{ textTransform: "capitalize", backgroundColor: "#e5f5f7 !important", color: '#18496a' }}>
                <span className={classes.plus}>
                  <img src={uploadB} alt="" />
                </span>
                Upload
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorE2}
                open={openTwo}
                onClose={handleCloseTwo}
                TransitionComponent={Fade}
                className={classes.menu}
              >
                <MenuItem>
                  <div>
                    <img src={folder} alt="folder" className={classes.menuImage} /> Files
                  </div>
                </MenuItem>
                <MenuItem >
                  <div>
                    <img src={folder} alt="folder" className={classes.menuImage} /> Folders
                  </div>
                </MenuItem>
              </Menu>

            </Grid>
            <Grid style={{ textTransform: "capitalize", borderRadius: "10px", }} className={classes.create}>

              <Button
                id="fade-button"
                aria-controls={openOn ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openOn ? 'true' : undefined}
                onClick={handleClick}
                className={classes.create}
                sx={{ textTransform: "capitalize", backgroundColor: "rgb(50 168 189) !important" }}>
                <span className={classes.plus}><LocalHospitalIcon /></span>
                New
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={openOn}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={classes.menu}
              >
                <MenuItem >
                  <div onClick={handleClickOne}>
                    <img src={folder} alt="folder" className={classes.menuImage} /> Folders
                  </div>
                  <Dialog open={openOne} onClose={handleCloseOne}>
                    <DialogTitle>
                      <div className={classes.dialogT}>
                        <div>Create New Folder</div>
                        <div onClick={handleCloseOne} style={{ cursor: "pointer" }}>
                          <img src={cancel} alt="" />
                        </div>
                      </div>
                    </DialogTitle>
                    <DialogContent>
                      <p style={{ margin: "0px 0px 5px 0px", textAlign: "left" }}>Enter the name</p>
                      <input type="text" onChange={handleOnChange} style={{ width: "300px", height: "20px" }} />
                    </DialogContent>
                    <DialogActions>
                      <div style={{ width: "150px", marginRight: "180px" }}>
                        <Button
                          // onClick={handleFormSubmit}
                          onClick={handleClickThree}
                          autoFocus style={{ backgroundColor: "#009BAD", color: "white", textTransform: "none" }}>
                          Create
                        </Button>
                        <Dialog open={openThree} onClose={handleCloseThree}>
                          {/* <DialogTitle>{"Create New Folder"}</DialogTitle> */}
                          <DialogContent>
                            <Box>
                              <img src={success} alt="" style={{ width: "50px" }} />
                              <Typography>Folder Created SuccessFully</Typography>
                            </Box>
                          </DialogContent>
                          <DialogActions style={{ width: "170px" }}>
                            <Button autoFocus style={{ backgroundColor: "#009BAD", color: "white" }} onClick={handleCloseThree}>
                              Ok
                            </Button>
                          </DialogActions>
                        </Dialog>
                        <Button onClick={handleCloseOne}
                          color="primary" autoFocus style={{ textTransform: "none" }}>
                          Close
                        </Button>
                      </div>
                    </DialogActions>
                  </Dialog>
                </MenuItem>
              </Menu>

            </Grid>
          </Grid>

        </Grid>
        <Box style={{ padding: "30px" }}>
          {/* <Grid>
            <div className="uploaded-files-list">
              {uploadedFiles.map((file, name: any) => (
                <div>
                  
                  {file.name}
                </div>
              ))
              }

            </div>
            <UploadFile />
          </Grid> */}
          
          {/* <Grid className={classes.boxContain}>
            <Box className={classes.galleryBox} onClick={onClickShow}>
              <img src={folderW} alt="" />
              <div style={{ margin: "0px" }}>Approvals Folder</div>
              <p style={{ margin: "0px" }}>September 20, 2022</p>
            </Box>
            <Box className={classes.galleryBox} onClick={handleClickHide}>
              <img src={folderW} alt="" />
              <div style={{ margin: "0px" }}>Remo Folder</div>
              <p style={{ margin: "0px" }}>September 20, 2022</p>
            </Box>
            <Box className={classes.galleryBox}>
              <img src={folderW} alt="" />
              <div style={{ margin: "0px" }}>Approvals Folder</div>
              <p style={{ margin: "0px" }}>September 20, 2022</p>
            </Box>
            <Box className={classes.galleryBox}>
              <img src={folderW} alt="" />
              <div style={{ margin: "0px" }}>Approvals Folder</div>
              <p style={{ margin: "0px" }}>September 20, 2022</p>
            </Box>
          </Grid>
          <Grid>
            <LightBoxGallery />
          </Grid> */}
         {data?.response && data?.response?.map((item: any) => {
                                             let ext = item.name.split('.').pop();
                                             if(ext ==item.name){
                                            return(    
                                              <Grid className={classes.boxContain} key={item.id}>
                                              <Box className={classes.galleryBox} onClick={onClickShow}>
                                                <img src={folderW} alt="" />
                                                <div style={{ margin: "0px" }}>{item.name}</div>
                                                <p style={{ margin: "0px" }}>{item.lastModifiedDateTime}</p>
                                              </Box>
                                              
                                            </Grid>
                                            )    
                                             }else{
                                                return(
                                                  
                                                    <Grid key={item.id}>
                                                      <SRLWrapper>
                                                    <Box style={{ width: "180px", height: "100px", margin: "20px" }}>
                                                   
                                                    <img
                                                        src={item.webUrl}
                                                        style={{ width: "170px", height: "100px", margin: "20px", borderRadius: "10px" }}
                                                        alt="Gallery"
                                                    />
                                                </Box>
                                                </SRLWrapper>
                                                 {/* <LightBoxGallery data={item} /> */}
                                                </Grid>
                                                )
                                             }
                                          })
                                        }
        </Box>

      </Box>
    </div>
  );
};



export default GalleryEditor;