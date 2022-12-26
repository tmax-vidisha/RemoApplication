import React from 'react';
import { useState } from 'react';
import FileUpload from "react-material-file-upload";
import { Grid } from '@mui/material';


const DragFile = () => {
    const [files, setFiles] = useState<File[]>([]);
   
    // const handleChange = (file: any) => {
    //     setFile(file);
    // };
    return (
        <div>
            <Grid style={{ textAlign: "left", marginLeft: "0%", alignItems: "left" }} >
                <FileUpload value={files} onChange={setFiles} />
            </Grid>
        </div>
    );
};

export default DragFile;