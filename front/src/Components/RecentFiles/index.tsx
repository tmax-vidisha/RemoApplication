import React from 'react'
import { useGetRecentFilesQuery } from '../../services/APIs'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
    Card,
    CardContent,
    Link,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
  } from "@mui/material";
import { useStyles } from "./Styles";
import SkeletonAnimation from "../../Containers/Skeleton";



// import { AccessTime24Filled } from "@fluentui/react-icons";
var moment = require("moment-timezone");
interface IFolderProps {
  recent: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}
// const RecentFiles = () => {
const RecentFiles: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } =   useGetRecentFilesQuery('')
    // console.log(data,'t5y6y6y6')
    const {recent} = props;
  return (
    // <div>Recent Files</div>
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        {/* {isLoading ? (
          <SkeletonAnimation />
        ) : ( */}
          <>
            <CardContent sx={{ pb: "4px!important", height: "391px" }}>
              <Typography
                variant="h6"
                component="h6"
                color="secondary"
                className={classes.rectHeader}
              >
                Recent Files
              </Typography>
              <List className={classes.topList}>
                {recent &&
                  recent?.map((item: any, index: any) => {
                    let IconFileType;
                    const { remoteItem = {} } = item;
                    var createdDate = moment(
                      remoteItem?.lastModifiedDateTime
                    ).fromNow();

                    let fileName = remoteItem?.name;
                    let fileExt = fileName?.substr(
                      fileName?.lastIndexOf(".") + 1
                    );
                    let fileUrl = remoteItem?.webUrl;

                    // if (IconFileType != "undefined") {
                    //   if (fileExt === "docx") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "docx",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "pdf") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "pdf",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "txt") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "txt",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "xlsx") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "xlsx",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "csv") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "csv",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "zip") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "zip",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "one") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "one",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   } else if (fileExt === "png") {
                    //     IconFileType = (
                    //       <Icon
                    //         {...getFileTypeIconProps({
                    //           extension: "png",
                    //           size: 40,
                    //           imageFileType: "png",
                    //         })}
                    //       />
                    //     );
                    //   }
                    // }
                    return (
                      <ListItem
                        divider={true}
                        key={remoteItem.id}
                        className={classes.recLinksItem}
                      >
                        {/* <AccessTime24Filled /> */}
                        <ListItemText key={index}>
                          <Link
                            href={`${fileUrl}`}
                            underline="none"
                            target="_blank"
                          >
                            <div className={`clearfix ${classes.fileName}`}>
                              <div className={classes.recentFileIcon}>
                                {IconFileType}
                                {/* {fileIcon} */}
                              </div>
                              <div className={classes.recentFileDesc}>
                                <span className={classes.fileNameLink}>
                                  {fileName}
                                </span>
                                <span className={classes.createdTime}>
                                  {createdDate}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
              </List>
            </CardContent>
          </>
        {/* )} */}
      </Paper>
    </AuthenticatedTemplate>
    // <>grgrgtgtrgrtg</>
  )
}

export default RecentFiles