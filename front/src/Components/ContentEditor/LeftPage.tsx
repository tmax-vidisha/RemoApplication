import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import { useStyles } from "./Styles";
import { Grid } from "@mui/material";

const LeftPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ bgcolor: "background.paper" }} className={classes.leftPage}>
        <Grid className={classes.headText}>Content Editor</Grid>
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
                      primary="Landing Page"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="ITD"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Human Resources"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Admin"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Audit"
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
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="BSD"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Finance"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Gov Rel"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Legal"
                      className={classes.textListItem}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={classes.ListItemPart}>
                  <ListItemButton>
                    <ListItemText
                      primary="Marketing"
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

export default LeftPage;
