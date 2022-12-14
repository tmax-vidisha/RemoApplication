/* eslint-disable */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import ImUSDIcon from "@mui/icons-material/ImUSD";
// import WorkIcon from "@mui/icons-material/Work";
import useCustom from "../../hooks/useCustom";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import { Grid, Paper, Typography } from "@mui/material";
// import useCustom from "../../hooks/useCustom";
// import { useGetAllPrayersQuery,useGetAllCountryCodesQuery } from "../../services/graph";
import { useStyles } from "./Styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
var moment = require("moment-timezone");

interface IFolderProps {
  // recent: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
  data:any, 
  error:any,
  isLoading:any,
  onClick?: ( name: string) => void;
    dataItem:any,
    dataItemError:any,
    dataItemIsLoading:any
}

// export default function Weather() {
  const Weather: React.FC<IFolderProps> = (props: IFolderProps) => {
  var classes = useStyles();
    // const {token} = useCustom();
  //  console.log(token,'sdsfggs')
  
  const [USD, setUSD] = React.useState('USD');
  //@ts-ignore
  // const {data,error ,isLoading }  = useGetAllCountryCodesQuery(token);
  //  const {data:prayerData, error:prayerError, isLoading:prayerLoading }  = useGetAllPrayersQuery();
  // console.log(data?.response,'rgrthrjtqaqqqqqqqq')
  const { data, error, isLoading,onClick,dataItem,dataItemError,dataItemIsLoading } =props;
  console.log(data?.response,'rgrthrjtqaqqqqqqqq')
  console.log(dataItem?.response?.result,"Amount")
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value)
    setUSD(event.target.value);
};
const toggleDropdown = () => {
  setUSD('!USD');
};
// const [isDisplayed, setDisplayed] = useState(false);
const handleTitle = (title:any) =>{
  // console.log(title,'ttttt')
  onClick?.(title)
}
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
        <Typography component="h4">Next Prayer</Typography>

          <Typography component="h1">16:45</Typography>

          <Typography
            variant="caption"

            component="div"
            sx={{ opacity: 0.6 }}
          >
            Asher
           
          </Typography> 
        
          
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.currency}>
          <Typography component="h4">1.00 AED is</Typography>
          <Typography component="h1">{dataItem?.response?.result}</Typography>

          <Typography
            variant="caption"

            component="div"
            sx={{ opacity: 0.6 }}
          >          
            <Grid>
                    {/* <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs}
                            getChildHandler={breadcrumbClickHandler} /> */}
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 80, height:100 }} >
                        {/* <InputLabel id="demo-simple-select-standard-label"><span>usd</span> </InputLabel> */}
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={USD}
                            onChange={handleChange}
                            MenuProps={{ PaperProps: { sx: { maxHeight: 90 } } }}
                            label="USD"
                            style={{width:"80px", }}
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
                            return <MenuItem style={{width:"50px", fontSize:"10px"}} value={fields?.id} key={ fields?.id} onClick={()=>handleTitle(fields?.Title)}>{fields?.Title}</MenuItem>
                        })
                    }
                        </Select>
                    </FormControl>
                </Grid>
          </Typography>
        </ListItem>
      </List>
    </Paper>
    // <> dgdgerrthtrhrt</>
   
  );
}
export default Weather;