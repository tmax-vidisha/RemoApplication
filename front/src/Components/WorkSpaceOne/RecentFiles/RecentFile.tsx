import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Link} from '@mui/material';
import React from 'react'
import moment from "moment";
// import useCustom from '../../../hooks/useCustom';
// import {useGetAllRecentItemsQuery} from '../../../services/graph'

interface IFolderProps {
    data: any,
    error: any,
    isLoading: any,
}
const RecentFile: React.FC<IFolderProps> = (props: IFolderProps) =>{
    const {data,isLoading,error } = props
//const RecentFile = () => {
    // const { token } = useCustom();
    // const { data, error, isLoading } = useGetAllRecentItemsQuery(token);
    // console.log(data,'rrreecceebb')
  return (
    <Grid style={{marginTop:"30px", marginRight:"15px"}}>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Last Modified By</TableCell>
                    <TableCell align="right">Last Modified Date</TableCell>
                    <TableCell align="right">File Size</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                        {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.lastModifiedBy}</TableCell>
                                <TableCell align="right">{row.ModifiedDate}</TableCell>
                                <TableCell align="right">{row.fileSize}</TableCell>
                                <TableCell align="right">{row.Actions}</TableCell>
                            </TableRow>
                        ))} */}
                       {data?.response &&
                            data?.response.map((item: any, index: any) => {
                                //   const { fields = {} } = item;
                                
                                // const  Url= item["@microsoft.graph.downloadUrl"];
                                // console.log(Url,'llll')
                                //   // console.log(fields,'yjyjyjyjyj')
                                //   var eventTitle = fields?.Title;
                                //   console.log(eventTitle,'yjyjyjyjyj')
                                //   var eventStart = moment(fields?.EventDate).format("llll");
                                //   var eventDate = moment(fields?.EndDate).format("llll");

                                //   var eventIsActive = fields.IsActive;
                                // let createdMonth = moment(item.lastModifiedDateTime).format("MMM");
                                // let createdYear = moment(item.lastModifiedDateTime).format("YYYY");
                                let createdDate = moment(item.lastModifiedDateTime).format("DD-MMM-YYYY");
                                //   var createdDate = moment(
                                //     item.lastModifiedDateTime
                                //   ).fromNow();
                                // let result = (item?.folder === undefined) ? item?.webUrl :'';
                                // let result ; 
                                // if(item?.folder === undefined){
                                //   result= item?.webUrl
                                // }
                                return (
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell component="th" scope="row">
                                            {/* <Link 
                                            onClick={()=>{
                                                // folderClickHandler(item.id,item.name)
                                            //  if(item.name.includes('.txt') || item.name.includes('.xlsx') || item.name.includes('.docx')  || item.name.includes('.pptx')){
                                                if(item.folder === undefined){
                                            //   setUrl(item?.webUrl)
                                                 console.log(item?.webUrl)
                                                 
                                            }else{
                                               
                                                //   handleSubmit(item?.folder);
                                                 console.log(item?.folder)
                                                 folderClickHandler(item.id,item.name)
                                                 setShow(!show)
                                            }
                                        }}
                                        
                                            //   href={`${result}`}
                                            > */}
                                            <Link 
                                            // onClick={() => {
                                            //     setShow(!show)
                                            //     onClick(item.id, item.name, item.folder)
                                            //     //  folderClickHandler(item.id, item.name, item.folder, item?.webUrl)


                                            // }}
                                             href={`${item.webUrl}`}
                                            >
                                                {item.name}
                                            </Link>

                                        </TableCell>
                                        <TableCell align="right">
                                            {item.lastModifiedBy.user.displayName}
                                        </TableCell>
                                        <TableCell align="right">
                                            {createdDate}
                                        </TableCell>
                                        <TableCell align="right">
                                            {item.size}
                                        </TableCell>
                                        <TableCell align="right">
                                            
                                            {/* <Grid style={{ borderRadius: "10px", }} >
                                                    <Button
                                                        id="fade-button"
                                                        aria-controls={openOn ? 'fade-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={openOn ? 'true' : undefined}
                                                        onClick={handleClick}
                                                       
                                                    >

                                                        <img src={actions} alt="actions" />
                                                    </Button>
                                                    <Menu
                                                         id="fade-menu"
                                                         MenuListProps={{
                                                             'aria-labelledby': 'fade-button',
                                                         }}
                                                         anchorEl={anchorEl}
                                                         open={openOn}
                                                         onClose={handleClose}
                                                         TransitionComponent={Fade}
                                                         className={classes.menu}
                                                         
                                                    >

                                                        <MenuItem >
                                                            <div className={classes.items}>
                                                                <img src={openIcon} alt="folder" /> Open
                                                            </div>
                                                           
                                                        </MenuItem>

                                                        <MenuItem>
                                                            <div className={classes.items}>
                                                                <img src={linkIcon} alt="linkIcon" /> Copy Link
                                                            </div>

                                                        </MenuItem>
                                                        <MenuItem>
                                                            <div className={classes.items}>
                                                                <img src={downloadIcon} alt="downloadIcon"  /> Download
                                                            </div>
                                                            
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <div className={classes.items}>
                                                                
                                                                <img src={deleteIcon} alt="deleteIcon"  /> Delete
                                                                
                                                            </div>
                                                           
                                                        </MenuItem>
                                                        
                                                    </Menu>
                                                </Grid> */}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                    </TableBody>                  

        </Table>

    </TableContainer>
</Grid>
  )
}

export default RecentFile