import React, { useState, useReducer } from 'react';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import WPOneDrive from '../../Workspace/OneDrive/index';
import { Grid, Link, Button, Dialog, DialogContent, Box, DialogActions, CircularProgress, FormControl } from '@mui/material';
import { Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import { Paper } from '@mui/material';
import useCustom from '../../../hooks/useCustom';
import Breadcrumb from '../../../hooks/Breadcrumb';
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import actions from '../../../Assets/Images/action-dots.svg';
import linkIcon from '../../../Assets/Images/link.svg';
import openIcon from '../../../Assets/Images/open.svg';
import downloadIcon from '../../../Assets/Images/DOWLOAD.svg';
import deleteIcon from '../../../Assets/Images/delete.svg';
import success from '../../../Assets/Images/success.svg';
import Fade from '@mui/material/Fade';
import starred from '../../../Assets/Images/starred.svg';
import starredB from '../../../Assets/Images/StarredB.svg';
import { useStyles } from './Styles';
import TablePagination from '@mui/material/TablePagination';
import deleteBlue from '../../../Assets/Images/delete-blue.svg';
import restore from '../../../Assets/Images/restore.svg';
import Modal from '@mui/material/Modal';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
=======
import deleteBlue from '../../../Assets/Images/delete-blue.svg';
import success from '../../../Assets/Images/success.svg';
import Fade from '@mui/material/Fade';
import starred from '../../../Assets/Images/starred.svg';
import { useStyles } from './Styles';
import TablePagination from '@mui/material/TablePagination';



interface SimpleDialogProps {
    id: any,
    name: any,
    folder: any,
    // onDelete?: (id: string, name: string) => void;
    // onOpenFolder: (id: string, name: string, folder: any) => void;
    // deleteResponse: any

    open: boolean;
    // selectedValue: string;
    onClose: () => void;
    anchorEl: any
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
    // const { onClose, selectedValue, open } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openOn = Boolean(anchorEl);

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

    const [openOne, setOpenOne] = React.useState(false);


    const handleClickOne = (popup: any) => {
        setOpenOne(true);
    };

    const handleCloseOne = () => {
        setOpenOne(false);
    };

    const handledelete = () => {
        // onDelete?.(id, name)
        setOpenOne(false);
        setOpenTwo(true)
        // if (deleteResponse?.success === true) {
        //     setOpenTwo(true)
        // }
    }
    const handleFolderOpen = () => {
        // onOpenFolder(id, name, folder)
    }



    const [openTwo, setOpenTwo] = React.useState(false);

    const handleClickTwo = (popup: any) => {
        setOpenTwo(true);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };


    return (
        <Grid style={{ borderRadius: "10px", }} >
            <Button
                id="fade-button"
                aria-controls={openOn ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openOn ? 'true' : undefined}
                onClick={handleClick}

            >

                <img src={actions} alt="actions" />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={openOn}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={classes.menu} >
                <MenuItem >
                    <div className={classes.items} onClick={handleFolderOpen}>
                        <img src={openIcon} alt="folder" /> Open
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className={classes.items}>
                        <img src={linkIcon} alt="linkIcon" /> Copy Link
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className={classes.items}>
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
                                <Box style={{ textAlign: "center", color: "#1baab5", }}>
                                    <img src={deleteBlue} alt="delete" style={{ width: "80px", color: "#1baab5", }} />
                                </Box>
                                <Box style={{ margin: "20px", fontSize: "25px", textAlign: "center" }}>
                                    Delete
                                </Box>
                            </Typography>
                            <Grid>

                                <Box>
                                    <Typography style={{ textAlign: "center" }}>This Items contains some information. are you sure to delete it ?</Typography>
                                </Box>
                            </Grid>

                        </DialogContent>

                        <DialogActions style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                            <Button autoFocus onClick={handledelete} style={{ backgroundColor: "#1baab5", color: "white" }}>
                                OK
                            </Button>
                            <Button autoFocus onClick={handleCloseOne} >
                                Cancel
                            </Button>
                        </DialogActions>

                    </Dialog>
                </MenuItem>
                <MenuItem>
                    <Dialog open={openTwo} onClose={handleCloseTwo}>

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
                                <p onClick={handleCloseTwo}> OK</p>
                            </Button>
                            <Button autoFocus onClick={handleCloseTwo} >
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
    data: any,
    isSuccess: any,
    isLoading: any,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

// const TrashFiles = () => {
const TrashFiles: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const { data, isLoading, isSuccess } = props
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



// const TrashFiles = () => {
    const TrashFiles: React.FC<IFolderProps> = (props: IFolderProps) => {
const classes = useStyles();
const {data ,isLoading,isSuccess} =props
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event: unknown, newPage: number) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

    function createData(
        name: string,
        lastModifiedBy: string,
        ModifiedDate: string,
        fileSize: string,
        deleted: string,
        Actions: any,
    ) {
        return { name, lastModifiedBy, ModifiedDate, fileSize, deleted, Actions };
    }

    const rows = [
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "now", <img src={actions} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "now", <img src={actions} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "now", <img src={actions} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "now", <img src={actions} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "now", <img src={actions} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "now", <img src={actions} alt="" />),

    ];
    const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];


    function niceBytes(x: any) {

        let l = 0, n = parseInt(x, 10) || 0;

        while (n >= 1024 && ++l) {
            n = n / 1024;
        }

        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    return (
        <Grid className={classes.bigPart}>
            <Grid className={classes.divText}>
                Trash
            </Grid>
            <Grid className={classes.myFile}>
                <Grid>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                            <span className={classes.shortSpan}>Sort by</span>
                            {/* <span className={classes.shortBy}>Newest</span> */}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            // value={age}
                            // onChange={handleChange}
                            label="Age"
                            style={{ width: "100px" }}
                        >
                            <MenuItem value={10} ><span className={classes.shortBy}>Newest</span></MenuItem>
                            <MenuItem value={20} ><span className={classes.shortBy}>Oldest</span></MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid style={{ marginTop: "20px", marginRight: "20px" }}>
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
                    <button style={{ marginLeft: "15px" }} >
                        <ListIcon />
                    </button>
                </Grid>
            </Grid>
=======
   
function niceBytes(x:any){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}
    return (
        <Grid>
            <Grid className={classes.divText}>
                Trash
            </Grid>

            <Grid style={{ marginTop: "30px", marginRight: "15px" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.theadCell}>Name</TableCell>
                                <TableCell align="right" className={classes.theadCell}>Last Modified By</TableCell>
                                <TableCell align="right" className={classes.theadCell}>Last Modified Date</TableCell>
                                <TableCell align="right" className={classes.theadCell}>File Size</TableCell>
                                <TableCell align="right" className={classes.theadCell}>Deleted</TableCell>
                                <TableCell align="right" className={classes.theadCell}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {isLoading && <CircularProgress />}
                            {isSuccess && (
                                <>
                                    {data?.response && data?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" className={classes.TableCell}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right" className={classes.TableCell}>{row.lastModifiedBy.user.displayName}</TableCell>
                                            <TableCell align="right" className={classes.TableCell}>{moment(row.lastModifiedDateTime).format("DD-MMM-YYYY")}</TableCell>
                                            <TableCell align="right" className={classes.TableCell}>{niceBytes(row.size)}</TableCell>
                                            <TableCell align="right" className={classes.TableCell}>{moment(row.lastModifiedDateTime).fromNow()}</TableCell>
                                            <TableCell align="right" className={classes.TableCell}> <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}>
                                                {row.Actions}
                                                <img src={starredB} alt="..." />
                                            </Button></TableCell>
                                        </TableRow>
                                    ))}
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        className={classes.popup}
                                    >
                                        <MenuItem onClick={handleClose} className={classes.restoreText}><img src={restore} alt="" /> <p>Restore</p></MenuItem>
                                        <MenuItem onClick={handleOpen1} className={classes.restoreText}><img src={deleteBlue} alt="" /> <span>Delete Permanently</span> </MenuItem>

                                    </Menu>
                                    <Modal
                                        open={open1}
                                        onClose={handleClose1}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "14px", color: "rgb(27, 97, 137)", textAlign: "left" }}>
                                                Are you sure want to permanently delete this item ?
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2, }} style={{ textAlign: "left", fontSize: "12px", marginBottom: "15px" }}>
                                                Deleting "screen.png" permanently will also delete its activity and history across the workspace. You can't undo this action.
                                            </Typography>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <Button style={{ color: "white", backgroundColor: "#009BAD", borderRadius: "4px", textTransform: "none", marginRight: "20px" }} onClick={handleClose1}>Delete Permanently</Button>
                                                <Button style={{ color: "rgb(27, 97, 137)", backgroundColor: "#ede3e3", borderRadius: "4px" }}>Cancel</Button>
                                            </div>
                                        </Box>
                                    </Modal>

                                </>

                        {isLoading && <CircularProgress/>}
                        {isSuccess && (
                            <>
                            { data?.response && data?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:any) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.lastModifiedBy.user.displayName}</TableCell>
                                    <TableCell align="right">{moment(row.lastModifiedDateTime).format("DD-MMM-YYYY")}</TableCell>
                                    <TableCell align="right">{niceBytes(row.size)}</TableCell>
                                    <TableCell align="right">{moment(row.lastModifiedDateTime).fromNow()}</TableCell>
                                    {/* <TableCell align="right">{row.Actions}</TableCell> */}
                                </TableRow>
                            ))}
                            </>

                            )}

                        </TableBody>

                    </Table>

                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
};



export default TrashFiles;