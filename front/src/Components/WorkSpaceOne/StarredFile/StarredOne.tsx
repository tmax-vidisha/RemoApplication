import React from 'react';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link } from '@mui/material';
import moment from "moment";

// interface IFolderProps {
//     data: any,
//     error: any,
//     isLoading: any,
// }

const StarredOne= () => {
  

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

    return (
        <>
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
        </>
    );
};

export default StarredOne;