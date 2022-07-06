import React from 'react'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Button from "@mui/material/Button";
import { CardMedia, Container, Grid, Paper } from "@mui/material";
import { useStyles } from "./Styles";
import PortalHomeIcon from "./Assets/Images/logo.png";
import My from './My';
import PortalHome from './Containers/PortalHome';
const 
Welcome = () => {
  const { instance, inProgress } = useMsal();
  const classes = useStyles()
  return (
    <>
     <UnauthenticatedTemplate>
        <Container className="CustomContainer">
          <div className={classes.paperContainer}>
            <Grid className={classes.welcomeItem}>
              <CardMedia
                className={classes.logo}
                image={PortalHomeIcon}
                title="Remo"
              />
              <div className={classes.brand}>
                <h3 className={classes.subtitle}>
                  REMO is a collaboration driven intranet portal enabling teams
                  to work together to react their goals
                </h3>
                <Button
                  variant="contained"
                  className={classes.signInButton}
                  onClick={() => instance.loginPopup()}
                >
                  Sign In
                </Button>
              </div>
            </Grid>
          </div>
        </Container>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Container className="CustomContainerBody">
         {/* <My/> */}
        <PortalHome/>
        </Container>
      </AuthenticatedTemplate>
    </>
  )
}

export default Welcome