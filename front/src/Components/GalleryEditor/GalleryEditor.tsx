import React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from '../Birthday/index';
import axios from 'axios';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar, Typography, Paper, CircularProgress } from '@mui/material';
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
import useCustom from '../../hooks/useCustom';
import Swal from 'sweetalert2';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LightBoxGallery from './LightBoxGallery';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
interface IFolderProps {

  onClick: (id: string, name: string, folder: any) => void
  data: any,
  isLoading: any,
  isSuccess: any,
  ItemChildren: any,
  isSuccessItem: any,
  itemChildrenIsLoading: any
  createNewFolder?: (obj: any) => void;
  createdNewFolderSucessfull:any;
  uploadFile?: (obj: any) => void;
}

// const GalleryEditor = () => {
const GalleryEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { data, isLoading, isSuccess, onClick, ItemChildren, isSuccessItem, itemChildrenIsLoading,createNewFolder,createdNewFolderSucessfull,uploadFile } = props
  console.log(data, 'lllsssssssslll')
  const {token}=useCustom();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openOn = Boolean(anchorEl);
  const [openPage, setOpenPage] = useState<boolean>(true)
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
  const [text1, setText1] = useState<string>('');
  const [ItemId, setItemId] = useState<string>('');
  const handleOnChange = (e: any) => {
    setText(e.target.value);
    console.log(e.target.value);
  }
  // const handleOnChange1 = (e: any) => {
  //   setText1(e.target.value);
  //   console.log(e.target.value);
  //   // console.log(ItemId,'gjhyjyttt')
  // }
  let Iteh:any;
  const handleClickItem = (id:any)=>{
    console.log(id,'folderIddddddddddddddddddddddddddddddddddddddddd')
    // setItemId(id)
    setText1(id)
    // console.log(ItemId,'ttrrr')
  }
  // console.log(ItemId,'rryr55')
  const handleClickThree = async(event: React.MouseEvent<HTMLElement>) => {
    setAnchorE3(event.currentTarget);
    console.log(text1)
    console.log(ItemId,'kkkky')
    const announcementData = {
      // token :tokens,
      folderName:text,
      ItemId:text1
    }
    //  await sendItem(announcementData)
    await createNewFolder?.(announcementData)
  };
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
  const [Images1, setImages1] = useState([])
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
  const handleClickHide = () => {
    setShow(true)
  }
  const handleItem = (id: any) => {
    console.log(id, 'thththhjyj')
  }
  const initialState = {
    // open: false,
    files: [],
    selectedFile: null,
    // uploadLinks: [],
    // showlinks: false
  };
  const [state, setState] = React.useState(initialState);
  const [seleccionArchivo, setSeleccionArchivo] = useState<File>();
  const [names, setNames] = useState<any>('');
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target?.files?.[0])
    setSeleccionArchivo(event?.target?.files?.[0]);
    setNames(event?.target?.files?.[0].name)
    //console.log(e.target.files);
    // const file = event.target.files[0];

    // if (e.target.files[0] !== undefined) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(e.target.files[0]);
      
      
    //   setNames(e.target.files[0].name)
    //   setSeleccionArchivo(e.target.files);

    //   reader.onload = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    //     //@ts-ignore
    //     setSeleccionArchivo(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
    //   };
    // }
    
  };
  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("");
  // const onFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
  //   //@ts-ignore
  //   setFile(e.target.files[0]);
  //   //@ts-ignore
  //       setFileName(e.target.files[0].name);
  // };
  // console.log(fileSelected,'ttttttff')
  // console.log(names,'thtrhrt')
  async function  uploadItemDocument (){
    if(!text1){
    try {
      const response = await fetch(`https://graph.microsoft.com/v1.0/sites/tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43/drives/b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikN7l5pVNJUCQrB4Gn3-Lhaw/items/root:/${names}:/content`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-type":   'application/json'
        },
        body: seleccionArchivo
      });
      const data = await response.json();
      // enter you logic when the fetch is successful
      console.log(data, 'rtwssssssssss');
      return data.webUrl
      // return data
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
  
      console.log(error)
    }
  }else{
    try {
      const response = await fetch(`https://graph.microsoft.com/v1.0/sites/tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43/drives/b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikN7l5pVNJUCQrB4Gn3-Lhaw/items/${text1}:/${names}:/content`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-type":   'application/json'
        },
        body: seleccionArchivo
      });
      const data = await response.json();
      // enter you logic when the fetch is successful
      console.log(data, 'rtwssssssssss');
      return data.webUrl
      // return data
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
  
      console.log(error)
    }

  }
  }
  const handleUploadFile =async()=>{
    // const formData = new FormData();
    // //@ts-ignore
    //     formData.append("file", file);
    //     formData.append("fileName", fileName);
    //     try {
    //       const res = await axios.post(
    //         "http://localhost:4000/api/v1/contentEditor/remophotoGallery/uploadFileItem",
    //         formData
    //       );
    //       console.log(res);
    //     } catch (ex) {
    //       console.log(ex);
    //     }
    // const formData = new FormData();
    // //@ts-ignore
    //   formData.append("image", fileSelected, fileSelected.name);
    // console.log(formData)
    // // let form_data = new FormData();
    // //     // for(let i=0;i<seleccionArchivo.length;i++)
    // //     // {
    // //     // form_data.append('fileContent',seleccionArchivo);

    // //     // }
    // //     console.log(form_data,'kkk')
    //   const Data = {
    //   fileContent:fileSelected,
    //   // folderName:fileSelected.name,
    //   ItemId:text1
    // }
    // uploadFile?.(Data)
  }
  var ages = [32, 33, 16, 40];




  function checkAge(age: any) {
    let ext = age.name.split('.').pop();
    if (ext !== age.name) {
      return age;
    }
  }
  let content = data?.response.filter(checkAge)
  let content1;
  if (itemChildrenIsLoading) {
    content1 = <CircularProgress />
  } else if (isSuccessItem) {
    content1 = ItemChildren?.response.filter(checkAge)

  }
  console.log(content1, 'htrht55555555555555555555')

  // let  filterImages = content1 && content1?.filter((person: any) => person.file.mimeType == "image/jpeg")
  // let filterdVideoData = content1 && content1?.filter((person: any) => person.file.mimeType == 'video/mp4')
  return (
    <div>
      {openPage ? (
        <Box>
          <Grid className={classes.upperPart}>
           {/* <div className={classes.contentHeader} >



              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link to="/" className={classes.breadLinks}  >
                    Picture Gallery
                  </Link>
                
                  {showResults ? <Typography>Approvals Folder</Typography>
                    : <Typography>Remo Folder </Typography>}
                </Breadcrumbs>
              </Typography>

            <Grid style={{ width: "230px", display: "flex", justifyContent:"flex-end", marginRight: "20px" }}>

            </div> */}
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
                  <MenuItem onClick={uploadItemDocument}>
                    <div>
                      <img src={folder} alt="folder" className={classes.menuImage} /> Files
                      <input
                       className="file-upload-input"
                       type="file"
                       accept="image/*, application/pdf,application/vnd.ms-excel"
                       multiple
                       onChange={(e) => {
                       onFileChange(e);
                     }}
                    />
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
                            {createdNewFolderSucessfull && (
                              <div>
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
                              </div>
                            )}
                            
                            
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
            <LightBoxGallery />
          </Grid>  */}
          <Grid >
           {isLoading && <CircularProgress/>}
          { isSuccess &&( 
            <div className={classes.boxContain}>
            {data?.response && data?.response?.map((item: any) => {
              let ext = item.name.split('.').pop();
              if (ext == item.name) {
                return (
                  <Grid  key={item.id}>
                    <Box className={classes.galleryBox} onClick={onClickShow}>
                      <img src={folderW} alt="" />
                      <div style={{ margin: "0px" }} onClick={() => { onClick(item.id, item.name, item.folder); setOpenPage(false);handleClickItem(item.id) }}>{item.name}</div>
                      <p style={{ margin: "0px" }}>{item.lastModifiedDateTime}</p>
                    </Box>

                  </Grid>
                )
              }
              else if (item.file.mimeType == 'image/jpeg') {
                return (

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

                  </Grid>

                )
              } else {
                return (
                  <Grid key={item.id}>
                    <Box style={{ width: "180px", height: "100px", margin: "20px" }}>
                      <video width="200" height="150" >
                        <source src={item.webUrl} type="video/mp4" />
                      </video>
                    </Box>

                  </Grid>

                )
              }
            })
            }
            </div>)}
            </Grid>
          </Box>

        </Box>
      ) : (

        <Box>
           <Grid className={classes.upperPart}>
            <Grid style={{ width: "230px", display: "flex", justifyContent:"flex-end", marginRight: "20px" }}>
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
                  <MenuItem onClick={uploadItemDocument}>
                    <div>
                      <img src={folder} alt="folder" className={classes.menuImage} /> Files
                      <input
                       className="file-upload-input"
                       type="file"
                       accept="image/*, application/pdf,application/vnd.ms-excel"
                       multiple
                       onChange={(e) => {
                       onFileChange(e);
                     }}
                    />
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
                           
                          {createdNewFolderSucessfull && (
                              <div>
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
                              </div>
                            )}
                          </Dialog>
                          <Button onClick={handleCloseOne}
                            color="primary" autoFocus style={{ textTransform: "none" }}>
                            Close
                          </Button>
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
                            {createdNewFolderSucessfull && (
                              <div>
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
                              </div>
                            )}
                            
                            
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
          
          <Box>
           
           {itemChildrenIsLoading && <CircularProgress/>}
          { isSuccessItem &&(
            <div className={classes.boxContain}>
            {ItemChildren?.response && ItemChildren?.response?.map((item: any) => {
              let ext = item.name.split('.').pop();
              if (ext == item.name) {
                return (
                    <Box className={classes.galleryBox} onClick={onClickShow} key={item.id}>
                      <img src={folderW} alt="" />
                      <div style={{ margin: "0px" }} onClick={() =>{ onClick(item.id, item.name, item.folder);handleClickItem(item.id) }}>{item.name}</div>
                      <p style={{ margin: "0px" }}>{item.lastModifiedDateTime}</p>
                    </Box>
                )
              }
              else if (item.file.mimeType == 'image/jpeg') {
                return (

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

                  </Grid>

                )
              } else {
                return (
                  <Grid key={item.id}>
                    <Box style={{ width: "180px", height: "100px", margin: "20px" }}>
                      <video width="200" height="150" >
                        <source src={item.webUrl} type="video/mp4" />
                      </video>
                    </Box>

                  </Grid>

                )


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
            })
            } </div>
            )}
            
          </Box>

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
           {isLoading && <CircularProgress/>}
          { isSuccess &&( 
            <div>
            {data?.response && data?.response?.map((item: any) => {
              let ext = item.name.split('.').pop();
              if (ext == item.name) {
                return (
                  <Grid className={classes.boxContain} key={item.id}>
                    <Box className={classes.galleryBox} onClick={onClickShow}>
                      <img src={folderW} alt="" />
                      <div style={{ margin: "0px" }} onClick={() => { onClick(item.id, item.name, item.folder); setOpenPage(false);handleClickItem(item.id) }}>{item.name}</div>
                      <p style={{ margin: "0px" }}>{item.lastModifiedDateTime}</p>
                    </Box>

                  </Grid>
                )
              }
              else if (item.file.mimeType == 'image/jpeg') {
                return (

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

                  </Grid>

                )
              } else {
                return (
                  <Grid key={item.id}>
                    <Box style={{ width: "180px", height: "100px", margin: "20px" }}>
                      <video width="200" height="150" >
                        <source src={item.webUrl} type="video/mp4" />
                      </video>
                    </Box>

                  </Grid>

                )
              }
            })
            }
            </div>)}
            {/* <SRLWrapper>
              <Box style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                {
                  content && content?.map((item: any) => (
                    <Grid key={item.id} >
                      <img src={item.webUrl} style={{ width: "167px", height: "170px", margin: "20px", borderRadius: "10px" }} />
                    </Grid>
                  ))
                }

              </Box>
            </SRLWrapper> */}
            {/* <LightBoxGallery data={content} /> */}

          </Box>

        </Box>
      ) : (

        <Box className={classes.MainPart}>
          <Grid className={classes.upperPart}>
            {/* <Grid style={{color:'#18496a'}}>Picture Gallery </Grid> */}
            {/* <div className={classes.contentHeader} >
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link to="/" className={classes.breadLinks}  >
                    Picture Gallery
                  </Link>
                 
                  {showResults ? <Typography>Approvals Folder</Typography>
                    : <Typography>Remo Folder </Typography>}
                </Breadcrumbs>
              </Typography>
            </div> */}
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
                  <MenuItem onClick={uploadItemDocument}>
                    <div>
                      <img src={folder} alt="folder" className={classes.menuImage} /> Files
                      <input
                       className="file-upload-input"
                       type="file"
                       accept="image/*, application/pdf,application/vnd.ms-excel"
                       multiple
                       onChange={(e) => {
                       onFileChange(e);
                     }}
                    />
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
                           
                          {createdNewFolderSucessfull && (
                              <div>
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
                              </div>
                            )}
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
           {itemChildrenIsLoading && <CircularProgress/>}
          { isSuccessItem &&(
            <div>
            {ItemChildren?.response && ItemChildren?.response?.map((item: any) => {
              let ext = item.name.split('.').pop();
              if (ext == item.name) {
                return (
                  <Grid className={classes.boxContain} key={item.id}>
                    <Box className={classes.galleryBox} onClick={onClickShow}>
                      <img src={folderW} alt="" />
                      <div style={{ margin: "0px" }} onClick={() =>{ onClick(item.id, item.name, item.folder);handleClickItem(item.id) }}>{item.name}</div>
                      <p style={{ margin: "0px" }}>{item.lastModifiedDateTime}</p>
                    </Box>

                  </Grid>
                )
              }
              else if (item.file.mimeType == 'image/jpeg') {
                return (

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

                  </Grid>

                )
              } else {
                return (
                  <Grid key={item.id}>
                    <Box style={{ width: "180px", height: "100px", margin: "20px" }}>
                      <video width="200" height="150" >
                        <source src={item.webUrl} type="video/mp4" />
                      </video>
                    </Box>

                  </Grid>

                )
              }
            })
            } </div>
            )}
            {/* <Box>
            {content1 && content1?.filter((person: any) => person.file.mimeType == 'video/mp4').map((person:any)=>{
                     <Grid>
                     <video width="200" height="150" >
                       <source src={person.webUrl} type="video/mp4" />
                     </video>
                   </Grid>

            })}

            </Box> */}

            {/* <Box style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                  {
                  filterImages &&  filterImages?.map((item: any) => (
                      <Grid key={item.id} >
                         <SRLWrapper>
                        <img src={item.webUrl} style={{ width: "167px", height: "170px", margin: "20px", borderRadius: "10px" }} />
                        </SRLWrapper>
                        
                      </Grid>
                    ))
                  }
                   {
                 filterdVideoData &&    filterdVideoData.map((item: any) => (

                      <Grid>
                        <video width="200" height="150" >
                          <source src={item.webUrl} type="video/mp4" />
                        </video>
                      </Grid>
                    ))
                  }
                </Box> */}


            {/* <LightBoxGallery data={content1} /> */}

          </Box>


        </Box>



      )}
    </div>
  );
};



export default GalleryEditor;