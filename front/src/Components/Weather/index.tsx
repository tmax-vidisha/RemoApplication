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
import { Paper, Typography } from "@mui/material";
import { useStyles } from "./Styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function Weather() {
  var classes = useStyles();
  //   const {token} = useCustom();
  //  console.log(token,'sdsfggs')

  const [USD, setUSD] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setUSD(event.target.value);
  };

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
            {/* <p>ythtyhty</p> */}
          </Typography>
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
            <FormControl sx={{ m: 1, minWidth: 80 }}>
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
            </FormControl>
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
}
