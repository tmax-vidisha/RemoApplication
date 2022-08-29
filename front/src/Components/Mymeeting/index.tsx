import React, { useEffect, useState } from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import AccessTimeIcon from "@mui/icons-material/Event";
import {
  useGetNewsQuery,
  useUpdateNewsTokenMutation,
  useGetAllNewsQuery,
} from "../../services/APIs";
import { useStyles } from "./Styles";
import SkeletonAnimation from "../../Containers/Skeleton";
var moment = require("moment-timezone");
interface IFolderProps {
  news: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}

const Mymeeting = () => {
  // const News: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const pca = new PublicClientApplication(configuration);
  const [token, setToken] = useState<string>();
  // const [updateToken,{data,isLoading} ] = useUpdateNewsTokenMutation();
  // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
  const accounts = pca.getAllAccounts();
  useEffect(() => {
    async function getAccessToken() {
      if (accounts.length > 0) {
        const request = {
          scopes: ["user.read"],
          account: accounts[0],
        };
        const accessToken = await pca
          .acquireTokenSilent(request)
          .then((response) => {
            // updateToken(response.accessToken);
            setToken(response.accessToken);
            // console.log(token,'uuuuuu')
          })
          .catch((error) => {
            // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
            console.log(error);
            return null;
          });
      }

      return null;
    }
    getAccessToken();
  }, []);
  const { data, error, isLoading } = useGetAllNewsQuery(token);
  console.log(data, "888ddd88ttuytuytu888");
  return (
    // <div>News</div>

    <AuthenticatedTemplate>
      <Paper style={{ maxWidth: "100%",height:"120px" }} elevation={0}>
        {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <>
            <CardContent sx={{ pb: "16px!important" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                  className={classes.meetHeader}
                >
                  My Meetings
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                  className={classes.meetHeader}
                >
                  June 12, 2022
                </Typography>
              </Stack>
              <Grid container item xs={12} spacing={0} style={{overflowY:"scroll"}}>
                <Grid item xs={0.8}>
                  <Typography className={classes.meetTime} >09 AM</Typography>
                  <Typography className={classes.meetTime} >10 AM</Typography>
                  <Typography className={classes.meetTime} >11 AM</Typography>
                </Grid>
                <Grid className={classes.meetBorder} item xs={0.2}>

                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.meetText}>General Board Meeting</Typography>
                  <Typography className={classes.meetText}>REeview Meeting with Corporate Mamager</Typography>
                  <Typography className={classes.meetText}>General Board Meeting</Typography>
                </Grid>

              </Grid>
            </CardContent>
          </>
        )}
      </Paper>
    </AuthenticatedTemplate>
  );
};

export default Mymeeting;
