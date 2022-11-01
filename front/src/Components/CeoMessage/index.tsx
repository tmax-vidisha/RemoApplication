import { Fragment, useEffect, useState } from "react";
import { useGetCeoMessageQuery, useUpdateCeoMsgTokenMutation, useGetAllCeoMsgQuery } from '../../services/APIs'
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
import { NavLink as RouterNavLink } from "react-router-dom";
import SkeletonAnimation from "../../Containers/Skeleton";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import Draggable from 'react-draggable';
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import  DndProvider  from 'react-dnd';
//import { Draggable } from "react-beautiful-dnd";

interface IFolderProps {
  // ceomsg: any;
  data: any,
  error: any,
  isLoading: any
}

//  const CeoMessage = () => {
const CeoMessage: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();

  const { data, error, isLoading } = props
  // console.log(data,'980ccccccc9090')
  const [content, setContent] = useState<string>("Drop Something Here");
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("text", data);
  };

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContent(data);
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };


  return (
    // <div>CeoMessage</div>
    <AuthenticatedTemplate>
      {/* <Draggable> */}
      
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
      
      {/* </Draggable> */}
    </AuthenticatedTemplate>
  )
}

export default CeoMessage