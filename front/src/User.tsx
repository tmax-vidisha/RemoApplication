import React,{useState,useEffect} from 'react'
// import {useGetAllIntranetQuery } from './services/graph'
 import { useGetListInformationQuery} from './services/APIs';
 import { useGetListInfoAnouncementIdQuery } from './services/APIs';
const User = () => {
 
  const { data, error, isLoading } = useGetListInformationQuery('')
  
  const CeoMessageId = data;
  
  // useEffect(()=>{
  //   function sendCeoId(){
  //     if (CeoMessageId) {
  
  
  //       const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ CeoMessageId })
  //       };
  //       fetch('http://localhost:4000/list/idceo', requestOptions)
  //         .then(response => response.json())
  
  //     }
  //   }
  //   sendCeoId()
  
  



  // })

//   function Announcement(){
//     const { data, error, isLoading } = useGetListInfoAnouncementIdQuery('');

//     console.log(data,'Announcement')


//   }
//  Announcement();
  
  return (
    <>
    <p>Users</p>
    {/* {isLoading ? (
      <p>Loading...</p>
    ) : data ? (
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    ) : error ? (
      <p>ERROR</p>
    ) : null} */}
    
  {/* <img src ={'https://remoblobstorage.blob.core.windows.net/candidate/CEOImage.jpg?st=2022-04-27T12%3A58%3A33Z&se=2022-04-27T13%3A58%3A33Z&sp=r&sv=2018-03-28&sr=b&sig=xTS%2FaWc4NkTwZ4r6sYZnKBOzPXM3SoL2N4p1Bi0PSqU%3D'} alt=""/> */}
{/* <img src ={data} alt="" /> */}
{/* {data.filter((p:any) => p.displayName == "CEO Message").map((fp:any) => (
    <li>
      {fp.name}
      {fp.id}
      {fp.webUrl}
    </li>
  ))} */}
  </>
  )
}

export default User