//@ts-nocheck
import React, { useState, useReducer } from 'react';
import { breadcrumbsReducer, foldersReducer } from '../../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import WPOneDrive from '../../Workspace/OneDrive/index';
import { Grid, Link, Button, Dialog, DialogContent, Box, DialogActions, Checkbox, TablePagination, CircularProgress } from '@mui/material';
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
import imageB from '../../../Assets/Images/imageB.svg';
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
    deleteLoading: any,
    deleteSuccess: any,
    copySuccess: any,
    copyLoading: any,
    // open: boolean;
    // // selectedValue: string;
    //  onClose: () => void;
    //  anchorEl:any
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
    // const { onClose, selectedValue, open } = props;

    const { id, name, folder, onDelete, onOpenFolder, deleteResponse, deleteLoading, deleteSuccess, copyLoading, copySuccess, downloadUrl, onCopy, copyResponse } = props
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
    // console.log(deleteResponse?.success)
    // console.log(copyResponse?.response, 'CopyLink')
    const [openOne, setOpenOne] = React.useState(false);


    const handleClickOne = (popup: any) => {
        setOpenOne(true);
    };

    const handleCloseOne = () => {
        setOpenOne(false);
    };
    const [openTwo, setOpenTwo] = React.useState(false);


    const handledelete = () => {
        onDelete?.(id, name)
        setOpenOne(false);
        if (deleteLoading) {
            <>Loading</>
        } else if (deleteSuccess) {
            setOpenTwo(true)
        }
        // setOpenTwo(true)
        // if (deleteResponse?.success === true) {
        //     setOpenTwo(true)
        // }
    }
    const handleFolderOpen = () => {
        onOpenFolder(id, name, folder)
    }


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
        if (copyLoading) {
            <>Loading</>
        }
        else if (copySuccess) {
            try {
                await navigator.clipboard.writeText(copyResponse?.response);
                setCopySuccess('Copied!');
                // console.log('Copied')
            } catch (err) {
                setCopySuccess('Failed to copy!');
                // console.log('Failed to copy!')
            }
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
    isSuccess: any,
    isLoading: any,
    ItemChildren: any,
    itemChildrenSuccess: any,
    itemChildrenIsLoading: any,
    deleteLoading: any,
    deleteSuccess: any,
    copySuccess: any,
    copyLoading: any,
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
    const { data, isSuccess, isLoading, ItemChildren, itemChildrenSuccess, itemChildrenIsLoading, onClick, onDelete, deleteLoading, deleteSuccess, deleteResponse, onCopy, copyLoading, copySuccess, copyResponse } = props;
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
    // const [selected, setSelected] = useState(false);
    const [userData, setUserdata] = useState<any>([]);
    // useEffect (()=>{
    //     if(isLoading){
    //         <>isLoading</>
    //     }else if(isSuccess){
    //         Object.freeze(data?.response);
    //         const arrData = [...data?.response]
    //     setUserdata(arrData)
    //     }
    // })
    // console.log(userData,'rrttt')
    // const isAllSelected =
    // data?.response.length > 0 && selected.length === data?.response.length;
    const [selectData, setSelectData] = useState([]);
    const handleBoxChange = (e: any) => {
        let array = []
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = data?.response.map((user: any) => {
                return { ...user, isChecked: checked };
            });

            console.log(tempUser, 'all')
            //@ts-ignore
            setSelectData(tempUser)
            //@ts-ignore
            setUserdata(tempUser);
        }
        else {
            //@ts-ignore
            let tempUser = userData.map((user: any) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            console.log(tempUser, 'ltt')

            //@ts-ignore
            setSelectData(tempUser)
            //@ts-ignore
            setUserdata(tempUser);
        }

    }
    const handleBoxChange1 = (e: any) => {
        let array = []
        const { name, checked } = e.target;
        console.log(name, checked)
        let tempUser = ItemChildren?.response.map((user: any) =>
            user.name === name ? { ...user, isChecked: checked } : user
        );
        console.log(tempUser, 'ltt')
        setSelectData(tempUser)
    }
    const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`
    const Site_Id = 'tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43'
    const heroBannerDriveId = "b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikNSXwtOP-0VTpmA2oOYWlnu"
    const documentsId = "b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikMF_Pl86wt6RJ301fEG4lAL"
    const trashId = "b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikPA6Y9HwDJ4TLznL7CJStDS"
    const handleSub = async () => {
        for (let i = 0; i < selectData.length; i++) {
            //@ts-ignore
            let ext = selectData[i].name.split('.').pop();
            //@ts-ignore
            // if(ext!== selectData[i].name){
            //     console.log(selectData[i])
            // }
            // if (ext !== age.name)
            //@ts-ignore
            if (selectData[i].isChecked == true && ext !== selectData[i].name) {
                console.log(selectData[i], 'trreeeeeeeeeeee')

                try {
                    //@ts-ignore
                    const response = await fetch(`${BASE_PATH}/${Site_Id}/drives/${documentsId}/items/root:/${selectData[i].name}:/content`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            "Content-type": 'application/json'
                        },
                        body: selectData[i]
                    });
                    const data = await response.json();
                    // enter you logic when the fetch is successful
                    console.log(data, 'rtwssssssssss');
                    return data.webUrl
                    // return data
                } catch (error) {
                    // enter your logic for when there is an error (ex. error toast)

                    console.log(error)
                }
            }

        }
    }
    const handleSub1 = async () => {
        for (let i = 0; i < selectData.length; i++) {
            //@ts-ignore
            let ext = selectData[i].name.split('.').pop();
            //@ts-ignore
            // if(ext!== selectData[i].name){
            //     console.log(selectData[i])
            // }
            // if (ext !== age.name)
            //@ts-ignore
            if (selectData[i].isChecked == true && ext !== selectData[i].name) {
                console.log(selectData[i], 'trreeeeeeeeeeee')

                try {
                    //@ts-ignore
                    const response = await fetch(`${BASE_PATH}/${Site_Id}/drives/${trashId}/items/root:/${selectData[i].name}:/content`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            "Content-type": 'application/json'
                        },
                        body: selectData[i]
                    });
                    const data = await response.json();
                    // enter you logic when the fetch is successful
                    console.log(data, 'rtwssssssssss');
                    return data.webUrl
                    // return data
                } catch (error) {
                    // enter your logic for when there is an error (ex. error toast)

                    console.log(error)
                }
            }

        }
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
    const [mode, setMode] = useState<String>('');
    const sortAscending = () => {
        // const sortAscPrices = [...prices]
        // sortAscPrices.sort((a, b) => a - b)
        // setPrices(sortAscPrices)
        setMode('newest')
       
        console.log(show,'show')
        if(show == false){
            Object.freeze(ItemChildren?.response);
        const arrCopy = [...ItemChildren?.response];
        setUserdata(arrCopy)
        }else{
            Object.freeze(data?.response);
            const arrCopy = [...data?.response];
            setUserdata(arrCopy)
        }

    }

    const sortDescending = () => {
        console.log('ththshththssssssssssssssssssssssssss')
        setMode('oldest')
        console.log(mode, 'trgtrhtttttttttttttttt')
        
        if(show == false){
            Object.freeze(ItemChildren?.response);
            const arrCopy = [...ItemChildren?.response];
            setUserdata(arrCopy)
        }else{
            Object.freeze(data?.response);
            const arrCopy = [...data?.response];
            setUserdata(arrCopy)
        }
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
    const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    function niceBytes(x: any) {
        let l = 0, n = parseInt(x, 10) || 0;

        while (n >= 1024 && ++l) {
            n = n / 1024;
        }

        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }
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
                                <MenuItem value={10} onClick={sortAscending}><span className={classes.shortBy}>Newest</span></MenuItem>
                                <MenuItem value={20} onClick={sortDescending}><span className={classes.shortBy}>Oldest</span></MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid style={{ marginTop: "20px", marginRight: "20px" }}>
                        {
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
                                <TableCell className={classes.theadCell} onClick={onClickShow}>
                                    {/* <Checkbox
                                       name="allselect"
                                       checked= { !data?.response.some( (user:any)=>user?.isChecked!==true)}
                                        onChange={handleBoxChange} /> */}
                                    {/* <Checkbox name="allselect" checked= { !data?.response.some( (user:any)=>user?.isChecked!==true)} onChange={ handleBoxChange}  />  */}
                                    <Checkbox
                                        name="allSelect"
                                        checked={
                                            data?.response.filter((user: any) => user?.isChecked !== true).length < 1
                                        }

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
                                {isLoading && <CircularProgress />}
                                {
                                    mode === "oldest" ?
                                    <>
                                    {isSuccess && (
                                        <>
                                            {userData && userData.sort((a:any,b:any) => Date.parse(new Date(a.lastModifiedDateTime  )) - Date.parse(new Date(b.lastModifiedDateTime   ))).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {

                                                let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");

                                                return (
                                                    <TableRow
                                                        key={item.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell className={classes.theadCell}
                                                            onClick={onClickShow}
                                                        >
                                                            <Checkbox name={item.name}
                                                                checked={item?.isChecked || false}
                                                                // checked ={checked.includes(item)}
                                                                onChange={handleBoxChange} />
                                                            {/* <Checkbox name={ item.name} checked={item?.isChecked|| false }  onChange={handleBoxChange} /> */}
                                                            {/* <Checkbox name={ item.name} checked={item?.isChecked|| false } onChange={ handleBoxChange }  /> */}
                                                        </TableCell>
                                                        <TableCell className={classes.TableCell}>

                                                            <Link onClick={() => {
                                                                setShow(!show)
                                                                onClick(item.id, item.name, item.folder)
                                                                //  folderClickHandler(item.id, item.name, item.folder, item?.webUrl)
}}
                                                            // href={`${url}`}
                                                            >
                                                                <img src={imageB} alt="..." style={{width:"15px",marginRight:"3px" }}/>
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
                                                                    deleteLoading={deleteLoading}
                                                                    deleteSuccess={deleteSuccess}
                                                                    copyLoading={copyLoading}
                                                                    copySuccess={copySuccess}

                                                                />

                                                                {/* </Button> */}
                                                            </Grid>

                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </>
                                    )}
                                </>
                                        :

                                        mode === "newest" ?

                                            <>
                                                {isSuccess && (
                                                    <>
                                                        {userData && userData.sort((a:any,b:any) => Date.parse(new Date(a.lastModifiedDateTime  )) - Date.parse(new Date(b.lastModifiedDateTime   ))).reverse().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {

                                                            let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");

                                                            return (
                                                                <TableRow
                                                                    key={item.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell className={classes.theadCell}
                                                                        onClick={onClickShow}
                                                                    >
                                                                        <Checkbox name={item.name}
                                                                            checked={item?.isChecked || false}
                                                                            // checked ={checked.includes(item)}
                                                                            onChange={handleBoxChange} />
                                                                        {/* <Checkbox name={ item.name} checked={item?.isChecked|| false }  onChange={handleBoxChange} /> */}
                                                                        {/* <Checkbox name={ item.name} checked={item?.isChecked|| false } onChange={ handleBoxChange }  /> */}
                                                                    </TableCell>
                                                                    <TableCell className={classes.TableCell}>

                                                                        <Link onClick={() => {
                                                                            setShow(!show)
                                                                            onClick(item.id, item.name, item.folder)
                                                                            //  folderClickHandler(item.id, item.name, item.folder, item?.webUrl)


                                                                        }}
                                                                        // href={`${url}`}
                                                                        >
                                                                            <img src={imageB} alt="..." style={{width:"15px",marginRight:"3px" }}/> 
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
                                                                                deleteLoading={deleteLoading}
                                                                                deleteSuccess={deleteSuccess}
                                                                                copyLoading={copyLoading}
                                                                                copySuccess={copySuccess}

                                                                            />

                                                                            {/* </Button> */}
                                                                        </Grid>

                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        })}
                                                    </>
                                                )}
                                            </>
                                            :
                                            <>
                                                {isSuccess && (
                                                    <>
                                                        {data?.response && data?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {

                                                            let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");

                                                            return (
                                                                <TableRow
                                                                    key={item.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell className={classes.theadCell}
                                                                        onClick={onClickShow}
                                                                    >
                                                                        <Checkbox name={item.name}
                                                                            checked={item?.isChecked || false}
                                                                            // checked ={checked.includes(item)}
                                                                            onChange={handleBoxChange} />
                                                                        {/* <Checkbox name={ item.name} checked={item?.isChecked|| false }  onChange={handleBoxChange} /> */}
                                                                        {/* <Checkbox name={ item.name} checked={item?.isChecked|| false } onChange={ handleBoxChange }  /> */}
                                                                    </TableCell>
                                                                    <TableCell className={classes.TableCell}>

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
                                                                        {niceBytes(item.size)}
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
                                                                                deleteLoading={deleteLoading}
                                                                                deleteSuccess={deleteSuccess}
                                                                                copyLoading={copyLoading}
                                                                                copySuccess={copySuccess}

                                                                            />

                                                                            {/* </Button> */}
                                                                        </Grid>

                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        })}
                                                    </>
                                                )}
                                            </>

                                }


                            </TableBody> :

                            <TableBody>
                                {itemChildrenIsLoading && <CircularProgress />}
                                {
                                   mode === 'oldest'
                                   ? 
                                   <>
                                    {itemChildrenSuccess && (
                                        <>
                                            {userData && userData.sort((a:any,b:any) => Date.parse(new Date(a.lastModifiedDateTime  )) - Date.parse(new Date(b.lastModifiedDateTime   ))).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {

                                                let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");

                                                return (
                                                    <TableRow
                                                        key={item.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell className={classes.theadCell}
                                                            onClick={onClickShow}
                                                        >
                                                            <Checkbox name={item.name}
                                                                checked={item?.isChecked || false}
                                                                // checked ={checked.includes(item)}
                                                                onChange={handleBoxChange} />
                                                            {/* <Checkbox name={ item.name} checked={item?.isChecked|| false }  onChange={handleBoxChange} /> */}
                                                            {/* <Checkbox name={ item.name} checked={item?.isChecked|| false } onChange={ handleBoxChange }  /> */}
                                                        </TableCell>
                                                        <TableCell className={classes.TableCell}>

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
                                                            {niceBytes(item.size)}
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
                                                                    deleteLoading={deleteLoading}
                                                                    deleteSuccess={deleteSuccess}
                                                                    copyLoading={copyLoading}
                                                                    copySuccess={copySuccess}

                                                                />

                                                                {/* </Button> */}
                                                            </Grid>

                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </>
                                    )}
                                </>
                                   :
                                   mode === 'newest'
                                   ?
                                   <>
                                                {itemChildrenSuccess && (
                                                    <>
                                                        {userData && userData.sort((a:any,b:any) => Date.parse(new Date(a.lastModifiedDateTime  )) - Date.parse(new Date(b.lastModifiedDateTime   ))).reverse().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {

                                                            let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");

                                                            return (
                                                                <TableRow
                                                                    key={item.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell className={classes.theadCell}
                                                                        onClick={onClickShow}
                                                                    >
                                                                        <Checkbox name={item.name}
                                                                            checked={item?.isChecked || false}
                                                                            // checked ={checked.includes(item)}
                                                                            onChange={handleBoxChange} />
                                                                        {/* <Checkbox name={ item.name} checked={item?.isChecked|| false }  onChange={handleBoxChange} /> */}
                                                                        {/* <Checkbox name={ item.name} checked={item?.isChecked|| false } onChange={ handleBoxChange }  /> */}
                                                                    </TableCell>
                                                                    <TableCell className={classes.TableCell}>

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
                                                                        {niceBytes(item.size)}
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
                                                                                deleteLoading={deleteLoading}
                                                                                deleteSuccess={deleteSuccess}
                                                                                copyLoading={copyLoading}
                                                                                copySuccess={copySuccess}

                                                                            />

                                                                            {/* </Button> */}
                                                                        </Grid>

                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        })}
                                                    </>
                                                )}
                                            </>
                                   
                                   :
                                   <> 
                                      {itemChildrenSuccess && (
                                    <>
                                        {ItemChildren?.response &&
                                            ItemChildren?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, index: any) => {
                                               
                                                let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");
                                                
                                                return (
                                                    <TableRow
                                                        key={item.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell className={classes.theadCell}
                                                            onClick={onClickShow}
                                                        >
                                                            <Checkbox
                                                                name={item.name}
                                                                checked={item?.isChecked || false}
                                                                // checked ={checked.includes(item)}
                                                                onChange={handleBoxChange1}
                                                            />
                                                        </TableCell>
                                                        <TableCell className={classes.TableCell}>
                                                          
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
                                                            {niceBytes(item.size)}
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
                                                                    deleteLoading={deleteLoading}
                                                                    deleteSuccess={deleteSuccess}
                                                                    copyLoading={copyLoading}
                                                                    copySuccess={copySuccess}
                                                                //  open={openOn}
                                                                //  onClose={handleClose}
                                                                //  anchorEl={anchorEl}
                                                                />

                                                                {/* </Button> */}
                                                            </Grid>
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                    </>
                                )}
                                   </>


                                }
                                

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
