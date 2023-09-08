import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useStyles } from "./Styles";

const LeftPanel = () => {
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ width: "190px", bgcolor: "background.paper", height: "100%" }}>
        <Grid className={classes.headText}>Our Services</Grid>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <nav>
              <List>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="IT Helpdesk"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Network and Security"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="ERP"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Digital Business Partnership"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Governance"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="BE"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LeftPanel;
