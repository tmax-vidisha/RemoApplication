import React from "react";
import {  useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  CircularProgress,
  Dialog,
  Fade,
  Grid,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import folder from "./../../Assets/Images/folder.svg";
import excel from "./../../Assets/Images/excel.svg";
import pdf from "./../../Assets/Images/pdf.svg";
import ppt from "./../../Assets/Images/ppt.svg";
import word from "./../../Assets/Images/word.svg";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useStyles } from "./Styles";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useUploadFileOneDriveMutation } from "../../services/graph";


interface IFolderProps {
  onClick?: (obj: any) => void;
  data: any;
  isLoading: any;
  isSuccess: any;
}

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   // { field: 'Title', headerName: 'Title', width: 300 },
//   // { field: 'Status', headerName: 'Status', type: 'image', width: 70 },
//   { field: "Name", headerName: "Name", width: 300 },
//   { field: "Modified", headerName: "Modified", width: 200 },
//   { field: "Modified By", headerName: "Modified By", width: 200 },
// ];

// const rows = [
//   {
//     id: 1,
//     Name: "Ayesha Siddiqa",
//     Modified: "june 2",
//     "Modified By": "Jahanara",
//   },
//   {
//     id: 2,
//     Name: "Ayesha Siddiqa",
//     Modified: "june 2",
//     "Modified By": "Jahanara",
//   },
//   {
//     id: 3,
//     Name: "Ayesha Siddiqa",
//     Modified: "june 2",
//     "Modified By": "Jahanara",
//   },
// ];

const PoliciesEditor: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { onClick, data, isLoading, isSuccess } = props;
  console.log(data, "policy editor data");
  const [openOne, setOpenOne] = React.useState<boolean>(false);
  // const [sendItem] = useUploadItemInAnnouncementMutation();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      valueGetter: (allData: any) => allData.row.fields.id,
    },
    {
      field: "Name",
      headerName: "Name",
      width: 300,
      valueGetter: (allData: any) => allData.row.fields.Name,
    },
    {
      field: "Modified",
      headerName: "Modified",
      width: 100,
      valueGetter: (allData: any) => allData.row.fields.Modified,
    },
    {
      field: "ModifiedBy",
      headerName: "ModifiedBy",
      width: 100,
      valueGetter: (allData: any) => allData.row.fields.ModifiedBy,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openOn = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOne = (popup: any) => {
    setOpenOne(true);
  };

  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const [text, setText] = useState<string>("");

  const handleOnChange = (e: any) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const Data = {
      name: text,
    };
    //  console.log(fd)
    await sendItem(Data);
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top',
    //     showConfirmButton: false,
    //     timer: 1500,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //         toast.addEventListener('mouseenter', Swal.stopTimer)
    //         toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    // });

    // Toast.fire({
    //     icon: 'success',
    //     title: 'Create Successfully'
    // });

    handleCloseOne();
  };
  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpenTwo = () => {
    // setDialog2Open(true);
    setOpenTwo(true);
  };
  const handleCloseTwo = () => {
    // setDialog2Open(true);
    setOpenTwo(false);
  };

  const [openThree, setOpenThree] = React.useState(false);
  const handleOpenThree = () => {
    // setDialog2Open(true);
    setOpenThree(true);
  };
  const handleCloseThree = () => {
    // setDialog2Open(true);
    setOpenThree(false);
  };
  //dsfsdf

  const [openFour, setOpenFour] = React.useState(false);

  const handleOpenFour = () => {
    // setDialog2Open(true);
    setOpenFour(true);
  };
  const handleCloseFour = () => {
    // setDialog2Open(true);
    setOpenFour(false);
  };
  const [openFive, setOpenFive] = React.useState(false);
  const handleOpenFive = () => {
    // setDialog2Open(true);
    setOpenFive(true);
  };

  const handleCloseFive = () => {
    // setDialog2Open(true);
    setOpenFive(false);
  };


  const [
    sendItem,
    {
      data: cratedResponse,
      isSuccess: createdSuccess,
      isLoading: createdLoading,
    },
  ] = useUploadFileOneDriveMutation();
  if (createdLoading) {
    console.log("Loading");
  } else if (createdSuccess) {
    console.log("Created");
  }
 
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
          <Grid>Policies & Procedure </Grid>
          <Grid className={classes.new}>
            <Button
              id="fade-button"
              aria-controls={openOn ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openOn ? "true" : undefined}
              onClick={handleClick}
              className={classes.create}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgb(50 168 189) !important",
              }}
            >
              <span className={classes.plus}>
                <LocalHospitalIcon />
              </span>
              New
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={openOn}
              onClose={handleClose}
              TransitionComponent={Fade}
              className={classes.menuNew}
            >
              <MenuItem>
                <div onClick={handleClickOne}>
                  <img
                    src={folder}
                    alt="folder"
                    className={classes.menuImage}
                  />{" "}
                  Folders
                </div>
                <Dialog open={openOne} onClose={handleCloseOne}>
                  <DialogTitle>{"Create New Folder"}</DialogTitle>
                  <DialogContent>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        onChange={handleOnChange}
                        variant="outlined"
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleFormSubmit}
                      color="primary"
                      autoFocus
                    >
                      Create
                    </Button>
                    <Button onClick={handleCloseOne} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </MenuItem>

              <MenuItem>
                <div onClick={handleOpenTwo}>
                  <img src={word} alt="folder" className={classes.menuImage} />{" "}
                  Word
                </div>
                <Dialog open={openTwo} onClose={handleCloseTwo}>
                  <DialogTitle>{"Create New Word"}</DialogTitle>
                  <DialogContent>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        onChange={handleOnChange}
                        variant="outlined"
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleFormSubmit}
                      color="primary"
                      autoFocus
                    >
                      Create
                    </Button>
                    <Button onClick={handleCloseTwo} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </MenuItem>
              <MenuItem>
                <div onClick={handleOpenThree}>
                  <img src={excel} alt="folder" className={classes.menuImage} />{" "}
                  Excel
                </div>
                <Dialog open={openThree} onClose={handleCloseThree}>
                  <DialogTitle>{"Create New Excel"}</DialogTitle>
                  <DialogContent>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        onChange={handleOnChange}
                        variant="outlined"
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleFormSubmit}
                      color="primary"
                      autoFocus
                    >
                      Create
                    </Button>
                    <Button
                      onClick={handleCloseThree}
                      color="primary"
                      autoFocus
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </MenuItem>
              <MenuItem>
                <div onClick={handleOpenFour}>
                  <img src={pdf} alt="folder" className={classes.menuImage} />{" "}
                  Pdf
                </div>
                <Dialog open={openFour} onClose={handleCloseFour}>
                  <DialogTitle>{"Create New PDF"}</DialogTitle>
                  <DialogContent>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        onChange={handleOnChange}
                        variant="outlined"
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleFormSubmit}
                      color="primary"
                      autoFocus
                    >
                      Create
                    </Button>
                    <Button onClick={handleCloseFour} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </MenuItem>
              <MenuItem>
                <div onClick={handleOpenFive}>
                  <img src={ppt} alt="folder" className={classes.menuImage} />{" "}
                  Ppt
                </div>
                <Dialog open={openFive} onClose={handleCloseFive}>
                  <DialogTitle>{"Create New PPT"}</DialogTitle>
                  <DialogContent>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        onChange={handleOnChange}
                        variant="outlined"
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleFormSubmit}
                      color="primary"
                      autoFocus
                    >
                      Create
                    </Button>
                    <Button onClick={handleCloseFive} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </MenuItem>
            </Menu>
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

export default PoliciesEditor;
