import React from 'react'

import { Grid } from '@mui/material';


interface IFolderProps {
  data: any,
  error: any,
  isLoading: any,
  // onClick?: (id: string, name: string) => void;
  // dataItem:any,
  // dataItemError:any,
  // dataItemIsLoading:any
}
const FolderItems: React.FC<IFolderProps> = (props: IFolderProps) => {
  const { data, error, isLoading } = props
  return (

    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", paddingRight:"20px" }}>
      {data?.response && data?.response?.map((step: any, indx: any) => {
        // if (step.fields.ContentType == "Picture") {
        return (
          <Grid key={indx}   >

            <div>
              {data?.response && data?.response?.map((step: any, indx: any) => {
                // if (step.fields.ContentType == "Picture") {
                return (
                  <div key={indx} >

                    <img
                      src={step.webUrl}
                      alt="Gallery"
                    // className={classes.galleryImageWidth}
                    style={{width:"200px"}}
                    />

                  </div>

                );
                // }
              })}
            </div>
          </Grid>
        )
      }
      )}
       </div>

  )

}
export default FolderItems;