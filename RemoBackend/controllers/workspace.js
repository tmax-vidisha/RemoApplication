const axios = require('axios')
const express = require("express");
const qs = require('qs');
const fetch = require('node-fetch')
const asyncHandler = require('../middleware/asyncHandler')
const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`;
const REMO_SITE_ID = "tmxin.sharepoint.com,1649e6fd-df59-4f03-8e4b-4d765864f406,d2634703-c0cd-42f6-bfb5-c60555dbcb7d"
const createSubSites = async (url, token) => {
    const res = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token} `,
            'Content-Type': 'application/json'
          }
    })
    console.log(res.data)
    //  app.get('/files',(req,res)=>{
    //     res.send(JSON.stringify(res.data))
    //  })
    return res.data.value
    
 }

 const createDrives = async (url, token) => {
    const res = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token} `,
            'Content-Type': 'application/json'
          }
    })
    console.log(res.data)
    //  app.get('/files',(req,res)=>{
    //     res.send(JSON.stringify(res.data))
    //  })
    return res.data.value
    
 }


const getAllSites = asyncHandler(async(req, res) => {
  
     const {token,
        // subSiteId, subDriveId,itemId
    } =  req.params
       
     console.log(token,'hytjyjytjtyjtyjtyj')
    //  console.log(subSiteId,'hytjyjytjfhghrthtrhrthtyjtyjtyj')
    //  console.log(subDriveId,'hytjyjytjbgfbgfbfgbfhghrthtrhrthtyjtyjtyj')
    //  console.log(itemId,'tht67i7i78i8i8i8o8o8o8o8o8ddg')
     // const {token} = req.params
    // const {token} = req.body
    // console.log(token,'llll')
    // console.log(req.body,'gregrthtrht')
    if(!token ){
    // const dataFiles = await createRequset(`${BASE_PATH}/${REMO_SITE_ID}/lists/${Events_Id}/items?$expand=fields`, token )
    // console.log(dataFiles,'dgdfgthtrhytjytjyt')
    // return res.status(200).json({
    //     success: true,
    //     data: dataFiles
    // });
    //  res.send(dataFiles)
    return res.status(404).json({
        success: false,
        error: "No Token found"
    });
}else{
    // if(token && subSiteId && subDriveId && itemId){
    //     const DriveSubItems = await createDrives(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives/${subDriveId}/items/${itemId}/children`,token)
    //     console.log(DriveSubItems,'yhjyjyjyjyjyjyjyjyjyjyj')
    //     res.status(200).json({
    //         // success: true,
    //         DriveSubItems
       
    //        });
    // }
    // if( token && subSiteId && subDriveId  && !itemId ){
    //     const DriveItems = await createDrives(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives/${subDriveId}/root/children`,token)
    //     console.log(DriveItems,'7ugdhthfdvrrvrbrstht7u7u7u')
    //     res.status(200).json({
    //        // success: true,
    //        DriveItems
      
    //       });
    // }


    // if(token && !subSiteId && !subDriveId && !itemId) {
    //  const subSites = await createSubSites(`${BASE_PATH}/${REMO_SITE_ID}/sites`,token)
    //  console.log(subSites,'7u7u7u7u')
     res.status(200).json({
         success: true,
         response:await createSubSites(`${BASE_PATH}/${REMO_SITE_ID}/sites`,token)
        
   
       });
    //  }
    // if(token && subSiteId && !subDriveId && !itemId){
    //     const Drives = await createSubSites(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives`,token)
    //     console.log(Drives,'7ugdhththt7u7u7u')
    //  res.status(200).json({
    //     // success: true,
    //     Drives
   
    //    });
    // }
    

    }
})

const getDrivesofSubSites = asyncHandler(async(req, res) => {
  
    const {token,
        subSiteId, 
    //    subDriveId,itemId
   } =  req.body
      
    console.log(token,'hytjyjytjtyjtyjtyj')
   //  console.log(subSiteId,'hytjyjytjfhghrthtrhrthtyjtyjtyj')
   //  console.log(subDriveId,'hytjyjytjbgfbgfbfgbfhghrthtrhrthtyjtyjtyj')
   //  console.log(itemId,'tht67i7i78i8i8i8o8o8o8o8o8ddg')
    // const {token} = req.params
   // const {token} = req.body
   // console.log(token,'llll')
   // console.log(req.body,'gregrthtrht')
   if(!token ){
   // const dataFiles = await createRequset(`${BASE_PATH}/${REMO_SITE_ID}/lists/${Events_Id}/items?$expand=fields`, token )
   // console.log(dataFiles,'dgdfgthtrhytjytjyt')
   // return res.status(200).json({
   //     success: true,
   //     data: dataFiles
   // });
   //  res.send(dataFiles)
   return res.status(404).json({
       success: false,
       error: "No Token found"
   });
}else{
  
   
   
  
    //    const Drives = await createSubSites(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives`,token)
    //    console.log(Drives,'7ugdhththt7u7u7u')
    res.status(200).json({
       // success: true,
        response:await createSubSites(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives`,token)
  
      });
   
   

   }
})

const getsubItemsroot = asyncHandler(async(req, res) => {
  
    const {token,
       subSiteId, subDriveId,
    //    itemId
   } =  req.body
      
    console.log(token,'hytjyjytjtyjtyjtyj')
   //  console.log(subSiteId,'hytjyjytjfhghrthtrhrthtyjtyjtyj')
   //  console.log(subDriveId,'hytjyjytjbgfbgfbfgbfhghrthtrhrthtyjtyjtyj')
   //  console.log(itemId,'tht67i7i78i8i8i8o8o8o8o8o8ddg')
    // const {token} = req.params
   // const {token} = req.body
   // console.log(token,'llll')
   // console.log(req.body,'gregrthtrht')
   if(!token ){
   // const dataFiles = await createRequset(`${BASE_PATH}/${REMO_SITE_ID}/lists/${Events_Id}/items?$expand=fields`, token )
   // console.log(dataFiles,'dgdfgthtrhytjytjyt')
   // return res.status(200).json({
   //     success: true,
   //     data: dataFiles
   // });
   //  res.send(dataFiles)
   return res.status(404).json({
       success: false,
       error: "No Token found"
   });
}else{
   
   // if( token && subSiteId && subDriveId  && !itemId ){
    //    const DriveItems = await createDrives(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives/${subDriveId}/root/children`,token)
    //    console.log(DriveItems,'7ugdhthfdvrrvrbrstht7u7u7u')
       res.status(200).json({
         success: true,
         response: await createDrives(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives/${subDriveId}/root/children`,token)
     
         });
   // }


   

   }
})

const getsubItemsId = asyncHandler(async(req, res) => {
  
    const {token, subSiteId, subDriveId,itemId
   } =  req.body
      
    console.log(token,'hytjyjytjtyjtyjtyj')
   //  console.log(subSiteId,'hytjyjytjfhghrthtrhrthtyjtyjtyj')
   //  console.log(subDriveId,'hytjyjytjbgfbgfbfgbfhghrthtrhrthtyjtyjtyj')
   //  console.log(itemId,'tht67i7i78i8i8i8o8o8o8o8o8ddg')
    // const {token} = req.params
   // const {token} = req.body
   // console.log(token,'llll')
   // console.log(req.body,'gregrthtrht')
   if(!token ){
   // const dataFiles = await createRequset(`${BASE_PATH}/${REMO_SITE_ID}/lists/${Events_Id}/items?$expand=fields`, token )
   // console.log(dataFiles,'dgdfgthtrhytjytjyt')
   // return res.status(200).json({
   //     success: true,
   //     data: dataFiles
   // });
   //  res.send(dataFiles)
   return res.status(404).json({
       success: false,
       error: "No Token found"
   });
}else{
   // if(token && subSiteId && subDriveId && itemId){
    //    const DriveSubItems = await createDrives(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives/${subDriveId}/items/${itemId}/children`,token)
    //    console.log(DriveSubItems,'yhjyjyjyjyjyjyjyjyjyjyj')
       res.status(200).json({
            success: true,
            response:await createDrives(`${BASE_PATH}/${REMO_SITE_ID}/sites/${subSiteId}/drives/${subDriveId}/items/${itemId}/children`,token)
      
          });
   // }
  


   
   

   }
})

module.exports = {
    getAllSites,
    getDrivesofSubSites,
    getsubItemsroot,
    getsubItemsId
}