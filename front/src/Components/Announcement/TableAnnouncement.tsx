import { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';
import Announcement from './index';
import { AppBar, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, TextField, Toolbar } from '@mui/material';
import { useStyles } from './Styles';
import Dropzone from "react-dropzone";
import title from '../../Assets/Images/title.svg';
import image from '../../Assets/Images/image.svg';
import isActive from '../../Assets/Images/isActive.svg';
import Attachment from '../../Assets/Images/Attachment.svg';
import recipientEmail from '../../Assets/Images/recipientEmail.svg';
import shareasemail from '../../Assets/Images/shareasemail.svg';
import descripton from '../../Assets/Images/description.svg';
import comments from '../../Assets/Images/comments.svg';
import like1 from '../../Assets/Images/like1.svg'
import save from '../../Assets/Images/save.svg'
import cancel from '../../Assets/Images/cancel.svg'
import copylink from '../../Assets/Images/copy link.svg';
// import cancel from  '../../Assets/Images/cancel.svg';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';


const renderCell = (params: any) => {
  return (
    <div>
      <img src={activeView} alt='' />

    </div>
  )
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Title', headerName: 'Title', width: 200 },
  { field: 'Description', headerName: 'Description', width: 400 },
  { field: 'Image', headerName: 'Image', width: 130 },
  { field: 'Modified On', headerName: 'Modified On', width: 130 },

  { field: 'IsActive', headerName: 'IsActive', type: 'image', width: 130 },
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
  { id: 1, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: activeView, EnableLikes: 'Jon', EnableComments: 35, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 2, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Lannister', EnableLikes: 'Cersei', EnableComments: 42, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 3, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Lannister', EnableLikes: 'Jaime', EnableComments: 45, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 4, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Stark', EnableLikes: 'Arya', EnableComments: 16, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 5, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Targaryen', EnableLikes: 'Daenerys', EnableComments: null, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 6, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Melisandre', EnableLikes: null, EnableComments: 150, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 7, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Clifford', EnableLikes: 'Ferrara', EnableComments: 44, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 8, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Frances', EnableLikes: 'Rossini', EnableComments: 36, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
  { id: 9, Title: 'Milestone comes as DP World marks a decade of partnership', Description: 'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near', Image: activeView, ModifiedOn: '10 months ago', IsActive: 'Roxie', EnableLikes: 'Harvey', EnableComments: 65, ShareAsEmail: 'info@gmail.com', RecipientEmail: 'contact@gmail.com' },
];

const TableAnnouncement = () => {
  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles: any) =>
    setFileNames(acceptedFiles.map((file: any) => file.name));

  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: any) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: any) => {
    setChecked([event.target.checked, checked[1]]);
  };
  return (
    <div className={classes.MainPart}>
      <Grid className={classes.upperPart}>
        <Grid>Announcement</Grid>
        <Grid className={classes.new}><Button onClick={handleClickOpen} >+ New</Button>
          <Dialog
            classes={{
              paper: classes.newPosOfDialog
            }}
            open={open}
            onClose={handleClose}
            style={{ marginTop: "66px", height: "650px" }}
          >
            <DialogTitle id="alert-dialog-title" >
              <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid>
                  <Button >
                    <img src={save} alt="" style={{ width: "13px", marginRight: "5px",}} />
                    <span style={{color:"gray", textTransform:"capitalize"}}>Save</span>
                  </Button>
                  <Button>
                    <img src={cancel} alt="" style={{ width: "13px", marginRight: "5px" }} />
                    <span style={{color:"gray", textTransform:"capitalize"}}> Cancel</span> 
                  </Button>
                  <Button>
                    <img src={copylink} alt="" style={{ width: "12px", marginRight: "5px" }} />
                    <span style={{color:"gray", textTransform:"capitalize"}}> Copy Link</span> 
                  </Button>
                </Grid>
                <Grid>
                  <Button onClick={handleClose}>
                    <img src={cancel} alt="" style={{ width: "13px" }} />
                  </Button>
                </Grid>
              </Grid>
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Divider />
                <p style={{ textAlign: "left" }}>New Item</p>
              </DialogContentText>

              <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                <img src={title} alt="" style={{ width: "13px", marginRight: "5px" }} />
                Title
              </InputLabel>
              <TextField
                id="outlined-adornment-weight"
                className={classes.span}
                style={{ width: "100%" }}
              />
              <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={descripton} alt="" style={{ width: "13px", marginRight: "5px" }} />
                Description
              </InputLabel>
              <TextField
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
              <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={image} alt="" style={{ width: "13px", marginRight: "5px" }} />
                Image
              </InputLabel>
              <Dropzone onDrop={handleDrop} >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: classes.dropZone })}>
                    <input {...getInputProps()} />
                    <p>Drag'n'drop files, or click to select files</p>
                  </div>
                )}
              </Dropzone>

              <Grid>
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                  <Box>
                    <img src={isActive} alt="" style={{ width: "15px", marginRight: "15px" }} />
                    <span>IsActive</span>
                  </Box>
                  <Box style={{ display: 'flex', }}>
                    <FormControlLabel
                      label="Yes"
                      control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                    />
                    <FormControlLabel
                      label="No"
                      control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
                    />
                  </Box>

                </Box>
                <Grid sx={{ display: 'flex', justifyContent: "space-between" }}>
                  <Box>
                    <img src={like1} alt="" style={{ width: "15px", marginRight: "15px" }} />
                    <span>EnableLikes </span>
                  </Box>
                  <Box style={{ display: 'flex', }}>

                    <FormControlLabel
                      label="Yes"
                      control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                    />
                    <FormControlLabel
                      label="No"
                      control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
                    />
                  </Box>

                </Grid>
              </Grid>
              <Grid>

                <Grid>
                  <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box>
                      <img src={comments} alt="" style={{ width: "15px", marginRight: "15px" }} />
                      <span> EnableCommands</span>

                    </Box>
                    <Box style={{ display: "flex" }}>
                      <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
                      />
                    </Box>

                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box>
                      <img src={shareasemail} alt="" style={{ width: "15px", marginRight: "15px" }} />
                      <span>  ShareAsEmail</span>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <FormControlLabel
                        label="Yes"
                        control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
                      />
                    </Box>

                  </Box>

                </Grid>
              </Grid>


              <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={recipientEmail} alt="" style={{ width: "13px", marginRight: "15px" }} />
                RecipentEmail
              </InputLabel>
              <TextField
                id="outlined-adornment-weight" sx={{ width: "100%" }} />
              <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                <img src={Attachment} alt="" style={{ width: "13px", marginRight: "15px" }} />
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
            </DialogContent>
            <DialogActions>
              <Grid style={{ alignItems: "left", marginRight: "280px", marginBottom:"10px" }}>
               
                <Button onClick={handleClickOpen2} style={{color:"gray", textTransform:"capitalize"}}>Preview</Button>
                <Dialog
                  classes={{
                    paper: classes.newPosOfDialog
                  }}
                  open={open2}
                  onClose={handleClose2}
                  style={{ marginTop: "66px", height: "650px" }}
                >
                  <DialogTitle id="alert-dialog-title" >
                    <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                      <Grid>
                        <Button>
                          <img src={save} alt="" style={{ width: "13px", marginRight: "5px", textTransform: "capitalize" }} />
                          <span style={{color:"gray", textTransform:"capitalize"}}>Save</span>
                        </Button>
                        <Button>
                          <img src={cancel} alt="" style={{ width: "12px", marginRight: "5px" }} />
                          <span style={{color:"gray", textTransform:"capitalize"}}>Cancel</span>
                        </Button>
                        
                      </Grid>
                      <Grid>
                        <Button onClick={handleClose}>
                          <img src={cancel} alt="" style={{ width: "13px" }} />
                        </Button>
                      </Grid>
                    </Grid>
                  </DialogTitle>

                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Divider />
                      <p style={{ textAlign: "left" }}>New Item</p>
                    </DialogContentText>

                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.label} style={{ textAlign: "left", margin: "10px" }}>
                      <img src={title} alt="" style={{ width: "13px", marginRight: "5px" }} />
                      Title
                    </InputLabel>
                    <TextField
                      id="outlined-adornment-weight"
                      className={classes.span}
                      style={{ width: "100%" }}
                    />
                    <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                      <img src={descripton} alt="" style={{ width: "13px", marginRight: "5px" }} />
                      Description
                    </InputLabel>
                    <TextField
                      id="outlined-multiline-static"
                      // label="Multiline"
                      multiline
                      rows={4}
                      style={{ width: "100%" }}
                    />
                    <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                      <img src={image} alt="" style={{ width: "13px", marginRight: "5px" }} />
                      Image
                    </InputLabel>
                    <Dropzone onDrop={handleDrop} >
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: classes.dropZone })}>
                          <input {...getInputProps()} />
                          <p>Drag'n'drop files, or click to select files</p>
                        </div>
                      )}
                    </Dropzone>

                    <Grid>
                      <Box sx={{ display: 'flex', justifyContent: "space-between", marginRight:"200px" }}>
                        <Box>
                          <img src={isActive} alt="" style={{ width: "15px", marginRight: "15px" }} />
                          <span>IsActive</span>
                        </Box>
                        <Box>
                          <FormControlLabel
                            label="Yes"
                            control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                          />
                         
                        </Box>

                      </Box>
                      <Grid sx={{ display: 'flex', justifyContent: "space-between", marginRight:"200px" }}>
                        <Box>
                          <img src={like1} alt="" style={{ width: "15px", marginRight: "15px" }} />
                          <span>EnableLikes </span>
                        </Box>
                        <Box>

                          <FormControlLabel
                            label="Yes"
                            control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                          />
                        </Box>

                      </Grid>
                    </Grid>
                    <Grid>

                      <Grid>
                        <Box sx={{ display: 'flex', justifyContent: "space-between",marginRight:"200px" }}>
                          <Box>
                            <img src={comments} alt="" style={{ width: "15px", marginRight: "15px" }} />
                            <span> EnableCommands</span>

                          </Box>
                          <Box>
                          <FormControlLabel
                              label="No"
                              control={<Checkbox checked={checked[1]} onChange={handleChange1} />}
                            />
                          </Box>

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "space-between",marginRight:"200px" }}>
                          <Box>
                            <img src={shareasemail} alt="" style={{ width: "15px", marginRight: "15px" }} />
                            <span>  ShareAsEmail</span>
                          </Box>
                          <Box>
                            <FormControlLabel
                              label="No"
                              control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
                            />
                            
                          </Box>

                        </Box>

                      </Grid>
                    </Grid>


                    <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                      <img src={recipientEmail} alt="" style={{ width: "13px", marginRight: "15px" }} />
                      RecipentEmail
                    </InputLabel>
                    <TextField
                      id="outlined-adornment-weight" sx={{ width: "100%" }} />
                    <InputLabel htmlFor="input-with-icon-adornment" style={{ textAlign: "left", margin: "10px" }}>
                      <img src={Attachment} alt="" style={{ width: "13px", marginRight: "15px" }} />
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
                  </DialogContent>
                  <DialogActions>
                    <Grid style={{ marginRight: "350px", marginBottom:"5px" }}>
                      <Button onClick={handleClose2} style={{backgroundColor:"#009BAD", color:"white", textTransform:"capitalize"}}>Create</Button>
                      <Button onClick={handleClose2} autoFocus>
                        Cancel
                      </Button>

                    </Grid>

                  </DialogActions>

                </Dialog>
              
                <Button onClick={handleClose} style={{color:"white", textTransform:"capitalize", backgroundColor:"#1dd0d8", marginRight:"5px"}}>Save</Button>
                <Button onClick={handleClose} style={{color:"white", textTransform:"capitalize", backgroundColor:"#1dd0d8"}}>
                  submit
                </Button>
                <Button>Cancel</Button>
              </Grid>

            </DialogActions>

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