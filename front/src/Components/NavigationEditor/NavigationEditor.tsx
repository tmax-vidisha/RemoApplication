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
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Switch from "@mui/material/Switch";
import girl from "../../Assets/Images/girl.jpg";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import home from "../../Assets/Images/Home.svg";
import browse from "../../Assets/Images/browse.svg";
import ReactSwitch from "react-switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const rows = [
  {
    id: 1,
    Title: "Home",
    "Hover On icon": '<img src={home} alt=""/>',
    "Hover Off icon": '<img src={home} alt=""/>',
    "Open in New Tab": <Switch {...label} defaultChecked />,
    Order: "1",
    "Is Active": <Switch {...label} defaultChecked />,
    Url: "https://www.google.com",
    "Link Master ID": "56ty65",
  },
  {
    id: 2,
    Title: "Home",
    "Hover On icon": '<img src={home} alt=""/>',
    "Hover Off icon": '<img src={home} alt=""/>',
    "Open in New Tab": <Switch {...label} defaultChecked />,
    Order: "1",
    "Is Active": <Switch {...label} defaultChecked />,
    Url: "www.google.com",
    "Link Master ID": "56ty65",
  },
  {
    id: 3,
    Title: "Home",
    "Hover On icon": '<img src={home} alt=""/>',
    "Hover Off icon": '<img src={home} alt=""/>',
    "Open in New Tab": <Switch {...label} defaultChecked />,
    Order: "1",
    "Is Active": <Switch {...label} defaultChecked />,
    Url: "www.google.com",
    "Link Master ID": "56ty65",
  },
  {
    id: 4,
    Title: "Home",
    "Hover On icon": '<img src={home} alt=""/>',
    "Hover Off icon": '<img src={home} alt=""/>',
    "Open in New Tab": <Switch {...label} defaultChecked />,
    Order: "1",
    "Is Active": <Switch {...label} defaultChecked />,
    Url: "www.google.com",
    "Link Master ID": "56ty65",
  },
  {
    id: 5,
    Title: "Home",
    "Hover On icon": '<img src={home} alt=""/>',
    "Hover Off icon": '<img src={home} alt=""/>',
    "Open in New Tab": <Switch {...label} defaultChecked />,
    Order: "1",
    "Is Active": <Switch {...label} defaultChecked />,
    Url: "www.google.com",
    "Link Master ID": "56ty65",
  },
  {
    id: 6,
    Title: "Home",
    "Hover On icon": '<img src={home} alt=""/>',
    "Hover Off icon": '<img src={home} alt=""/>',
    "Open in New Tab": <Switch {...label} defaultChecked />,
    Order: "1",
    "Is Active": <Switch {...label} defaultChecked />,
    Url: "www.google.com",
    "Link Master ID": "56ty65",
  },
];
interface IFolderProps {
  onClick?: (obj: any) => void;
  data: any;
  isLoading: any;
  isSuccess: any;
}

// const NavigationEditor= () => {
const NavigationEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { onClick, data, isLoading, isSuccess } = props;
  const [openOne, setOpenOne] = React.useState<boolean>(false);
  const handleChangeIsActiveToggle = (val: any) => {
    // setChecked(val);
    console.log(val, "hhhfhf");
  };
  const handleChangeOpenNewTab = (val: any) => {
    // setChecked(val);
    console.log(val, "hhhfhf");
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      valueGetter: (allData: any) => allData.row.fields.id,
    },
    {
      field: "Title",
      headerName: "Title",
      width: 200,
      valueGetter: (allData: any) => allData.row.fields.Title,
    },
    {
      field: "HoverOn",
      headerName: "Hover On icon",
      // type: 'image',
      width: 130,
      renderCell: (params) => <img src={params.row.fields.HoverOn} />,
    },
    {
      field: "HoverOff",
      headerName: "Hover Off icon",
      // type: 'image',
      width: 130,
      renderCell: (params) => <img src={params.row.fields.HoverOff} />,
    },
    {
      field: "OpenInNewTab",
      headerName: "Open in New Tab",
      // type: 'image',
      width: 130,
      renderCell: (params) => (
        <ReactSwitch
          checked={params.row.fields.OpenInNewTab}
          onChange={handleChangeOpenNewTab}
          onColor={"#009BAD"}
          width={40}
          height={20}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      ),
    },
    {
      field: "OO",
      headerName: "Order",
      width: 100,
      valueGetter: (allData: any) => allData.row.fields.OO,
    },
    {
      field: "isActive",
      headerName: "IS Active",
      width: 100,
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
      field: "PageDetailsUrl",
      headerName: "URL",
      type: "text",
      width: 200,
      valueGetter: (allData: any) => allData.row.fields.PageDetailsUrl,
    },
    // {field: 'Link Master ID',headerName: 'Link Master ID',type: 'text', width: 200,},
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
  const [showImg, setShowImg] = useState<boolean>(true);
  const [Title, setTitle] = useState<any>("");
  const [Description, setDescription] = useState<any>("");
  const [Order, setOrder] = useState<any>("");
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
  const handleChangeOrderField = (event: any) => {
    console.log(event.target.value);
    setOrder(event.target.value);
  };
  const handleChangeReciepientEmailField = (event: any) => {
    console.log(event.target.value);
    setRecipientEmail(event.target.value);
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
    console.log(event?.target?.files?.[0].name);
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
    console.log(event?.target?.files?.[0].name);
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
      pageDetails: Description,
      image: fileSelected,
      imageName: names,
      isActive: isActives,
      openNewTab: enablelikes,
      order: Order,
      // EnableCommands: enableCommands,
      // SharedAsEmail: sharedAsEmails,
      // RecipientEmail: RecipientEmail,
      hoverOff: fileSelected1,
      hoverOffName: names1,
      isDraft: false,
    };
    //  await sendItem(announcementData)
    await onClick?.(announcementData);
  };

  const handleSave = async () => {
    console.log("grdgdg");
    const announcementData = {
      // token :tokens,
      title: Title,
      pageDetails: Description,
      image: fileSelected,
      imageName: names,
      isActive: isActives,
      openNewTab: enablelikes,
      order: Order,
      // EnableCommands: enableCommands,
      // SharedAsEmail: sharedAsEmails,
      // RecipientEmail: RecipientEmail,
      hoverOff: fileSelected1,
      hoverOffName: names1,
      isDraft: true,
    };
    //  await sendItem(announcementData)
    await onClick?.(announcementData);
  };

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
          <Grid>Navigation </Grid>
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
                <div style={{ marginBottom: "15px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    style={{ textAlign: "left", margin: "10px" }}
                  >
                    <img src={image} alt="" className={classes.titleIcon} />
                    Hover On Icon
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
                <div style={{ marginBottom: "15px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    style={{ textAlign: "left", margin: "10px" }}
                  >
                    <img src={image} alt="" className={classes.titleIcon} />
                    Hover Off Icon
                    <img src={Asterisk} alt="..." />
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

                    {!selectedFiles1?.name && (
                      <p
                        onClick={() => fileRef1.current?.click()}
                        style={{ color: "#009BAD" }}
                      >
                        Browse
                      </p>
                    )}

                    <div>
                      {selectedFiles1?.name && (
                        <>
                          <p style={{ fontSize: "12px" }}>
                            {selectedFiles1?.name}
                          </p>
                          <button
                            onClick={() => {
                              setSelectedFiles1(null);
                              if (fileRef1.current) {
                                fileRef1.current.value = "";
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
                <Grid>
                  <Box className={classes.flexBetween}>
                    <Box>
                      <img
                        src={like1}
                        alt=""
                        style={{ width: "15px", marginRight: "15px" }}
                      />
                      <span>Open In New Tab </span>
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
                </Grid>

                <div style={{ marginBottom: "10px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    className={classes.label}
                  >
                    <img src={title} alt="" className={classes.titleIcon} />
                    Order
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
                    onChange={handleChangeOrderField}
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
                    Detail Page Url
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
                <div style={{ marginBottom: "10px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    className={classes.label}
                  >
                    <img src={title} alt="" className={classes.titleIcon} />
                    Link Master ID
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
                <div style={{ marginBottom: "15px" }}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    style={{ textAlign: "left", margin: "10px" }}
                  >
                    <img src={image} alt="" className={classes.titleIcon} />
                    Attachment
                    {/* <img src={Asterisk} alt="..." /> */}
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
                        <h1>Navigation</h1>
                        <Box>
                          {showImg ? (
                            <img
                              src={fileSelected}
                              alt=""
                              className={classes.backgroundImage}
                              onClick={() => setShowImg(false)}
                            />
                          ) : (
                            <img
                              src={fileSelected1}
                              alt=""
                              className={classes.backgroundImage}
                              onClick={() => setShowImg(true)}
                            />
                          )}
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
                            https://red-moss-0dcddaf10.2.azurestaticapps.net
                            {Description}
                          </Typography>
                          <p style={{ textAlign: "left", marginLeft: "15px" }}>
                            <span style={{ color: "#606C74" }}></span>
                            LinkMasterID{" "}
                            <a href="#" style={{ color: "#009BAD" }}>
                              DEPT 00001{" "}
                            </a>
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

export default NavigationEditor;
