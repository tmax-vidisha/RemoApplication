import React from 'react';
import WPOneDrive from './../Workspace/OneDrive/index';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { useStyles } from './Styles';
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import { Paper } from '@mui/material';
import useCustom from '../../hooks/useCustom';
import { useGetAllRootItemsOneDriveQuery } from '../../services/graph';
import moment from "moment";
const MyFilesPage = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const {token} = useCustom();
    //@ts-ignore
    const { data, error, isLoading } = useGetAllRootItemsOneDriveQuery(token);
    console.log(data?.response)
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

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
        <Grid>
            <Grid className={classes.divFile}>
                My Files
            </Grid>
            <Grid className={classes.bigPart}>
                <Grid className={classes.myFile}>
                    <Grid>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-standard-label"><span>Sort by</span> Newest</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid style={{ marginTop: "20px", marginRight: "20px" }}>
                        <GridViewOutlinedIcon />
                        <span style={{ marginLeft: "15px" }}><FormatListBulletedOutlinedIcon /> </span>
                    </Grid>

                </Grid>
                <Stack>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Last Modified By</TableCell>
                                    <TableCell align="right">Last Modified Date</TableCell>
                                    <TableCell align="right">File Size</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* <TableBody>
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
                            </TableBody> */}
                            <TableBody>
                                {data?.response &&
                                    data?.response.map((item: any, index: any) => {
                                        //   const { fields = {} } = item;
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

                                        return (
                                            <TableRow
                                                key={item.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.name}
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
                                            </TableRow>
                                        )
                                    })}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default MyFilesPage;