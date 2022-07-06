/* eslint-disable */
import * as React from 'react';
import { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useStyles } from '../Folders/Styles';
import { Card, Container, Grid, Link, Typography } from '@mui/material';
import axios from 'axios';
import FileIcon from '../../../../Assets/Images/folder.png';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { getFileTypeIconProps, } from '@fluentui/react-file-type-icons';
// import { Icon } from '@fluentui/react/lib/Icon';
import BasicModal from '../../../UI/ModalView'
import { useGetFoldersQuery } from '../../../../services/APIs';
import SubFolder from './SubFolder';
// import { useGetFoldersQuery } from '../../../../services/APIs';
var moment = require('moment-timezone');

interface IFolderProps {
    folders: any;
     onClick: any;
     subfolder:any
     
    // onDownload?: (id: string) => void;
    onDelete?: (id: string,name:string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
}

const options = ['Download', 'Rename', 'Share'];
const ITEM_HEIGHT = 48;

const Folders: React.FC<IFolderProps> = (props: IFolderProps) => {
// const Folders: React.FC = () => {
    const [name, setName] = useState('');
    // const { folder, onClick, onDownload, onDelete, onRename } = props;
    const { onClick, folders,subfolder ,onDelete} = props;
    const classes = useStyles();
    console.log(subfolder,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
//     const { data, error, isLoading } = useGetFoldersQuery('');
//   console.log(data,'jjhgdfhgfdhfghfj')
    const [page, setPage] = React.useState(0);
    const [visible, setVisible] = React.useState(true);
    const [show, setShow] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const [data1,setData1]= useState<any>([]);
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    
    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // useEffect(()=>{
    //    async function rrrrr(){
    //        const resp =  await axios.get('http://localhost:4000/getFolder');
    //        console.log(resp,'yjytj')
    //    }
    //    rrrrr();
    // },[])
    const ClickHandler = (id: string, name: string)  =>{
        console.log(id,name,'thhthth')
    }
    const folderClickHandler = async (id: string, name: string): Promise<void> => {
        console.log(id)
        // console.log(name)
        function send(){
            if (id) {
      
      
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id})
          };
          fetch('http://localhost:4000/ItemId', requestOptions)
            .then(response => response.json())
      
        }
      //  navigate('/workspace/drives/subfolders')
      //    setVisible(!visible)
      }
      send();
      
      };
    
      if ( subfolder  === undefined ||  subfolder.length == 0) {
        // array empty or does not exist
        // console.log('uuukj')
        var subitems = <p>Home</p>
    }else{
      var subitems = <>
         <TableContainer component={Paper} elevation={0}>
        <Table size="small" sx={{ borderCollapse: 'separate' }}>
            <TableBody>
                { subfolder  && subfolder 
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((folder: any, index: number) => {
                        var createdDate = moment(folder.lastModifiedDateTime).fromNow();

                        let IconFileType;
                       
                        return (
                            <>
                                <TableRow
                                    hover={true}
                                    key={folder.id}
                                    className={classes.tableRow}
                                    sx={{
                                        borderCollapse: 'separate',
                                        '&:last-child td, &:last-child th': { border: 0 },
                                    }}
                                >
                                    <TableCell
                                        variant="body"
                                        className={classes.tableCell}
                                        padding="normal"
                                    >
                                        <Link 
                                       onClick={() => onClick(folder.id, folder.name)}
                                        >
                                            {/* {IconFileType} */}
                                            {folder.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell style={{ width: "80px" }}
                                        variant="body"
                                        className={classes.tableCell}
                                        padding="normal"
                                    >
                                        <Typography
                                            variant="caption"
                                            className="contextMenuItems"
                                            component="span"
                                        >
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls="long-menu"
                                                aria-expanded={openMenu ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClickMenu}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>

                                            <Menu
                                                elevation={0}
                                                id="long-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={openMenu}
                                                onClose={handleCloseMenu}
                                                PaperProps={{
                                                    style: {
                                                        boxShadow: '0px 0px 8px #f1f1f1',
                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                        width: '20ch',
                                                    },
                                                }}
                                            >

                                                <MenuItem onClick={() => {
                                                    handleCloseMenu();
                                                //    onDelete?.(folder.id);
                                                    // ClickHandler()
                                                }}>Delete</MenuItem>
                                                <MenuItem onClick={() => {
                                                    handleCloseMenu();
                                                    // onDownload?.(folder.id);
                                                }}>Download</MenuItem>
                                                <MenuItem onClick={() => {
                                                    handleCloseMenu();
                                                    handleOpenModal();
                                                    // onRename?.(folder.id, folder.name);
                                                }}>
                                                    Rename
                                                </MenuItem>
                                                <MenuItem onClick={() => {
                                                    handleCloseMenu();
                                                    // onRename?.(folder.id, folder.name);
                                                }}>Share</MenuItem>

                                            </Menu>
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        variant="body"
                                        className={classes.tableCell}
                                        padding="normal"
                                    >
                                        <Typography variant="caption" component="p">
                                            {createdDate}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        variant="body"
                                        className={classes.tableCell}
                                        padding="normal"
                                    >
                                        <Typography variant="caption" component="p">
                                            {/*{folder.createdBy.user.displayName}*/}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        variant="body"
                                        className={classes.tableCell}
                                        padding="normal"
                                    >
                                        <>
                                            <BasicModal value={openModal}>
                                                <input
                                                    type={'Text'}
                                                    name={'Rename'}
                                                    placeholder={'Rename'}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                {/* <button onClick={() => onRename?.(folder.id, name)}>
                                                    Rename
                                                </button> */}
                                            </BasicModal>
                                        </>
                                    </TableCell>
                                </TableRow>
                            </>
                        );
                    })}
            </TableBody>
        </Table>
    </TableContainer>
      
      
      </>
}






    //     const { value = [] } = data
    //           //  console.log(value,'uuukj')
               if ( folders  === undefined ||  folders .length == 0) {
                // array empty or does not exist
                // console.log('uuukj')
                var items = <p>Home</p>
            }else{
              var items = <>
                 <TableContainer component={Paper} elevation={0}>
                <Table size="small" sx={{ borderCollapse: 'separate' }}>
                    <TableBody>
                        { folders  &&  folders 
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((folder: any, index: number) => {
                                var createdDate = moment(folder.lastModifiedDateTime).fromNow();

                                let IconFileType;
                               
                                return (
                                    <>
                                        <TableRow
                                            hover={true}
                                            key={folder.id}
                                            className={classes.tableRow}
                                            sx={{
                                                borderCollapse: 'separate',
                                                '&:last-child td, &:last-child th': { border: 0 },
                                            }}
                                        >
                                            <TableCell
                                                variant="body"
                                                className={classes.tableCell}
                                                padding="normal"
                                            >
                                                <Link 
                                               onClick={() => 
                                                
                                                onClick(folder.id, folder.name)
                                                // setVisible(false)
                                               }
                                             
                                                >
                                                    <Link onClick={()=>setVisible(false)}>
                                                    {/* {IconFileType} */}
                                                    {folder.name}
                                                    </Link>
                                                </Link>
                                            </TableCell>
                                            <TableCell style={{ width: "80px" }}
                                                variant="body"
                                                className={classes.tableCell}
                                                padding="normal"
                                            >
                                                <Typography
                                                    variant="caption"
                                                    className="contextMenuItems"
                                                    component="span"
                                                >
                                                    <IconButton
                                                        aria-label="more"
                                                        id="long-button"
                                                        aria-controls="long-menu"
                                                        aria-expanded={openMenu ? 'true' : undefined}
                                                        aria-haspopup="true"
                                                        onClick={handleClickMenu}
                                                    >
                                                        <MoreVertIcon />
                                                    </IconButton>

                                                    <Menu
                                                        elevation={0}
                                                        id="long-menu"
                                                        MenuListProps={{
                                                            'aria-labelledby': 'long-button',
                                                        }}
                                                        anchorEl={anchorEl}
                                                        open={openMenu}
                                                        onClose={handleCloseMenu}
                                                        PaperProps={{
                                                            style: {
                                                                boxShadow: '0px 0px 8px #f1f1f1',
                                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                                width: '20ch',
                                                            },
                                                        }}
                                                    >

                                                        <MenuItem onClick={() => {
                                                            handleCloseMenu();
                                                        //    onDelete?.(folder.id,folder.name);
                                                       ClickHandler(folder.id,folder.name);
                                                        }}>Delete</MenuItem>
                                                        <MenuItem onClick={() => {
                                                            handleCloseMenu();
                                                            // onDownload?.(folder.id);
                                                        }}>Download</MenuItem>
                                                        <MenuItem onClick={() => {
                                                            handleCloseMenu();
                                                            handleOpenModal();
                                                            // onRename?.(folder.id, folder.name);
                                                        }}>
                                                            Rename
                                                        </MenuItem>
                                                        <MenuItem onClick={() => {
                                                            handleCloseMenu();
                                                            // onRename?.(folder.id, folder.name);
                                                        }}>Share</MenuItem>

                                                    </Menu>
                                                </Typography>
                                            </TableCell>
                                            <TableCell
                                                variant="body"
                                                className={classes.tableCell}
                                                padding="normal"
                                            >
                                                <Typography variant="caption" component="p">
                                                    {createdDate}
                                                </Typography>
                                            </TableCell>
                                            <TableCell
                                                variant="body"
                                                className={classes.tableCell}
                                                padding="normal"
                                            >
                                                <Typography variant="caption" component="p">
                                                    {/*{folder.createdBy.user.displayName}*/}
                                                </Typography>
                                            </TableCell>
                                            <TableCell
                                                variant="body"
                                                className={classes.tableCell}
                                                padding="normal"
                                            >
                                                <>
                                                    <BasicModal value={openModal}>
                                                        <input
                                                            type={'Text'}
                                                            name={'Rename'}
                                                            placeholder={'Rename'}
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                        {/* <button onClick={() => onRename?.(folder.id, name)}>
                                                            Rename
                                                        </button> */}
                                                    </BasicModal>
                                                </>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
              
              
              </>
    }
  
    return (
        
       <> 
       {/* {isLoading ? (
      <p>Loading...</p>
    ) : data ? ( */}
        <>
         {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
         {visible ?
         (
            <>
            {items}
            </>
            ):
            (
                <>
                 {subitems}
                </>
            )
            }
       </>
    {/* ) : error ? (
      <p>ERROR</p>
    ) : null} */}
       </>
   
    );
};

export default Folders;
