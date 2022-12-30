import { Fragment, useEffect, useState } from "react";
import { useGetTopNavigationQuery, useUpdateNavigationTokenMutation, useGetAllNavigationQuery } from '../../services/APIs';
import { NavLink as RouterNavLink } from "react-router-dom";
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
  Tab,
  Tabs,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "./Styles";
import { Link } from 'react-router-dom';

interface IFolderProps {
  data: any,
  error: any,
  isLoading: any
}
// const HomeTopNav = () => {
const HomeTopNav: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const [SelValue, setSelValue] = useState("");
  const [topMenu, setTopMenu] = useState(true);
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
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const { data, error, isLoading } = props;
  // console.log(data, '88888ttuytuytu888')
  return (
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        <CardContent sx={{ pb: "16px !important", }} style={{ marginBottom: "16px" }} >
          {!topMenu && clearButton}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            
              {/* <div className={classes.block}>
                <div className={classes.blockLeft}></div>
                <div className={classes.blockRight}></div>
              </div> */}
           
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
                        {/* <Link className={classes.topLink} href={fields.Path}>
                        
                      </Link> */}
                      </ListItem>
                    </>
                  );
                }
                )}
          </List>
        </CardContent>
      </Paper>
    </AuthenticatedTemplate>

  )
}

export default HomeTopNav