import React from 'react'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,

} from "@mui/material";
import {
  NavLink as RouterNavLink,
} from "react-router-dom";

import AccessTimeIcon from "@mui/icons-material/Event";
import { useGetNewsQuery } from '../../services/APIs';
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

// const News = () => {
  const News: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  // const { data, error, isLoading } = useGetNewsQuery('')
  //  console.log(data, 'uuuuuc')
   const {news} = props;
  return (
      // <div>News</div>

    <AuthenticatedTemplate>
      <Paper style={{ maxWidth: "100%" }} elevation={0}>
        {/* {isLoading ? (
          <SkeletonAnimation />
        ) : ( */}
          <>
            <CardContent sx={{ pb: "16px!important" }}>
              <Typography
                variant="h6"
                component="h6"
                color="secondary"
                className={classes.newsHeader}
              >

                News

              </Typography>
              <Grid
                container
                item
                xs={12}
                spacing={0}
                sx={{ justifyContent: "space-between" }}
              >
              {news && 
               <Grid item xs={6}  sx={{ maxWidth: " 49%" }}  >
                     
                        <CardMedia
                          className={classes.newsImg}
                          image={news.image}
                          title="Test"
                        />
                        <CardMedia
                          className={classes.newsImg}
                          image={news.image1}
                          title="Test"
                        />
                        <CardMedia
                          className={classes.newsImg}
                          image={news.image2}
                          title="Test"
                        />
                       
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="span"
                          className={classes.newsContents}
                        >
                          <RouterNavLink to='/NewsInfo' >
                        
                          <div
                              dangerouslySetInnerHTML={{
                                __html: `${news.value[2].fields?.Title}`,
                              }}
                            />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: `${news.value[1].fields?.Title}`,
                              }}
                            />
                             <div
                              dangerouslySetInnerHTML={{
                                __html: `${news.value[2].fields?.Title}`,
                              }}
                            />
                             </RouterNavLink>
                        </Typography>
                       
              </Grid>
              }
              </Grid>


            </CardContent>
          </>
        {/* )} */}
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default News