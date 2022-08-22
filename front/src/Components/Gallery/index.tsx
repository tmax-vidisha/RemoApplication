import React from 'react'
import { useGetPhotoGalleryQuery } from '../../services/APIs'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Stack,
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
 const Gallery = () => {
  // const Gallery: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const {gallery} = props;
    // const { data, error, isLoading } =   useGetPhotoGalleryQuery('')
    // console.log(data,'uiiilili')
  return (
    // <div>Gallery</div>
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
    <>
    <div>
      <AuthenticatedTemplate>
        <Paper elevation={0}>
          <CardContent sx={{ pb: "6px!important", height: "380px" }}>
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
                className={classes.galleryHeader}
              >
                Images and Videos
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                color="secondary"
                className={classes.galleryHeader}
              >
                View All
              </Typography>
            </Stack>
           

            <div className={classes.row}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                // spacing={2}
              >
                <div className={classes.column}>
                  <img src="https://media.istockphoto.com/photos/key-in-office-cabinet-lock-picture-id1164813783?k=20&m=1164813783&s=612x612&w=0&h=cAjKzPGnk5od5wj6P6F6F8ynt6VK7PI5rkug9PX1ABI=" />
                </div>
                <div className={classes.column}>
                  <img src="https://media.istockphoto.com/photos/interior-of-modern-office-picture-id973712582?k=20&m=973712582&s=612x612&w=0&h=WMIUDLloWdFetm6hJQ5ehlSC1-pMqGizfEsxcGKyAWw=" />
                </div>
              </Stack>
            </div>

            <div className={classes.row}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                // spacing={2}
              >
                <div className={classes.column}>
                  <img src="https://media.istockphoto.com/photos/business-people-are-analyzing-and-planning-business-business-strategy-picture-id1186614184?k=20&m=1186614184&s=612x612&w=0&h=Nxn6DS_h10fXGMjOWtBA_RoLP7KbQ06D_KFatzF3_Ok=" />
                </div>
                <div className={classes.column}>
                  <img src="https://media.istockphoto.com/photos/young-people-work-in-modern-office-picture-id881484382?k=20&m=881484382&s=612x612&w=0&h=SIZswZgkHtJagAnKZLyWXUQmq7Y-aDCIc_nzGQxlXjY=" />
                 
                </div>
              </Stack>
            </div>
          </CardContent>
        </Paper>
      </AuthenticatedTemplate>
    </div>
  </>
  )
}

export default Gallery