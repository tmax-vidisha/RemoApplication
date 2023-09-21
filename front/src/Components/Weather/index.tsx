/* eslint-disable */
// @ts-nocheck
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import ImUSDIcon from "@mui/icons-material/ImUSD";
import mosque from "../../Assets/Images/prayer.svg";
import useCustom from "../../hooks/useCustom";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import { Grid, Paper, Typography } from "@mui/material";
// import useCustom from "../../hooks/useCustom";
// import { useGetAllPrayersQuery,useGetAllCountryCodesQuery } from "../../services/graph";
import { useStyles } from "./Styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
var moment = require("moment-timezone");
interface IFolderProps {
  // recent: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
  data: any;
  error: any;
  isLoading: any;
  onClick?: (name: string) => void;
  dataItem: any;
  dataItemError: any;
  dataItemIsLoading: any;
  weatherData: any;
  prayerData: any;
}

// export default function Weather() {
const Weather: React.FC<IFolderProps> = (props: IFolderProps) => {
  var classes = useStyles();
  // const {token} = useCustom();
  //  console.log(token,'sdsfggs')

  const [USD, setUSD] = React.useState("USD");
  const [prayerTime, setprayerTime] = React.useState<any>();
  const [prayerType, setPrayerType] = React.useState<any>();
  //@ts-ignore
  // const {data,error ,isLoading }  = useGetAllCountryCodesQuery(token);
  //  const {data:prayerData, error:prayerError, isLoading:prayerLoading }  = useGetAllPrayersQuery();
  // console.log(data?.response,'rgrthrjtqaqqqqqqqq')
  const {
    data,
    error,
    isLoading,
    onClick,
    dataItem,
    dataItemError,
    dataItemIsLoading,
    weatherData,
    prayerData,
  } = props;
  console.log(data?.response, "rgrthrjtqaqqqqqqqq");
  console.log(dataItem?.response?.result, "Amount");
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setUSD(event.target.value);
  };
  const toggleDropdown = () => {
    setUSD("!USD");
  };
  // const [isDisplayed, setDisplayed] = useState(false);
  const handleTitle = (title: any) => {
    // console.log(title,'ttttt')
    onClick?.(title);
  };
  const emp = [
    {
      job_id: 1,
      job_name: "Engineer",
    },
    {
      job_id: 2,
      job_name: "Scientist",
    },
    {
      job_id: 3,
      job_name: "Teacher",
    },
  ];
  function getDifferenceInhrsandmins(EndTime, StartTime) {
    let diff = moment(EndTime, "HH:mm").diff(moment(StartTime, "HH:mm"));
    let d = moment.duration(diff);
    let hours = Math.floor(d.asHours());
    let minutes = moment.utc(diff).format("mm");
    let RemainingTime = hours + ":" + minutes;
    return RemainingTime;
  }
  let CurrentTime: any = moment(new Date()).format("HH:mm");

  setTimeout(function () {
    if (prayerData?.response?.Fajr > CurrentTime) {
      let RemainingTime = getDifferenceInhrsandmins(
        prayerData?.response?.Fajr,
        CurrentTime
      );
      setprayerTime(prayerData?.response?.Fajr);
      setPrayerType(`Fajr in ${RemainingTime} Hrs`);
    } else if (prayerData?.response?.Sunrise > CurrentTime) {
      let RemainingTime = getDifferenceInhrsandmins(
        prayerData?.response?.Sunrise,
        CurrentTime
      );
      setprayerTime(prayerData?.response?.Sunrise);
      setPrayerType(`Sunrise in ${RemainingTime} Hrs`);
    } else if (prayerData?.response?.Dhuhr > CurrentTime) {
      let RemainingTime = getDifferenceInhrsandmins(
        prayerData?.response?.Dhuhr,
        CurrentTime
      );
      setprayerTime(prayerData?.response?.Dhuhr);
      setPrayerType(`Dhuhr in  ${RemainingTime} Hrs`);
    } else if (prayerData?.response?.Asr > CurrentTime) {
      let RemainingTime = getDifferenceInhrsandmins(
        prayerData?.response?.Asr,
        CurrentTime
      );
      setprayerTime(prayerData?.response?.Asr);
      setPrayerType(`Asr in ${RemainingTime} Hrs`);
    } else if (prayerData?.response?.Maghrib > CurrentTime) {
      let RemainingTime = getDifferenceInhrsandmins(
        prayerData?.response?.Maghrib,
        CurrentTime
      );
      setprayerTime(prayerData?.response?.Maghrib);
      setPrayerType(`Maghrib in ${RemainingTime} Hrs`);
    } else if (prayerData?.response?.Isha > CurrentTime) {
      let RemainingTime = getDifferenceInhrsandmins(
        prayerData?.response?.Isha,
        CurrentTime
      );
      setprayerTime(prayerData?.response?.Isha);
      setPrayerType(`Isha in ${RemainingTime} Hrs`);
    }
  }, 500);

  console.log(prayerTime, prayerType, "rgrhrthr6hjaaaa");

  return (
    <div>
      <List className={classes.root}>
        <ListItem className={classes.weather}>
          <Typography component="h4">
            {weatherData?.response?.location?.region}, UAE
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src={weatherData?.response?.current?.condition?.icon}
                alt="weathersky"
                style={{
                  width: "45px",
                  marginLeft: "-20px",
                }}
              />
            </div>
            <div>
              <Typography component="h1" sx={{ color: "#009BAD" }}>
                {weatherData?.response?.current?.temp_c}°C
              </Typography>
              <Typography
                variant="caption"
                component="div"
                sx={{ opacity: 0.6 }}
              >
                {weatherData?.response?.current?.condition?.text}
              </Typography>
            </div>
          </div>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.weather}>
          <Typography component="h4">Next Prayer</Typography>
          <div>
            <img
              src={mosque}
              alt=""
              style={{
                position: "relative",
                width: "80px",
                marginTop: "-20px",
              }}
            />
            <p className={classes.prayer}>{prayerTime}</p>
            <p className={classes.prayerTime}>{prayerType}</p>
          </div>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.currency}>
          <Typography component="h4">1.00 AED is</Typography>
          <Typography component="h1">
            {dataItem?.response?.result.toFixed(2)}
          </Typography>

          <Typography variant="caption" component="div" sx={{ opacity: 0.6 }}>
            <Grid>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 80, height: 80 }}
              >
                {/* <InputLabel id="demo-simple-select-standard-label"><span>usd</span> </InputLabel> */}
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={USD}
                  onChange={handleChange}
                  MenuProps={{ PaperProps: { sx: { maxHeight: 90 } } }}
                  label="USD"
                  style={{ width: "70px", fontSize: "12px" }}
                >
                  {data?.response &&
                    data?.response.map((brand: any) => {
                      const { fields = {} } = brand;
                      return (
                        <MenuItem
                          style={{ width: "50px", fontSize: "10px" }}
                          value={fields?.id}
                          key={fields?.id}
                          onClick={() => handleTitle(fields?.Title)}
                        >
                          {fields?.Title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
          </Typography>
        </ListItem>
      </List>
    </div>
    // <> dgdgerrthtrhrt</>
  );
};
export default Weather;
