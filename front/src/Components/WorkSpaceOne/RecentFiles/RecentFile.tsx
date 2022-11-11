import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link, DialogContent, Typography, Box, Button, DialogActions, Menu, MenuItem, Dialog} from '@mui/material';
import React,{useState} from 'react'
import moment from "moment";
import { useStyles } from './Styles';
import actions from '../../../Assets/Images/action-dots.svg';
import linkIcon from '../../../Assets/Images/link.svg';
import openIcon from '../../../Assets/Images/open.svg';
import downloadIcon from '../../../Assets/Images/DOWLOAD.svg';
import deleteIcon from '../../../Assets/Images/delete.svg';
import deleteBlue from '../../../Assets/Images/delete-blue.svg';
import success from '../../../Assets/Images/success.svg';
import copySuccess from  '../../../Assets/Images/copy-success.svg'
import Fade from '@mui/material/Fade';


interface SimpleDialogProps {
    id: any,
    name: any,
    webUrl:any
    // folder: any,
    // onOpenFolder: (id: string, name: string, folder: any) => void;
    onCopy?: (id: string, name: string) => void;
    copyResponse:any;
    onClick?: (id: string, name: string) => void;
    downloadUrl:any,
     onDelete?: (id: string, name: string) => void;
     deleteResponse: any;
    // open: boolean;
    // // selectedValue: string;
    //  onClose: () => void;
    //  anchorEl:any
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles();
    // const { onClose, selectedValue, open } = props;

    const { id, name, webUrl, onCopy,copyResponse ,onClick, downloadUrl, onDelete,  deleteResponse
        // folder, 
        
        //  onOpenFolder, 
       
        
       
    } = props
    console.log(id, name, webUrl,'tytrudtutsswwww'
        // folder,
        )
     console.log(deleteResponse,'tuuu56ue6ue6u6eu6u')
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
        onDelete?.(id, name)
        setOpenOne(false);
        setOpenTwo(true)
        // if (deleteResponse?.success === true) {
        //     setOpenTwo(true)
        // }
    }
    const handleFolderOpen = () => {
        // onOpenFolder(id, name, 
        //     // folder
        //     )
        window.open(webUrl)
    }
    


    const [openTwo, setOpenTwo] = React.useState(false);
    
    const handleClickTwo = (popup: any) => {
        setOpenTwo(true);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };
    const handleDownload = ()=>{
        
        onClick?.(id,name)
        window.open(downloadUrl?.response)
    }
    const [CopySuccess,setCopySuccess] =useState<any>('')
   
    const handleCopy = async() =>{
       onCopy?.(id,name)
       navigator.clipboard.writeText(copyResponse?.response)
    try {
        await navigator.clipboard.writeText(copyResponse?.response);
         setCopySuccess('Copied!');
         console.log('Copied')
      } catch (err) {
        setCopySuccess('Failed to copy!');
        // console.log('Failed to copy!')
      }
    //   setOpenOneCopy(true);
    }
    const handleOpenOneCopy = () => {
        setOpenOneCopy(true);
    };

    const handleCloseOneCopy = () => {
        setOpenOneCopy(true);
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
                    <div onClick ={handleDownload}className={classes.items}>
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
                            <Button autoFocus  style={{ backgroundColor: "#1baab5", color: "white" }}>
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
    onCopy?:(id: string, name: string) => void;
    copyResponse:any
    onClick?:(id: string, name: string) => void;
    downloadUrl:any,
    onDelete?: (id: string, name: string) => void;
    deleteResponse: any,
}
const RecentFile: React.FC<IFolderProps> = (props: IFolderProps) =>{
    const {data,isLoading,error,onCopy,copyResponse,onClick,downloadUrl,onDelete, deleteResponse} = props
//const RecentFile = () => {
    // const { token } = useCustom();
    // const { data, error, isLoading } = useGetAllRecentItemsQuery(token);
    // console.log(data,'rrreecceebb')

    const [itemId, setItemId] = useState<string>('');
    const [itemName, setItemName] = useState<string>('');
    const [itemfolder, setItemFolder] = useState<any>();
    const [downUrl,setDownUrl] =  useState<string>('');
    const de = (id: any, name: any, folder: any,
        // download:any
        ) => {
        //  console.log(download,'ygrerthtrhy')
        //    console.log(id,name)
        // console.log(folder)
        setItemId(id)
        setItemName(name)
        setItemFolder(folder)
        // if (folder === undefined) {
        //     setDownUrl(download)
        // }
    }
  return (
    <Grid style={{marginTop:"30px", marginRight:"15px"}}>
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
                       {data?.response &&
                            data?.response.map((item: any, index: any) => {
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
                                               onClick={() => de(item.id, item.name, item.webUrl
                                               )}
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
                                                />
                                                {/* dgrgrgrhgrhgr */}
                                             </Grid>
                                        
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                    </TableBody>                  

        </Table>

    </TableContainer>
</Grid>
  )
}

export default RecentFile