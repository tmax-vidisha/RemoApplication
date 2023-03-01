import React, { useState, useReducer } from 'react';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import WPOneDrive from '../../Workspace/OneDrive/index';
import { Grid, Link, Button, Dialog, DialogContent, Box, DialogActions, Stack, Pagination, CircularProgress } from '@mui/material';
import { Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useStyles } from './Styles';
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
import deleteBlue from '../../../Assets/Images/delete-blue.svg';
import success from '../../../Assets/Images/success.svg';
import Fade from '@mui/material/Fade';
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

//const FileShared: React.FC<IFolderProps> = (props: IFolderProps) =>{
const FileSharedPage: React.FC<IFolderProps> = (props: IFolderProps) => {

    const { data, isLoading, isSuccess } = props
    const [age, setAge] = React.useState('');
    const [show, setShow] = useState<boolean>(true);
    const classes = useStyles();
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        //setAge('');
    };

    // function createData(
    //     name: string,
    //     lastModifiedBy: string,
    //     ModifiedDate: string,
    //     fileSize: string,
    //     Actions: string,
    // ) {
    //     return { name, lastModifiedBy, ModifiedDate, fileSize, Actions };
    // }

    // const rows = [
    //     createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),
    //     createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),
    //     createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),
    //     createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),

    // ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openOn = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
   
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
                Shared with me
            </Grid>
            <Grid style={{ marginTop: "30px", marginRight: "15px" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.theadCell}>Name</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified By</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified Date</TableCell>
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
                             {isLoading && <CircularProgress/>}
                             {isSuccess  && (
                            <>
                            {data?.response &&
                                data?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {
                                    //   const { fields = {} } = item;

                                    // const  Url= item["@microsoft.graph.downloadUrl"];
                                    // console.log(Url,'llll')
                                    //   // console.log(fields,'yjyjyjyjyj')
                                    //   var eventTitle = fields?.Title;
                                    //   console.log(eventTitle,'yjyjyjyjyj')
                                    //   var eventStart = moment(fields?.EventDate).format("llll");
                                    //   var eventDate = moment(fields?.EndDate).format("llll");

                                    //   var eventIsActive = fields.IsActive;
                                    // let createdMonth = moment(item.lastModifiedDateTime).format("MMM");
                                    // let createdYear = moment(item.lastModifiedDateTime).format("YYYY");
                                    let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");
                                    //   var createdDate = moment(
                                    //     item.lastModifiedDateTime
                                    //   ).fromNow();
                                    // let result = (item?.folder === undefined) ? item?.webUrl :'';
                                    // let result ; 
                                    // if(item?.folder === undefined){
                                    //   result= item?.webUrl
                                    // }
                                    return (
                                        <TableRow
                                            key={item.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >

                                            <TableCell className={classes.TableCell}>
                                                {/* <Link 
                                                    onClick={()=>{
                                                        // folderClickHandler(item.id,item.name)
                                                    //  if(item.name.includes('.txt') || item.name.includes('.xlsx') || item.name.includes('.docx')  || item.name.includes('.pptx')){
                                                        if(item.folder === undefined){
                                                    //   setUrl(item?.webUrl)
                                                         console.log(item?.webUrl)
                                                         
                                                    }else{
                                                       
                                                        //   handleSubmit(item?.folder);
                                                         console.log(item?.folder)
                                                         folderClickHandler(item.id,item.name)
                                                         setShow(!show)
                                                    }
                                                }}
                                                
                                                    //   href={`${result}`}
                                                    > */}
                                                <Link
                                                    // onClick={() => {
                                                    //     setShow(!show)
                                                    //     onClick(item.id, item.name, item.folder)
                                                    //     //  folderClickHandler(item.id, item.name, item.folder, item?.webUrl)


                                                    // }}
                                                    href={`${item.webUrl}`}
                                                >
                                                    {item.name}
                                                </Link>

                                            </TableCell>
                                            <TableCell className={classes.TableCell}>
                                                {item.lastModifiedBy.user.displayName}
                                            </TableCell>
                                            <TableCell className={classes.TableCell}>
                                                {createdDate}
                                            </TableCell>
                                            <TableCell className={classes.TableCell}>
                                            {niceBytes(item.size)}
                                            </TableCell>
                                            <TableCell className={classes.TableCell}>
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
                                                                 elevation={0}
                                                                 style={{
                                                                   marginTop: "1em",
                                                                   boxShadow: "10px 1px 30px -10px #c2bcbc",
                                                                 }}
                                                            >

                                                                <MenuItem >
                                                                    <div className={classes.items}>
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
                                                                        <img src={downloadIcon} alt="downloadIcon"  /> Download
                                                                    </div>
                                                                    
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <div className={classes.items}>
                                                                        
                                                                        <img src={deleteIcon} alt="deleteIcon"  /> Delete
                                                                        
                                                                    </div>
                                                                   
                                                                </MenuItem>
                                                                
                                                            </Menu>
                                                        </Grid> 
                                            </TableCell>
                                        </TableRow>
                                    )
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
        </Grid>
    );
};

export default FileSharedPage;