import { Fragment, useEffect, useState } from "react";
import { useGetTopNavigationQuery, useUpdateNavigationTokenMutation, useGetAllNavigationQuery } from '../../services/APIs';
import { NavLink as RouterNavLink, useNavigation } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { topNavigationBar } from "./Nav";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import {
  Box,
  CardContent,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "./Styles";
import { Link, useNavigate } from 'react-router-dom';
import content from "./../../Assets/Images/contentEditor.svg";
import contentHover from "./../../Assets/Images/contentEditorHover.svg";
import department from "./../../Assets/Images/department.svg";
import departmentHover from "./../../Assets/Images/departmentHover.svg";
import home from "./../../Assets/Images/Home.svg";
import homeHover from "./../../Assets/Images/homeHover.svg";
import orgChart from "./../../Assets/Images/orgchart.svg";
import orgChartHover from "./../../Assets/Images/orgChartHover.svg";
import policy from "./../../Assets/Images/policies.svg";
import policyHover from "./../../Assets/Images/policiesHover.svg";
import quickLinks from "./../../Assets/Images/Quicklinks.svg";
import quickLinksHover from "./../../Assets/Images/quickLinksHover.svg";
import workspace from "./../../Assets/Images/workspace.svg";
import workspaceHover from "./../../Assets/Images/workspaceHover.svg";
import { NavLink } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from '@mui/material/ToggleButton';
import admin from "./../../Assets/Images/admin.svg";
import adminHover from "./../../Assets/Images/admin.svg";
import hub from "./../../Assets/Images/hub.svg";
import hubHover from "./../../Assets/Images/hubHover.svg";
import ITservice from "./../../Assets/Images/ITservice.svg";
import ITserviceHover from "./../../Assets/Images/ITserviceHover.svg";
import sales from "./../../Assets/Images/sales.svg";
import salesHover from "./../../Assets/Images/salesHover.svg";
import vehicle from "./../../Assets/Images/vehicleRequest.svg";
import vehicleH from "./../../Assets/Images/vehicleRHover.svg";



interface type {
  selectedColor: string;
}
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: any;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//       <div
//           role="tabpanel"
//           hidden={value !== index}
//           id={`simple-tabpanel-${index}`}
//           aria-labelledby={`simple-tab-${index}`}
//           {...other}
//       >
//           {value === index && (
//               <Box sx={{ p: 2, boxShadow: '0 0 5px #eaeaea' }}>
//                   {children}
//               </Box>
//           )}
//       </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const ToggleButton = styled(MuiToggleButton)((selectedColor: any) => ({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: "#009BAD",
  },
}));

interface IFolderProps {
  data: any,
  error: any,
  isLoading: any
}
const HomeTopNav: React.FC<IFolderProps> = (props: IFolderProps) => {
// const HomeTopNav = (props: any) => {
// const HomeTopNav: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
    // console.log(props,'props')
  // console.log(data)
  const [SelValue, setSelValue] = useState("");
  const [topMenu, setTopMenu] = useState(true);
  let navigate = useNavigate();

  // const pca = new PublicClientApplication(configuration);
  // const [token, setToken] = useState<string>();
  // // const [updateToken,{data,isLoading} ] = useUpdateNavigationTokenMutation();
  // // console.log(data?.response,'jyjtyjycvdvxvxvxvtjytjytjty')
  // const accounts = pca.getAllAccounts();
  //  useEffect(() => {
  //   async function getAccessToken() {
  //     if (accounts.length > 0) {
  //       const request = {
  //         scopes: ['user.read'],
  //         account: accounts[0]
  //       }
  //       const accessToken = await pca.acquireTokenSilent(request).then((response) => {

  //         // updateToken(response.accessToken);
  //          setToken(response.accessToken)
  //         // console.log(token,'uuuuuu')
  //       }).catch(error => {
  //         // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
  //         console.log(error);
  //         return null;
  //       });


  //     }

  //     return null;
  //   }
  //   getAccessToken();



  // }, [])

  const selectedMenu = (selValue: any) => {
    setSelValue(selValue);
    setTopMenu(false);
  };

  const clearMenu = () => {
    setTopMenu(true);
  };

  const clearButton = (
    <ListItem className={classes.topClear} sx={{ position: "absolute", zIndex: 99 }}>
      <Link to="/" className={classes.topClearLink} onClick={clearMenu} >
        clear <ClearIcon />
      </Link>
    </ListItem>
  );

  const { data, error, isLoading } = props;
  console.log(data, '88888ttuytuytu888')

  const itemsList = [
    {
      id: 0,
      label: 'Home',
      Icon: home,
      iconHover: homeHover,
      onClick: () => navigate("/"),
      to: '/',
    },
    {
      id: 1,
      label: 'WorkSpace',
      Icon: workspace,
      iconHover: workspaceHover,
      onClick: () => navigate("/WorkSpaceOne"),
      to: '/WorkSpaceOne',
    },
    {
      id: 2,
      label: 'Policies & Procedure',
      Icon: policy,
      iconHover: policyHover,
      onClick: () => navigate("/policiesContentPage"),
      to: '/policiesContentPage',

    },
    {
      id: 3,
      label: 'Content Editor',
      Icon: content,
      iconHover: contentHover,
      onClick: () => navigate("/ContentEditor"),
      to: '/ContentEditor',
    },
    {
      id: 4,
      label: 'Department',
      Icon: department,
      iconHover: departmentHover,
      onClick: () => navigate("/security"),
      to: '/security',

    },
    {
      id: 5,
      label: "Quick Links",
      Icon: quickLinks,
      iconHover: quickLinksHover,
      onClick: () => navigate("/quickLinks"),
      to: '/quickLinks',
    },
    {
      id: 6,
      label: "Org Chart",
      Icon: orgChart,
      iconHover: orgChartHover,
      onClick: () => navigate("/orgChartPage"),
      to: '/orgChartPage',
    },
  ];

  const myLinkList = [
    {
      id: 0,
      label: 'Sales',
      icon: sales,
      iconHov: salesHover,
      onClick: () => navigate("/"),
      to: '/',
    },
    {
      id: 1,
      label: 'Vehicle',
      icon: vehicle,
      iconHov: vehicleH,
      onClick: () => navigate("/WorkSpaceOne"),
      to: '/WorkSpaceOne',
    },
    {
      id: 2,
      label: 'IT service',
      icon: ITservice,
      iconHov:ITserviceHover,
      onClick: () => navigate("/policiesContentPage"),
      to: '/policiesContentPage',

    },
    {
      id: 3,
      label: 'Hub',
      icon: hub,
      iconHov: hubHover,
      onClick: () => navigate("/ContentEditor"),
      to: '/ContentEditor',
    },
    {
      id: 4,
      label: 'Admin',
      icon: admin,
      iconHov: adminHover,
      onClick: () => navigate("/security"),
      to: '/security',

    },

  ];

  const [id1, setId1] = useState(0);
  const [show, setShow] = useState(true);

  const [alignment, setAlignment] = useState('Quicklinks');

  const handleAlignment = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };
  // const onClick = () => setShow(false)
  // const HandleClick = () => setShow(true);
  const [showResults, setShowResults] = useState(true)
  const onClick = () => setShowResults(false)
  const HandleClick = () => setShowResults(true);
  // const { data, error, isLoading } = props
  return (
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        <CardContent sx={{ pb: "16px !important", }} style={{ marginBottom: "16px" }} >

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <Tabs
              className={classes.button}
              value={value}
              onChange={handleChange}
            // textColor="secondary"
            // indicatorColor="none"
            //TabIndicatorProps={{style: {backgroundColor:'blue'}}}
            // aria-label="secondary tabs example"
            >
              <Tab style={{ textTransform: "none", border: "1px solid black" }} value="one" label="Quicklinks" />
              <Tab style={{ textTransform: "none" }} value="two" label="My Links" />
            </Tabs> */}

            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}>
              {/* @ts-ignore */}
              <ToggleButton value="Quicklinks" onClick={onClick} >Quicklinks</ToggleButton>
              <ToggleButton value="My Links" onClick={HandleClick} >My Links</ToggleButton>
            </ToggleButtonGroup>
          </Box>         
          {showResults ? (
            <List className={classes.topItems}>
            <ListItem className={classes.topMenu}>
              <Link to="/" className={classes.topLink}>
                <img src={vehicle} alt="..." className="topImg" />
                <img
                  src={vehicleH}
                  alt=""
                  className="topImgH"
                />
                <p className={classes.topText} >vehicle</p>
              </Link>
            </ListItem>
            <ListItem className={classes.topMenu}>
              <Link to="/" className={classes.topLink}>
                <img src={sales} alt="..." className="topImg" />
                <img
                  src={salesHover}
                  alt=""
                  className="topImgH"
                />
                <p className={classes.topText} >Sales</p>
              </Link>
            </ListItem>
            <ListItem className={classes.topMenu}>
              <Link to="/" className={classes.topLink}>
                <img src={ITservice} alt="..." className="topImg" />
                <img
                  src={ITserviceHover}
                  alt=""
                  className="topImgH"
                />
                <p className={classes.topText} >IT Service</p>
              </Link>
            </ListItem>
          </List>

          ) : (
            <List className={classes.topItems}>
              {itemsList.map((item: any, id: any, index: any) => {
                const { Icon, iconHover, onClick, path } = item;
                console.log(itemsList, "itemsList");

                return (
                  <ListItem key={index} onClick={onClick} className={classes.topMenu}>
                    {itemsList && (
                      <NavLink end to={path} className={classes.topLink}>
                        <img src={Icon} alt="..." className="topImg" />
                        <img
                          src={iconHover}
                          alt=""
                          className="topImgH"
                        />
                        <p className={classes.topText} > {item.label}</p>
                      </NavLink>)
                    }
                  </ListItem>
                )
              })}


            </List>
          )}
        </CardContent>
      </Paper>
    </AuthenticatedTemplate>

  )
}

export default HomeTopNav;


{/*

{show ? (
            <List className={classes.topItems}>
              {itemsList.map((item: any, id: any, index: any) => {
                const { Icon, iconHover, onClick, path } = item;
                console.log(itemsList, "itemsList");

                return (
                  <ListItem key={index} onClick={onClick} className={classes.topMenu}>
                    {itemsList && (
                      <NavLink end to={path} className={classes.topLink}>
                        <img src={Icon} alt="..." className="topImg" />
                        <img
                          src={iconHover}
                          alt=""
                          className="topImgH"
                        />
                        <p className={classes.topText} > {item.label}</p>
                      </NavLink>)
                    }
                  </ListItem>
                )
              })}


            </List>)
            :
            (
              <List className={classes.topItems}>
                <ListItem className={classes.topMenu}>
                  <Link to="/" className={classes.topLink}>
                    <img src={vehicle} alt="..." className="topImg" />
                    <img
                      src={vehicleH}
                      alt=""
                      className="topImgH"
                    />
                    <p className={classes.topText} >vehicle</p>
                  </Link>
                </ListItem>
                <ListItem className={classes.topMenu}>
                  <Link to="/" className={classes.topLink}>
                    <img src={sales} alt="..." className="topImg" />
                    <img
                      src={salesHover}
                      alt=""
                      className="topImgH"
                    />
                    <p className={classes.topText} >Sales</p>
                  </Link>
                </ListItem>
                <ListItem className={classes.topMenu}>
                  <Link to="/" className={classes.topLink}>
                    <img src={ITservice} alt="..." className="topImg" />
                    <img
                      src={ITserviceHover}
                      alt=""
                      className="topImgH"
                    />
                    <p className={classes.topText} >IT Service</p>
                  </Link>
                </ListItem>
              </List>
            )}


<ListItemIcon onClick={() => { setId1(id); }}>
                        {(id1 === id) ? (
                          <img src={iconHover} alt="icon" className="topImgH" />
                        ) : (
                          <img src={Icon} alt="icon" className="topImg" />
                        )}
                      </ListItemIcon> */}
{/* <Link
                            className={classes.topLink}
                            onClick={(event: any) => selectedMenu(id1)}
                            to="/"
                          > */}


/*
<AuthenticatedTemplate>
      <Paper elevation={0}>
        <CardContent sx={{ pb: "16px !important", }} style={{ marginBottom: "16px" }} >
          {!topMenu && clearButton}import { Icon } from '@fluentui/react/lib/Icon';
import { ListItemIcon } from '@mui/material/ListItemIcon';
import { createTheme } from '@mui/material/styles';

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            
              // <div className={classes.block}>
              //   <div className={classes.blockLeft}></div>
              //   <div className={classes.blockRight}></div>
              // </div> 
           
              <Tabs
              className={classes.button}
              value={value}
              onChange={handleChange}
            // textColor="secondary"
            // indicatorColor="none"
            // TabIndicatorProps={{style: {background:'blue'}}}
            // aria-label="secondary tabs example"
            >
              <Tab style={{ textTransform: "none" }} value="one" label="Quicklinks" />
              <Tab style={{ textTransform: "none" }} value="two" label="My Links" />
            </Tabs>
          </Box>
          <List className={classes.topItems}>
            {topMenu && data?.response &&
              data?.response?.map((item: any, index: any) => {
                const { fields = {} } = item;
                var Title = fields?.Title;
                var itemId = fields?.id;
                var completePath;
                var iconHoverPath;
                if (fields.Icon != null) {
                  var icon = JSON.parse(fields.Icon);
                  if (icon.serverUrl) {
                    completePath = icon.serverUrl + (icon.serverRelativeUrl).replace(icon.serverUrl, "");
                  } else {
                    completePath = icon.serverRelativeUrl
                  }

                  var iconHov = JSON.parse(fields.IconHover);
                  if (iconHov.serverUrl) {
                    iconHoverPath = iconHov.serverUrl + (iconHov.serverRelativeUrl).replace(iconHov.serverUrl, "");
                  } else {
                    iconHoverPath = iconHov.serverRelativeUrl
                  }

                  return (
                    <ListItem key={index} className={classes.topMenu}>
                      <Link
                        className={classes.topLink}
                        onClick={(event: any) => selectedMenu(itemId)}
                        to="/"
                      >
                        <img src={completePath} alt={Title} className="topImg" />
                        <img
                          src={iconHoverPath}
                          alt={Title}
                          className="topImgH"
                        />
                        <p className={classes.topText}> {Title}</p>
                      </Link>
                    </ListItem>
                  )
                }
              })}

            {!topMenu &&
              data?.response
                .filter((item: any) => item.fields.id == SelValue)
                .map((filteredItem: any, index: any) => {
                  const { fields = {} } = filteredItem;
                  var iconHoverPath;
                  var iconHov = JSON.parse(fields.IconHover);
                  if (iconHov.serverUrl) {
                    iconHoverPath = iconHov.serverUrl + (iconHov.serverRelativeUrl).replace(iconHov.serverUrl, "");
                  } else {
                    iconHoverPath = iconHov.serverRelativeUrl
                  }

                  var rowMenu = index + "sub1";
                  return (
                    <>
                      <ListItem key={index}>
                        <Link
                          to="/"
                          className={classes.topLink}>
                          <img
                            src={iconHoverPath}
                            alt={fields.Title}
                            className="topImg"
                          />
                          <p style={{ color: "#009BAD" }} className={classes.topText}> {fields.Title}</p>
                        </Link>
                      </ListItem>
                    </>
                  );
                }
                )}

            {!topMenu &&
              data?.response
                .filter((item: any) => item.fields.ParentIdLookupId == SelValue)
                .map((filteredItem: any, index: any) => {
                  const { fields = {} } = filteredItem;
                  var rowMenu = index + "sub1";
                  return (
                    <>
                      <ListItem key={rowMenu}>
                        <RouterNavLink
                          className={classes.topLink}
                          to={fields.Path}
                        >
                          {fields.Title}
                        </RouterNavLink>
                        
                      </ListItem>
                    </>
                  );
                }
                )}
          </List>
        </CardContent>
      </Paper>
    </AuthenticatedTemplate>
*/