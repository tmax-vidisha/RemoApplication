import { Card } from '@mui/material'
import React,{useEffect,useState} from 'react'
// import { BlobServiceClient } from '@azure/storage-blob';
// import azure from 'azure-storage';
//import { useGetAllUsersQuery,useGetAllIntranetQuery } from './services/graph'

import { useGetCeoMessageQuery,
  useGetAnnouncementInfoQuery,
  useGetQuickLinksQuery,
  useGetEmployeeHighLightQuery,
  useGetNewsQuery,
  useGetEventsQuery,
  useGetHeroImageQuery,
  useGetPhotoGalleryQuery,
  useGetTopNavigationQuery,
  useGetRecentFilesQuery,
  useUpdateTokenMutation
 } from './services/APIs'
const My = () => {
  // const { updateRR } =useUpdateTokenMutation();
//   const [updateToken,{data,error,isLoading} ] = useUpdateTokenMutation();
//  console.log(data,'uuuuu')

  // const { data, error, isLoading } = useGetTopNavigationQuery('')
  // console.log(data,'9809090')
  // const { data, error, isLoading } =   useGetRecentFilesQuery('')
//  console.log(data,'9809090')
    // if (!isLoading){
    //   // console.log(data.map((t:any)=> t))
    //   console.log(data[0].fields.ImageURL.Url)
    //   // const [] = data
    // }
    
    // if(isLoading) {
    //   return <p> Loading..</p>
    // }
   
   useEffect(()=>{

    async function Tokem(){
      const response = await fetch('http://localhost:4000/api/v1/token/file');
      // const data = await response.json();
      console.log(response)
    }
    Tokem()
   },[])

  return (
    <>
    <p>CeoMessage</p>
    {/* {isLoading ? (
      <p>Loading...</p>
    ) : data ? (
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    ) : error ? (
      <p>ERROR</p>
    ) : null} */}
    {/* {isLoading ?(
      <p>Loading</p>
    ) : data ? (
        <>
          {data.map((i:any)=>{
            {i.fields.map((o:any)=>{
              {o.map((q:any)=>{
              <h1>  {q.Description}</h1>
              })}
            })}
          })}
         
        </>
      ) : null} */}
      {/* <img  src ={data[0].fields.ImageURL.Url} /> */}
      {/* { data && <img  src ={data.image} />} */}
      
  </>
  )
}

export default My