import React, { useState, useReducer } from 'react';
import { breadcrumbsReducer, foldersReducer } from '../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../Store copy/Actions/actionTypes';
import WPOneDrive from './../Workspace/OneDrive/index';
import { Grid, Link, Button, Dialog, DialogContent, Box, DialogActions } from '@mui/material';
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
import success from '../../Assets/Images/success.svg';
import Fade from '@mui/material/Fade';


interface SimpleDialogProps {
    id: any,
    name: any,
    onDelete?: (id: string, name: string) => void;
    // open: boolean;
    // // selectedValue: string;
    //  onClose: () => void;
    //  anchorEl:any
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
    // const { onClose, selectedValue, open } = props;
    const { id, name, onDelete } = props
    console.log(id, name)
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
        onDelete?.(id, name)
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
                                <p onClick={handleClickTwo}> OK</p>
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
                                        <Button autoFocus onClick={handleClickTwo} style={{ backgroundColor: "#1baab5", color: "white" }}>
                                            <p onClick={handleCloseTwo}> OK</p>
                                        </Button>
                                        <Button autoFocus onClick={handleCloseTwo} >
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Button>
                            <Button autoFocus onClick={handleCloseOne} >
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
    error: any,
    isLoading: any,
    ItemChildren: any,
    itemChildrenError: any,
    itemChildrenIsLoading: any,
    onClick: (id: string, name: string, folder: any, webUrl: any) => void
    // onSubmit: (object: any) => void;
    // onClick: any;
    // onDownload?: (id: string) => void;
    onDelete?: (id: string, name: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
}


// const MyFilesPage = () => {
export const MyFilesPage: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [url, setUrl] = useState<string>('');
    const [show, setShow] = useState<boolean>(true)
    const [s, setS] = useState<boolean>(false)
    const { token } = useCustom();
    //@ts-ignore
    // const { data, error, isLoading } = useGetAllRootItemsOneDriveQuery(token);
    // console.log(data?.response)
    const { data, error, isLoading, ItemChildren, itemChildrenError, itemChildrenIsLoading, onClick, onDelete } = props;
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
    const [itemId, setItemId] = useState<string>('');
    const [itemName, setItemName] = useState<string>('');
    const de = (id: any, name: any) => {
        //    console.log(id,name)
        setItemId(id)
        setItemName(name)
    }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClosee = () => {
        setOpen(false);

    };
    return (
        <>

            {/* <Grid className={classes.divFile}>
                My Files
            </Grid> */}
            {/* <Grid className={classes.bigPart}> */}
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
                                                    <Grid
                                                        onClick={() => de(item.id, item.name)}>
                                                        {/* <Button  onClick={()=>de(item.id,item.name)}> */}
                                                        <SimpleDialog
                                                            id={itemId}
                                                            name={itemName}
                                                            onDelete={onDelete}
                                                        //  open={openOn}
                                                        //  onClose={handleClose}
                                                        //  anchorEl={anchorEl}
                                                        />

                                                        {/* </Button> */}
                                                    </Grid>
                                                    {/* <Grid style={{ borderRadius: "10px", }} >
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
                                                        </Grid> */}
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

                                                    <Grid
                                                        onClick={() => de(item.id, item.name)}>
                                                        {/* <Button  onClick={()=>de(item.id,item.name)}> */}
                                                        <SimpleDialog
                                                            id={itemId}
                                                            name={itemName}
                                                            onDelete={onDelete}
                                                        //  open={openOn}
                                                        //  onClose={handleClose}
                                                        //  anchorEl={anchorEl}
                                                        />

                                                    </Grid>
                                                    {/* <Grid style={{ textTransform: "capitalize", borderRadius: "10px", }} className={classes.create}>
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
                                                                    <div className={classes.items}>
                                                                        <img src={openIcon} alt="folder" className={classes.menuImage} /> Open
                                                                    </div>
                                                                   
                                                                </MenuItem>

                                                                <MenuItem>
                                                                    <div className={classes.items}>
                                                                        <img src={linkIcon} alt="linkIcon" className={classes.menuImage} /> Copy Link
                                                                    </div>

                                                                </MenuItem>
                                                                <MenuItem >
                                                                    <div className={classes.items}>
                                                                        <img src={downloadIcon} alt="downloadIcon" className={classes.menuImage} /> Download
                                                                    </div>
                                                                    
                                                                </MenuItem>
                                                                <MenuItem onClick={()=>de(item.id,item.name)}>
                                                                    <div className={classes.items}>
                                                                        <img src={deleteIcon} alt="deleteIcon" className={classes.menuImage} /> Delete
                                                                    </div>
                                                                   
                                                                </MenuItem>
                                                                
                                                            </Menu>
                                                        </Grid> */}
                                                    <Grid />
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

// export default MyFilesPage;