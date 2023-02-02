import React from 'react';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link, TablePagination } from '@mui/material';
import moment from "moment";
import starred from '../../../Assets/Images/starred.svg';
import { useStyles } from './Style';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// interface IFolderProps {
//     data: any,
//     error: any,
//     isLoading: any,
// }

const StarredOne = () => {

    const classes = useStyles();

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
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),
        createData('Dream designs', "Jahanara", "August 30 2022", "2 kb", <img src={starred} alt="" />),

    ];

    const [page, setPage] = React.useState(0);
    const [rowPage, setRowPage] = React.useState(5);

    function handleChangePage(newPage: any) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event: any) {
        setRowPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    // const columns: GridColDef[] = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'Name', headerName: 'Name', width: 130 },
    //     { field: 'Last Modified By', headerName: 'Last Modified By', type: 'text', width: 130 },
    //     { field: 'Last Modified Date', headerName: 'Last Modified Date', type: 'date', width: 130 },
    //     { field: 'File Size', headerName: 'File Size', type: 'text', width: 130 },


    //   ];

    //   const rows = [
    //     { id: 1, Name: 'book.xls', 'Last Modified By': 'Jahanara khatun', 'Last Modified Date': '1/2/2023','Size': '20mb', },
    //     { id: 2, Name: 'book.xls', 'Last Modified By': 'Jahanara khatun', 'Last Modified Date': '1/2/2023','Size': '20mb', },
    //     { id: 3, Name: 'book.xls', 'Last Modified By': 'Jahanara khatun', 'Last Modified Date': '1/2/2023','Size': '20mb', },
    //     { id: 4, Name: 'book.xls', 'Last Modified By': 'Jahanara khatun', 'Last Modified Date': '1/2/2023','Size': '20mb', },
    //     { id: 5, Name: 'book.xls', 'Last Modified By': 'Jahanara khatun', 'Last Modified Date': '1/2/2023','Size': '20mb', },
    //     { id: 6, Name: 'book.xls', 'Last Modified By': 'Jahanara khatun', 'Last Modified Date': '1/2/2023','Size': '20mb', },

    //   ];

    return (
        <Grid>
            <Grid className={classes.divText}>
                Starred
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
                            {rows.slice(page * rowPage, page * rowPage + rowPage).map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                {/* <DataGrid
                    rows={rows}
                    columns={columns}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    checkboxSelection
                    pageSize={5}
                    rowsPerPageOptions={[2, 5, 7]}
                /> */}
            </Grid>
        </Grid>
    );
};

export default StarredOne;