import { Grid, Typography, Paper, Container, Link, Breadcrumbs, Box, Card} from '@mui/material';
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import  NavigateNextIcon  from '@mui/icons-material/NavigateNext';
import IconText from '../Header/IconText';
import { useStyles } from './Styles';
interface IFolderProps {
    data: any,
    error: any,
    isLoading: any,
    // onClick?: (id: string, name: string) => void;
    // dataItem:any,
    // dataItemError:any,
    // dataItemIsLoading:any
  }
// const FolderItems: React.FC<IFolderProps> = (props: IFolderProps) => {
const FolderItems = () => {
  const classes = useStyles();
    // const { data, error, isLoading} =props
    let location = useLocation();
console.log(location.state);
//@ts-ignore
const {folderData = []} = location.state;
// console.log(tokens,sitesId,drivesId,'yjytjtyjtj')
// console.log(folderData,'yyjyjyjyjyyj')

const filterdImagesData = folderData?.filter((person:any)=> person.file.mimeType== "image/jpeg")
console.log(filterdImagesData,'Images')

const filterdVideoData = folderData?.filter((person:any)=> person.file.mimeType== 'video/mp4')
console.log(filterdVideoData,'Videos')


  return (
    // <Grid  >
    // <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", paddingRight:"20px" }}>
    //     {folderData && folderData?.map((step: any, indx: any) => {
    //             // if (step.fields.ContentType == "Picture") {
    //               return (
    //                 <div key={indx} >
    //                   <img
    //                     src={step.webUrl}
    //                     alt="Gallery"
    //                     // className={classes.galleryImageWidth}
    //                     style={{width:"200px"}}
    //                   />
    //                 </div>
    //               );
    //             // }
    //           })}
             
    // </div>
    // </Grid>
    <div>

    <Container className={classes.contentEditorWidth}>
        <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
            <IconText />
        </Paper>
        <Card className={classes.cardHeight} elevation={0}>
            <Paper className={classes.innerBackground}>
                <div className={classes.innerBannerOverlay}></div>
                <Paper className={classes.contentHeader} elevation={0}>
                    <Typography className={classes.breadcrumbs} variant="h6">

                        <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                            News
                        </Link>
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
                            <Link className={classes.breadLinks} color="inherit" href="/GalleryFolder">
                            <Typography>Gallery Folders </Typography>
                                </Link> 
                            <Typography>Images </Typography>
                            <Typography>Videos </Typography>

                        </Breadcrumbs>
                    </Typography>
                </Paper>
            </Paper>
        </Card>
        <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
            <Grid item xs={12} style={{ backgroundColor: "white" }}>
            <Box style={{ margin: "10px", width:"150px", display:"flex", justifyContent:"space-between" }}>
                <p style={{ color: "#39c8cf", }}>Images</p>
                 
                <p style={{ color: "#39c8cf", }}>Videos</p>
            </Box>
            
            </Grid>
        </Paper>
    </Container>
</div>
  )
}

export default FolderItems