import React from "react";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import {
  Button,
  CircularProgress,
  Dialog,
  Fade,
  Grid,
  Menu,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Link,
  Checkbox,
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
import moment from "moment";
import folderImg from "../../Assets/Images/whiteFolder.svg";

interface IFolderProps {
  data: any;
  isSuccess: any;
  isLoading: any;
  onCopy?: (id: string, name: string) => void;
  copyResponse: any;
  onClick?: (id: string, name: string) => void;
  downloadUrl: any;
  onDelete?: (id: string, name: string) => void;
  deleteResponse: any;
  deleteLoading: any;
  deleteSuccess: any;
  copySuccess: any;
  copyLoading: any;
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
  const {
    data,
    isLoading,
    isSuccess,
    onCopy,
    copyResponse,
    onClick,
    downloadUrl,
    onDelete,
    deleteResponse,
    deleteLoading,
    deleteSuccess,
    copyLoading,
    copySuccess,
  } = props;
  console.log(data, "policy editor data");
  console.log(data?.response[0], "policy editor data");
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
  const [showResult, setShowResult] = useState(false);
  const onClickShow = () => {
    setShowResult(true);
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

  const [itemId, setItemId] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [itemfolder, setItemFolder] = useState<any>();
  const [downUrl, setDownUrl] = useState<string>("");
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const de = (
    id: any,
    name: any,
    folder: any
    // download:any
  ) => {
    //  console.log(download,'ygrerthtrhy')
    //    console.log(id,name)
    // console.log(folder)
    setItemId(id);
    setItemName(name);
    setItemFolder(folder);
    // if (folder === undefined) {
    //     setDownUrl(download)
    // }
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [userData, setUserdata] = useState<any>([]);
  const [sortedData, setSortedData] = useState<any>("");
  const sortAscending = () => {
    // console.log('newest')
    setSortedData("newest");
    console.log(sortedData);
  };

  const sortDescending = () => {
    // console.log('oldest')
    setSortedData("oldest");
    console.log(sortedData);
  };

  const units = [
    "bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  function niceBytes(x: any) {
    let l = 0,
      n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
      n = n / 1024;
    }

    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
  }
  const handleBoxChange = (e: any) => {
    let array = [];
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = data?.response.map((user: any) => {
        return { ...user, isChecked: checked };
      });

      console.log(tempUser, "all");
      //@ts-ignore
      setSelectData(tempUser);
      //@ts-ignore
      setUserdata(tempUser);
    } else {
      //@ts-ignore
      let tempUser = userData.map((user: any) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      console.log(tempUser, "ltt");

      //@ts-ignore
      setSelectData(tempUser);
      //@ts-ignore
      setUserdata(tempUser);
    }
  };

  return (
    <Grid container spacing={2} item md={12}>
      {/* <Box className={classes.MainPart}> */}
      {/* <Grid className={classes.upperPart}> */}
      {/* <Grid>Policies & Procedure </Grid> */}

      {/* </Grid> */}
      <Grid item md={10} xs={12} style={{ marginTop: "30px", width: "750px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: 750 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.theadCell} onClick={onClickShow}>
                  {/* <Checkbox
                                       name="allselect"
                                       checked= { !data?.response.some( (user:any)=>user?.isChecked!==true)}
                                        onChange={handleBoxChange} /> */}
                  {/* <Checkbox name="allselect" checked= { !data?.response.some( (user:any)=>user?.isChecked!==true)} onChange={ handleBoxChange}  />  */}
                  <Checkbox
                    name="allSelect"
                    checked={
                      data?.response.filter(
                        (user: any) => user?.isChecked !== true
                      ).length < 1
                    }
                    onChange={handleBoxChange}
                  />
                </TableCell>
                <TableCell className={classes.nameTableCell} align="left">
                  Name
                </TableCell>
                <TableCell className={classes.theadCell} align="right">
                  Modified By
                </TableCell>
                <TableCell className={classes.theadCell} align="right">
                  Modified Date
                </TableCell>
                <TableCell className={classes.theadCell} align="right">
                  File Size
                </TableCell>
                {/* <TableCell className={classes.theadCell}>Actions</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.lastModifiedBy}</TableCell>
                                <TableCell align="right">{row.ModifiedDate}</TableCell>
                                <TableCell align="right">{row.fileSize}</TableCell>
                                <TableCell align="right">{row.Actions}</TableCell>
                            </TableRow>
                        ))} */}
              {isLoading && <CircularProgress />}

              {isSuccess && (
                <>
                  {data?.response &&
                    data?.response
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item: any, index: any) => {
                        let createdDate = moment(
                          item.lastModifiedDateTime
                        ).format("DD-MMM-YYYY");

                        return (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell
                              className={classes.theadCell}
                              onClick={onClickShow}
                            >
                              <Checkbox
                                name={item.name}
                                checked={item?.isChecked || false}
                                // checked ={checked.includes(item)}
                                onChange={handleBoxChange}
                              />
                              {/* <Checkbox name={ item.name} checked={item?.isChecked|| false }  onChange={handleBoxChange} /> */}
                              {/* <Checkbox name={ item.name} checked={item?.isChecked|| false } onChange={ handleBoxChange }  /> */}
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.TableCell}
                            >
                              <img
                                src={folderImg}
                                alt="folder"
                                style={{
                                  width: "25px",
                                  marginRight: "15px",
                                  borderRadius: "5px",
                                }}
                              />
                              <Link href={`${item.webUrl}`}>{item.name}</Link>
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.TableCell}
                            >
                              {item.lastModifiedBy.user.displayName}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.TableCell}
                            >
                              {createdDate}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.TableCell}
                            >
                              {niceBytes(item.size)}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data?.response.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
      <Grid item md={2} xs={12} className={classes.new}>
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
              <img src={folder} alt="folder" className={classes.menuImage} />{" "}
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
                <Button onClick={handleFormSubmit} color="primary" autoFocus>
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
              <img src={word} alt="folder" className={classes.menuImage} /> Word
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
                <Button onClick={handleFormSubmit} color="primary" autoFocus>
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
                <Button onClick={handleFormSubmit} color="primary" autoFocus>
                  Create
                </Button>
                <Button onClick={handleCloseThree} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </MenuItem>
          <MenuItem>
            <div onClick={handleOpenFour}>
              <img src={pdf} alt="folder" className={classes.menuImage} /> Pdf
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
                <Button onClick={handleFormSubmit} color="primary" autoFocus>
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
              <img src={ppt} alt="folder" className={classes.menuImage} /> Ppt
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
                <Button onClick={handleFormSubmit} color="primary" autoFocus>
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
      {/* </Box> */}
    </Grid>
  );
};

export default PoliciesEditor;
