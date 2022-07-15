import { Fragment, useEffect ,useState} from "react";
 import { useGetCeoMessageQuery,useUpdateCeoMsgTokenMutation,useGetAllCeoMsgQuery } from '../../services/APIs'
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Typography,
  } from "@mui/material";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import { useStyles } from "./Styles";
  import { NavLink as RouterNavLink} from "react-router-dom";
  import SkeletonAnimation from "../../Containers/Skeleton";
  import { AuthenticatedTemplate } from "@azure/msal-react";
  import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
  interface IFolderProps {
    ceomsg: any;
    // onClick: any;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
  }

 const CeoMessage = () => {
  // const CeoMessage: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const pca = new PublicClientApplication(configuration);
    const [tokens, setTokens] = useState<string>();
    // const [updateToken,{data,isLoading} ] = useUpdateCeoMsgTokenMutation();
    // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
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
              setTokens(response.accessToken)
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
    const { data, error, isLoading } =   useGetAllCeoMsgQuery(tokens)
    console.log(data,'980ccccccc9090')
  return (
    //  <div>CeoMessage</div>
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <>
            <CardContent sx={{ pb: "16px!important" }}>
              <Typography
                variant="h6"
                component={"span"}
                color="textSecondary"
                className={classes.contentRoot}
              >
                CEO Message
              </Typography>

              {data?.response &&
                <>
                  <Card className={classes.contentRoot} elevation={0}>
                    <Card className={classes.ceoContentTop} elevation={0}>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color="black"
                        className={classes.headRow}
                      >
                        {data?.response.value[0].fields?.UserName}
                      </Typography>
                      <Typography
                        className={classes.ceoContent}
                        variant="caption"
                        component="span"
                        paragraph={true}
                      >
                        <Fragment>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.response.value[0].fields.Description,
                            }}
                          />
                        </Fragment>
                      </Typography>

                      <RouterNavLink
                        className={classes.readMore}
                        to="/CeoInfo"
                      >
                        <span> Read more</span><ChevronRightIcon />
                      </RouterNavLink>
                    </Card>
                    <div className={classes.ceoImg}>
                      <CardMedia
                        component="img"
                        height="180"
                         image={data?.response.image}
                      />
                      {/* <img   src ={data.image}  height="180" width="170"/> */}
                        
                    </div>
                  </Card>
                </>
              }
            </CardContent>
          </>
         )} 
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default CeoMessage