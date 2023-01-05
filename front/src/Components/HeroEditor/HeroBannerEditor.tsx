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
import calenderIcon from '../../Assets/Images/calenderGrey.svg';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import FileUpload from "react-material-file-upload";
import useCustom from '../../hooks/useCustom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Switch from '@mui/material/Switch';
import girl from "../../Assets/Images/girl.jpg";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import { useStyles } from './Styles';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Title', headerName: 'Title', width: 300 },
  { field: 'Status', headerName: 'Status', type: 'image', width: 70 },
  { field: 'Description', headerName: 'Description', width: 130 },
  { field: 'ExpiresOn', headerName: 'ExpiresOn', width: 100 },
  { field: 'Image/video', headerName: 'Image/video', width: 130 },
  { field: 'IS Active', headerName: 'IS Active', width: 100 },
  { field: 'EnableLikes', headerName: 'EnableLikes', type: 'image', width: 100 },
  {
    field: 'EnableComments',
    headerName: 'EnableComments',
    type: 'image',
    width: 100,
  },
];


const rows = [
  { id: 1, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 2, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 3, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 4, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 5, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 6, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 7, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 8, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 9, Title: 'Das Holding has adoptade a policy of ', Status: 'Active', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', ExperiesOn: '12/19/2022 | 12:00 AM ', 'Image/video': <img src={image} alt="" />, IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },

];
interface IFolderProps {
 
  onClick?: (obj:any) => void;
  
}

// const HeroBannerEditor = () => {
const HeroBannerEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const {token} = useCustom();
  const { onClick } = props
  const [openOne, setOpenOne] = React.useState<boolean>(false);
  // const [sendItem] = useUploadItemInAnnouncementMutation();
  const handleClickOpen = () => {
    setOpenOne(true);
  };

  const handleClose = () => {
    setOpenOne(false);
  };

  const [openPreview, setOpenPreview] = React.useState<boolean>(false);
  const handleClickPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };


  const [checkedyesisActive, setCheckedyesisActive] = useState<boolean>(true);
  const [checkednoisActive, setCheckednoisActive] = useState<boolean>(false);
  const [checkedyesEnableLikes, setCheckedyesEnableLikes] = useState<boolean>(true);
  const [checkednoEnableLikes, setCheckednoEnableLikes] = useState<boolean>(false);
  const [checkedyesEnableCommands, setCheckedyesEnableCommands] = useState<boolean>(true);
  const [checkednoEnableCommands, setCheckednoEnableCommands] = useState<boolean>(false);
  const [checkedyesSharedAsEmail, setCheckedyesSharedAsEmail] = useState<boolean>(true);
  const [checkednoSharedAsEmail, setCheckednoSharedAsEmail] = useState<boolean>(false);
  const [isActives, setIsActives] = useState<boolean>(false)
  const [enablelikes, setEnableLikes] = useState<boolean>(false)
  const [enableCommands, setCommands] = useState<boolean>(false)
  const [sharedAsEmails, setSharedEmails] = useState<boolean>(false)
  const [Title, setTitle] = useState<any>('');
  const [Description, setDescription] = useState<any>('');
  const [expiresOn, setExpiresOn] = useState<any>('');
  const [time, setTime] = useState<any>('');
  const [RecipientEmail, setRecipientEmail] = useState<any>('');
  const [state, setState] = useState({
    warningMsg: ""
  })
  const [state1, setState1] = useState({
    files: [],

  })
  const [state2, setState2] = useState({
    files: [],

  })
  const [filename1, setFilename1] = useState<any>('')
  const [filename2, setFilename2] = useState<any>('')
  const [base1, setBase1] = useState<any>('')
  const [base2, setBase2] = useState<any>('')

  const handleChangeisActiveyes = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckedyesisActive(event.target.checked);
    setIsActives(true)
    //@ts-ignore
    // setIsActives(event.target.value)


  };
  const handleChangeisActiveno = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckednoisActive(event.target.checked);
    //@ts-ignore
    setIsActives(false)
    // console.log(isActives,'ytujyujy')

  };

  const handleChangeEnableLikesyes = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckedyesEnableLikes(event.target.checked);

    setEnableLikes(true)


  };
  const handleChangeEnableLikesno = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckednoEnableLikes(event.target.checked);

    setEnableLikes(false)

  };
  const handleChangeEnableCommandsyes = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckedyesEnableCommands(event.target.checked);

    setCommands(true)

  };
  const handleChangeEnableCommandsno = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckednoEnableCommands(event.target.checked);

    setCommands(false)

  };
  const handleChangeSharedAsEmailyes = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckedyesSharedAsEmail(event.target.checked);

    setSharedEmails(true)

  };
  const handleChangeSharedAsEmailno = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    console.log(event.target.checked)
    setCheckednoSharedAsEmail(event.target.checked);

    setSharedEmails(false)

  };
  const handleChangeTitleField = (event: any) => {
    console.log(event.target.value)
    setTitle(event.target.value);
  };
  const handleChangeDescriptionField = (event: any) => {
    console.log(event.target.value)
    setDescription(event.target.value);
  };
  const handleChangeReciepientEmailField = (event: any) => {
    console.log(event.target.value)
    setRecipientEmail(event.target.value);
  };
  const handleChangeExpriesOnField = (event: any) => {
    console.log(event.target.value)
    setExpiresOn(event.target.value);
  };
  const handleChangeTimeField = (event: any) => {
    console.log(event.target.value)
    setTime(event.target.value);
  };
  useEffect(() => {
    state1.files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    state2.files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [])

  const addFile = (file: any) => {
    setFilename1(file[0].name)
    console.log(file[0].name);
    setState1({
      files: file.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };

  const onDrop = (accepted: any, rejected: any) => {
    if (Object.keys(rejected).length !== 0) {
      const message = "Please submit valid file type";
      setState({ warningMsg: message });
    } else {
      addFile(accepted);
      setState({ warningMsg: "" });
      console.log(accepted[0].preview);

      var blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(accepted[0]);
        reader.onloadend = () => {
          const base64data = reader.result;
          // this.setState({ base64data: base64data });
          setBase1(base64data)
          console.log(base64data);
        };
      });
      blobPromise.then(value => {
        console.log(value);
      });
    }
  };
  const addFile1 = (file: any) => {
    setFilename2(file[0].name)
    console.log(file[0].name);
    setState2({
      files: file.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };

  const onDrop1 = (accepted: any, rejected: any) => {
    if (Object.keys(rejected).length !== 0) {
      const message = "Please submit valid file type";
      setState({ warningMsg: message });
    } else {
      addFile1(accepted);
      setState({ warningMsg: "" });
      console.log(accepted[0].preview);

      var blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(accepted[0]);
        reader.onloadend = () => {
          const base64data = reader.result;
          // this.setState({ base64data: base64data });
          setBase2(base64data)
          console.log(base64data);
        };
      });
      blobPromise.then(value => {
        console.log(value);
      });
    }
  };
  
  const fileRef = React.useRef<HTMLInputElement | null>(null)
  const fileRef1 = React.useRef<HTMLInputElement | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File | null>();
  const [selectedFiles1, setSelectedFiles1] = useState<File | null>();

  const [fileSelected, setFileSelected] = useState<any>('');
  const [bB, setBb] = useState<any>();
  const [names,setNames] = useState<any>('');
  const [names1,setNames1] = useState<any>('');
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event?.target?.files?.[0].name)
    setSelectedFiles(event?.target?.files?.[0]);
    setNames(event?.target?.files?.[0].name)


    // const fileList = event.target.files;
    // // console.log(fileList[0].name,'uuuu')
    //  setName(fileList[0].name)
    // console.log(name,'lllllll')
    // if (!fileList) return;
    // setFileSelected(fileList[0]);
//     let reader = new FileReader();
//     // @ts-ignore
//     reader.readAsDataURL(event?.target?.files?.[0])
//     reader.onload= (e) =>{
//       //  console.log(e.target?.result,'kkkkttt')
//       setFileSelected(e.target?.result)
//       //@ts-ignore
//       // var eee4 = window.atob(e.target?.result)
//       // console.log(eee4,'rrrrrrthds')
//     }
//     fetch(fileSelected)
// .then(res => res.blob())
// .then(blob => {
//   // console.log("here is your binary: ", blob)
//    setBb(blob)
//   // now upload it
//   // fetch(api, {method: 'POST', body: blob})
// })
    // var filea = event?.target?.files?.[0];
    // var reader = new FileReader();
    // reader.onloadend = function() {
    //   console.log('Encoded Base 64 File String:', reader.result);
      
    //   /******************* for Binary ***********************/
    //   var data=(reader.result).split(',')[1];
    //    var binaryBlob = atob(data);
    //    console.log('Encoded Binary File String:', binaryBlob);
    // }
    // reader.readAsDataURL(filea);

    // reader.readAsArrayBuffer(event?.target?.files?.[0]);
    // reader.onload = function(){
    //   const binaryData = Buffer.from(reader.result as string,'binary');
    //   console.log(binaryData);
    // };
    // console.log(selectedFiles,'kkkkkttt')
  };
  const handleFileSelect1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event?.target?.files?.[0].name)
    setSelectedFiles1(event?.target?.files?.[0]);
    setNames1(event?.target?.files?.[0].name)
    let reader = new FileReader();
        // @ts-ignore
        reader.readAsDataURL(event?.target?.files?.[0])
        reader.onload= (e) =>{
            console.log(e.target?.result,'kkkkttt')
          setFileSelected(e.target?.result)
          //@ts-ignore
          // var eee4 = window.atob(e.target?.result)
          // console.log(eee4,'rrrrrrthds')
        }
  };
  const onUpload = () => {
    console.log(selectedFiles);
  };

  // const onClear = () => {
  //   setSelectedFiles(undefined);
  // };

  // const onUpdate = (event:any) => {
  //   if (event.target.textContent.trim().toLowerCase() === 'change') {
  //     onClear();
  //     //@ts-ignore
  //     fileRef.current.click();
  //     return;
  //   }
  //   if (event.target.textContent.trim().toLowerCase() === 'clear') {
  //     onClear();
  //     return;
  //   }
  // };
  // const resetInput = () => {
  //   //@ts-ignore
  //   fileRef.current.value = null;
  // };
  const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`
const Site_Id = 'tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43'
const heroBannerDriveId ="b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikNSXwtOP-0VTpmA2oOYWlnu"

async function  uploadItem (){
  try {
    const response = await fetch(`${BASE_PATH}/${Site_Id}/drives/${heroBannerDriveId}/items/root:/${names}:/content`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-type":   'application/json'
      },
      body: selectedFiles
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


  const handleSubmit = async () => {
    console.log('grdgdg')
    console.log(selectedFiles,'ghhh')
    console.log(names)
    
    const WebUrl:string =await uploadItem();
    console.log(WebUrl,'kkkkkkkkkytyyy')
    // const exten = WebUrl.split('.').pop();
    // console.log(exten,'gg')
    if(WebUrl !== undefined){
    const  sendData = {
      // token :tokens,
      title: Title,
      description: Description,
      ExpiresOn:expiresOn,
      Time:time,
      WbU: WebUrl,
      isActive: isActives,
      EnableLikes: enablelikes,
      EnableCommands: enableCommands,
      SharedAsEmail: sharedAsEmails,
      RecipientEmail: RecipientEmail,
      Attachment: fileSelected,
      Attachmentname: names1
    }
     onClick?.(sendData)
  }
   
  }
  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        <Grid className={classes.upperPart}>
          <Grid>Hero Banner</Grid>
          <Grid className={classes.new}>
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

                <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                      <img src={calenderIcon} alt="" className={classes.titleIcon} />
                      ExpiresOn<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                    </InputLabel>
                    <TextField
                      type="date"
                      id="date"
                      multiline={false}
                      defaultValue="2022-12-26"
                      className={classes.span}
                      style={{ width: "100%" }}
                      onChange={handleChangeExpriesOnField}
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
                  <div>
                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                      <img src={calenderIcon} alt="" className={classes.titleIcon} />
                      Time<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                    </InputLabel>
                    <TextField
                      type="time"
                      id="appt-time"
                      name="appt-time"
                      multiline={false}
                      defaultValue="13:30"
                      className={classes.span}
                      style={{ width: "100%" }}
                      onChange={handleChangeTimeField}
                      // placeholder="HR/MM/ss"
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

                </div>

                <div style={{ marginBottom: "10px" }}>
                  <div style={{ paddingBottom: "40px" }}>
                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                      <img src={image} alt="" className={classes.titleIcon} />
                      Image/video<img src={Asterisk} alt="..." />
                    </InputLabel>
                  </div>


                  {/* <Dropzone  onDrop={(accepted, rejected) => onDrop(accepted, rejected)}  >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: classes.dropZone })}>
                  <input {...getInputProps()}  type="file"/>
                  <p>Drag'n'drop files, or click to select files</p>
                </div>
              )}
            </Dropzone> */}
                  <Grid className={classes.svg}>
                    {/* <FileUpload value={files} onChange={handleChange} /> */}
                    <input
                      ref={fileRef}
                      hidden
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileSelect}
                    />
                    {!selectedFiles?.name && (
                      <Button
                        variant="contained"
                        component="label"
                        style={{ textTransform: 'none' }}
                        onClick={() => fileRef.current?.click()}
                      >
                        Choose file to upload
                      </Button>
                    )}
                    {/* {selectedFiles?.name && (
                      <Button
                        variant="contained"
                        component="label"
                        style={{ textTransform: 'none' }}
                        onClick={onUpdate}
                      >
                        <span style={{ float: 'left' }}> {selectedFiles?.name}</span>
                        <span style={{ padding: '10px' }}> Change</span>
                        <span>Clear</span>
                      </Button>
                    )} */}
                    {selectedFiles?.name && (
                      <>
                        <h1 >{selectedFiles?.name}</h1>
                        <button
                          onClick={() => {
                            setSelectedFiles(null);
                            if (fileRef.current) {
                              fileRef.current.value = '';
                            }
                          }}
                        >
                          Clear 
                        </button>
                      </>
                    )}
                    <Button
                      color="primary"
                      disabled={!selectedFiles}
                      style={{ textTransform: 'none' }}
                      onClick={onUpload}
                    >
                      Upload
                    </Button>

                  </Grid>

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


                <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                  <img src={recipientEmail} alt="" style={{ width: "13px", marginRight: "15px" }} />
                  RecipentEmail
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight" sx={{ width: "100%" }} onChange={handleChangeReciepientEmailField} />
                <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                  <img src={Attachment} alt="" style={{ width: "13px", marginRight: "15px" }} />
                  Attachments
                </InputLabel>
                {/* <Dropzone onDrop={(accepted, rejected) => onDrop1(accepted, rejected)}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: classes.dropZone })}>
                  <input {...getInputProps()} type="file" />
                  <p>Drag'n'drop files, or click to select files</p>
                </div>
              )}
            </Dropzone> */}
                <Grid className={classes.svg}>
                  {/* <FileUpload value={files} onChange={setFiles} /> */}
                  <input
                      ref={fileRef1}
                      hidden
                      type="file"
                      // accept="image/*,video/*"
                      onChange={handleFileSelect1}
                    />
                    {!selectedFiles1?.name && (
                      <Button
                        variant="contained"
                        component="label"
                        style={{ textTransform: 'none' }}
                        onClick={() => fileRef1.current?.click()}
                      >
                        Choose file to upload
                      </Button>
                    )}
                    {/* {selectedFiles?.name && (
                      <Button
                        variant="contained"
                        component="label"
                        style={{ textTransform: 'none' }}
                        onClick={onUpdate}
                      >
                        <span style={{ float: 'left' }}> {selectedFiles?.name}</span>
                        <span style={{ padding: '10px' }}> Change</span>
                        <span>Clear</span>
                      </Button>
                    )} */}
                    {selectedFiles1?.name && (
                      <>
                        <h1 >{selectedFiles1?.name}</h1>
                        <button
                          onClick={() => {
                            setSelectedFiles1(null);
                            if (fileRef1.current) {
                              fileRef1.current.value = '';
                            }
                          }}
                        >
                          Clear 
                        </button>
                      </>
                    )}
                    <Button
                      color="primary"
                      disabled={!selectedFiles1}
                      style={{ textTransform: 'none' }}
                      onClick={onUpload}
                    >
                      Upload
                    </Button>
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
                          {/* <img src={girl} alt="" className={classes.girl} />
                          <p>Ayesha Siddiqa</p>
                          <p>HR Manager</p> */}
                        </Box>
                        <Grid>
                          <Typography style={{ textAlign: "left", margin: "15px", fontWeight: 600 }}> Connecting the world</Typography>
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

          </Grid>
        </Grid>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};


export default HeroBannerEditor;