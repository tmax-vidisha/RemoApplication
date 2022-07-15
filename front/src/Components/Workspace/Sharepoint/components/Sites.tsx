/* eslint-disable */
 import * as React from 'react';
import { Fragment, useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useStyles } from '../SP/Styles';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../../../index";
import { Link, TableFooter, Typography } from '@mui/material';
import FileIcon from '../../../../Assets/Images/folder.png';
//import { getFileTypeIconProps, initializeFileTypeIcons, } from '@fluentui/react-file-type-icons';
//import { Icon } from '@fluentui/react/lib/Icon';
// import { useState } from 'react';
import { useCreatesubSiteMutation,useGetAllsubSitesQuery } from '../../../../services/APIs';
import TableHeader from './TableHeader';
import { useGetAllSubSitesQuery } from '../../../../services/APIs';
var moment = require('moment-timezone');
//initializeFileTypeIcons(undefined);

interface IFolderProps {
    // sites: any;
    onClick: any;
    // subSites:any;
}

const options = ['Download', 'Rename', 'Share'];
const ITEM_HEIGHT = 48;

const Sites: React.FC<IFolderProps> = (props: IFolderProps) => {
//  const Sites: React.FC = () => {

    const [name, setName] = useState("");
    const [sendItem] = useCreatesubSiteMutation();
    const { onClick, 
        // subSites 
    } = props;
    const pca = new PublicClientApplication(configuration);
    const accounts = pca.getAllAccounts();
    const [token, setToken] = useState<string>();
    useEffect(() => {
        async function getAccessToken() {
          if (accounts.length > 0) {
            const request = {
              scopes: ['user.read'],
              account: accounts[0]
            }
            const accessToken = await pca.acquireTokenSilent(request).then((response) => {
             
              // updateToken(response.accessToken);
               setToken(response.accessToken)
              // console.log(token,'uuuuuu')
            }).catch(error => {
              // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
              console.log(error);
              return null;
            });
    
    
          }
    
          return null;
        }
        getAccessToken();
        
         
        
      }, [])



    const { data, error, isLoading } =   useGetAllsubSitesQuery(token)
    console.log(data,'tytytyt')

    const classes = useStyles();

    console.log('folder run')
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
    
   const sitesClickHandler = async (
        sitesId: string,
    ) => {
        // const { value = [] } = await GetSubSitesofSites(app.authProvider!, sitesId);
        // console.log(value);
        // await getRootFolderAction(id);
  
        console.log('sitesClickHandler', sitesId);
        // await sendItem(sitesId)
       
              // function sendId(){
              //     const requestOptions = {
              //         method: 'POST',
              //         headers: { 
              //             'Content-Type': 'application/json',
        
              //         },
              //         body: JSON.stringify(sitesId)
              //     };
              //     fetch('http://localhost:4000/subsite', requestOptions)
              //         .then(response => response.json())
              // }
              // sendId();
            //   return fetch('http://localhost:4000/subsite', {
            //     mode: 'no-cors',
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(sitesId)
            //   });
            
            function sendNavigationId(){
                      if (sitesId) {
                  
                  
                        const requestOptions = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ sitesId })
                        };
                        fetch('http://localhost:4000/subsite', requestOptions)
                          .then(response => response.json())
                  
                      }
                    }
                    sendNavigationId()
    };


    return (
        // <>
        //     <TableContainer component={Paper} elevation={0}>
        //         <Table size="small" sx={{ borderCollapse: 'separate' }}>

        //             <TableBody>
        //                 {data && data
        //                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        //                     .map((site: any, index: number) => {
        //                         var createdDate = moment(site.lastModifiedDateTime).fromNow();

        //                         let IconFileType;
        //                         // if (site.size !== 0) {
        //                         //     let fileName = site.name;
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
        //                                     key={site.id}
        //                                     className={classes.tableRow}
        //                                     sx={{
        //                                         borderCollapse: 'separate',
        //                                         '&:last-child td, &:last-child th': { border: 0 },
        //                                     }}
        //                                 >
        //                                     <TableCell style={{ width: "400px" }}
        //                                         variant="body"
        //                                         className={classes.tableCell}
        //                                         padding="normal"
        //                                     >
        //                                         <Link href="#" onClick={() => onClick(site.id)}>
        //                                             <img
        //                                                 src={FileIcon}
        //                                                 className={classes.folderSize}
        //                                                 alt="folder">
        //                                             </img>
        //                                             {site.name}
        //                                         </Link>

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

        //                                         </Typography>
        //                                     </TableCell>
        //                                 </TableRow>
        //                             </>
        //                         );
        //                     })}
        //             </TableBody>

        //         </Table>
        //     </TableContainer>
        // {/* gdyrty6uy6u67u76udgdf */}

        // </>
        <>
        {/* <>ttttttttttt</> */}
          {/* {isLoading ? (
      <p>Loading...</p>
    ) : 
    
    data ? ( */}
    {/* //   <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
      {/* <>
            <TableContainer component={Paper} elevation={0}>
                <Table size="small" sx={{ borderCollapse: 'separate' }}>

                    <TableBody>
                        {subSites && subSites
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((site: any, index: number) => {
                                var createdDate = moment(site.lastModifiedDateTime).fromNow();

                                let IconFileType;
                                // if (site.size !== 0) {
                                //     let fileName = site.name;
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
                                            key={site.id}
                                            className={classes.tableRow}
                                            sx={{
                                                borderCollapse: 'separate',
                                                '&:last-child td, &:last-child th': { border: 0 },
                                            }}
                                        >
                                            <TableCell style={{ width: "400px" }}
                                                variant="body"
                                                className={classes.tableCell}
                                                padding="normal"
                                            >
                                                <Link href="#" onClick={() => onClick(site.id)}>
                                                    <img
                                                        src={FileIcon}
                                                        className={classes.folderSize}
                                                        alt="folder">
                                                    </img>
                                                    {site.name}
                                                </Link>

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

                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                );
                            })}
                    </TableBody>

                </Table>
            </TableContainer>
       

        </> */}
    {/* ) : error ? (
      <p>ERROR</p>
    ) : null} */}

     {isLoading ? (
      <p>Loading...</p>
    ) : data ? (
    //   <pre>{JSON.stringify(data, undefined, 2)}</pre>
    <>
    <TableContainer component={Paper} elevation={0}>
        <Table size="small" sx={{ borderCollapse: 'separate' }}>

            <TableBody>
                {data?.response
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((site: any, index: number) => {
                        var createdDate = moment(site.lastModifiedDateTime).fromNow();

                        let IconFileType;
                        // if (site.size !== 0) {
                        //     let fileName = site.name;
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
                                    className={classes.tableRow}
                                    sx={{
                                        borderCollapse: 'separate',
                                        '&:last-child td, &:last-child th': { border: 0 },
                                    }}
                                >
                                    <TableCell style={{ width: "400px" }}
                                        variant="body"
                                        className={classes.tableCell}
                                        padding="normal"
                                    >
                                        <Link href="#" onClick={() => onClick(site.id)}>
                                            <img
                                                src={FileIcon}
                                                className={classes.folderSize}
                                                alt="folder">
                                            </img>
                                            {site.name}
                                        </Link>

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

    ) : error ? (
      <p>ERROR</p>
    ) : null}

        </>
    );
};

export default Sites;
