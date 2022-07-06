/* eslint-disable */
import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useStyles } from '../SP/Styles';
import { Grid, Link, Typography } from '@mui/material';
import FileIcon from '../../../../Assets/Images/folder.png';
import { AccessTime24Filled } from "@fluentui/react-icons";
import { useGetDrivesQuery,useCreateDriveMutation } from '../../../../services/APIs';
// import { getFileTypeIconProps, } from '@fluentui/react-file-type-icons';
// import { Icon } from '@fluentui/react/lib/Icon';

var moment = require('moment-timezone');

interface IFolderProps {
    drives: any;
     onClick: any;
}

const options = ['Download', 'Rename', 'Share'];
const ITEM_HEIGHT = 48;
const Drives: React.FC<IFolderProps> = (props: IFolderProps) => {
//  const Drives: React.FC = () => {
    const [name, setName] = useState('');
    // const { data, error, isLoading } =   useGetDrivesQuery('');
    // console.log(data,'yu7u7i7i8oi8o')
    // const [sendItem] = useCreateDriveMutation();
     const { drives,onClick  } = props;


    // DriveMenu Option . Share,  Rename
    // Download only for files
    const classes = useStyles();


    console.log('folder run');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
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
    
    const driveClickHandler = async (
        driveId: string,
    ) => {
        console.log(driveId)
        // await sendItem(sitesId)
        function sendId(){
            if (driveId) {
        
        
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ driveId })
              };
              fetch('http://localhost:4000/drive', requestOptions)
                .then(response => response.json())
        
            }
          }
          sendId();
    }


    return (
    //     <>
    //     <TableContainer component={Paper} elevation={0}>
    //         <Table size="small" sx={{ borderCollapse: 'separate' }}>

    //             <TableBody>
    //                 { data && data
    //                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //                     .map((drive: any,index:any) => {
    //                         var createdDate = moment(drive.lastModifiedDateTime).fromNow();

    //                         // let IconFileType;
    //                         // if (drive.size !== 0) {
    //                         //     let fileName = drive.name;
    //                         //     let fileExt = fileName.substr(
    //                         //         fileName.lastIndexOf('.') + 1
    //                         //     );

    //                         //     if (fileExt === 'docx') {
    //                         //         IconFileType = (
    //                         //             <Icon
    //                         //                 {...getFileTypeIconProps({
    //                         //                     extension: 'docx',
    //                         //                     imageFileType: 'png',
    //                         //                 })}
    //                         //             />
    //                         //         );
    //                         //     } else if (fileExt === 'pdf') {
    //                         //         IconFileType = (
    //                         //             <Icon
    //                         //                 {...getFileTypeIconProps({
    //                         //                     extension: 'docx',
    //                         //                     imageFileType: 'png',
    //                         //                 })}
    //                         //             />
    //                         //         );
    //                         //     } else if (fileExt === 'txt') {
    //                         //         IconFileType = (
    //                         //             <Icon
    //                         //                 {...getFileTypeIconProps({
    //                         //                     extension: 'txt',
    //                         //                     imageFileType: 'png',
    //                         //                 })}
    //                         //             />
    //                         //         );
    //                         //     }

    //                         // } else {
    //                         //     IconFileType = (<img
    //                         //         src={FileIcon}
    //                         //         className={classes.folderSize}
    //                         //         alt="folder">

    //                         //     </img>);
    //                         // }

    //                         return (
    //                             <>
    //                                 <TableRow
    //                                     hover={true}
    //                                     key={drive.id}
    //                                     className={classes.tableRow}
    //                                     sx={{
    //                                         borderCollapse: 'separate',
    //                                         '&:last-child td, &:last-child th': { border: 0 },
    //                                     }}
    //                                 >
    //                                      {/* <TableCell style={{ width: "400px" }}
    //                                         variant="body"
    //                                         className={classes.tableCell}
    //                                         padding="normal"
    //                                     > */}
    //                                         {/* <div className={classes.folderDesign}>
    //                                                         {IconFileType}
    //                                                     </div> */}

    //                                         {/* <Typography key={drive.index}>
    //                                              {drive.id}
    //                                         </Typography> */}

    //                                     {/* </TableCell> */}
    //                                     <TableCell style={{ width: "400px" }}
    //                                         variant="body"
    //                                         className={classes.tableCell}
    //                                         padding="normal"
    //                                     >
    //                                         {/* <div className={classes.folderDesign}>
    //                                                         {IconFileType}
    //                                                     </div> */}
    //                                         {/* <div key={drive.index}> */}
    //                                         <Link
                                                
    //                                             onClick={() => onClick(drive.id)}>
    //                                             <img
    //                                                 src={FileIcon}
    //                                                 className={classes.folderSize}
    //                                                 alt="folder">
    //                                             </img>
    //                                             {drive.name}
    //                                         </Link>
    //                                         {/* </div> */}
    //                                     </TableCell>

    //                                     <TableCell
    //                                         variant="body"
    //                                         className={classes.tableCell}
    //                                         padding="normal"
    //                                     >
    //                                         <Typography variant="caption" component="p">
    //                                             {createdDate}
    //                                         </Typography>
    //                                     </TableCell>
    //                                     <TableCell
    //                                         variant="body"
    //                                         className={classes.tableCell}
    //                                         padding="normal"
    //                                     >
    //                                         <Typography variant="caption" component="p">
    //                                             {drive.createdBy.user.displayName}
    //                                         </Typography>
    //                                     </TableCell>
    //                                 </TableRow>
    //                             </>
    //                         );
    //                     })}
    //             </TableBody>
    //         </Table>
    //     </TableContainer>
    // </>
    <>
        {/* {isLoading ? (
      <p>Loading...</p>
    ) : data ? ( */}
     
    <>
    {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
    <TableContainer component={Paper} elevation={0}>
        <Table size="small" sx={{ borderCollapse: 'separate' }}>
          
          <TableBody>
                     { drives && drives
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((drive: any,index:any) => {
                            var createdDate = moment(drive.lastModifiedDateTime).fromNow();

                            // let IconFileType;
                            // if (drive.size !== 0) {
                            //     let fileName = drive.name;
                            //     let fileExt = fileName.substr(
                            //         fileName.lastIndexOf('.') + 1
                            //     );

                            //     if (fileExt === 'docx') {
                            //         IconFileType = (
                            //             <Icon
                            //                 {...getFileTypeIconProps({
                            //                     extension: 'docx',
                            //                     imageFileType: 'png',
                            //                 })}
                            //             />
                            //         );
                            //     } else if (fileExt === 'pdf') {
                            //         IconFileType = (
                            //             <Icon
                            //                 {...getFileTypeIconProps({
                            //                     extension: 'docx',
                            //                     imageFileType: 'png',
                            //                 })}
                            //             />
                            //         );
                            //     } else if (fileExt === 'txt') {
                            //         IconFileType = (
                            //             <Icon
                            //                 {...getFileTypeIconProps({
                            //                     extension: 'txt',
                            //                     imageFileType: 'png',
                            //                 })}
                            //             />
                            //         );
                            //     }

                            // } else {
                            //     IconFileType = (<img
                            //         src={FileIcon}
                            //         className={classes.folderSize}
                            //         alt="folder">

                            //     </img>);
                            // }

                            return (
                                <>
                                    <TableRow
                                        hover={true}
                                        key={drive.id}
                                        className={classes.tableRow}
                                        sx={{
                                            borderCollapse: 'separate',
                                            '&:last-child td, &:last-child th': { border: 0 },
                                        }}
                                    >
                                         {/* <TableCell style={{ width: "400px" }}
                                            variant="body"
                                            className={classes.tableCell}
                                            padding="normal"
                                        > */}
                                            {/* <div className={classes.folderDesign}>
                                                            {IconFileType}
                                                        </div> */}

                                            {/* <Typography key={drive.index}>
                                                 {drive.id}
                                            </Typography> */}

                                        {/* </TableCell> */}
                                        <TableCell style={{ width: "400px" }}
                                            variant="body"
                                            className={classes.tableCell}
                                            padding="normal"
                                        >
                                            {/* <div className={classes.folderDesign}>
                                                            {IconFileType}
                                                        </div> */}
                                            {/* <div key={drive.index}> */}
                                            <Link
                                                
                                                 onClick={() => onClick(drive.id)}
                                                >
                                                <img
                                                    src={FileIcon}
                                                    className={classes.folderSize}
                                                    alt="folder">
                                                </img>
                                                {drive.name}
                                            </Link>
                                            {/* </div> */}
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
                                                {drive.createdBy.user.displayName}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </>
                            );
                        })}
                </TableBody>
           
        </Table>
    </TableContainer>
</>


    {/* ) : error ? (
      <p>ERROR</p>
    ) : null} */}
       </>
    
    );
}
export default Drives