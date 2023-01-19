import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './../../Components/WorkSpaceOne/SideBar';
import TableAnnouncement from './../../Components/Announcement/TableAnnouncement';
import { useStyles } from './Styles';
import {useUploadItemInAnnouncementMutation} from '../../services/contentEditor'


const TableAnnouncementPage = () => {
    const classes=useStyles();
    const [sendItem] = useUploadItemInAnnouncementMutation();
   
    const  sendData= async(obj:any) =>{

      console.log(obj,'hgfhgfhfgjtjyj')
        // console.log(name,'uuuuu')
      //   const {name ,lastModified,lastModifiedDate,size,type,webkitRelativePath } = data

      //   const see ={
      //       name,
      //       lastModified,
      //       lastModifiedDate,
      //       size,
      //       type,
      //       webkitRelativePath
      //   }
      //   const Data = {
      //       names:name,
      //      fileSelected:data
      //  }
      await sendItem(obj)
    }
    return (
        <div  style={{ margin: "30px", }}>
            <Grid container item xs={12} className={classes.bigPaper}>
                <Grid item xs={1}>
                    <SideBar />
                </Grid>
                <Grid item xs={11} >
                    <TableAnnouncement
                       onClick={sendData}
                    
                    />
                    {/* <AnnouncementInputPage/>
                    <AnnouncementPage/> */}
                    {/* <AnnouncementReadMore/> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default TableAnnouncementPage;