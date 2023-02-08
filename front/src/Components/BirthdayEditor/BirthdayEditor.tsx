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
import { useStyles } from './Styles';
import FileUpload from "react-material-file-upload";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Switch from '@mui/material/Switch';
import girl from "../../Assets/Images/girl.jpg";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import browse from "../../Assets/Images/browse.svg";
import { CircularProgress } from '@mui/material';
import ReactSwitch from 'react-switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };




const rows = [
  { id: 1, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 2, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 3, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 4, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 5, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 6, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 7, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  { id: 8, Title: 'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />', Status: 'Active', Name: 'Ayesha Siddiqa', DOB: '12/19/2022', Image: <img src={image} alt="" />, Designation: 'HR Manager', DOJ: '12/19/2022', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', IsActive: 'yes ', EnableLikes: <Switch {...label} defaultChecked />, EnableComments: <Switch {...label} defaultChecked />, },
  // { id: 9, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Roxie', EnableLikes: 'Harvey', EnableComments: 65, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
];
interface IFolderProps {
 
  onClick?: (obj:any) => void;
  data:any,
  isLoading:any,
  isSuccess:any,
  
}


// const BirthdayEditor = () => {
  const BirthdayEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { onClick,data,isLoading,isSuccess } = props
  // const isMounted = React.useRef(true)
  // const [empData ,setEmpData ]= useState([]);
  // useEffect(()=>{
  //   if (isMounted) setEmpData(allData)
   
  // },[])
  const handleChangeIsActiveToggle = (val:any) => {
    // setChecked(val);
    console.log(val,'hhhfhf')
  };
  const handleChangeEnableLikesToggle = (val:any) => {
    // setChecked(val);
    console.log(val,'hhhfhfdddd')
  };
  const handleChangeEnableCommentsToggle = (val:any) => {
    // setChecked(val);
    console.log(val,'hhhfhfdddd')
  };
  const handleChangeShareAsEmailToggle = (val:any) => {
    // setChecked(val);
    console.log(val,'hhhfhfdddd')
  };
  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 70,
      valueGetter : (allData:any) => allData.row.fields.id
    },
    { field: 'Title', 
      headerName: 'Title', 
      width: 160 ,
       valueGetter : (allData:any) => allData.row.fields.Title
    },
    // { field: 'Status', headerName: 'Status', type: 'image', width: 70 },
    { field: 'Name',
      headerName: 'Name', 
      width: 160,
      valueGetter : (allData:any) => allData.row.fields.Name
    },
    { field: 'DOB', 
      headerName: 'DOB', 
      width: 160 ,
      valueGetter : (allData:any) => allData.row.fields.DOB
    },
     { field: 'EmpImg', headerName: 'Image', width: 130, 
     renderCell: (params) => <img src={params.row.fields.EmpImg}/> 
    },
    { field: 'Dept', 
      headerName: 'Designation', 
      width: 130 ,
      valueGetter : (allData:any) => allData.row.fields.Dept
    },
    { field: 'DOJ',
     headerName: 'DOJ', 
     type: 'date', 
     width: 130,
     valueGetter : (allData:any) => allData.row.fields.DOJ
    },
    { field: 'Description', 
      headerName: 'Description', 
      width: 130,
      valueGetter : (allData:any) => allData.row.fields.Description
    },
    { field: 'isActive', 
      headerName: 'IS Active', 
      width: 100,
      renderCell: (params) => 
       <ReactSwitch
      checked={params.row.fields.isActive}
      onChange={handleChangeIsActiveToggle}
      onColor={'#00FFFF'}
      checkedIcon={false}
      uncheckedIcon={false}
    />
    },
    { field: 'EnableLikes', 
      headerName: 'EnableLikes', 
      width: 100,
      renderCell: (params) => 
      <ReactSwitch
     checked={params.row.fields.EnableLikes}
     onChange={handleChangeEnableLikesToggle}
     onColor={'#00FFFF'}
     checkedIcon={false}
     uncheckedIcon={false}
   />
  
    },
    {
      field: 'EnableCommands',
      headerName: 'EnableComments',
      // type: 'image',
      width: 100,
      renderCell: (params) => 
      <ReactSwitch
     checked={params.row.fields.EnableCommands}
     onChange={handleChangeEnableCommentsToggle}
     onColor={'#00FFFF'}
     checkedIcon={false}
     uncheckedIcon={false}
   />
    },
    {
      field: 'ShareAsEmail',
      headerName: 'ShareAsEmail',
      type: 'email',
      width: 160,
      renderCell: (params) => 
      <ReactSwitch
      checked={params.row.fields.ShareAsEmail}
      onChange={handleChangeShareAsEmailToggle}
      onColor={'#00FFFF'}
      checkedIcon={false}
      uncheckedIcon={false}
   />
    },
    // {
    //   field: 'RecipientEmail',
    //   headerName: 'RecipientEmail',
    //   type: 'email',
    //   width: 160,
    // },
  ];
  // console.log(empData,'ththytwwwwwwwwwwwwwwwwwwwww')
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
  const [EmpName, setEmpName] = useState<any>('');
  const [Description, setDescription] = useState<any>('');
  const [Designation, setDesignation] = useState<any>('');
  const [RecipientEmail, setRecipientEmail] = useState<any>('');
  const [dob, setDob] = useState<any>('');
  const [doj, setDoj] = useState<any>('');
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
  const handleChangeDesignationField = (event: any) => {
    console.log(event.target.value)
    setDesignation(event.target.value);
  };
  const handleChangeNameField = (event: any) => {
    console.log(event.target.value)
    setEmpName(event.target.value);
  };
  const handleChangeDObField = (event: any) => {
    console.log(event.target.value)
    setDob(event.target.value);
  };
  const handleChangeDOjField = (event: any) => {
    console.log(event.target.value)
    setDoj(event.target.value);
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
  const [selectedFiles, setSelectedFiles] = useState<File | null>();
  const [fileSelected, setFileSelected] = useState<any>('');
  const [names,setNames] = useState<any>('');

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

  };
  
  const handleSubmit = async () => {
    console.log('grdgdg')
    const announcementData = {
      // token :tokens,
      name:EmpName,
      title: Title,
      description: Description,
      designation:Designation,
      image: fileSelected,
      imageName: names,
      dob:dob,
      doj:doj,
      isActive: isActives,
      EnableLikes: enablelikes,
      EnableCommands: enableCommands,
      SharedAsEmail: sharedAsEmails,
      isDraft:false
      
    }
    //  await sendItem(announcementData)
    onClick?.(announcementData)
  }
  const handleSave = async () => {
    console.log('grdgdg')
    const announcementData = {
      // token :tokens,
      name:EmpName,
      title: Title,
      description: Description,
      designation:Designation,
      image: fileSelected,
      imageName: names,
      dob:dob,
      doj:doj,
      isActive: isActives,
      EnableLikes: enablelikes,
      EnableCommands: enableCommands,
      SharedAsEmail: sharedAsEmails,
      isDraft:true
      
    }
    //  await sendItem(announcementData)
    onClick?.(announcementData)
  }

  const [files, setFiles] = useState<File[]>([]);
  
  let content

  if (isLoading) {
    content = <CircularProgress />
  } else if (isSuccess) {
    content = 
    <div style={{ display: 'flex', height: '100%'}}>
      <Box sx={{ flexGrow: 1 }}>
    { data?.response &&
      <DataGrid 
        // autoHeight
        // autoWidth
        getRowId={(row) => row.id}
        rows={data?.response}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
          checkboxSelection
        //sx={{ height: '100%', width: '100%' }}
    
   />}
   </Box>
    </div>
  
  }
  
  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        <Grid className={classes.upperPart}>
          <Grid>Birthday</Grid>
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
                    Name<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                  </InputLabel>
                  <TextField
                    id="outlined-adornment-weight"
                    className={classes.span}
                    style={{ width: "100%" }}
                    onChange={handleChangeNameField}
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
                    onChange={handleChangeDObField}
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

                <div style={{ marginBottom: "15px" }}>
                  <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                  <img src={image} alt="" className={classes.titleIcon} />
                      Image<img src={Asterisk} alt="..." />
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
                <div style={{ marginBottom: "10px" }}>
                  <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                    <img src={title} alt="" className={classes.titleIcon} />
                    Designation<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                  </InputLabel>
                  <TextField
                    id="outlined-adornment-weight"
                    className={classes.span}
                    style={{ width: "100%" }}
                    onChange={handleChangeDesignationField}
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
                    onChange={handleChangeDOjField}
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


                {/* <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={recipientEmail} alt="" style={{ width: "13px", marginRight: "15px" }} />
                RecipentEmail
              </InputLabel>
              <TextField
                id="outlined-adornment-weight" sx={{ width: "100%" }} onChange={handleChangeReciepientEmailField} />
              <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={Attachment} alt="" style={{ width: "13px", marginRight: "15px" }} />
                Attachments
              </InputLabel>
              <Dropzone onDrop={(accepted, rejected) => onDrop1(accepted, rejected)}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: classes.dropZone })}>
                    <input {...getInputProps()} type="file" />
                    <p>Drag'n'drop files, or click to select files</p>
                  </div>
                )}
              </Dropzone> */}
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
                          <img src={fileSelected} alt="" className={classes.girl} />
                          <p>{EmpName}</p>
                          <p>{Designation}</p>
                        </Box>
                        <Grid>
                          <Typography style={{ textAlign: "left", margin: "15px", fontWeight: 600 }}> {Title}{EmpName}</Typography>
                          <p style={{ textAlign: "left", marginLeft: "15px" }}>
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
                  <Button   onClick={handleClosePreview} className={classes.cancelBtn}>Cancel</Button>
                </Grid>

              </DialogActions>

            </Dialog>

          </Grid>
        </Grid>
       {content}
        

        {/* <DataGrid
          rows={rows}
          // getRowId={(rows:any) => rows.id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />  */}
        
        {/* {empData.length>0
                        ? <DataGrid
                            rows={empData}
                            columns={columns}
                            getRowId={(rows) => rows.id}
                            pageSize={5}
                        />
                        : <Typography variant="h6" >No pastor for this church yet!</Typography>
                    } */}

        
       
      </Box>
    </div>
  );
};

export default BirthdayEditor;