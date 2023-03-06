import React from 'react';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link, TablePagination, CircularProgress, FormControl, MenuItem } from '@mui/material';
import moment from "moment";
import starred from '../../../Assets/Images/StarredB.svg';
import { useStyles } from './Style';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

interface IFolderProps {
    data: any,
    isSuccess: any,
    isLoading: any,
}

// const StarredOne = () => {
    const StarredOne: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const {data,isSuccess,isLoading} =props
    console.log(data?.response ,'Starred')
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
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
   
function niceBytes(x:any){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

    return (
        <Grid className={classes.bigPart}>
            <Grid className={classes.divText}>
                Starred
            </Grid>
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
                                // value={age}
                                // onChange={handleChange}
                                label="Age"
                                style={{ width: "100px" }}
                            >
                                <MenuItem value={10} ><span className={classes.shortBy}>Newest</span></MenuItem>
                                <MenuItem value={20} ><span className={classes.shortBy}>Oldest</span></MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid style={{ marginTop: "20px", marginRight: "20px" }}>
                        {/* {
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
                        </Dialog> */}
                        <button>
                            <GridViewIcon/>
                        </button>
                        <button style={{ marginLeft: "15px" }} >
                            <ListIcon/>
                        </button>
                    </Grid>
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
                        {isLoading && <CircularProgress/>}
                        {isSuccess && (
                            <>
                            { data?.response && data?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:any) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" className={classes.TableCell}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" className={classes.TableCell}>{row.lastModifiedBy.user.displayName}</TableCell>
                                    <TableCell align="right" className={classes.TableCell}>{moment(row.lastModifiedDateTime).format("DD-MMM-YYYY")}</TableCell>
                                    <TableCell align="right" className={classes.TableCell}>{niceBytes(row.size)}</TableCell>
                                    {/* <TableCell align="right">{row.Actions}</TableCell> */}
                                </TableRow>
                            ))} 
                            </>
                            )}
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

export default StarredOne;