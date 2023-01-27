import React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from '../Birthday/index';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar, Typography } from '@mui/material';
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
import calenderIcon from '../../Assets/Images/calenderGrey.svg';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Menu, MenuItem, Fade,  Breadcrumbs, } from '@mui/material';
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

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const GalleryEditor = () => {
  const classes = useStyles();

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



  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        <Grid className={classes.upperPart}>
          {/* <Grid style={{color:'#18496a'}}>Picture Gallery </Grid> */}
          <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" className={classes.breadLinks} />}
                  aria-label="breadcrumb"
                >
                  <Link className={classes.breadLinks} color="red" to="/">
                  Picture Gallery
                  </Link>
                  <Typography className={classes.breadLinks}>Approvals Folder</Typography>
                </Breadcrumbs>
              </Typography>
          {/* <Grid>
            <input type='file' id='fileUpload' accept='application/pdf, image/png, mp4/video '
              onChange={handleFileEvent}
              disabled={fileLimit} />
            <label htmlFor="fileUpLoad">
              <a className={`btn btn-primary ${!fileLimit ? '' : 'disabled'}`}>Upload </a>
            </label>
          </Grid> */}
          <Grid style={{width:"230px", display:"flex", justifyContent:"space-between", marginRight:"20px"}}>
          <Grid style={{ textTransform: "capitalize", borderRadius: "10px", }} >
            <Button
              id="fade-button"
              aria-controls={openTwo ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openOn ? 'true' : undefined}
              onClick={handleClickTwo}
              // className={classes.create}
              sx={{ textTransform: "capitalize", backgroundColor: "#e5f5f7 !important",color:'#18496a'  }}>
              <span className={classes.plus}>
                <img src={uploadB}  alt="" />
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
                    <div onClick={handleCloseOne} style={{cursor:"pointer"}}>
                      <img src={cancel} alt="" />
                    </div>
                  </div>
                  </DialogTitle>
                  <DialogContent>
                    <p style={{margin:"0px 0px 5px 0px", textAlign:"left"}}>Enter the name</p>               
                      <input type="text"  onChange={handleOnChange}  style={{width: "300px",height:"20px" }} />
                  </DialogContent>
                  <DialogActions>
                    <div style={{width:"150px", marginRight:"180px"}}>
                    <Button 
                    // onClick={handleFormSubmit}
                    onClick={handleClickThree}
                       autoFocus style={{backgroundColor:"#009BAD", color:"white", textTransform:"none"}}>
                      Create
                    </Button>
                    <Dialog open={openThree} onClose={handleCloseThree}>
                  {/* <DialogTitle>{"Create New Folder"}</DialogTitle> */}
                  <DialogContent>
                    <Box>
                        <img src={success} alt="" style={{width:"50px"}}/>
                     <Typography>Folder Created SuccessFully</Typography>
                    </Box>
                  </DialogContent>
                  <DialogActions style={{width:"170px"}}>           
                    <Button autoFocus  style={{backgroundColor:"#009BAD", color:"white"}} onClick={handleCloseThree}>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
                    <Button onClick={handleCloseOne}
                      color="primary" autoFocus style={{textTransform:"none"}}>
                      Close
                    </Button>
                    </div>
                  </DialogActions>
                </Dialog>
              </MenuItem>
            </Menu>

          </Grid>
          </Grid>
          {/* <Grid className={classes.new}>
          <Button
            onClick={handleClickOpen}
            className={classes.create}
            sx={{ textTransform: "capitalize", }}>
            <span className={classes.plus}><LocalHospitalIcon /></span>
            New
          </Button>
          <Dialog
            classes={{
              paper: classes.newPosOfDialog
            }}
            open={openOne}
            onClose={handleClose}
            style={{ marginTop: "60px", height: "650px" }}
          >
            <DialogTitle id="alert-dialog-title" >
              <Grid className={classes.dialogTitle}>
                <Grid>
                  <Button className={classes.dialogBtn}>
                    <img src={save} alt="" style={{ width: "13px", marginRight: "5px", }} />
                    <span style={{ color: "#606C74", textTransform: "capitalize" }}>Save</span>
                  </Button>
                  <Button style={{ color: "#606C74", fontSize: "12px" }}>
                    <img src={cancel} alt="" style={{ width: "13px", marginRight: "5px" }} />
                    <span style={{ textTransform: "capitalize" }}>Cancel</span>
                  </Button>
                  <Button>
                    <img src={copylink} alt="" style={{ width: "12px", marginRight: "5px" }} />
                    <span style={{ color: "#606C74", textTransform: "capitalize", fontSize: "12px" }}> Copy Link</span>
                  </Button>
                  <Button>
                    <img src={publish} alt="" style={{ width: "12px", marginRight: "5px" }} />
                    <span style={{ color: "#606C74", textTransform: "capitalize", fontSize: "12px" }}> Publish</span>
                  </Button>
                </Grid>
                <Grid>
                  <Button onClick={handleClose}>
                    <img src={cancel} alt="" style={{ width: "13px" }} />
                  </Button>
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Divider />
                <p style={{ textAlign: "left" }}>New Item</p>
              </DialogContentText>
              <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                  <img src={title} alt="" className={classes.titleIcon} />
                  Title<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="Enter value here"
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>
                  <img src={title} alt="" className={classes.titleIcon} />
                  Name<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="Enter a name"
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                  <img src={calenderIcon} alt="" className={classes.titleIcon} />
                  DOB<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  type="date"
                  id="date"
                  multiline={false}
                  defaultValue="2022-12-26"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="MM/DD/YYYY"
                  InputLabelProps={{
                    color: "secondary",
                    className: "DatePicker",
                    style: { color: "gray" },
                    shrink: true,
                  }}
                  inputProps={{
                    style: { color: "gray" },
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <div style={{ paddingBottom: "40px" }}>
                  <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                    <img src={image} alt="" className={classes.titleIcon} />
                    Image<img src={Asterisk} alt="..." />
                  </InputLabel>
                </div>
                <Grid className={classes.svg}>
                  <FileUpload value={files} onChange={setFiles} />
                </Grid>

              </div>
              <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                  <img src={title} alt="" className={classes.titleIcon} />
                  Designation<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="Enter value here"
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                  <img src={calenderIcon} alt="" className={classes.titleIcon} />
                  DOJ<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  type="date"
                  id="date"
                  multiline={false}
                  defaultValue="2022-12-26"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="MM/DD/YYYY"
                  InputLabelProps={{
                    color: "secondary",
                    className: "DatePicker",
                    style: { color: "gray" },
                    shrink: true,
                  }}
                  inputProps={{
                    style: { color: "gray" },
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>
                  <img src={descripton} alt="" className={classes.titleIcon} />
                  Description<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-multiline-static"
                  // label="Multiline"
                  multiline
                  rows={4}
                  style={{ width: "100%" }}
                  onChange={handleChangeDescriptionField}
                />
              </div>
              <Grid>
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                  <Box>
                    <img src={isActive} alt="" style={{ width: "15px", marginRight: "15px" }} />
                    <span>IsActive</span>
                  </Box>
                  <Box style={{ display: 'flex', }}>
                    <FormControlLabel
                      label="Yes"
                      control={<Checkbox checked={checkedyesisActive} onChange={handleChangeisActiveyes} />}
                    />
                    <FormControlLabel
                      label="No"
                      control={<Checkbox checked={checkednoisActive} onChange={handleChangeisActiveno} />}
                    />
                  </Box>

                </Box>
                <Grid sx={{ display: 'flex', justifyContent: "space-between" }}>
                  <Box>
                    <img src={like1} alt="" style={{ width: "15px", marginRight: "15px" }} />
                    <span>EnableLikes </span>
                  </Box>
                  <Box style={{ display: 'flex', }}>

                    <FormControlLabel
                      label="Yes"
                      control={<Checkbox checked={checkedyesEnableLikes} onChange={handleChangeEnableLikesyes} />}
                    />
                    <FormControlLabel
                      label="No"
                      control={<Checkbox checked={checkednoEnableLikes} onChange={handleChangeEnableLikesno} />}
                    />
                  </Box>

                </Grid>
              </Grid>
              <Grid>

                <Grid>
                  <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box>
                      <img src={comments} alt="" className={classes.checkLike} />
                      <span> EnableCommands</span>

                    </Box>
                    <Box style={{ display: "flex" }}>
                      <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checkedyesEnableCommands} onChange={handleChangeEnableCommandsyes} />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checkednoEnableCommands} onChange={handleChangeEnableCommandsno} />}
                      />
                    </Box>

                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box>
                      <img src={shareasemail} alt="" className={classes.checkLike} />
                      <span>  ShareAsEmail</span>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checkedyesSharedAsEmail}
                          onChange={handleChangeSharedAsEmailyes} />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checkednoSharedAsEmail}
                          onChange={handleChangeSharedAsEmailno} />}
                      />
                    </Box>

                  </Box>

                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid className={classes.actionDivTwo}>
                <Button onClick={handleClickPreview} className={classes.saveBtn}>
                  Preview
                </Button>
                <Dialog
                  classes={{
                    paper: classes.newPosOfDialog
                  }}
                  open={openPreview}
                  onClose={handleClosePreview}
                  style={{ marginTop: "60px", height: "650px" }}
                >
                  <DialogTitle id="alert-dialog-title" >
                    <Grid style={{ display: "flex", justifyContent: "space-between", }}>
                      <Grid>
                        <Button style={{ color: "#606C74", fontSize: "12px" }}>
                          <img src={save} alt="" style={{ width: "13px", marginRight: "5px", textTransform: "capitalize" }} />
                          Save
                        </Button>
                        <Button style={{ color: "#606C74", fontSize: "12px" }}>
                          <img src={cancel} alt="" style={{ width: "13px", marginRight: "5px" }} />
                          Cancel
                        </Button>
                        <Button>
                          <img src={copylink} alt="" style={{ width: "12px", marginRight: "5px" }} />
                          <span style={{ color: "#606C74", textTransform: "capitalize", fontSize: "12px" }}> Copy Link</span>
                        </Button>
                        <Button>
                          <img src={publish} alt="" style={{ width: "12px", marginRight: "5px" }} />
                          <span style={{ color: "#606C74", textTransform: "capitalize", fontSize: "12px" }}> Publish</span>
                        </Button>
                      </Grid>
                      <Grid>
                        <Button onClick={handleClosePreview}>
                          <img src={cancel} alt="" style={{ width: "13px" }} />
                        </Button>
                      </Grid>
                    </Grid>
                  </DialogTitle>

                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Divider />
                      <p style={{ textAlign: "left" }}>New Item</p>
                    </DialogContentText>
                    <Grid>
                      <Box>
                        <img src={birthday} alt="" className={classes.backgroundImage} />
                        <img src={girl} alt="" className={classes.girl} />
                        <p>Ayesha Siddiqa</p>
                        <p>HR Manager</p>
                      </Box>
                      <Grid>
                        <Typography style={{ textAlign: "left", margin: "15px", fontWeight: 600 }}> Happy Birthday Ayesha siddiqa</Typography>
                        <p style={{ textAlign: "left", marginLeft: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </Grid>
                      <Grid className={classes.iconDiv}>
                        <div className={classes.iconView}>
                          <span><img src={love} alt="" /></span>
                          <span>10</span>
                        </div>
                        <div className={classes.iconView}>
                          <span><img src={comments} alt="" /></span>
                          <span>10</span>
                        </div>
                        <div className={classes.iconView}>
                          <span> <img src={view} alt="" />
                          </span><span>10</span>
                        </div>
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Grid className={classes.actionPart}>
                      <Button onClick={handleClosePreview} autoFocus className={classes.saveBtn}>Save</Button>
                      <Button className={classes.cancelBtn}>Cancel</Button>
                    </Grid>
                  </DialogActions>

                </Dialog>

                <Button onClick={handleClose} className={classes.saveBtn}>Save</Button>
                <Button onClick={handleSubmit} autoFocus className={classes.saveBtn}>
                  submit
                </Button>
                <Button className={classes.cancelBtn}>Cancel</Button>
              </Grid>

            </DialogActions>

          </Dialog>

        </Grid> */}
        </Grid>
        <Box style={{ padding: "30px" }}>
          <Grid>
            <div className="uploaded-files-list">
              {uploadedFiles.map((file, name: any) => (
                <div>
                  {/* @ts-ignore */}
                  {file.name}
                </div>
              ))
              }

            </div>
            <UploadFile />
          </Grid>
          <Grid className={classes.boxContain}>
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
        </Box>

      </Box>
    </div>
  );
};



export default GalleryEditor;