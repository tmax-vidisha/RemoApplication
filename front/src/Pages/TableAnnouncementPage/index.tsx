import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './../../Components/WorkSpaceOne/SideBar';
import TableAnnouncement from './../../Components/Announcement/TableAnnouncement';
import { useStyles } from './Styles';
import {useUploadItemInAnnouncementMutation,useGetLatestAnnouncementQuery} from '../../services/contentEditor'
import useCustom from '../../hooks/useCustom';

const TableAnnouncementPage = () => {
    const classes=useStyles();
    const [sendItem,{data:createdResponse,isLoading:createdLoading,isSuccess:createdSuccess}] = useUploadItemInAnnouncementMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetLatestAnnouncementQuery(token)
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
    if(createdLoading){
        console.log('Loading')
     }else if(createdSuccess){
       console.log(createdResponse?.response,'created')
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
                       data={data}
                       isLoading={isLoading}
                       isSuccess={isSuccess}
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