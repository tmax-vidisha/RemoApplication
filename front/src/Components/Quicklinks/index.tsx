import React, { useEffect,useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
    Typography,
  } from "@mui/material";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import { NavLink as RouterNavLink} from "react-router-dom";
  import { useStyles } from "./Styles";
  import SkeletonAnimation from "../../Containers/Skeleton";
  import "../../../src/App.css";
  import { useGetQuickLinksQuery,useUpdateQuicklinkTokenMutation,useGetAllQuickLinkQuery } from '../../services/APIs';
  import { AuthenticatedTemplate } from "@azure/msal-react";
  import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
  interface IFolderProps {
    quicklink: any;
    // onClick: any;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
  }
const QuickLinks = () => {
  // const QuickLinks: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } = useGetQuickLinksQuery ('');
    const pca = new PublicClientApplication(configuration);
    const [token, setToken] = useState<string>();
    // const [updateToken,{data,isLoading} ] = useUpdateQuicklinkTokenMutation();
    // console.log(data?.response,'jyjtyjytjytjytjty')
    const accounts = pca.getAllAccounts();
     useEffect(() => {
      async function getAccessToken() {
        if (accounts.length > 0) {
          const request = {
            scopes: ['user.read'],
            account: accounts[0]
          }
          const accessToken = await pca.acquireTokenSilent(request).then((response) => {
           
            // updateToken(response.accessToken);
              setToken(response.accessToken)
            // console.log(token,'uuuuuu')
          }).catch(error => {
            // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
            console.log(error);
            return null;
          });
  
  
        }
  
        return null;
      }
      getAccessToken();
  
       
      
    }, [])
    // console.log(data,'lllll')
    // const {quicklink} = props;
    const { data, error, isLoading } = useGetAllQuickLinkQuery(token);
    console.log(data,'thytjytjytjudddddddddddddd')
  return (
    // <div> QuickLinks</div>
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <>
            <CardContent sx={{ pb: "8px!important" }}>
              <Typography
                className={classes.linkHeader}
                variant="h6"
                component="h6"
                color="secondary"
              >
                Quick Links
              </Typography>
              <List className={classes.listItems}>
                {data?.response &&
                  data?.response?.map((item: any, index: any) => {
                    const { fields = {} } = item;

                    let linkName = fields?.Title;
                    let navLink=fields?.Navigation_x0020_Link;
                   
                    let menuIcon = JSON.parse(fields?.Icon);
                    let menuImg =
                      menuIcon?.serverUrl + menuIcon?.serverRelativeUrl;

                    let menuIconHover = JSON.parse(fields?.IconHover);
                    let menuImgHover =
                      menuIconHover?.serverUrl +
                      menuIconHover?.serverRelativeUrl;
                    var menuStatus = false;
                    if (linkName != "" && menuImg != "" && menuImgHover != "") {
                      menuStatus = true;
                    }

                    return (
                      <ListItem
                        key={index}
                        sx={{ padding: "16px !important" }}
                        className="quickLinkIcon"
                      >
                        {menuStatus && (
                          <>
                            <Link
                              href={`${navLink}`}
                              underline="none"
                              target="_blank"
                              sx={{display:"flex",color:"unset"}}
                            >
                              <ListItemIcon sx={{ minWidth: "22px" }}>
                                <img
                                  src={menuImg}
                                  className="menuIcon"
                                  alt={linkName}
                                />
                                <img
                                  src={menuImgHover}
                                  className="menuIconHover"
                                  alt={linkName}
                                />
                              </ListItemIcon>
                              <ListItemText sx={{ fontSize: "0.87rem" }}>
                                <Typography
                                  variant="body2"
                                  sx={{ paddingLeft: "15px" }}
                                  className="menuText"
                                >
                                  {linkName}
                                </Typography>
                              </ListItemText>
                            </Link>
                          </>
                        )}
                      </ListItem>
                    );
                  })}
              </List>
              
                  <RouterNavLink to="/userquicklink" >
                  <span>More QuickLinks</span><ChevronRightIcon />
                    </RouterNavLink>
                
            </CardContent>
          </>
         )}
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default QuickLinks