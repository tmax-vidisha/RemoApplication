import {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from './index';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar } from '@mui/material';
import { useStyles } from './Styles';
import Dropzone from "react-dropzone";
import  title from '../../Assets/Images/title.svg';
import image from  '../../Assets/Images/image.svg';
import isActive from  '../../Assets/Images/isActive.svg';
import  Attachment from  '../../Assets/Images/Attachment.svg';
import  recipientEmail  from  '../../Assets/Images/recipientEmail.svg';
import shareasemail from  '../../Assets/Images/shareasemail.svg';
import descripton  from  '../../Assets/Images/description.svg';
import comments from  '../../Assets/Images/comments.svg';
import like1 from  '../../Assets/Images/like1.svg'
import save from  '../../Assets/Images/save.svg'
import cancel from  '../../Assets/Images/cancel.svg'
import copylink  from  '../../Assets/Images/copy link.svg';
// import cancel from  '../../Assets/Images/cancel.svg';
const renderCell=(params:any)=>{
  return (
    <div>
      <img src={activeView} alt='' />
     
    </div>
  )
}

const columns: GridColDef[] = [
  { field: 'Title', headerName: 'Title', width: 200 },
  { field: 'Description', headerName: 'Description', width: 400 },
  { field: 'Image', headerName: 'Image', width: 130 },
  { field: 'Modified On', headerName: 'Modified On', width: 130 },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'IsActive', headerName: 'IsActive',type: 'image', width: 130 },
  { field: 'EnableLikes', headerName: 'EnableLikes', width: 130 },
  {
    field: 'EnableComments',
    headerName: 'EnableComments',
    type: 'number',
    width: 130,
  },
  {
    field: 'ShareAsEmail',
    headerName: 'ShareAsEmail',
    // description: 'This column has a value getter and is not sortable.',
    type: 'email',
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.EnableLikes || ''} ${params.row.IsActive || ''}`,
  },
  {
    field: 'RecipientEmail',
    headerName: 'RecipientEmail',
    type: 'email',
    width: 160,
  },
];


const rows = [
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView, ModifiedOn : '10 months ago', id: 1, IsActive: activeView, EnableLikes: 'Jon', EnableComments: 35, ShareAsEmail:'info@gmail.com',RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 2, IsActive: 'Lannister', EnableLikes: 'Cersei', EnableComments: 42 ,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
  { Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago',id: 3, IsActive: 'Lannister', EnableLikes: 'Jaime', EnableComments: 45,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 4, IsActive: 'Stark', EnableLikes: 'Arya', EnableComments: 16,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 5, IsActive: 'Targaryen', EnableLikes: 'Daenerys',EnableComments: null,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 6, IsActive: 'Melisandre', EnableLikes: null, EnableComments: 150 ,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 7, IsActive: 'Clifford', EnableLikes: 'Ferrara', EnableComments: 44 , ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 8, IsActive: 'Frances', EnableLikes: 'Rossini',EnableComments: 36, ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,Image:activeView,ModifiedOn : '10 months ago', id: 9, IsActive: 'Roxie', EnableLikes: 'Harvey', EnableComments: 65 ,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
];

const TableAnnouncement = () => {
  const classes=useStyles();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles:any) =>
    setFileNames(acceptedFiles.map((file:any) => file.name));
  return (
    <div className={classes.MainPart}>
      <Grid className={classes.upperPart}>
        <Grid>Announcement</Grid>
        <Grid className={classes.new}><Button  onClick={handleClickOpen} >+ New</Button>
        <Dialog
        classes={{
          paper: classes.newPosOfDialog
        }}
        open={open}
        onClose={handleClose}
        
      >
        <Button>
        <img src = {save} alt=""/>
          Save
        </Button>
        <Button>
        <img src = {cancel} alt=""/>
          Cancel
        </Button>
        <Button>
        <img src = {copylink} alt=""/>
          Copy Link
        </Button>
        <Button>
        <img src = {cancel} alt=""/>
        </Button>
        <Divider/>
       <h1>New Item</h1>
       <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>
        <img src = {title} alt=""/>
         Title
        </InputLabel>
        <TextField
            id="outlined-adornment-weight"
            className={classes.span}
          />
           <InputLabel htmlFor="input-with-icon-adornment">
           <img src = {descripton} alt=""/>
          Description
        </InputLabel>
          <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          
        />
         <InputLabel htmlFor="input-with-icon-adornment">
         <img src = {image} alt=""/>
          Image
        </InputLabel>
        <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: classes.dropZone })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
         <FormControl component="fieldset">
         <FormLabel component="legend">
         <img src = {isActive} alt=""/>
          IsActive
          </FormLabel>
         <FormGroup aria-label="position" row>

         <FormControlLabel
          value="Yes"
          control={<Checkbox />}
          label="Yes"
          labelPlacement="end"
        />
        <FormControlLabel
          value="No"
          control={<Checkbox />}
          label="No"
          labelPlacement="end"
        />
         </FormGroup>
         <FormLabel component="legend">
         <img src = {like1} alt=""/>
          EnableLikes
          </FormLabel>
         <FormGroup aria-label="position" row>

         <FormControlLabel
          value="Yes"
          control={<Checkbox />}
          label="Yes"
          labelPlacement="end"
        />
        <FormControlLabel
          value="No"
          control={<Checkbox />}
          label="No"
          labelPlacement="end"
        />
         </FormGroup>
         <FormLabel component="legend">
         <img src = {comments} alt=""/>
          EnableCommands
          </FormLabel>
         <FormGroup aria-label="position" row>

         <FormControlLabel
          value="Yes"
          control={<Checkbox />}
          label="Yes"
          labelPlacement="end"
        />
        <FormControlLabel
          value="No"
          control={<Checkbox />}
          label="No"
          labelPlacement="end"
        />
        
         </FormGroup>
         <FormLabel component="legend">
         <img src = {shareasemail} alt=""/>
          ShareAsEmail
          </FormLabel>
         <FormGroup aria-label="position" row>

         <FormControlLabel
          value="Yes"
          control={<Checkbox />}
          label="Yes"
          labelPlacement="end"
        />
        <FormControlLabel
          value="No"
          control={<Checkbox />}
          label="No"
          labelPlacement="end"
        />
        
         </FormGroup>
         </FormControl>
         <InputLabel htmlFor="input-with-icon-adornment">
         <img src = {recipientEmail} alt=""/>
            RecipentEmail
        </InputLabel>
        <TextField
            id="outlined-adornment-weight"
            
          />
         <InputLabel htmlFor="input-with-icon-adornment">
         <img src = {Attachment} alt=""/>
          Attachments
        </InputLabel>
        <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: classes.dropZone })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <Button>Preview</Button>
      <Button>Create</Button>
      <Button>Cancel</Button>
      </Dialog>
        
        </Grid>
        </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}


export default TableAnnouncement;