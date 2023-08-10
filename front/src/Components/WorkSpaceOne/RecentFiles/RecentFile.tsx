//@ts-nocheck
import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Link,
  DialogContent,
  Typography,
  Box,
  Button,
  DialogActions,
  Menu,
  MenuItem,
  Dialog,
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import moment from "moment";
import { useStyles } from "./Styles";
import actions from "../../../Assets/Images/action-dots.svg";
import linkIcon from "../../../Assets/Images/link.svg";
import openIcon from "../../../Assets/Images/open.svg";
import downloadIcon from "../../../Assets/Images/DOWLOAD.svg";
import deleteIcon from "../../../Assets/Images/delete.svg";
import deleteBlue from "../../../Assets/Images/delete-blue.svg";
import success from "../../../Assets/Images/success.svg";
import copySuccess from "../../../Assets/Images/copy-success.svg";
import Fade from "@mui/material/Fade";
import TablePagination from "@mui/material/TablePagination";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";

interface SimpleDialogProps {
  id: any;
  name: any;
  webUrl: any;
  // folder: any,
  // onOpenFolder: (id: string, name: string, folder: any) => void;
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
  // open: boolean;
  // // selectedValue: string;
  //  onClose: () => void;
  //  anchorEl:any
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  // const { onClose, selectedValue, open } = props;

  const {
    id,
    name,
    webUrl,
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
  console.log(
    id,
    name,
    webUrl,
    "tytrudtutsswwww"
    // folder,
  );
  // console.log(deleteResponse, 'tuuu56ue6ue6u6eu6u')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openOn = Boolean(anchorEl);
  //   console.log(downloadUrl?.response)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  // const handleListItemClick = (value: string) => {
  //   onClose(value);
  // };
  // console.log(deleteResponse?.success)
  // console.log(copyResponse?.response,'CopyLink')
  const [openOne, setOpenOne] = React.useState(false);
  const [openOneCopy, setOpenOneCopy] = React.useState(false);

  const handleClickOne = (popup: any) => {
    setOpenOne(true);
  };

  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const handledelete = () => {
    onDelete?.(id, name);
    setOpenOne(false);
    if (deleteLoading) {
      <>Loading</>;
    } else if (deleteSuccess) {
      setOpenTwo(true);
      console.log(deleteResponse, "delete permanently");
    }
    // if (deleteResponse?.success === true) {
    //     setOpenTwo(true)
    // }
  };
  const handleFolderOpen = () => {
    // onOpenFolder(id, name,
    //     // folder
    //     )
    window.open(webUrl);
  };

  const [openTwo, setOpenTwo] = React.useState(false);

  const handleClickTwo = (popup: any) => {
    setOpenTwo(true);
  };

  const handleCloseTwo = () => {
    setOpenTwo(false);
  };
  const handleDownload = () => {
    onClick?.(id, name);
    window.open(downloadUrl?.response);
  };
  const [CopySuccess, setCopySuccess] = useState<any>("");

  const handleCopy = async () => {
    onCopy?.(id, name);
    // navigator.clipboard.writeText(copyResponse?.response)
    if (copyLoading) {
      <>Loading</>;
    } else if (copySuccess) {
      try {
        await navigator.clipboard.writeText(copyResponse?.response);
        setCopySuccess("Copied!");
        // console.log('Copied')
      } catch (err) {
        setCopySuccess("Failed to copy!");
        // console.log('Failed to copy!')
      }
    }
  };
  const handleOpenOneCopy = () => {
    setOpenOneCopy(true);
  };

  const handleCloseOneCopy = () => {
    setOpenOneCopy(true);
  };

  return (
    <Grid style={{ borderRadius: "10px" }}>
      <Button
        id="fade-button"
        aria-controls={openOn ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openOn ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={actions} alt="actions" />
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
        className={classes.menu}
      >
        <MenuItem>
          <div className={classes.items} onClick={handleFolderOpen}>
            <img src={openIcon} alt="folder" /> Open
          </div>
        </MenuItem>

        <MenuItem onClick={handleCopy}>
          <div className={classes.items}>
            <img src={linkIcon} alt="linkIcon" /> Copy Link
          </div>
          {/* <Dialog open={openOneCopy} onClose={handleCloseOneCopy}>

                        <DialogContent>
                            <Typography>
                                <Box style={{ textAlign: "center", color: "#1baab5", }}>
                                    <img src={copySuccess} alt="delete" style={{ width: "80px", color: "#1baab5", }} />

                                </Box>
                                <Box style={{ margin: "20px", fontSize: "25px", textAlign: "center" }}>
                                    Copied
                                </Box>
                            </Typography>
                            <Grid>

                                <Box>
                                    <Typography style={{ textAlign: "center" }}>The item copied Successfully!</Typography>
                                </Box>
                            </Grid>

                        </DialogContent>

                        <DialogActions style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                            <Button autoFocus onClick={()=>{
                                handleCopy()
                                handleCloseOneCopy()

                            }} style={{ backgroundColor: "#1baab5", color: "white" }}>
                                OK
                            </Button>
                            
                        </DialogActions>

                    </Dialog> */}
        </MenuItem>
        <MenuItem>
          <div onClick={handleDownload} className={classes.items}>
            <img src={downloadIcon} alt="downloadIcon" /> Download
          </div>
        </MenuItem>
        <MenuItem>
          <div onClick={handleClickOne} className={classes.items}>
            <img src={deleteIcon} alt="deleteIcon" /> Delete
          </div>
          <Dialog open={openOne} onClose={handleCloseOne}>
            <DialogContent>
              <Typography>
                <Box style={{ textAlign: "center", color: "#1baab5" }}>
                  <img
                    src={deleteBlue}
                    alt="delete"
                    style={{ width: "40px", color: "#1baab5" }}
                  />
                </Box>
                <Box
                  style={{
                    margin: "5px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Delete
                </Box>
              </Typography>
              <Grid>
                <Box>
                  <Typography style={{ textAlign: "center" }}>
                    This Items contains some information. are you sure to delete
                    it ?
                  </Typography>
                </Box>
              </Grid>
            </DialogContent>

            <DialogActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
              }}
            >
              <Button
                autoFocus
                onClick={handledelete}
                style={{ backgroundColor: "#1baab5", color: "white" }}
              >
                OK
              </Button>
              <Button autoFocus onClick={handleCloseOne}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </MenuItem>
        <MenuItem>
          <Dialog open={openTwo} onClose={handleCloseTwo}>
            <DialogContent>
              <Typography>
                <Box style={{ textAlign: "center", color: "#1baab5" }}>
                  <img
                    src={success}
                    alt="delete"
                    style={{ width: "80px", color: "#1baab5" }}
                  />
                </Box>
              </Typography>
              <Grid>
                <Box>
                  <Typography style={{ textAlign: "center" }}>
                    deleted Items move to trash successfully
                  </Typography>
                </Box>
              </Grid>
            </DialogContent>

            <DialogActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
              }}
            >
              <Button
                autoFocus
                style={{ backgroundColor: "#1baab5", color: "white" }}
              >
                <p onClick={handleCloseTwo}> OK</p>
              </Button>
              <Button autoFocus onClick={handleCloseTwo}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </MenuItem>
      </Menu>
    </Grid>
  );
}

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
const RecentFile: React.FC<IFolderProps> = (props: IFolderProps) => {
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
  //const RecentFile = () => {
  // const { token } = useCustom();
  // const { data, error, isLoading } = useGetAllRecentItemsQuery(token);
  // console.log(data,'rrreecceebb')
  const classes = useStyles();
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
    // const sortAscPrices = [...prices]
    // sortAscPrices.sort((a, b) => a - b)
    // setPrices(sortAscPrices)
    // setMode('newest')
    // console.log(mode)
    // console.log(show,'show')
    // if(show == false){
    //     Object.freeze(ItemChildren?.response);
    // const arrCopy = [...ItemChildren?.response];
    // setUserdata(arrCopy)
    // }else{
    //     Object.freeze(data?.response);
    //     const arrCopy = [...data?.response];
    //     setUserdata(arrCopy)
    // }
  };

  const sortDescending = () => {
    // console.log('oldest')
    setSortedData("oldest");
    console.log(sortedData);
    // setMode('oldest')
    // console.log(mode)

    // if(show == false){
    //     Object.freeze(ItemChildren?.response);
    //     const arrCopy = [...ItemChildren?.response];
    //     setUserdata(arrCopy)
    // }else{
    //     Object.freeze(data?.response);
    //     const arrCopy = [...data?.response];
    //     setUserdata(arrCopy)
    // }
    // setMode('')
    // const sortDescPrices = [...prices]
    // sortDescPrices.sort((a, b) => a - b).reverse()
    // setPrices(sortDescPrices)
    // setDescending(true)
    // var array = [{id: 1, date: 'Mar 12 2012 10:00:00 AM'}, {id: 2, date: 'Mar 8 2012 08:00:00 AM'}];

    //         Object.freeze(data?.response);

    //       const arrCopy = [...data?.response];
    // // console.log(arrCopy,'kkk')
    //               //@ts-ignore

    //         var sortedArray = arrCopy.sort((a,b) => Date.parse(new Date(a.lastModifiedDateTime  )) - Date.parse(new Date(b.lastModifiedDateTime            ))).reverse();
    //         //@ts-ignore
    //         setUserdata(sortedArray,'soret')
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

  return (
    <Grid className={classes.bigPart}>
      <Grid className={classes.divText}>Recent files</Grid>
      <Grid className={classes.myFile}>
        <Grid>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
            <InputLabel id="demo-simple-select-standard-label">
              <span className={classes.shortSpan}>Sort by</span>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
              style={{ width: "100px" }}
            >
              {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
              <MenuItem
                value={10}
                onClick={() => {
                  setSortedData("newest");
                  Object.freeze(data?.response);
                  const arrCopy = [...data?.response];
                  setUserdata(arrCopy);
                }}
              >
                <span className={classes.shortBy}>Newest</span>
              </MenuItem>
              <MenuItem
                value={20}
                onClick={() => {
                  setSortedData("oldest");
                  Object.freeze(data?.response);
                  const arrCopy = [...data?.response];
                  setUserdata(arrCopy);
                }}
              >
                <span className={classes.shortBy}>Oldest</span>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid style={{ marginTop: "20px" }}>
          {/* {
                            showResult ?
                                <>
                                    <button onClick={handleSub}>
                                        <img src={starred} alt="" />
                                    </button>
                                    <button onClick={handleSub1}>
                                        <img src={deleteIcon} alt="" onClick={handleClickEight} />
                                    </button>
                                </> : null
                        }
                        <Dialog open={openEight} onClose={handleClickEight}>
                            <DialogContent>
                                <Typography>
                                    <Box style={{ textAlign: "center", color: "#1baab5", }}>
                                        <img src={success} alt="delete" style={{ width: "80px", color: "#1baab5", }} />
                                    </Box>
                                </Typography>
                                <Grid>
                                    <Box>
                                        <Typography style={{ textAlign: "center" }}>deleted Items move to trash successfully</Typography>
                                    </Box>
                                </Grid>

                            </DialogContent>

                            <DialogActions style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                                <Button autoFocus style={{ backgroundColor: "#1baab5", color: "white" }}>
                                    <p onClick={handleCloseEight}> OK</p>
                                </Button>
                                <Button autoFocus onClick={handleCloseEight} >
                                    Cancel
                                </Button>
                            </DialogActions>
                        </Dialog> */}
          <button>
            <GridViewIcon />
          </button>
          <button className={classes.ml15Grid}>
            <ListIcon />
          </button>
        </Grid>
      </Grid>

      <Grid style={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.nameTableCell}>Name</TableCell>
                <TableCell className={classes.theadCell}>
                  Last Modified By
                </TableCell>
                <TableCell className={classes.theadCell}>
                  Last Modified Date
                </TableCell>
                <TableCell className={classes.theadCell}>File Size</TableCell>
                <TableCell className={classes.theadCell}>Actions</TableCell>
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
              {sortedData === "newest" ? (
                <>
                  {isSuccess && (
                    <>
                      {userData
                        .sort(
                          (a: any, b: any) =>
                            Date.parse(new Date(a.lastModifiedDateTime)) -
                            Date.parse(new Date(b.lastModifiedDateTime))
                        )
                        .reverse()
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
                              <TableCell className={classes.TableCell}>
                                <Link
                                  href={`${item.webUrl}`}
                                  className={classes.nameTableCell}
                                >
                                  {item.name}
                                </Link>
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
                              <TableCell
                                align="right"
                                className={classes.TableCell}
                              >
                                <Grid
                                  onClick={() =>
                                    de(item.id, item.name, item.webUrl)
                                  }
                                >
                                  <SimpleDialog
                                    id={itemId}
                                    name={itemName}
                                    webUrl={itemfolder}
                                    onCopy={onCopy}
                                    copyResponse={copyResponse}
                                    onClick={onClick}
                                    downloadUrl={downloadUrl}
                                    onDelete={onDelete}
                                    deleteResponse={deleteResponse}
                                    deleteLoading={deleteLoading}
                                    deleteSuccess={deleteSuccess}
                                    copyLoading={copyLoading}
                                    copySuccess={copySuccess}
                                  />
                                  {/* dgrgrgrhgrhgr */}
                                </Grid>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </>
                  )}
                </>
              ) : sortedData === "oldest" ? (
                <>
                  {isSuccess && (
                    <>
                      {userData
                        .sort(
                          (a: any, b: any) =>
                            Date.parse(new Date(a.lastModifiedDateTime)) -
                            Date.parse(new Date(b.lastModifiedDateTime))
                        )
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
                                component="th"
                                scope="row"
                                className={classes.TableCell}
                              >
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
                              <TableCell
                                align="right"
                                className={classes.TableCell}
                              >
                                <Grid
                                  onClick={() =>
                                    de(item.id, item.name, item.webUrl)
                                  }
                                >
                                  <SimpleDialog
                                    id={itemId}
                                    name={itemName}
                                    webUrl={itemfolder}
                                    onCopy={onCopy}
                                    copyResponse={copyResponse}
                                    onClick={onClick}
                                    downloadUrl={downloadUrl}
                                    onDelete={onDelete}
                                    deleteResponse={deleteResponse}
                                    deleteLoading={deleteLoading}
                                    deleteSuccess={deleteSuccess}
                                    copyLoading={copyLoading}
                                    copySuccess={copySuccess}
                                  />
                                  {/* dgrgrgrhgrhgr */}
                                </Grid>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </>
                  )}
                </>
              ) : (
                <>
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
                                  component="th"
                                  scope="row"
                                  className={classes.TableCell}
                                >
                                  <Link href={`${item.webUrl}`}>
                                    {item.name}
                                  </Link>
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
                                <TableCell
                                  align="right"
                                  className={classes.TableCell}
                                >
                                  <Grid
                                    onClick={() =>
                                      de(item.id, item.name, item.webUrl)
                                    }
                                  >
                                    <SimpleDialog
                                      id={itemId}
                                      name={itemName}
                                      webUrl={itemfolder}
                                      onCopy={onCopy}
                                      copyResponse={copyResponse}
                                      onClick={onClick}
                                      downloadUrl={downloadUrl}
                                      onDelete={onDelete}
                                      deleteResponse={deleteResponse}
                                      deleteLoading={deleteLoading}
                                      deleteSuccess={deleteSuccess}
                                      copyLoading={copyLoading}
                                      copySuccess={copySuccess}
                                    />
                                    {/* dgrgrgrhgrhgr */}
                                  </Grid>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                    </>
                  )}
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
    </Grid>
  );
};

export default RecentFile;
