import React,{useState} from 'react';
import { Container, Paper, Card, Typography, Link, Grid, Box,Stack } from '@mui/material';
import IconText from '../Header/IconText';
import  Breadcrumbs  from '@mui/material/Breadcrumbs';
import  NavigateNextIcon  from '@mui/icons-material/NavigateNext';
import {
    NavLink as RouterNavLink,

} from "react-router-dom";
import rashid from '../../Assets/Images/rashid.jpg';
import scotish from '../../Assets/Images/scotish.jpg';
import recedent from '../../Assets/Images/recedent.jpg';
import flight from '../../Assets/Images/flight.jpg';
import prince from '../../Assets/Images/prince.jpg';
import { useStyles } from './Styles';
import FolderItems from './FolderItems';


const post = [
    {
        id: 1,
        image: <img src={scotish} alt="sco" style={{ width: "180px", height: "100px", borderRadius: "8px" }} />,
        title: "science",
       
    },
    {
        id: 2,
        image: <img src={recedent} alt="sco" style={{ width: "180px", height: "100px", borderRadius: "8px" }} />,
        title: "science",
    },
    {
        id: 3,
        image: <img src={flight} alt="sco" style={{ width: "180px", height: "100px", borderRadius: "8px" }} />,
        title: "Health",
    },
    {
        id: 4,
        image: <img src={prince} alt="sco" style={{ width: "180px", height: "100px", borderRadius: "8px" }} />,
        title: "Health",
    },
    {
        id: 5,
        image: <img src={prince} alt="sco" style={{width: "180px", height: "100px", borderRadius: "8px" }} />,
        title: "Health",
    },
    {
        id: 6,
        image: <img src={scotish} alt="sco" style={{ width: "180px", height: "100px", borderRadius: "8px" }} />,
        title: "science",
    },

]
interface IFolderProps {
    data: any,
    error: any,
    isLoading: any,
    onClick?: (id: string, name: string) => void;
    dataItem:any,
    dataItemError:any,
    dataItemIsLoading:any
  }
const ImagesVideos: React.FC<IFolderProps> = (props: IFolderProps) => {
// const ImagesVideos = () => {
    const classes = useStyles();
    const { data, error, isLoading,onClick,dataItem,dataItemError,dataItemIsLoading } = props
    const [show,setShow] = useState<boolean>(true);
    return (
        
        // <div>
        //     <Container className={classes.contentEditorWidth}>
        //         <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
        //             <IconText />
        //         </Paper>
        //         <Card className={classes.cardHeight} elevation={0}>
        //             <Paper className={classes.innerBackground}>
        //                 <div className={classes.innerBannerOverlay}></div>
        //                 <Paper className={classes.contentHeader} elevation={0}>
        //                     <Typography className={classes.breadcrumbs} variant="h6">

        //                         <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
        //                             News
        //                         </Link>
        //                     </Typography>
        //                     <Typography variant="caption" display="block" gutterBottom>
        //                         <Breadcrumbs
        //                             className={classes.breadcrumbs}
        //                             separator={<NavigateNextIcon fontSize="small" />}
        //                             aria-label="breadcrumb"
        //                         >
        //                             <Link className={classes.breadLinks} color="inherit" href="/">
        //                                 Home
        //                             </Link>
        //                             <Typography>
                                        
        //                                    Gallery Folders
        //                                 </Typography>
                                   
        //                         </Breadcrumbs>
        //                     </Typography>
        //                 </Paper>
        //             </Paper>
        //         </Card>
        //         <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >

        //             <Grid>
        //                 <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
        //                     <Grid item xs={12}>
        //                         <Box style={{ margin: "10px", textAlign: "left" }}><p style={{ color: "#39c8cf", }}>Events</p></Box>
        //                         <Grid style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", marginBottom:"20px" }}>
        //                             {data?.response && data?.response?.map((item: any) => (
        //                                 <Grid>
        //                                     <Box style={{ width: "180px", height: "100px", margin:"20px" }}>
        //                                         {/* {item.image} */}
        //                                     </Box>
        //                                     <Typography 
        //                                       style={{  fontSize: "12px", color: "gray", textAlign:"left", marginLeft:"20px" }}
        //                                       onClick={()=>onClick?.(item.id,item.name)}
        //                                     >
        //                                         {item.name} 
        //                                     </Typography>
        //                                 </Grid>
        //                             ))
        //                             }
        //                         </Grid>


        //                     </Grid>
                           

        //                 </Stack>

        //             </Grid >
        //         </Paper>


        //     </Container>
        // </div>
        <div>
         {show ? 
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
                                       <Typography>
                                           
                                              Gallery Folders
                                           </Typography>
                                      
                                   </Breadcrumbs>
                               </Typography>
                           </Paper>
                       </Paper>
                   </Card>
                   <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
   
                       <Grid>
                           <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
                               <Grid item xs={12}>
                                   <Box style={{ margin: "10px", textAlign: "left" }}><p style={{ color: "#39c8cf", }}>Events</p></Box>
                                   <Grid style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", marginBottom:"20px" }}>
                                       {data?.response && data?.response?.map((item: any) => (
                                           <Grid>
                                               <Box style={{ width: "180px", height: "100px", margin:"20px" }}>
                                                   {/* {item.image} */}
                                               </Box>
                                               <Typography 
                                                 style={{  fontSize: "12px", color: "gray", textAlign:"left", marginLeft:"20px" }}
                                                 onClick={()=>{onClick?.(item.id,item.name) ;setShow(!show)}}
                                               >
                                                   {item.name} 
                                               </Typography>
                                           </Grid>
                                       ))
                                       }
                                   </Grid>
   
   
                               </Grid>
                              
   
                           </Stack>
   
                       </Grid >
                   </Paper>
   
               </Container>

=======

        //     </Container>
        // </div>
        <div>
         {show ? 
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
                                       <Typography>
                                           
                                              Gallery Folders
                                           </Typography>
                                      
                                   </Breadcrumbs>
                               </Typography>
                           </Paper>
                       </Paper>
                   </Card>
                   <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
   
                       <Grid>
                           <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
                               <Grid item xs={12}>
                                   <Box style={{ margin: "10px", textAlign: "left" }}><p style={{ color: "#39c8cf", }}>Events</p></Box>
                                   <Grid style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", marginBottom:"20px" }}>
                                       {data?.response && data?.response?.map((item: any) => (
                                           <Grid>
                                               <Box style={{ width: "180px", height: "100px", margin:"20px" }}>
                                                   {/* {item.image} */}
                                               </Box>
                                               <Typography 
                                                 style={{  fontSize: "12px", color: "gray", textAlign:"left", marginLeft:"20px" }}
                                                 onClick={()=>{onClick?.(item.id,item.name) ;setShow(!show)}}
                                               >
                                                   {item.name} 
                                               </Typography>
                                           </Grid>
                                       ))
                                       }
                                   </Grid>
   
   
                               </Grid>
                              
   
                           </Stack>
   
                       </Grid >
                   </Paper>
   
               </Container>
         
         

         :
         <div>
        <FolderItems
         data={dataItem}
         error={dataItemError}
         isLoading={dataItemIsLoading}
         
         
         /></div>
         
         
         }
        
        
        
        </div>
    );
};

export default ImagesVideos;