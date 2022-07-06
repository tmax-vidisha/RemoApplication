import { Fragment, useEffect, useState } from "react";
import { useGetTopNavigationQuery } from '../../services/APIs';
import { NavLink as RouterNavLink } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { topNavigationBar } from "./Nav";
import {
    CardContent,
    Link,
    List,
    ListItem,
    Paper,
  } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "./Styles";
interface IFolderProps {
  navigation: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}
// const HomeTopNav = () => {
  const HomeTopNav: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const [SelValue, setSelValue] = useState("");
    const [topMenu, setTopMenu] = useState(true);
    // const { data, error, isLoading } =   useGetTopNavigationQuery('');
    // console.log(data,'tthththththt')
    const {navigation} = props;
    const selectedMenu = (selValue: any) => {
        setSelValue(selValue);
        setTopMenu(false);
      };
    
      const clearMenu = () => {
        setTopMenu(true);
      };

      const clearButton = (
        <ListItem className={classes.topClear} sx={{ position: "absolute", zIndex: 99 }}>
          <Link className={classes.topClearLink} onClick={clearMenu} href="#">
            clear <ClearIcon />
          </Link>
        </ListItem>
      );
  return (
    // <div>HomeTopNav</div>
    <AuthenticatedTemplate>
    <Paper elevation={0}>
      <CardContent sx={{ pb: "16px!important" }}>
        {!topMenu && clearButton}
        <List className={classes.topItems}>
          {topMenu && navigation &&
            navigation.map((item: any, index: any) => {
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
                      href="#"
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
            navigation
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
                        className={classes.topLink}
                        href="#"
                      >
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
            navigation
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