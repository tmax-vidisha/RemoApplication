import React, { useState, useReducer } from 'react';
import { breadcrumbsReducer, foldersReducer } from '../../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import WPOneDrive from '../../Workspace/OneDrive/index';
import { Grid, Link, Button, Dialog, DialogContent, Box, DialogActions, Checkbox, TablePagination } from '@mui/material';
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
import useCustom from '../../../hooks/useCustom';
import Breadcrumb from '../../../hooks/Breadcrumb';
import { useGetAllRootItemsOneDriveQuery, useGetItemChildrenOneDriveMutation } from '../../../services/graph';
import moment from "moment";
import starred from '../../../Assets/Images/starred.svg';
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
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import { Options16Filled } from '@fluentui/react-icons';
import { useEffect } from 'react';


interface SimpleDialogProps {
    id: any,
    name: any,

    folder: any,
    onDelete?: (id: string, name: string) => void;
    onOpenFolder: (id: string, name: string, folder: any) => void;
    deleteResponse: any;
    downloadUrl: any,
    onCopy?: (id: string, name: string) => void;
    copyResponse: any;
    // open: boolean;
    // // selectedValue: string;
    //  onClose: () => void;
    //  anchorEl:any
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
    // const { onClose, selectedValue, open } = props;

    const { id, name, folder, onDelete, onOpenFolder, deleteResponse, downloadUrl, onCopy, copyResponse } = props
    console.log(id, name, folder)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openOn = Boolean(anchorEl);
    console.log(downloadUrl)
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
    console.log(deleteResponse?.success)
    console.log(copyResponse?.response, 'CopyLink')
    const [openOne, setOpenOne] = React.useState(false);

   
    const handleClickOne = (popup: any) => {
        setOpenOne(true);
    };

    const handleCloseOne = () => {
        setOpenOne(false);
    };
   

    const handledelete = () => {
        onDelete?.(id, name)
        setOpenOne(false);
        setOpenTwo(true)
        // if (deleteResponse?.success === true) {
        //     setOpenTwo(true)
        // }
    }
    const handleFolderOpen = () => {
        onOpenFolder(id, name, folder)
    }

    const [openTwo, setOpenTwo] = React.useState(false);

    const handleClickTwo = (popup: any) => {
        setOpenTwo(true);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };
    const handleDownload = () => {
        window.open(downloadUrl)
    }
    const [CopySuccess, setCopySuccess] = useState<any>('')

    const handleCopy = async () => {
        onCopy?.(id, name)
        //    navigator.clipboard.writeText(copyResponse?.response)
        try {
            await navigator.clipboard.writeText(copyResponse?.response);
            setCopySuccess('Copied!');
            // console.log('Copied')
        } catch (err) {
            setCopySuccess('Failed to copy!');
            // console.log('Failed to copy!')
        }
    }

    return (
        <Grid style={{ borderRadius: "10px", }} >
            <Button
                id="fade-button"
                aria-controls={openOn ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openOn ? 'true' : undefined}
                onClick={handleClick}>
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
                className={classes.menu}>
                <MenuItem >
                    <div className={classes.items} onClick={handleFolderOpen}>
                        <img src={openIcon} alt="folder" /> Open
                    </div>

                </MenuItem>

                <MenuItem onClick={handleCopy}>
                    <div className={classes.items}>
                        <img src={linkIcon} alt="linkIcon" /> Copy Link
                    </div>

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
    error: any,
    isLoading: any,
    ItemChildren: any,
    itemChildrenError: any,
    itemChildrenIsLoading: any,
    onClick: (id: string, name: string, folder: any) => void
    // onSubmit: (object: any) => void;
    // onClick: any;
    // onDownload?: (id: string) => void;
    onDelete?: (id: string, name: string) => void;
    deleteResponse: any,
    onCopy?: (id: string, name: string) => void;
    copyResponse: any
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
    const { data, error, isLoading, ItemChildren, itemChildrenError, itemChildrenIsLoading, onClick, onDelete, deleteResponse, onCopy, copyResponse } = props;
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
    // console.log(deleteResponse?.success,'lllll7')
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
    const [itemfolder, setItemFolder] = useState<any>();
    const [downUrl, setDownUrl] = useState<string>('');
    const de = (id: any, name: any, folder: any, download: any) => {
        console.log(download, 'ygrerthtrhy')
        console.log(id, name)
        console.log(folder)
        setItemId(id)
        setItemName(name)
        setItemFolder(folder)
        if (folder === undefined) {
            setDownUrl(download)
        }
    }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClosee = () => {
        setOpen(false);

    };
    const handleOpenFolder = (id: any, name: any, folder: any) => {
        setShow(!show)
        // console.log(id,name,folder)
        onClick(id, name, folder)
    }
    const [selected, setSelected] = useState(false);

    const handleBoxChange = (e: any) => {
        const value = e.target.value;
        console.log(value);
        if (value == "all") {
            setSelected(true)
            return;
        }

        setSelected(value);
    }

    const [prices, setPrices] = useState([])

    // useEffect(() => {
    //     let prices = products.map(p => p.price.substring(3));
    //     setPrices(prices)
    // }, []);
    const [showResult, setShowResult] = useState(false);
    const [openEight, setOpenEight] = React.useState(false);
    const handleClickEight = (popup: any) => {
        setOpenEight(true);
    };

    const handleCloseEight = () => {
        setOpenEight(false);
    };
    const onClickShow = () => {
        setShowResult(true)
    }

    const sortAscending = () => {
        const sortAscPrices = [...prices]
        sortAscPrices.sort((a, b) => a - b)
        setPrices(sortAscPrices)
    }
    const sortDescending = () => {
        const sortDescPrices = [...prices]
        sortDescPrices.sort((a, b) => a - b).reverse()
        setPrices(sortDescPrices)
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Grid className={classes.bigPart} >
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
                                value={age}
                                onChange={handleChange}
                                label="Age"
                                style={{ width: "100px" }}
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                <MenuItem value={10} onClick={sortAscending}><span className={classes.shortBy}>Newest</span></MenuItem>
                                <MenuItem value={20} onClick={sortDescending}><span className={classes.shortBy}>Oldest</span></MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid style={{ marginTop: "20px", marginRight: "20px" }}>
                        {
                            showResult ?
                                <>
                                    <button>
                                        <img src={starred} alt="" />
                                    </button>
                                    <button>
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
                        </Dialog>
                        <button>
                            <GridViewOutlinedIcon />
                        </button>
                        <button style={{ marginLeft: "15px" }} >
                            <FormatListBulletedOutlinedIcon />
                        </button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.theadCell}>
                                    <Checkbox
                                        value="all"
                                        onChange={handleBoxChange} />
                                </TableCell>
                                <TableCell className={classes.theadCell}>Name</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified By</TableCell>
                                <TableCell className={classes.theadCell} >Last Modified Date</TableCell>
                                <TableCell className={classes.theadCell}>File Size</TableCell>
                                <TableCell padding="none" style={{ color: "#606C74" }}>Actions</TableCell>
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
                                                <TableCell className={classes.theadCell} onClick={onClickShow}><Checkbox /></TableCell>
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
                                                    <Link onClick={() => {
                                                        setShow(!show)
                                                        onClick(item.id, item.name, item.folder)
                                                        //  folderClickHandler(item.id, item.name, item.folder, item?.webUrl)


                                                    }}
                                                    // href={`${url}`}
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
                                                    {item.size}
                                                </TableCell>
                                                <TableCell padding="none">
                                                    <Grid
                                                        onClick={() => de(item.id, item.name, item.folder, item["@microsoft.graph.downloadUrl"]
                                                        )}>
                                                        {/* <Button  onClick={()=>de(item.id,item.name)}> */}
                                                        <SimpleDialog
                                                            id={itemId}
                                                            name={itemName}
                                                            onDelete={onDelete}
                                                            folder={itemfolder}
                                                            onOpenFolder={handleOpenFolder}
                                                            deleteResponse={deleteResponse}
                                                            downloadUrl={downUrl}
                                                            onCopy={onCopy}
                                                            copyResponse={copyResponse}
                                                        // onOpenFolder={onClick}
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
                                    ItemChildren?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {
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
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell className={classes.theadCell}></TableCell>
                                                <TableCell className={classes.TableCell}>
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
                                                        onClick(item.id, item.name, item.folder)
                                                        // folderClickHandler(item.id, item.name, item.folder, item?.webUrl)

                                                    }}>
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
                                                    {item.size}
                                                </TableCell>
                                                <TableCell className={classes.TableCell}>
                                                    <Grid
                                                        onClick={() => de(item.id, item.name, item.folder, item["@microsoft.graph.downloadUrl"]
                                                        )}>
                                                        {/* <Button  onClick={()=>de(item.id,item.name)}> */}
                                                        <SimpleDialog
                                                            id={itemId}
                                                            name={itemName}
                                                            onDelete={onDelete}
                                                            folder={itemfolder}
                                                            onOpenFolder={onClick}
                                                            deleteResponse={deleteResponse}
                                                            downloadUrl={downUrl}
                                                            onCopy={onCopy}
                                                            copyResponse={copyResponse}
                                                        //  open={openOn}
                                                        //  onClose={handleClose}
                                                        //  anchorEl={anchorEl}
                                                        />

                                                        {/* </Button> */}
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
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}

                            </TableBody>


                        }

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

        </div>
    );
};

// export default MyFilesPage;
