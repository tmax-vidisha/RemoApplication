import React from "react";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import activeView from "./../../Assets/Images/activeView.svg";
import Announcement from "../Birthday/index";
import {
  AppBar,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Dropzone from "react-dropzone";
import title from "../../Assets/Images/title.svg";
import image from "../../Assets/Images/image.svg";
import isActive from "../../Assets/Images/isActive.svg";
import Attachment from "../../Assets/Images/Attachment.svg";
import recipientEmail from "../../Assets/Images/recipientEmail.svg";
import shareasemail from "../../Assets/Images/shareasemail.svg";
import descripton from "../../Assets/Images/description.svg";
import comments from "../../Assets/Images/comments.svg";
import publish from "../../Assets/Images/publish.svg";
import Asterisk from "../../Assets/Images/Asterisk.svg";
import like1 from "../../Assets/Images/like1.svg";
import save from "../../Assets/Images/save.svg";
import cancel from "../../Assets/Images/cancel.svg";
import birthday from "../../Assets/Images/birthday.jpg";
import copylink from "../../Assets/Images/copy link.svg";
import calenderIcon from "../../Assets/Images/calenderGrey.svg";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useStyles } from "./Styles";
import FileUpload from "react-material-file-upload";
import ReactSwitch from "react-switch";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Switch from "@mui/material/Switch";
import girl from "../../Assets/Images/girl.jpg";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import browse from "../../Assets/Images/browse.svg";
import dept from "../../Assets/Images/deptIcon.svg";
var moment = require("moment-timezone");

const label = { inputProps: { "aria-label": "Switch demo" } };

const rows = [
  {
    id: 1,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
  {
    id: 2,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
  {
    id: 3,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
  {
    id: 4,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
  {
    id: 5,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
  {
    id: 6,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
  {
    id: 7,
    Title: "UAE President , VIP meetings",
    Status: "Active",
    Description: "DP World Sokhna  has celebrated its 10th anniversary",
    Image: <img src={image} alt="" />,
    DetailsPageUrl: "https://remodigitalsharepoint.com",
    "Site Pages ID": "32",
    IsActive: "yes ",
    "Enable Likes": <Switch {...label} defaultChecked />,
    "Enable Comments": <Switch {...label} defaultChecked />,
    "Share As email": <Switch {...label} defaultChecked />,
    "Page View Count": 32,
    Created: "august 12 2022",
  },
];
interface IFolderProps {
  onClick?: (obj: any) => void;
  data: any;
  isLoading: any;
  isSuccess: any;
}

// const NewsEditor= () => {
const NewsEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { onClick, data, isLoading, isSuccess } = props;
  console.log(data, "hththththt");
  const handleChangeIsActiveToggle = (val: any) => {
    // setChecked(val);
    console.log(val, "hhhfhf");
  };
  const handleChangeEnableLikesToggle = (val: any) => {
    // setChecked(val);
    console.log(val, "hhhfhfdddd");
  };
  const handleChangeEnableCommentsToggle = (val: any) => {
    // setChecked(val);
    console.log(val, "hhhfhfdddd");
  };
  const handleChangeShareAsEmailToggle = (val: any) => {
    // setChecked(val);
    console.log(val, "hhhfhfdddd");
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      valueGetter: (allData: any) => allData.row.fields.id,
    },
    {
      field: "Title",
      headerName: "Title",
      width: 130,
      valueGetter: (allData: any) => allData.row.fields.Title,
    },
    // { field: 'Status', headerName: 'Status', width: 70 },
    {
      field: "Description",
      headerName: "Description",
      width: 300,
      valueGetter: (allData: any) => allData.row.fields.Description,
    },
    {
      field: "Reference",
      headerName: "Reference",
      width: 100,
      valueGetter: (allData: any) => allData.row.fields.Reference,
    },
    {
      field: "NewsImage",
      headerName: "Image",
      width: 130,
      renderCell: (params) => (
        <img
          src={params.row.fields.NewsImage}
          alt="ghgh"
          style={{ width: "80px", height: "50px" }}
        />
      ),
    },
    // { field: 'Site Pages ID', headerName: 'Site Pages ID', width: 70 },
    {
      field: "isActive",
      headerName: "Is Active",
      // type: 'image',
      width: 80,
      renderCell: (params) => (
        <ReactSwitch
          checked={params.row.fields.isActive}
          onChange={handleChangeIsActiveToggle}
          onColor={"#009BAD"}
          width={40}
          height={20}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      ),
    },
    {
      field: "EnableLikes",
      headerName: "EnableLikes",
      // type: 'image',
      width: 100,
      renderCell: (params) => (
        <ReactSwitch
          checked={params.row.fields.EnableLikes}
          onChange={handleChangeEnableLikesToggle}
          onColor={"#009BAD"}
          width={40}
          height={20}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      ),
    },
    {
      field: "EnableCommands",
      headerName: "EnableComments",
      type: "image",
      width: 100,
      renderCell: (params) => (
        <ReactSwitch
          checked={params.row.fields.EnableCommands}
          onChange={handleChangeEnableCommentsToggle}
          onColor={"#009BAD"}
          width={40}
          height={20}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      ),
    },
    {
      field: "SharedAsEmail",
      headerName: "ShareAsEmail",
      type: "email",
      width: 100,
      renderCell: (params) => (
        <ReactSwitch
          checked={params.row.fields.SharedAsEmail}
          onChange={handleChangeShareAsEmailToggle}
          onColor={"#009BAD"}
          width={40}
          height={20}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      ),
    },
    // { field: 'Page View Count', headerName: 'Page View Count', width: 70 },
    // { field: 'Created', headerName: 'Created', width: 70 }
  ];

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
  const [checkedyesEnableLikes, setCheckedyesEnableLikes] =
    useState<boolean>(true);
  const [checkednoEnableLikes, setCheckednoEnableLikes] =
    useState<boolean>(false);
  const [checkedyesEnableCommands, setCheckedyesEnableCommands] =
    useState<boolean>(true);
  const [checkednoEnableCommands, setCheckednoEnableCommands] =
    useState<boolean>(false);
  const [checkedyesSharedAsEmail, setCheckedyesSharedAsEmail] =
    useState<boolean>(true);
  const [checkednoSharedAsEmail, setCheckednoSharedAsEmail] =
    useState<boolean>(false);
  const [isActives, setIsActives] = useState<boolean>(false);
  const [enablelikes, setEnableLikes] = useState<boolean>(false);
  const [enableCommands, setCommands] = useState<boolean>(false);
  const [sharedAsEmails, setSharedEmails] = useState<boolean>(false);
  const [Title, setTitle] = useState<any>("");
  const [Description, setDescription] = useState<any>("");
  const [Reference, setReference] = useState<any>("");
  const [RecipientEmail, setRecipientEmail] = useState<any>("");
  const [state, setState] = useState({
    warningMsg: "",
  });
  const [state1, setState1] = useState({
    files: [],
  });
  const [state2, setState2] = useState({
    files: [],
  });
  const [filename1, setFilename1] = useState<any>("");
  const [filename2, setFilename2] = useState<any>("");
  const [base1, setBase1] = useState<any>("");
  const [base2, setBase2] = useState<any>("");

  const handleChangeisActiveyes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckedyesisActive(event.target.checked);
    setIsActives(true);
    //@ts-ignore
    // setIsActives(event.target.value)
  };
  const handleChangeisActiveno = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckednoisActive(event.target.checked);
    //@ts-ignore
    setIsActives(false);
    // console.log(isActives,'ytujyujy')
  };

  const handleChangeEnableLikesyes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckedyesEnableLikes(event.target.checked);

    setEnableLikes(true);
  };
  const handleChangeEnableLikesno = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckednoEnableLikes(event.target.checked);

    setEnableLikes(false);
  };
  const handleChangeEnableCommandsyes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckedyesEnableCommands(event.target.checked);

    setCommands(true);
  };
  const handleChangeEnableCommandsno = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckednoEnableCommands(event.target.checked);

    setCommands(false);
  };
  const handleChangeSharedAsEmailyes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckedyesSharedAsEmail(event.target.checked);

    setSharedEmails(true);
  };
  const handleChangeSharedAsEmailno = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value)
    console.log(event.target.checked);
    setCheckednoSharedAsEmail(event.target.checked);

    setSharedEmails(false);
  };
  const handleChangeTitleField = (event: any) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const handleChangeDescriptionField = (event: any) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };
  const handleChangeReference = (event: any) => {
    console.log(event.target.value);
    setReference(event.target.value);
  };

  useEffect(() => {
    state1.files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    state2.files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  const addFile = (file: any) => {
    setFilename1(file[0].name);
    console.log(file[0].name);
    setState1({
      files: file.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
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
          setBase1(base64data);
          console.log(base64data);
        };
      });
      blobPromise.then((value) => {
        console.log(value);
      });
    }
  };
  const addFile1 = (file: any) => {
    setFilename2(file[0].name);
    console.log(file[0].name);
    setState2({
      files: file.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
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
          setBase2(base64data);
          console.log(base64data);
        };
      });
      blobPromise.then((value) => {
        console.log(value);
      });
    }
  };

  const [files, setFiles] = useState<File[]>([]);
  const fileRef = React.useRef<HTMLInputElement | null>(null);
  const fileRef1 = React.useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>();
  const [selectedFiles1, setSelectedFiles1] = useState<File | null>();
  const [fileSelected, setFileSelected] = useState<any>("");
  const [fileSelected1, setFileSelected1] = useState<any>("");
  const [names, setNames] = useState<any>("");
  const [names1, setNames1] = useState<any>("");
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event?.target?.files?.[0].name)
    setSelectedFiles(event?.target?.files?.[0]);
    setNames(event?.target?.files?.[0].name);
    let reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(event?.target?.files?.[0]);
    reader.onload = (e) => {
      console.log(e.target?.result, "kkkkttt");
      setFileSelected(e.target?.result);
      //@ts-ignore
      // var eee4 = window.atob(e.target?.result)
      // console.log(eee4,'rrrrrrthds')
    };
  };
  const handleFileSelect1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event?.target?.files?.[0].name)
    setSelectedFiles1(event?.target?.files?.[0]);
    setNames1(event?.target?.files?.[0].name);
    let reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(event?.target?.files?.[0]);
    reader.onload = (e) => {
      console.log(e.target?.result, "kkkkttt");
      setFileSelected1(e.target?.result);
      //@ts-ignore
      // var eee4 = window.atob(e.target?.result)
      // console.log(eee4,'rrrrrrthds')
    };
  };

  const handleSubmit = async () => {
    console.log("grdgdg");
    const announcementData = {
      // token :tokens,
      title: Title,
      description: Description,
      image: fileSelected,
      imageName: names,
      isActive: isActives,
      EnableLikes: enablelikes,
      EnableCommands: enableCommands,
      SharedAsEmail: sharedAsEmails,
      Reference: Reference,
      isDraft: false,
    };
    await onClick?.(announcementData);
  };

  const handleSave = async () => {
    console.log("grdgdg");
    const announcementData = {
      // token :tokens,
      title: Title,
      description: Description,
      image: fileSelected,
      imageName: names,
      isActive: isActives,
      EnableLikes: enablelikes,
      EnableCommands: enableCommands,
      SharedAsEmail: sharedAsEmails,
      Reference: Reference,
      isDraft: true,
    };
    await onClick?.(announcementData);
  };
  const today = moment();
  let content;

  if (isLoading) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = (
      <div style={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          {data?.response && (
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
            />
          )}
        </Box>
      </div>
    );
  }

  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        <Grid className={classes.upperPart}>
          <Grid>News </Grid>
          <Grid className={classes.new}>
            <Button
              onClick={handleClickOpen}
              className={classes.create}
              sx={{ textTransform: "capitalize" }}
            >
              <span className={classes.plus}>
                <LocalHospitalIcon />
              </span>
              New
            </Button>
            <Dialog
              classes={{
                paper: classes.newPosOfDialog,
              }}
              open={openOne}
              onClose={handleClose}
              style={{ marginTop: "60px", height: "650px" }}
            >
              <DialogTitle id="alert-dialog-title">
                <Grid className={classes.dialogTitle}>
                  <Grid>
                    <Button className={classes.dialogBtn}>
                      <img
                        src={save}
                        alt=""
                        style={{ width: "13px", marginRight: "5px" }}
                      />
                      <span
                        style={{
                          color: "#606C74",
                          textTransform: "capitalize",
                        }}
                      >
                        Save
                      </span>
                    </Button>
                    <Button style={{ color: "#606C74", fontSize: "12px" }}>
                      <img
                        src={cancel}
                        alt=""
                        style={{ width: "13px", marginRight: "5px" }}
                      />
                      <span style={{ textTransform: "capitalize" }}>
                        Cancel
                      </span>
                    </Button>
                    <Button>
                      <img
                        src={copylink}
                        alt=""
                        style={{ width: "12px", marginRight: "5px" }}
                      />
                      <span
                        style={{
                          color: "#606C74",
                          textTransform: "capitalize",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        Copy Link
                      </span>
                    </Button>
                    <Button>
                      <img
                        src={publish}
                        alt=""
                        style={{ width: "12px", marginRight: "5px" }}
                      />
                      <span
                        style={{
                          color: "#606C74",
                          textTransform: "capitalize",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        Publish
                      </span>
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
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    className={classes.label}
                  >
                    <img src={title} alt="" className={classes.titleIcon} />
                    Title
                    <img
                      src={Asterisk}
                      alt="..."
                      style={{ marginBottom: "5px" }}
                    />
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
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    className={classes.label}
                  >
                    <img
                      src={descripton}
                      alt=""
                      className={classes.titleIcon}
                    />
                    Description
                    <img
                      src={Asterisk}
                      alt="..."
                      style={{ marginBottom: "5px" }}
                    />
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
                <div style={{ marginBottom: "15px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    style={{ textAlign: "left", margin: "10px" }}
                  >
                    <img src={image} alt="" className={classes.titleIcon} />
                    Image
                    <img src={Asterisk} alt="..." />
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
                        onClick={() => fileRef.current?.click()}
                        style={{ color: "#009BAD" }}
                      >
                        Browse
                      </p>
                    )}

                    <div>
                      {selectedFiles?.name && (
                        <>
                          <p style={{ fontSize: "12px" }}>
                            {selectedFiles?.name}
                          </p>
                          <button
                            onClick={() => {
                              setSelectedFiles(null);
                              if (fileRef.current) {
                                fileRef.current.value = "";
                              }
                            }}
                            style={{
                              padding: "5px",
                              border: "none",
                              borderRadius: "4px",
                            }}
                          >
                            Clear
                          </button>
                        </>
                      )}
                    </div>
                  </Grid>
                </div>
                {/* <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>
                  <img src={descripton} alt="" className={classes.titleIcon} />
                  Details Page Url<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-multiline-static"
                  // label="Multiline"
                  // multiline
                  rows={4}
                  style={{ width: "100%" }}
                  onChange={handleChangeDescriptionField}
                />
              </div> */}
                {/* <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                  <img src={title} alt="" className={classes.titleIcon} />
                 Short Title<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="Enter value here"
                />
              </div> */}
                {/* <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                  <img src={dept} alt="" className={classes.titleIcon} />
                 Department<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="Enter value here"
                />
              </div> */}
                <div style={{ marginBottom: "10px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    className={classes.label}
                  >
                    <img src={dept} alt="" className={classes.titleIcon} />
                    Reference
                    <img
                      src={Asterisk}
                      alt="..."
                      style={{ marginBottom: "5px" }}
                    />
                  </InputLabel>
                  <TextField
                    id="outlined-adornment-weight"
                    className={classes.span}
                    style={{ width: "100%" }}
                    onChange={handleChangeReference}
                    placeholder="Enter value here"
                  />
                </div>
                {/* <div style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} >
                  <img src={dept} alt="" className={classes.titleIcon} />
                Dept<img src={Asterisk} alt="..." style={{ marginBottom: "5px", }} />
                </InputLabel>
                <TextField
                  id="outlined-adornment-weight"
                  className={classes.span}
                  style={{ width: "100%" }}
                  onChange={handleChangeTitleField}
                  placeholder="Enter value here"
                />
              </div> */}

                <Grid>
                  <Box className={classes.flexBetween}>
                    <Box>
                      <img
                        src={isActive}
                        alt=""
                        style={{ width: "15px", marginRight: "15px" }}
                      />
                      <span>IsActive</span>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <FormControlLabel
                        label="Yes"
                        control={
                          <Checkbox
                            checked={checkedyesisActive}
                            onChange={handleChangeisActiveyes}
                          />
                        }
                      />
                      <FormControlLabel
                        label="No"
                        control={
                          <Checkbox
                            checked={checkednoisActive}
                            onChange={handleChangeisActiveno}
                          />
                        }
                      />
                    </Box>
                  </Box>
                  <Box className={classes.flexBetween}>
                    <Box>
                      <img
                        src={like1}
                        alt=""
                        style={{ width: "15px", marginRight: "15px" }}
                      />
                      <span>EnableLikes </span>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <FormControlLabel
                        label="Yes"
                        control={
                          <Checkbox
                            checked={checkedyesEnableLikes}
                            onChange={handleChangeEnableLikesyes}
                          />
                        }
                      />
                      <FormControlLabel
                        label="No"
                        control={
                          <Checkbox
                            checked={checkednoEnableLikes}
                            onChange={handleChangeEnableLikesno}
                          />
                        }
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid>
                    <Box className={classes.flexBetween}>
                      <Box>
                        <img
                          src={comments}
                          alt=""
                          className={classes.checkLike}
                        />
                        <span> EnableCommands</span>
                      </Box>
                      <Box style={{ display: "flex" }}>
                        <FormControlLabel
                          label="Yes"
                          control={
                            <Checkbox
                              checked={checkedyesEnableCommands}
                              onChange={handleChangeEnableCommandsyes}
                            />
                          }
                        />
                        <FormControlLabel
                          label="No"
                          control={
                            <Checkbox
                              checked={checkednoEnableCommands}
                              onChange={handleChangeEnableCommandsno}
                            />
                          }
                        />
                      </Box>
                    </Box>
                    <Box className={classes.flexBetween}>
                      <Box>
                        <img
                          src={shareasemail}
                          alt=""
                          className={classes.checkLike}
                        />
                        <span> ShareAsEmail</span>
                      </Box>
                      <Box style={{ display: "flex" }}>
                        <FormControlLabel
                          label="Yes"
                          control={
                            <Checkbox
                              checked={checkedyesSharedAsEmail}
                              onChange={handleChangeSharedAsEmailyes}
                            />
                          }
                        />
                        <FormControlLabel
                          label="No"
                          control={
                            <Checkbox
                              checked={checkednoSharedAsEmail}
                              onChange={handleChangeSharedAsEmailno}
                            />
                          }
                        />
                      </Box>
                    </Box>
                </Grid>

                {/* <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
              <img src={recipientEmail} alt="" style={{ width: "13px", marginRight: "15px" }} />
              RecipentEmail
            </InputLabel>
            <TextField
              id="outlined-adornment-weight" sx={{ width: "100%" }} onChange={handleChangeReciepientEmailField} /> */}
                {/* <div style={{ marginBottom: "15px" }}>
                  <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                  <img src={Attachment} alt="" className={classes.titleIcon} />
                  Attachments<img src={Asterisk} alt="..." />
                  </InputLabel>
                   <Grid className={classes.svg}>
                   
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
                </div> */}
              </DialogContent>
              <DialogActions>
                <Grid className={classes.actionDivTwo}>
                  <Button
                    onClick={handleClickPreview}
                    className={classes.saveBtn}
                  >
                    Preview
                  </Button>
                  <Dialog
                    classes={{
                      paper: classes.newPosOfDialog,
                    }}
                    open={openPreview}
                    onClose={handleClosePreview}
                    style={{ marginTop: "60px", height: "650px" }}
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Grid
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid>
                          <Button
                            style={{ color: "#606C74", fontSize: "12px" }}
                          >
                            <img
                              src={save}
                              alt=""
                              style={{
                                width: "13px",
                                marginRight: "5px",
                                textTransform: "capitalize",
                              }}
                            />
                            Save
                          </Button>
                          <Button
                            style={{ color: "#606C74", fontSize: "12px" }}
                          >
                            <img
                              src={cancel}
                              alt=""
                              style={{ width: "13px", marginRight: "5px" }}
                            />
                            Cancel
                          </Button>
                          <Button>
                            <img
                              src={copylink}
                              alt=""
                              style={{ width: "12px", marginRight: "5px" }}
                            />
                            <span
                              style={{
                                color: "#606C74",
                                textTransform: "capitalize",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              Copy Link
                            </span>
                          </Button>
                          <Button>
                            <img
                              src={publish}
                              alt=""
                              style={{ width: "12px", marginRight: "5px" }}
                            />
                            <span
                              style={{
                                color: "#606C74",
                                textTransform: "capitalize",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              Publish
                            </span>
                          </Button>
                        </Grid>
                        <Grid>
                          <Button onClick={handleClosePreview}>
                            <img
                              src={cancel}
                              alt=""
                              style={{ width: "13px" }}
                            />
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
                          <img
                            src={fileSelected}
                            alt=""
                            className={classes.backgroundImage}
                          />
                          {/* <img src={girl} alt="" className={classes.girl} />
                        <p>Ayesha Siddiqa</p>
                        <p>HR Manager</p> */}
                        </Box>
                        <Grid>
                          <Typography
                            style={{
                              textAlign: "left",
                              margin: "15px",
                              fontWeight: 600,
                            }}
                          >
                            {Title}{" "}
                          </Typography>
                          <div className={classes.newsPrev3}>
                            <p>{Reference}</p>
                            <p>{today.format("DD-MM-YYYY")}</p>
                          </div>
                          <p style={{ textAlign: "left", marginLeft: "15px" }}>
                            {Description}
                          </p>
                        </Grid>
                        <Grid className={classes.iconDiv}>
                          <div className={classes.iconView}>
                            <span>
                              <img src={love} alt="" />
                            </span>
                            <span>10</span>
                          </div>
                          <div className={classes.iconView}>
                            <span>
                              <img src={comments} alt="" />
                            </span>
                            <span>10</span>
                          </div>
                          <div className={classes.iconView}>
                            <span>
                              {" "}
                              <img src={view} alt="" />
                            </span>
                            <span>10</span>
                          </div>
                        </Grid>
                      </Grid>
                    </DialogContent>
                    <DialogActions>
                      <Grid className={classes.actionPart}>
                        <Button
                          onClick={handleSave}
                          autoFocus
                          className={classes.saveBtn}
                        >
                          Save
                        </Button>
                        <Button
                          onClick={handleClosePreview}
                          className={classes.cancelBtn}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </DialogActions>
                  </Dialog>

                  <Button onClick={handleSave} className={classes.saveBtn}>
                    Save
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    autoFocus
                    className={classes.saveBtn}
                  >
                    submit
                  </Button>
                  <Button onClick={handleClose} className={classes.cancelBtn}>
                    Cancel
                  </Button>
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
};

export default NewsEditor;
