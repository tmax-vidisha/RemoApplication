import React from 'react';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link } from '@mui/material';
import moment from "moment";
import starred from '../../../Assets/Images/starred.svg';
import { useStyles } from './Styles';
// interface IFolderProps {
//     data: any,
//     error: any,
//     isLoading: any,
// }

const Documents= () => {
const classes=useStyles();

   function createData(
    name: string,
    lastModifiedBy: string,
    ModifiedDate: string,
    fileSize: string,
    Actions: any,
) {
    return { name, lastModifiedBy, ModifiedDate, fileSize, Actions };
}

const rows = [
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt=""/>),
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb",<img src={starred} alt=""/>),
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt=""/>),
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt=""/>),

];

    return (
        <Grid>
            <Grid className={classes.divText}>
               Document Library
            </Grid>
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
                                <TableCell align="right">{row.Actions}</TableCell>
                            </TableRow>
                        ))} 
                           

                        </TableBody>

                    </Table>

                </TableContainer>
            </Grid>
        </Grid>
    );
};



export default Documents;