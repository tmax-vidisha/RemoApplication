import React, { useState, useReducer } from 'react';
import { ActionType } from '../../Store copy/Actions/actionTypes';
import WPOneDrive from '../Workspace/OneDrive/index';
import { Grid, Link, Button, Dialog, DialogContent, Box, DialogActions } from '@mui/material';
import { Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useStyles } from './Styles';
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import { Paper } from '@mui/material';
import useCustom from '../../hooks/useCustom';
import Breadcrumb from '../../hooks/Breadcrumb';
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import actions from '../../Assets/Images/action-dots.svg';
import linkIcon from '../../Assets/Images/link.svg';
import openIcon from '../../Assets/Images/open.svg';
import downloadIcon from '../../Assets/Images/DOWLOAD.svg';
import deleteIcon from '../../Assets/Images/delete.svg';
import deleteBlue from '../../Assets/Images/delete-blue.svg';
import success from '../../Assets/Images/success.svg';
import Fade from '@mui/material/Fade';



export interface SimpleDialogProps {
    open: boolean;
    //selectedValue: string;
    selectedValue: any;
    onClose: (value: string) => void;
    anchorEl: HTMLElement | null; 
  }

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
     const { onClose, selectedValue, open } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openOn = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    const handleClose = (selectedValue:any) => {
      onClose(selectedValue);
    };

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
                className={classes.menu}

            >

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

//const FileShared: React.FC<IFolderProps> = (props: IFolderProps) =>{
const FileSharedPage = (selectedValue: any) => {
    const [age, setAge] = React.useState('');
    const [show, setShow] = useState<boolean>(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openOn = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [itemId, setItemId] = useState<string>('');
    const [itemName, setItemName] = useState<string>('');
    const [itemfolder, setItemFolder] = useState<any>();
    const de = (id: any, name: any, folder: any) => {
        //    console.log(id,name)
        // console.log(folder)
        setItemId(id)
        setItemName(name)
        setItemFolder(folder)
    }
    const [open, setOpen] = React.useState(false);
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        //setAge('');
    };

    function createData(
        name: string,
        lastModifiedBy: string,
        ModifiedDate: string,
        fileSize: string,
        Actions: string,
    ) {
        return { name, lastModifiedBy, ModifiedDate, fileSize, Actions };
    }

    const rows = [
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", ""),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", ""),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", ""),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", ""),

    ];
    return (
        <Grid style={{ marginTop: "30px", marginRight: "15px" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Last Modified By</TableCell>
                            <TableCell align="right">Last Modified Date</TableCell>
                            <TableCell align="right">File Size</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
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
                                <TableCell align="right">{row.Actions}
                                    <Grid>
                                         {/* onClick={() => de(item.id, item.name, item.folder)} */}
                                        <Button  onClick={handleClick}>
                                        <SimpleDialog
                                            // id={itemId}
                                            // name={itemName}
                                            // onDelete={onDelete}
                                            // folder={itemfolder}
                                            // onOpenFolder={handleOpenFolder}
                                            // deleteResponse={deleteResponse}
                                       // onOpenFolder={onClick}
                                       selectedValue={selectedValue}
                                         open={openOn}
                                         onClose={handleClose}
                                         anchorEl={anchorEl}
                                        />

                                        </Button>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </TableContainer>
        </Grid>
    );
};

export default FileSharedPage;