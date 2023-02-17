import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from './index';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar,Typography } from '@mui/material';
import { useStyles } from './Styles';
// import Dropzone from "react-dropzone";
import useCustom from '../../hooks/useCustom';
import title from '../../Assets/Images/title.svg';
import image from '../../Assets/Images/image.svg';
import isActive from '../../Assets/Images/isActive.svg';
import Attachment from '../../Assets/Images/Attachment.svg';
import recipientEmail from '../../Assets/Images/recipientEmail.svg';
import shareasemail from '../../Assets/Images/shareasemail.svg';
import descripton from '../../Assets/Images/description.svg';
import comments from '../../Assets/Images/comments.svg';
import like1 from '../../Assets/Images/like1.svg'
import save from '../../Assets/Images/save.svg'
import cancel from '../../Assets/Images/cancel.svg'
import copylink from '../../Assets/Images/copy link.svg';
// import cancel from  '../../Assets/Images/cancel.svg';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { CircularProgress } from '@mui/material';
import ReactSwitch from 'react-switch';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
// import { useUploadItemInAnnouncementMutation } from '../../services/contentEditor';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import publish from '../../Assets/Images/publish.svg';
import Asterisk from '../../Assets/Images/Asterisk.svg';
// import FileUpload from "react-material-file-upload";
import birthday from '../../Assets/Images/birthday.jpg'
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import browse from "../../Assets/Images/browse.svg";


const renderCell = (params: any) => {
  return (
    <div>
      <img src={activeView} alt='' />

    </div>
  )
}



const rows = [
  { id: 1,Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: activeView, EnableLikes: 'Jon', EnableComments: 35, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 2,Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Lannister', EnableLikes: 'Cersei', EnableComments: 42, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  {  id: 3,Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Lannister', EnableLikes: 'Jaime', EnableComments: 45, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  {id: 4, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Stark', EnableLikes: 'Arya', EnableComments: 16, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 5,Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Targaryen', EnableLikes: 'Daenerys', EnableComments: null, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 6,Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Melisandre', EnableLikes: null, EnableComments: 150, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 7,Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Clifford', EnableLikes: 'Ferrara', EnableComments: 44, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  {id: 8, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Frances', EnableLikes: 'Rossini', EnableComments: 36, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  {id: 9, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago',  IsActive: 'Roxie', EnableLikes: 'Harvey', EnableComments: 65, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
];

interface IFolderProps {

  onClick?: (obj: any) => void;
  data:any,
  isLoading:any,
  isSuccess:any,
}

// const TableAnnouncement = () => {
  const TableAnnouncement: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const {token} = useCustom();
  const { onClick,data,isLoading,isSuccess } = props
  console.log(data,'uuuuuuuuuuuuuuuu')
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
    { field: 'id', 
      headerName: 'ID', 
      width: 70,
      valueGetter : (allData:any) => allData.row.fields.id
    },
    { 
      field: 'Title', 
      headerName: 'Title', 
      width: 200,
      valueGetter : (allData:any) => allData.row.fields.Title
    },
    { 
      field: 'Description', 
      headerName: 'Description', 
      width: 400,
      valueGetter : (allData:any) => allData.row.fields.Description
    },
    { 
      field: 'Image', 
      headerName: 'Image',
      width: 130,
      renderCell: (params) => <img src={params.row.fields.Image} style={{width:"80px", height:"50px"}}/>
      },
    { 
      field: 'Modified', 
      headerName: 'Modified On', 
      width: 130,
      valueGetter : (allData:any) => allData.row.fields.Modified
    },
    {
      field: 'RecipientEmail',
      headerName: 'RecipientEmail',
      type: 'email',
      width: 160,
      valueGetter : (allData:any) => allData.row.fields.RecipientEmail
    },
    { field: 'isActive', 
      headerName: 'IsActive', 
      type: 'image', 
      width: 100,
      renderCell: (params) => 
       <ReactSwitch
      checked={params.row.fields.isActive}
      onChange={handleChangeIsActiveToggle}
      checkedIcon={false}
      uncheckedIcon={false}
       onColor={'#009BAD'}
      width={40}
      height={20}
    />
    
    },
    { field: 'EnableLikes', 
      headerName: 'EnableLikes', 
      width: 100,
      renderCell: (params) => 
      <ReactSwitch
     checked={params.row.fields.EnableLikes}
     onChange={handleChangeEnableLikesToggle}
     onColor={'#009BAD'}
      width={40}
      height={20}
     checkedIcon={false}
     uncheckedIcon={false}
   />
    
    },
    {
      field: 'EnableCommands',
      headerName: 'EnableComments',
      type: 'number',
      width: 100,
      renderCell: (params) => 
      <ReactSwitch
     checked={params.row.fields.EnableCommands}
     onChange={handleChangeEnableCommentsToggle}
     onColor={'#009BAD'}
      width={40}
      height={20}
     checkedIcon={false}
     uncheckedIcon={false}
   />
    },
    {
      field: 'SharedAsEmail',
      headerName: 'ShareAsEmail',
      // description: 'This column has a value getter and is not sortable.',
      type: 'email',
      width: 100,
      renderCell: (params) => 
      <ReactSwitch
      checked={params.row.fields.ShareAsEmail}
      onChange={handleChangeShareAsEmailToggle}
      onColor={'#009BAD'}
      width={40}
      height={20}
      checkedIcon={false}
      uncheckedIcon={false}
   />
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.EnableLikes || ''} ${params.row.IsActive || ''}`,
    }
    
  ];
  
  const [open, setOpen] = useState<boolean>(false);
  // const [sendItem] = useUploadItemInAnnouncementMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles: any) =>
    setFileNames(acceptedFiles.map((file: any) => file.name));

  //   const [checked, setChecked] =useState([true, false]);

  // const handleChange1 = (event:any) => {
  //   setChecked([event.target.checked, event.target.checked]);
  // };

  // const handleChange2 = (event:any) => {
  //   setChecked([event.target.checked, checked[1]]);
  // };
  const [files, setFiles] = useState<File[]>([]);
  const [checkedyesisActive, setCheckedyesisActive] =useState<boolean>(true);
  const [checkednoisActive, setCheckednoisActive] =useState<boolean>(false);
  const [checkedyesEnableLikes, setCheckedyesEnableLikes] =useState<boolean>(true);
  const [checkednoEnableLikes, setCheckednoEnableLikes] =useState<boolean>(false);
  const [checkedyesEnableCommands, setCheckedyesEnableCommands] =useState<boolean>(true);
  const [checkednoEnableCommands, setCheckednoEnableCommands] =useState<boolean>(false);
  const [checkedyesSharedAsEmail, setCheckedyesSharedAsEmail] =useState<boolean>(true);
  const [checkednoSharedAsEmail, setCheckednoSharedAsEmail] =useState<boolean>(false);
  const   [isActives,setIsActives] = useState<boolean>(false)
  const   [enablelikes,setEnableLikes] = useState<boolean>(false)
  const   [enableCommands,setCommands] = useState<boolean>(false)
  const   [sharedAsEmails,setSharedEmails] = useState<boolean>(false)
  const [Title, setTitle] = useState<any>('');
  const [Description, setDescription] = useState<any>('');
  const [RecipientEmail, setRecipientEmail] = useState<any>('');
  const [state,setState] = useState({
    warningMsg:""
  })
  const [state1,setState1] = useState({
    files: [],
    
  })
  const [state2,setState2] = useState({
    files: [],
    
  })
  const [filename1,setFilename1] = useState<any>('')
  const [filename2,setFilename2] = useState<any>('')
  const [base1,setBase1]= useState<any>('')
  const [base2,setBase2]= useState<any>('')

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

  useEffect(()=>{
    state1.files.forEach((file:any) => URL.revokeObjectURL(file.preview));
    state2.files.forEach((file:any) => URL.revokeObjectURL(file.preview));
  },[])

  const addFile = (file:any) => {
    setFilename1(file[0].name)
    console.log(file[0].name);
    setState1({
      files: file.map((file:any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };
  
 const onDrop = (accepted:any, rejected:any) => {
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
  const addFile1 = (file:any) => {
    setFilename2(file[0].name)
    console.log(file[0].name);
    setState2({
      files: file.map((file:any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };

  const onDrop1 = (accepted:any, rejected:any) => {
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


const [openPreview, setOpenPreview] =useState<boolean>(false);
const handleClickPreview = () => {
  setOpenPreview(true);
};

const handleClosePreview = () => {
  setOpenPreview(false);
};

const fileRef = React.useRef<HTMLInputElement | null>(null)
const fileRef1 = React.useRef<HTMLInputElement | null>(null)
const [selectedFiles, setSelectedFiles] = useState<File | null>();
const [selectedFiles1, setSelectedFiles1] = useState<File | null>();
const [fileSelected, setFileSelected] = useState<any>('');
const [fileSelected1, setFileSelected1] = useState<any>('');
const [names, setNames] = useState<any>('');
const [names1, setNames1] = useState<any>('');
const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
  // console.log(event?.target?.files?.[0].name)
  setSelectedFiles(event?.target?.files?.[0]);
  setNames(event?.target?.files?.[0].name)
  let reader = new FileReader();
  // @ts-ignore
  reader.readAsDataURL(event?.target?.files?.[0])
  reader.onload = (e) => {
    console.log(e.target?.result, 'kkkkttt')
    setFileSelected(e.target?.result)
    //@ts-ignore
    // var eee4 = window.atob(e.target?.result)
    // console.log(eee4,'rrrrrrthds')
  }

};
const handleFileSelect1 = (event: React.ChangeEvent<HTMLInputElement>) => {
  // console.log(event?.target?.files?.[0].name)
  setSelectedFiles1(event?.target?.files?.[0]);
  setNames1(event?.target?.files?.[0].name)
  // let reader = new FileReader();
  // // @ts-ignore
  // reader.readAsDataURL(event?.target?.files?.[0])
  // reader.onload = (e) => {
  //   console.log(e.target?.result, 'kkkkttt')
  //   setFileSelected1(e.target?.result)
  //   //@ts-ignore
  //   // var eee4 = window.atob(e.target?.result)
  //   // console.log(eee4,'rrrrrrthds')
  // }

};
const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`
const Site_Id = 'tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43'
const heroBannerDriveId ="b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikNSXwtOP-0VTpmA2oOYWlnu"
const documentsId ="b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikPINNWwDW75Q613iMSyvUzr"
async function  uploadItemDocument (){
  try {
    const response = await fetch(`${BASE_PATH}/${Site_Id}/drives/${documentsId}/items/root:/${names1}:/content`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-type":   'application/json'
      },
      body: selectedFiles1
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

const handleSubmit = async  () =>{
  console.log('grdgdg')
  const docUrl :string = await uploadItemDocument();
  console.log(docUrl,'kkrrrrrrrsssss')

if( docUrl !== undefined){
      const announcementData = {
    // token :tokens,
    title: Title,
    description: Description,
    image:fileSelected,
    imageName:names,
    isActive:isActives,
    EnableLikes:enablelikes,
    EnableCommands:enableCommands,
    SharedAsEmail:sharedAsEmails,
    RecipientEmail:RecipientEmail,
    Attachment:docUrl,
    isDraft:false
    
  }
   onClick?.(announcementData)
}
 
}
const handleSave = async  () =>{
  console.log('grdgdg')
  const docUrl :string = await uploadItemDocument();
  console.log(docUrl,'kkrrrrrrrsssss')

if( docUrl !== undefined){
      const announcementData = {
    // token :tokens,
    title: Title,
    description: Description,
    image:fileSelected,
    imageName:names,
    isActive:isActives,
    EnableLikes:enablelikes,
    EnableCommands:enableCommands,
    SharedAsEmail:sharedAsEmails,
    RecipientEmail:RecipientEmail,
    Attachment:docUrl,
    isDraft:true
    
  }
   onClick?.(announcementData)
}
 
}
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
        <Grid>Announcement</Grid>
        <Grid className={classes.new}>
        <Button
            onClick={handleClickOpen}
            className={classes.create}
            sx={{ textTransform: "capitalize",}}>
            <span className={classes.plus}><LocalHospitalIcon/></span>
            New
          </Button>
          <Dialog
            classes={{
              paper: classes.newPosOfDialog
            }}
            open={open}
            onClose={handleClose}
             style={{ marginTop:"60px", height:"650px"}}
          >
            <DialogTitle id="alert-dialog-title" >
            <Grid className={classes.dialogTitle}>
            <Grid>
                  <Button className={classes.dialogBtn}>
                    <img src={save} alt="" style={{ width: "13px", marginRight: "5px",  }} />
                    <span style={{color: "#606C74",textTransform: "capitalize"}}>Save</span>
                  </Button>
                  <Button style={{ color: "#606C74", fontSize: "12px" }}>
                    <img src={cancel} alt="" style={{ width: "13px", marginRight: "5px" }} />
                    <span style={{textTransform: "capitalize"}}>Cancel</span> 
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
                  <Button  onClick={handleClose}>
                    <img src={cancel} alt="" style={{width:"13px"}}/>
                  </Button>
                </Grid>
              </Grid>
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Divider />
                <p style={{ textAlign: "left" }}>New Item</p>
              </DialogContentText>

              <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                <img src={title} alt="" style={{ width: "13px", marginRight: "5px" }} />
                Title
              </InputLabel>
              <TextField
                id="outlined-adornment-weight"
                className={classes.span}
                style={{ width: "100%" }}
                onChange={handleChangeTitleField}
              />
              <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={descripton} alt="" style={{ width: "13px", marginRight: "5px" }} />
                Description
              </InputLabel>
              <TextField
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows={4}
                style={{ width: "100%" }}
                onChange={handleChangeDescriptionField}
              />
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
              
              {/* <Dropzone  onDrop={(accepted, rejected) => onDrop(accepted, rejected)}  >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: classes.dropZone })}>
                    <input {...getInputProps()} />
                    <p>Drag'n'drop files, or click to select files</p>
                  </div>
                )}
              </Dropzone> */}
             
                <Grid>
                  <Box sx={{ display: 'flex', justifyContent:"space-between"}}>
                    <Box>
                    <img src={isActive} alt="" style={{ width: "15px", marginRight: "15px" }}/>
                    <span>IsActive</span>
                    </Box>
                    <Box style={{display: 'flex',}}>
                    <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checkedyesisActive}  onChange={handleChangeisActiveyes} />}
                      />
                    <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checkednoisActive}  onChange={handleChangeisActiveno} />}
                      />
                    </Box>
                    
                  </Box>
                  <Grid sx={{ display: 'flex', justifyContent:"space-between"}}>
                    <Box>
                    <img src={like1} alt=""  style={{ width: "15px", marginRight: "15px" }}/>
                  <span>EnableLikes </span>
                    </Box>
                    <Box style={{display: 'flex',}}>
                     
                      <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checkedyesEnableLikes}  onChange={handleChangeEnableLikesyes} />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checkednoEnableLikes}  onChange={handleChangeEnableLikesno} />}
                      />
                    </Box>
                   
                  </Grid>
                </Grid>
                <Grid>
                 
                  <Grid>
                  <Box sx={{ display: 'flex', justifyContent:"space-between"}}>
                    <Box>
                    <img src={comments} alt="" style={{ width: "15px", marginRight: "15px" }}/>
                    <span> EnableCommands</span>
                    
                    </Box>
                    <Box style={{display:"flex"}}>
                    <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checkedyesEnableCommands}  onChange={handleChangeEnableCommandsyes} />}
                      />
                    <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checkednoEnableCommands}  onChange={handleChangeEnableCommandsno} />}
                      />
                    </Box>
                    
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent:"space-between"}}>
                    <Box>
                    <img src={shareasemail} alt="" style={{ width: "15px", marginRight: "15px" }}/>
                    <span>  ShareAsEmail</span>
                    </Box>
                    <Box style={{display:"flex"}}>
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
                <img src={recipientEmail} alt="" style={{ width: "13px", marginRight: "15px" }}/>
                RecipentEmail
              </InputLabel>
              <TextField
                id="outlined-adornment-weight" sx={{width:"100%"}}  onChange={handleChangeReciepientEmailField}  />
              <div style={{ marginBottom: "15px" }}>
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
                      type="file"
                      // accept="image/*,video/*"
                      onChange={handleFileSelect1}
                      hidden />

                    {!selectedFiles1?.name && (
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
              {/* <Dropzone onDrop={(accepted, rejected) => onDrop1(accepted, rejected)}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: classes.dropZone })}>
                    <input {...getInputProps()} />
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
                      <img src={fileSelected} alt="" className={classes.backgroundImage} />
                        {/* <img src={girl} alt="" className={classes.girl} /> */}
                        {/* <p>Ayesha Siddiqa</p>
                        <p>HR Manager</p> */}
                      </Box>
                      <Grid>
                        <Typography style={{ textAlign: "left", margin: "15px", fontWeight: 600 }}> {Title}</Typography>
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
                      <Button onClick={handleSave}   autoFocus className={classes.saveBtn}>Save</Button>
                      <Button  onClick={handleClosePreview} className={classes.cancelBtn}>Cancel</Button>
                    </Grid>
                  </DialogActions>

                </Dialog>

                <Button  onClick={handleSave} className={classes.saveBtn}>Save</Button>
                <Button onClick={handleSubmit} autoFocus className={classes.saveBtn}>
                  submit
                </Button>
                <Button   onClick={handleClose} className={classes.cancelBtn}>Cancel</Button>
              </Grid>

            </DialogActions>

          </Dialog>

        </Grid>
      </Grid>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
      {content}
      </Box>
    </div>
  );
}


export default TableAnnouncement;