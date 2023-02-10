import React from 'react';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper,TablePagination, Link } from '@mui/material';
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
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt=""/>),
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt=""/>),
    createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt=""/>),

];
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
        <Grid>
            <Grid className={classes.divText}>
               Document Library
            </Grid>
            <Grid style={{ marginTop: "30px", marginRight: "15px" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.theadCell}>Name</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified By</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified Date</TableCell>
                                <TableCell className={classes.theadCell}>File Size</TableCell>
                                <TableCell className={classes.theadCell}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className={classes.TableCell}>
                                    {row.name}
                                </TableCell>
                                <TableCell className={classes.TableCell}>{row.lastModifiedBy}</TableCell>
                                <TableCell className={classes.TableCell}>{row.ModifiedDate}</TableCell>
                                <TableCell className={classes.TableCell}>{row.fileSize}</TableCell>
                                <TableCell className={classes.TableCell}>{row.Actions}</TableCell>
                            </TableRow>
                        ))} 
                           

                        </TableBody>

                    </Table>

                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
};



export default Documents;