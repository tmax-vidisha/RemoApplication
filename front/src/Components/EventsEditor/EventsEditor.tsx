import React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from '../Birthday/index';
// import dayjs, { Dayjs } from 'dayjs';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar, Typography } from '@mui/material';
import Dropzone from "react-dropzone";
import title from '../../Assets/Images/title.svg';
import image from '../../Assets/Images/image.svg';
import clock from '../../Assets/Images/clock.svg';
import clockGreen from '../../Assets/Images/clockGreen.svg';
import isActive from '../../Assets/Images/isActive.svg';
import Attachment from '../../Assets/Images/Attachment.svg';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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
import { useStyles } from './Styles';
import FileUpload from "react-material-file-upload";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Switch from '@mui/material/Switch';
import girl from "../../Assets/Images/girl.jpg";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import browse from "../../Assets/Images/browse.svg";
var moment = require("moment-timezone");
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Title', headerName: 'Title', width: 300 },
  { field: 'Status', headerName: 'Status', type: 'image', width: 70 },
  // { field: 'Name', headerName: 'Name', width: 100 },
  { field: 'Event Date', headerName: 'Event Date', width: 100 },
  { field: 'End Date', headerName: 'End Date', width: 100 },
  // { field: 'Image', headerName: 'Image', width: 130 },
  // { field: 'Designation', headerName: 'Designation', width: 130 },
  // { field: 'DOJ', headerName: 'DOJ', type: 'date', width: 130 },
  // { field: 'Description', headerName: 'Description', width: 130 },
  // { field: 'IS Active', headerName: 'IS Active', width: 100 },
  // { field: 'EnableLikes', headerName: 'EnableLikes', type: 'image', width: 100 },
  // {
  //   field: 'EnableComments',
  //   headerName: 'EnableComments',
  //   type: 'image',
  //   width: 100,
  // },
  // {
  //   field: 'ShareAsEmail',
  //   headerName: 'ShareAsEmail',
  //   type: 'email',
  //   width: 160,
  // },
  // {
  //   field: 'RecipientEmail',
  //   headerName: 'RecipientEmail',
  //   type: 'email',
  //   width: 160,
  // },
];


const rows = [
  { id: 1, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 2, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 3, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 4, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 5, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 6, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 7, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 8, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },
  { id: 9, Title: 'Global oil Company (GOC)', Status: 'Active', 'Event Date': '12/19/2022', 'End Date': '06/01/2023', },

];
interface IFolderProps {

  onClick?: (obj: any) => void;

}

// const EventsEditor = () => {
  const EventsEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
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
  const [location, setLocation] = useState<any>('');
  const [category, setCategory] = useState<any>('');
  const [startDate, setStartDate] = useState<any>('');
  const [endDate, setEndDate] = useState<any>('');
  const [Description, setDescription] = useState<any>('');
  const [RecipientEmail, setRecipientEmail] = useState<any>('');
  const [startTime, setStartTime] = React.useState<any | null>(
    // dayjs('2014-08-18T21:11:54'),
     ''
  );
  const [endTime, setEndTime] = React.useState<any | null>(
    // dayjs('2014-08-18T21:11:54'),
    ''
  );
//   function dateConverter(str:any){
//     var date = new Date(str)
//   //  let mnth = ("0" + (date.getMonth()+1)).slice(-2)
//   //  let day  = ("0" + date.getDate()).slice(-2);
//    let hours  = ("0" + date.getHours()).slice(-2);
//    let minutes = ("0" + date.getMinutes()).slice(-2);
//    let seconds  = ("0" + date.getSeconds()).slice(-2);
//   //  let year = date.getFullYear();
//     return ` ${hours}:${minutes}:${seconds}`
//  }
  const handleChangeStartTime = (event: any) => {
    // console.log(newValue.$d)
    // const number = moment(event.target.value, ["HH.mm"]).format("HH:MM A");
    // console.log(number)
    setStartTime(event.target.value);
    // console.log(dateConverter(newValue.$d))
    //  setStartTime(dateConverter(newValue.$d));
  };
  const handleChangeEndTime = (event: any) => {
    // console.log(event.target.value)
    // const number1 = moment(event.target.value, ["HH.mm"]).format("HH:MM A");
    //  console.log(number1)
    setEndTime(event.target.value)
  };
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
  const handleChangeLocationField = (event: any) => {
    console.log(event.target.value)
    setLocation(event.target.value);
  };
  const handleChangeCategoryField = (event: any) => {
    console.log(event.target.value)
   setCategory(event.target.value);
  };
  const handleChangeStartDateField = (event: any) => {
    // console.log( moment(event.target.value).format('DD-MM-YYYY'))
    setStartDate(event.target.value);
  };
  const handleChangeEndDateField = (event: any) => {
    // console.log( moment(event.target.value).format('DD-MM-YYYY'))
    setEndDate(event.target.value);
  };
  const handleChangeDescriptionField = (event: any) => {
    console.log(event.target.value)
    setDescription(event.target.value);
  };
  const handleChangeReciepientEmailField = (event: any) => {
    console.log(event.target.value)
    setRecipientEmail(event.target.value);
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
  

  const [files, setFiles] = useState<File[]>([]);
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
    // let reader = new FileReader();
    //     // @ts-ignore
    //     reader.readAsDataURL(event?.target?.files?.[0])
    //     reader.onload= (e) =>{
    //         console.log(e.target?.result,'kkkkttt')
    //       setFileSelected(e.target?.result)
    //       //@ts-ignore
    //       // var eee4 = window.atob(e.target?.result)
    //       // console.log(eee4,'rrrrrrthds')
    //     }
  };
  const handleSubmit = async () => {
    console.log('grdgdg')
    const event = new Date(startDate + ' '+startTime);
    const event1 = new Date(endDate + ' '+endTime);
    console.log(event.toUTCString())
    const announcementData = {
      // token :tokens,
      title: Title,
      description: Description,
      image: fileSelected,
      imageName: names,
      location:location,
      category:category,
      startDate:event.toUTCString(),
     
      endDate:event1.toUTCString(),
      // endTime:endTime,
      isDraft:false
    }
    await onClick?.(announcementData)
  }

  const handleSave = async () => {
    console.log('grdgdg')
    const event = new Date(startDate + ' '+startTime);
    const event1 = new Date(endDate + ' '+endTime);
    console.log(event.toUTCString())
    const announcementData = {
      // token :tokens,
      title: Title,
      description: Description,
      image: fileSelected,
      imageName: names,
      location:location,
      category:category,
      startDate:event.toUTCString(),
     
      endDate:event1.toUTCString(),
      // endTime:endTime,
      isDraft:true
    }
    await onClick?.(announcementData)
  }

  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        <Grid className={classes.upperPart}>
          <Grid>Events</Grid>
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
                    <img src={title} alt="" className={classes.titleIcon} />
                    Location<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                  </InputLabel>
                  <TextField
                    id="outlined-adornment-weight"
                    className={classes.span}
                    style={{ width: "100%" }}
                    onChange={handleChangeLocationField}
                    placeholder="Enter a name"
                  />
                </div>
                <div className={classes.dateTime}>
                  <div>
                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                      <img src={calenderIcon} alt="" className={classes.titleIcon} />
                      Start Date<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                    </InputLabel>
                    <TextField
                      type="date"
                      id="date"
                      multiline={false}
                      defaultValue="2022-12-26"
                      className={classes.span}
                      style={{ width: "100%" }}
                      onChange={handleChangeStartDateField}
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
                      <img src={clock} alt="" className={classes.titleIcon} />
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
                        onChange={handleChangeStartTime}                  
                             // placeholder="HR/MM/ss"                
                         InputLabelProps={{               
                         color: "secondary",             
                         className: "DatePicker",    
                            style: { color: "gray" },     
                            shrink: true,                      }}       
                             inputProps={{         
                            style: { color: "gray" },                      }}         
                              />
                   
                     {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                              //  label="Time"
                               value={startTime}
                               onChange={handleChangeStartTime}
                              renderInput={(params) => <TextField {...params} />}
                              />
                     </LocalizationProvider> */}
                  </div>

                </div>
                <div className={classes.dateTime}>
                  <div>
                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                      <img src={calenderIcon} alt="" className={classes.titleIcon} />
                      End Date<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                    </InputLabel>
                    <TextField
                      type="date"
                      id="date"
                      multiline={false}
                      defaultValue="2022-12-26"
                      className={classes.span}
                      style={{ width: "100%" }}
                      onChange={handleChangeEndDateField}
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
                      <img src={clock} alt="" className={classes.titleIcon} />
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
                      onChange={handleChangeEndTime}
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
                     {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                              //  label="Time"
                               value={endTime}
                               onChange={handleChangeEndTime}
                              renderInput={(params) => <TextField {...params} />}
                              />
                     </LocalizationProvider> */}
                  </div>

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
                <div style={{ marginBottom: "10px" }}>
                  <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>
                    <img src={title} alt="" className={classes.titleIcon} />
                    Category<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                  </InputLabel>
                  <TextField
                    id="outlined-adornment-weight"
                    className={classes.span}
                    style={{ width: "100%" }}
                    onChange={handleChangeCategoryField}
                    placeholder="Enter a name"
                  />
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                  <img src={image} alt="" className={classes.titleIcon} />
                      Image/video<img src={Asterisk} alt="..." />
                  </InputLabel>
                   <Grid className={classes.svg}>
                    {/* <FileUpload value={files} onChange={setFiles} /> */}
                    <img src={browse} alt="" />
                    <p>drag and drop here</p>
                    <p>Or</p>
                    <input
                      ref={fileRef}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                    />

                    {!selectedFiles?.name && (
                      <p
                        onClick={() => fileRef.current?.click()} style={{ color: "#009BAD" }}>
                        Browse
                      </p>
                    )}

                    <div>
                      {selectedFiles?.name && (
                        <>
                          <p style={{ fontSize: "12px" }}>{selectedFiles?.name}</p>
                          <button
                            onClick={() => {
                              setSelectedFiles(null);
                              if (fileRef.current) {
                                fileRef.current.value = '';
                              }
                            }}
                            style={{ padding: "5px", border: "none", borderRadius: "4px" }}
                          >
                            Clear
                          </button>
                        </>
                      )}
                    </div>
                  </Grid>
                </div>
                <div>
                  <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                    <img src={Attachment} alt="" style={{ width: "13px", marginRight: "15px" }} />
                    Attachments
                  </InputLabel>
                  <Grid className={classes.svg}>
                    {/* <FileUpload value={files} onChange={setFiles} /> */}
                    <img src={browse} alt="" />
                    <p>drag and drop here</p>
                    <p>Or</p>
                    <input
                      ref={fileRef1}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect1}
                    />

                    {!selectedFiles?.name && (
                      <p
                        onClick={() => fileRef1.current?.click()} style={{ color: "#009BAD" }}>
                        Browse
                      </p>
                    )}

                    <div>
                      {selectedFiles1?.name && (
                        <>
                          <p style={{ fontSize: "12px" }}>{selectedFiles1?.name}</p>
                          <button
                            onClick={() => {
                              setSelectedFiles1(null);
                              if (fileRef1.current) {
                                fileRef1.current.value = '';
                              }
                            }}
                            style={{ padding: "5px", border: "none", borderRadius: "4px" }}
                          >
                            Clear
                          </button>
                        </>
                      )}
                    </div>
                  </Grid>
                </div>

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
                          <img src={fileSelected} alt="" className={classes.backgroundImage} />                        
                        </Box>
                        <Grid>
                          <Typography className={classes.prevHeading}>{Title}</Typography>
                          <p className={classes.prevDate}> <img src={calenderIcon} alt="" className={classes.titleIcon} />{moment(startDate).format('DD-MM-YYYY')}</p>
                          <p className={classes.prevDate}> <img src={clockGreen} alt="" className={classes.titleIcon} /> { moment(startTime, ["HH:mm"]).format("hh:mm A")} - { moment(endTime, ["HH:mm"]).format("hh:mm A")}</p>
                          <p className={classes.prevDesc}>
                           {Description}
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
                        <Button onClick={handleSave} autoFocus className={classes.saveBtn}>Save</Button>
                        <Button onClick={handleClosePreview} className={classes.cancelBtn}>Cancel</Button>
                      </Grid>
                    </DialogActions>

                  </Dialog>

                  <Button onClick={handleSave} className={classes.saveBtn}>Save</Button>
                  <Button onClick={handleSubmit} autoFocus className={classes.saveBtn}>
                    submit
                  </Button>
                  <Button onClick={handleClose} className={classes.cancelBtn}>Cancel</Button>
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



export default EventsEditor;