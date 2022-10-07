import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import activeView from './../../Assets/Images/activeView.svg';

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
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 1, IsActive: activeView, EnableLikes: 'Jon', EnableComments: 35, ShareAsEmail:'info@gmail.com',RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 2, IsActive: 'Lannister', EnableLikes: 'Cersei', EnableComments: 42 ,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
  { Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago',id: 3, IsActive: 'Lannister', EnableLikes: 'Jaime', EnableComments: 45,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 4, IsActive: 'Stark', EnableLikes: 'Arya', EnableComments: 16,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 5, IsActive: 'Targaryen', EnableLikes: 'Daenerys',EnableComments: null,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 6, IsActive: 'Melisandre', EnableLikes: null, EnableComments: 150 ,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 7, IsActive: 'Clifford', EnableLikes: 'Ferrara', EnableComments: 44 , ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 8, IsActive: 'Frances', EnableLikes: 'Rossini',EnableComments: 36, ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com' },
  {Title: 'Milestone comes as DP World marks a decade of partnership',Description:'DP World Sokhna  has celebrated its 10th anniversary  by announcing it is near' ,ModifiedOn : '10 months ago', id: 9, IsActive: 'Roxie', EnableLikes: 'Harvey', EnableComments: 65 ,ShareAsEmail:'info@gmail.com', RecipientEmail:'contact@gmail.com'},
];

const TableAnnouncement = () => {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor:"white" }}>
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