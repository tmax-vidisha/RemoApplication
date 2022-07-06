import React, { useEffect } from 'react'
import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useGetAnnouncementInfoQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from "@azure/msal-react";
import {NavLink as RouterNavLink,} from "react-router-dom";
import { useStyles } from "./Styles";
import SkeletonAnimation from "../../Containers/Skeleton";
interface IFolderProps {
  announcement: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}

// const Announcement = () => {
const Announcement: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } =   useGetAnnouncementInfoQuery('')
// console.log(data,'9809090')
//  console.log(data[1].fields)
// const { fields = {} } = data[0];
// var annTitle  = data[0].fields?.Title;
// var descVal = data[0].fields?.Desc;
const {announcement} = props;

// if (data.length > 0) {
//     if (data[0] != null) {
//       const { fields = {} } = data[0];
//        annTitle = fields?.Title;
//        descVal = fields?.Desc;
//     }
//     console.log(annTitle)
//   }

  return (
    //  <div>Announcement</div>
    <AuthenticatedTemplate>
      <Paper className={classes.root} elevation={0}>
      {/* {isLoading ? (
          <SkeletonAnimation />
        ) : ( */}
          <>
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              className={classes.annHeader}
            >
              Announcements
            </Typography>
            {/* {data &&
              <>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    className={classes.annTitle}
                  >
                    <RouterNavLink
                      to={SiteAPI.ANNOUNCEMENT_READ_MORE}
                   
                    >
                      { data[0].fields?.Title}
                    </RouterNavLink>
                  </Typography>
                </CardContent>

                <CardContent sx={{ pb: "19px!important" }}>
                  <Typography
                    variant="caption"
                    component="span"
                    className={classes.annContents}
                  >
                    <div
                      className={classes.annDesc}
                      dangerouslySetInnerHTML={{
                        __html: `${data[0].fields?.Desc}`,
                      }}
                    />
                  </Typography>
                </CardContent>
              </>
            } */}
            {announcement &&
                announcement?.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  var annTitle = fields?.Title;
                  var descVal = fields.Desc;
                  return (
                   <>
                        <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    className={classes.annTitle}
                  >
                    <RouterNavLink
                      to="/AnnouncementReadMore"
                      className={classes.readMore}
                    >
                    <span>{ annTitle}</span>  
                    </RouterNavLink>
                  </Typography>
                </CardContent>

                <CardContent sx={{ pb: "19px!important" }}>
                  <Typography
                    variant="caption"
                    component="span"
                    className={classes.annContents}
                  >
                    <div
                      className={classes.annDesc}
                      dangerouslySetInnerHTML={{
                        __html: `${descVal}`,
                      }}
                    />
                  </Typography>
                </CardContent>
                   </>
                  )
                })}
          </>
        {/* )} */}
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default Announcement