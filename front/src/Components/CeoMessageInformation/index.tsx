import React from 'react'
import { Fragment, useEffect, useState } from "react";
import {
  NavLink as RouterNavLink,
 
} from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";

import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useStyles } from "./Styles";
import { useGetCeoMessageQuery } from '../../services/APIs'
import moment from "moment";
interface IFolderProps {
  ceomsg: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}

// const CeoMessageInformation = () => {
  const CeoMessageInformation: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } = useGetCeoMessageQuery('')
    // console.log(data)
    const {ceomsg} = props;
    // console.log(data.value[6].fields.profileUrl,'yyyyyy')

  return (

    <AuthenticatedTemplate>
    <Container className={classes.contentEditorWidth}>
      <Card className={classes.cardHeight} elevation={0}>
        <Paper className={classes.innerBackground}>
          <div className={classes.innerBannerOverlay}></div>
          <Paper className={classes.contentHeader} elevation={0}>
            <Typography className={classes.breadcrumbs} variant="h6">
              CEO Message
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              <Breadcrumbs
                className={classes.breadcrumbs}
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link className={classes.breadLinks} color="inherit" href="/">
                  Home
                </Link>
                <Typography>CEO Message</Typography>
              </Breadcrumbs>
            </Typography>
          </Paper>
        </Paper>
      </Card>

      {ceomsg &&
        <Paper elevation={0} sx={{ mb: 3 }}>
          <Card className={classes.contentRoot} elevation={0}>
            <CardContent>
              <div className={classes.ceoImg}>

                <CardMedia component="img" 
                  //  image={data.value[1].fields?.ImageURL.Url} 
                  image={ceomsg.image} 
                  // image={data.value[7].fields?.profileUrl} 
                   />
                {/* <img  src ="https://remoblobstorage.blob.core.windows.net/candidate/Bird.jpg?st=2022-06-08T12%3A55%3A31Z&se=2022-06-08T13%3A55%3A31Z&sp=r&sv=2018-03-28&sr=b&sig=y2SaHETj51cDcFSkY3eL%2Fj82O2S1XK2rKbl4jG8DvH0%3D" /> */}
              </div>
              <div className={classes.ceoContentHeader}>
                <Typography variant="subtitle1" component="h6">
                {ceomsg.value[0].fields?.UserName}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className={classes.ceoCreatedDate}
                >
                  {moment(ceomsg.value[0].fields?.Modified).fromNow()}
                </Typography>
                <Typography
                  className={classes.ceoContent}
                  variant="caption"
                  component="span"
                >
                  <Fragment>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: ceomsg.value[0].fields.Description,
                      }}
                    />
                  </Fragment>
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Paper>
      }
    </Container>
  </AuthenticatedTemplate>

  )
}

export default CeoMessageInformation