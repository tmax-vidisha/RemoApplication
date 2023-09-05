import React from "react";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import activeView from "./../../Assets/Images/activeView.svg";
import Announcement from "../Birthday/index";
import browse from "../../Assets/Images/browse.svg";

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
  MenuItem,
  Select,
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
import { Theme } from "@material-ui/core";

const label = { inputProps: { "aria-label": "Switch demo" } };
interface IFolderProps {
  onClick?: (obj: any) => void;
  data: any;
  isLoading: any;
  isSuccess: any;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
{ field: 'Title', headerName: 'Title', width: 300 },
  { field: "Name", headerName: "Name", width: 300 },
  { field: "Modified", headerName: "Modified", width: 200 },
  { field: "Modified By", headerName: "Modified By", width: 200 },
  
];

const rows = [
  {
    id: 1,
    Name: "Ayesha Siddiqa",
    Modified: "june 2",
    "Modified By": "Jahanara",
  },
  {
    id: 2,
    Name: "Ayesha Siddiqa",
    Modified: "june 2",
    "Modified By": "Jahanara",
  },
  {
    id: 3,
    Name: "Ayesha Siddiqa",
    Modified: "june 2",
    "Modified By": "Jahanara",
  },

  // {
  //   id: 8,
  //   Title:
  //     'Happy Birthday <img src={comments} alt="image" /> <img src={shareasemail} alt="image" />',
  //   Status: "Active",
  //   Name: "Ayesha Siddiqa",
  //   DOB: "12/19/2022",
  //   Image: <img src={image} alt="" />,
  //   Designation: "HR Manager",
  //   DOJ: "12/19/2022",
  //   Description:
  //     "DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near",
  //   IsActive: "yes ",
  //   EnableLikes: <Switch {...label} defaultChecked />,
  //   EnableComments: <Switch {...label} defaultChecked />,
  // },
  // { id: 9, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Roxie', EnableLikes: 'Harvey', EnableComments: 65, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
];

const PolicyNewEditor = () => {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default PolicyNewEditor;
