import React, { useState, useReducer } from 'react';
import { breadcrumbsReducer, foldersReducer } from '../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../Store copy/Actions/actionTypes';
import WPOneDrive from '../Workspace/OneDrive/index';
import { Grid, Link, Button, Modal, Box, DialogContentText } from '@mui/material';
import { Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
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
import { useGetAllRootItemsOneDriveQuery, useGetItemChildrenOneDriveMutation } from '../../services/graph';
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import actions from '../../Assets/Images/action-dots.svg';
import linkIcon from '../../Assets/Images/link.svg';
import openIcon from '../../Assets/Images/open.svg';
import downloadIcon from '../../Assets/Images/DOWLOAD.svg';
import deleteIcon from '../../Assets/Images/delete.svg';
import deleteBlue from '../../Assets/Images/delete-blue.svg';
import Fade from '@mui/material/Fade';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from "@mui/material/styles";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IFolderProps {
    data: any,
    error: any,
    isLoading: any,
    ItemChildren: any,
    itemChildrenError: any,
    itemChildrenIsLoading: any,
    onClick: (id: string, name: string, folder: any, webUrl: any) => void
    // onSubmit: (object: any) => void;
    // onClick: any;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme: any) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};
/*
 interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }

export default function SimpleDialog(props: SimpleDialogProps){
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value: string) => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    return (
      <div>
        <Typography variant="subtitle1" component="div">
          Selected: {selectedValue}
        </Typography>
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    );
  }
*/

const MyFilesPage: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [url, setUrl] = useState<string>('');
    const [show, setShow] = useState<boolean>(true)
    const [s, setS] = useState<boolean>(false)
    const { token } = useCustom();
    //@ts-ignore
    // const { data, error, isLoading } = useGetAllRootItemsOneDriveQuery(token);
    // console.log(data?.response)
    const { data, error, isLoading, ItemChildren, itemChildrenError, itemChildrenIsLoading, onClick } = props;
    // const [sendItem, { data: ItemChildren, error: itemChildrenError, isLoading: itemChildrenIsLoading }] = useGetItemChildrenOneDriveMutation();
    // console.log(ItemChildren?.response, 'yujujujuys')
    // const [breadcrumbsState, breadcrumbsDispatch] = useReducer(breadcrumbsReducer, {
    //     breadcrumbs: [{
    //         id: '',
    //         name: 'Home'
    //     }]
    // });
    // console.log('breadcrumbsState', breadcrumbsState)
    // sendItem(token)
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
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
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", "..."),

    ];
    // const setBreadCrumbAction = async (id: string, name: string) => {
    //     return breadcrumbsDispatch({ type: ActionType.SET_BREADCRUMBS, payload: { id, name } });
    // };

    // const updateBreadCrumbAction = async (id: string) => {
    //     return breadcrumbsDispatch({ type: ActionType.UPDATE_BREADCRUMBS, payload: { id } });
    // };
    const folderClickHandler = async (id: string, name: string,
        folder: any, webUrl: any
    ): Promise<void> => {

        // await getFolderChildrenAction(id);
        // await setBreadCrumbAction(id, name);
        // console.log(id, name)
        // console.log(folder)
        // console.log(webUrl)
        // if (folder === undefined) {
        //     setUrl(webUrl)
        // } else {
        //     console.log('Its  folder')
        //     // setShow(!show)
        //     const Data = {
        //         // name:id,
        //         ItemId: id,
        //         Name: name
        //     }
        //     //  console.log(fd)
        //     // await sendItem(Data)
        // const Data ={
        //     id:id,
        //     name:name,
        //     folder:folder,
        //     webUrl:webUrl
        // }
        //  await setBreadCrumbAction(id, name);
        // }
        //   onClick(id,name,folder,webUrl)

        // setShow(!show)
    };
    // const breadcrumbClickHandler = async (id: string) => {
    //     // await updateBreadCrumbAction(id);
    //     // await getFolderChildrenAction(id);
    //     const Data = {
    //         // name:id,
    //         // ItemId: id,
    //         id:id,
    //         //    Name:name
    //     }
    //     //  console.log(fd)
    //     // await sendItem(Data)
    //      onClick(Data)
    // };
    // const [listView, setListView]=useState('');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const openOn = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOnClose = () => setOpen(false);

    const [openOne, setOpenOne] = React.useState(false);
    const handleClickOne = (popup: any) => {
        setOpenOne(true);
    };

    const handleCloseOne = () => {
        setOpenOne(false);
    };

    return (
        <>

            <Grid className={classes.myFile}>
                <Grid>
                    {/* <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs}
                            getChildHandler={breadcrumbClickHandler} /> */}
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel id="demo-simple-select-standard-label"><span>Sort by</span> Newest</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid style={{ marginTop: "20px", marginRight: "20px" }}>
                    <button >
                        <GridViewOutlinedIcon />
                    </button>

                    <button style={{ marginLeft: "15px" }} >
                        <FormatListBulletedOutlinedIcon />
                    </button>
                </Grid>

            </Grid>
            <Stack>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Last Modified By</TableCell>
                                <TableCell align="right">Last Modified Date</TableCell>
                                <TableCell align="right">File Size</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* <TableBody>
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
                                        <TableCell align="right">{row.Actions}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody> */}

                        {show ?
                            <TableBody>
                                {data?.response &&
                                    data?.response.map((item: any, index: any) => {
                                        //   const { fields = {} } = item;
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

                                                <TableCell component="th" scope="row">
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
                                                    <Link onClick={() => {
                                                        setShow(!show)
                                                        onClick(item.id, item.name, item.folder, item?.webUrl)
                                                        //  folderClickHandler(item.id, item.name, item.folder, item?.webUrl)


                                                    }}
                                                    // href={`${url}`}
                                                    >
                                                        {item.name}
                                                    </Link>

                                                </TableCell>
                                                <TableCell align="right">
                                                    {item.lastModifiedBy.user.displayName}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {createdDate}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {item.size}
                                                </TableCell>
                                                <TableCell align="right">

                                                    <Grid style={{ borderRadius: "10px" }} >
                                                        <Button
                                                            id="fade-button"
                                                            aria-controls={openOn ? 'fade-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={openOn ? 'true' : undefined}
                                                            onClick={handleClick}>

                                                            <img src={actions} alt="actions" />
                                                        </Button>
                                                        <Stack direction="row" spacing={2}>
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
                                                            style={{boxShadow:"10px 10px 10px 10px gray" }}
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
                                                                    <img src={downloadIcon} alt="downloadIcon" /> Download
                                                                </div>

                                                            </MenuItem>

                                                            <MenuItem >
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
                                                                        <Button autoFocus onClick={handleCloseOne} style={{ backgroundColor: "#1baab5", color: "white" }}>
                                                                            OK
                                                                        </Button>
                                                                        <Button autoFocus onClick={handleCloseOne} >
                                                                            Cancel
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </MenuItem>

                                                        </Menu>
                                                        </Stack>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}

                            </TableBody> :
                            <TableBody>

                                {ItemChildren?.response &&
                                    ItemChildren?.response.map((item: any, index: any) => {
                                        //   const { fields = {} } = item;
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

                                                <TableCell component="th" scope="row">
                                                    {/* <Link 
                                                onClick={()=>{
                                                    // folderClickHandler(item.id,item.name)
                                                //  if(item.name.includes('.txt') || item.name.includes('.xlsx') || item.name.includes('.docx')  || item.name.includes('.pptx')){
                                                    if(item.folder === undefined){
                                                //   setUrl(item?.webUrl)
                                                     console.log(item?.webUrl)
                                                    //  setS(!s)
                                                }else{
                                                   
                                                    //   handleSubmit(item?.folder);
                                                     console.log(item?.folder)
                                                     folderClickHandler(item.id,item.name)
                                                   
                                                }
                                            }}
                                            
                                                //   href={`${result}`}
                                                > */}
                                                    <Link onClick={() => {
                                                        onClick(item.id, item.name, item.folder, item?.webUrl)
                                                        // folderClickHandler(item.id, item.name, item.folder, item?.webUrl)

                                                    }}>
                                                        {item.name}
                                                    </Link>

                                                </TableCell>
                                                <TableCell align="right">
                                                    {item.lastModifiedBy.user.displayName}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {createdDate}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {item.size}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Grid style={{ textTransform: "capitalize", borderRadius: "10px", }} className={classes.create}>
                                                        <Button
                                                            id="fade-button"
                                                            aria-controls={openOn ? 'fade-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={openOn ? 'true' : undefined}
                                                            onClick={handleClick} >

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
                                                                <div className={classes.items}>
                                                                    <img src={openIcon} alt="folder" className={classes.menuImage} /> Open
                                                                </div>

                                                            </MenuItem>

                                                            <MenuItem>
                                                                <div className={classes.items}>
                                                                    <img src={linkIcon} alt="linkIcon" className={classes.menuImage} /> Copy Link
                                                                </div>

                                                            </MenuItem>
                                                            <MenuItem>
                                                                <div className={classes.items}>
                                                                    <img src={downloadIcon} alt="downloadIcon" className={classes.menuImage} /> Download
                                                                </div>

                                                            </MenuItem>
                                                            <MenuItem>
                                                                {/* <div className={classes.items}>
                                                                    <Button onClick={handleOpen}><img src={deleteIcon} alt="deleteIcon" className={classes.menuImage} /> Delete </Button>
                                                                    <Dialog
                                                                        open={open}
                                                                        onClose={handleOnClose}
                                                                        aria-labelledby="modal-modal-title"
                                                                        aria-describedby="modal-modal-description"
                                                                    >
                                                                        <DialogContent>
                                                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                                                Text in a modal
                                                                            </Typography>
                                                                            <DialogContentText id="modal-modal-description" sx={{ mt: 2 }}>
                                                                                This item contains some information. Are you sure to delete it ?
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button onClick={handleOnClose}>Cancel</Button>
                                                                            <Button onClick={handleOnClose}>Subscribe</Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                </div> */}

                                                            </MenuItem>

                                                        </Menu>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}

                            </TableBody>


                        }

                    </Table>

                </TableContainer>
            </Stack>
            {/* </Grid> */}

        </>
    );
};

export default MyFilesPage;