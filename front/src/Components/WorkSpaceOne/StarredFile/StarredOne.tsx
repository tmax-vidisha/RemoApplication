//@ts-nocheck
import React,{useState} from 'react';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link, TablePagination, CircularProgress, FormControl, MenuItem, Button } from '@mui/material';
import moment from "moment";
import starred from '../../../Assets/Images/StarredB.svg';
import { useStyles } from './Style';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import starredB from '../../../Assets/Images/StarredB.svg';

interface IFolderProps {
    data: any,
    isSuccess: any,
    isLoading: any,
    onDelete?: (id: string, name: string) => void;
    deleteResponse: any;
    deleteLoading: any,
    deleteSuccess: any,
}

// const StarredOne = () => {
const StarredOne: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const { data, isSuccess, isLoading, onDelete, deleteResponse, deleteLoading, deleteSuccess } = props
    console.log(data?.response, 'Starred')
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
    const [userData, setUserdata] = useState<any>([]);
    const [sortedData, setSortedData] = useState<any>('')
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const submit = (val: any, val1: any) => {
        console.log(val,'yuig')
        setId(val)
        setName(val1)
        onDelete?.(id, name)
    }
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
                            <MenuItem value={10} 
                            onClick={() => {
                                setSortedData('newest')
                                Object.freeze(data?.response);
                                const arrCopy = [...data?.response];
                                setUserdata(arrCopy)

                            }}
                            ><span className={classes.shortBy}>Newest</span></MenuItem>
                            <MenuItem value={20} 
                              onClick={() => {
                                setSortedData('oldest')
                                Object.freeze(data?.response);
                                const arrCopy = [...data?.response];
                                setUserdata(arrCopy)
                            }}
                            ><span className={classes.shortBy}>Oldest</span></MenuItem>

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
                        <GridViewIcon />
                    </button>
                    <button style={{ marginLeft: "15px" }} >
                        <ListIcon />
                    </button>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "30px", marginRight: "15px" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified By</TableCell>
                                <TableCell className={classes.theadCell}>Last Modified Date</TableCell>
                                <TableCell className={classes.theadCell}>File Size</TableCell>
                                <TableCell className={classes.theadCell}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading && <CircularProgress />}
                            {sortedData === "newest" ? 
                                <>
                                  {isSuccess && (
                                <>
                                    {userData.sort((a: any, b: any) => Date.parse(new Date(a.lastModifiedDateTime)) - Date.parse(new Date(b.lastModifiedDateTime))).reverse().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: any) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" className={classes.TableCell}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell className={classes.TableCell}>{row.lastModifiedBy.user.displayName}</TableCell>
                                            <TableCell className={classes.TableCell}>{moment(row.lastModifiedDateTime).format("DD-MMM-YYYY")}</TableCell>
                                            <TableCell className={classes.TableCell}>{niceBytes(row.size)}</TableCell>
                                            <TableCell align="center" className={classes.TableCell}>
                                               
                                                    <img src={starredB} onClick={()=>submit(row.id,row.name)} alt="..." />
                                               
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </>
                            )}
                                </>
                            :sortedData === "oldest" ?
                               <>
                                 {isSuccess && (
                                <>
                                    {userData.sort((a: any, b: any) => Date.parse(new Date(a.lastModifiedDateTime)) - Date.parse(new Date(b.lastModifiedDateTime))).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: any) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" className={classes.TableCell}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell className={classes.TableCell}>{row.lastModifiedBy.user.displayName}</TableCell>
                                            <TableCell className={classes.TableCell}>{moment(row.lastModifiedDateTime).format("DD-MMM-YYYY")}</TableCell>
                                            <TableCell className={classes.TableCell}>{niceBytes(row.size)}</TableCell>
                                            <TableCell align="center" className={classes.TableCell}>
                                               
                                                    <img src={starredB} onClick={()=>submit(row.id,row.name)} alt="..." />
                                               
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </>
                            )}
                               </>
                            :
                               <>
                                  {isSuccess && (
                                <>
                                    {data?.response && data?.response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: any) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" className={classes.TableCell}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell className={classes.TableCell}>{row.lastModifiedBy.user.displayName}</TableCell>
                                            <TableCell className={classes.TableCell}>{moment(row.lastModifiedDateTime).format("DD-MMM-YYYY")}</TableCell>
                                            <TableCell className={classes.TableCell}>{niceBytes(row.size)}</TableCell>
                                            <TableCell align="center" className={classes.TableCell}>
                                               
                                                    <img src={starredB} onClick={()=>submit(row.id,row.name)} alt="..." />
                                               
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </>
                            )}
                               </>
                               
                            }
                            
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