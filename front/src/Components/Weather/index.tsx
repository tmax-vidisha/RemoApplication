/* eslint-disable */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
import useCustom from "../../hooks/useCustom";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import { Grid, Paper, Typography } from "@mui/material";
// import useCustom from "../../hooks/useCustom";
import { useGetAllPrayersQuery,useGetAllCountryCodesQuery } from "../../services/graph";
import { useStyles } from "./Styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
var moment = require("moment-timezone");

export default function Weather() {
  var classes = useStyles();
    const {token} = useCustom();
  //  console.log(token,'sdsfggs')
  
  const [USD, setUSD] = React.useState('');
  const [age, setAge] = React.useState('');
  //@ts-ignore
  const {data,error ,isLoading }  = useGetAllCountryCodesQuery(token);
  // const {data,error ,isLoading }  = useGetAllPrayersQuery();
  console.log(data?.response,'rgrthrjtqaqqqqqqqq')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
};
const  emp =[ {
  "job_id": 1,
  "job_name": "Engineer"
},
{
  "job_id": 2,
  "job_name": "Scientist"
},
{
  "job_id": 3,
  "job_name": "Teacher"
}]

  return (
    <Paper elevation={0}>
      <List className={classes.root}>
        <ListItem className={classes.weather}>
          <Typography component="h4">Dubai, UAE</Typography>
          <Typography component="h1">32.01C</Typography>

          <Typography
            variant="caption"

            component="div"
            sx={{ opacity: 0.6 }}
          >
            Sunny
          </Typography>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.weather}>
          {/* <Typography component="h4">Next Prayer</Typography>
          <Typography component="h1">16:45</Typography>

          <Typography
            variant="caption"

            component="div"
            sx={{ opacity: 0.6 }}
          >
            Asher
           
          </Typography> */}
        
          
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.currency}>
          <Typography component="h4">1.00 AED is</Typography>
          <Typography component="h1"> 0.27 </Typography>

          <Typography
            variant="caption"

            component="div"
            sx={{ opacity: 0.6 }}
          >
            {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
              <Select
               labelId="demo-simple-select-standard-label"
               id="demo-simple-select-standard"
                value={USD}
                onChange={handleChange}
                autoWidth
                label="USD"
              >

                <MenuItem value={10}>USD </MenuItem>
                <MenuItem value={21}>EURO</MenuItem>
                <MenuItem value={22}>YARN</MenuItem>
                <MenuItem value={22}>YEN</MenuItem>
                <MenuItem value={22}>AED</MenuItem>
              </Select>
            </FormControl> */}
            <Grid>
                    {/* <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs}
                            getChildHandler={breadcrumbClickHandler} /> */}
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel id="demo-simple-select-standard-label"><span>Sort by</span> Newest</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            {/* <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                            {/* {
                        emp.map((brand) => {
                            return <MenuItem value={brand.job_id} key={brand.job_id}>{brand.job_name}</MenuItem>
                        })
                    } */}
                     { data?.response  &&
                        data?.response.map((brand:any) => {
                          const {fields = {}} = brand
                            return <MenuItem value={fields?.id} key={ fields?.id}>{fields?.Title}</MenuItem>
                        })
                    }
                        </Select>
                    </FormControl>
                </Grid>
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
}
