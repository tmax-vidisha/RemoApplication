import React from 'react'
import { useGetPhotoGalleryQuery } from '../../services/APIs'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Typography,
  } from "@mui/material";
  import { useStyles } from "./Styles";

  interface IFolderProps {
    gallery: any;
    // onClick: any;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
  }
// const Gallery = () => {
  const Gallery: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const {gallery} = props;
    // const { data, error, isLoading } =   useGetPhotoGalleryQuery('')
    // console.log(data,'uiiilili')
  return (
    <div>Gallery</div>
    // <AuthenticatedTemplate>
    //   <Paper elevation={0}>
    //     <CardContent sx={{ pb: "6px!important" }}>
    //       <Typography
    //         variant="h6"
    //         component="h6"
    //         color="secondary"
    //         className={classes.galleryHeader}
    //       >
    //         Photo Gallery
    //       </Typography>
    //       <div className={classes.galleryWidth}>
    //         < >
    //           {gallery.map((step: any, indx: any) => {
    //             if (step.fields.ContentType == "Picture") {
    //               return (
    //                 <div key={indx} className={classes.galleryContainer}>
    //                   <img
    //                     src={step.webUrl}
    //                     alt="Gallery"
    //                     className={classes.galleryImageWidth}
    //                   />
    //                 </div>
    //               );
    //             }
    //           })}
    //         </>
    //       </div>
    //     </CardContent>
    //   </Paper>
    // </AuthenticatedTemplate>
  )
}

export default Gallery