
import axios from 'axios'
import express, { Request, Response } from "express";
const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`
const Site_Id = 'tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43'
const Drive_Id = 'b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikN7l5pVNJUCQrB4Gn3-Lhaw'
const rootAllFolders= "https://graph.microsoft.com/v1.0/sites/tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43/drives/b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikN7l5pVNJUCQrB4Gn3-Lhaw/root/children"
const filesindisde = "https://graph.microsoft.com/v1.0/sites/tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43/drives/b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikN7l5pVNJUCQrB4Gn3-Lhaw/items/01DH6IWZ5YTY45TZDOIZH23ZKDMUIR7KMV/children"
import asyncHandler from '../../middleware/asyncHandler'

const getAllFoldersSharepointLibrary = asyncHandler(async(req:Request, res:Response) => {
    console.log(req.headers.authorization,'tfssadsadsadasdsaasdasdsadsadsadssccccttddddttttvvvvvtttttttyy')
  
    // const  token = req.headers.authorization
    // console.log(req.body)
    const {token} = req.params
    //  const {token} = req.body
    console.log(token,'llll')
    // console.log(req.body,'gregrthtrht')
    if(!token ){
   
    return res.status(404).json({
        success: false,
        error: "No Token found"
    });
  
    }else {
      
      const response = 
      // await axios.get('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location', {
        await axios.get(`${BASE_PATH}/${Site_Id}/drives/${Drive_Id}/root/children`, {
        headers: {
            'Authorization': `Bearer ${token} `,
            'Content-Type': 'application/json'
          
          }
        
    })
  
    // const responseTop = 
    //   // await axios.get('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location', {
    //     await axios.get(`${BASE_PATH}/${Site_Id}/lists/${RemoNews_Id}/items?$expand=fields&$top=5`, {
    //     headers: {
    //         'Authorization': `Bearer ${token} `,
    //         'Content-Type': 'application/json'
          
    //       }
        
    // })
    console.log(response.data.value,"meetingssssssssssssssssssssssss" )
    res.status(200).json({
      success: true,
      response :response.data.value,
    //   response1:responseTop.data.value
  
  
   });
  
    }
    
  
  })

  const getAllItemsInFolderSharepointLibrary = asyncHandler(async(req:Request, res:Response) => {
    console.log(req.headers.authorization,'tfssadsadsadasdsaasdasdsadsadsadssccccttddddttttvvvvvtttttttyy')
  
     const  token = req.headers.authorization
    // console.log(req.body)
    // const {token} = req.params
    //  const {token} = req.body
    const {  ItemId,Name } = req.body
    console.log(Name,ItemId)
    console.log(token,'llll')
    // console.log(req.body,'gregrthtrht')
    if(!token ){
   
    return res.status(404).json({
        success: false,
        error: "No Token found"
    });
  
    }else {
      
      const response = 
      // await axios.get('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location', {
        await axios.get(`${BASE_PATH}/${Site_Id}/drives/${Drive_Id}/items/${ItemId}/children`, {
        headers: {
            'Authorization': `Bearer ${token} `,
            'Content-Type': 'application/json'
          
          }
        
    })
  
    // const responseTop = 
    //   // await axios.get('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location', {
    //     await axios.get(`${BASE_PATH}/${Site_Id}/lists/${RemoNews_Id}/items?$expand=fields&$top=5`, {
    //     headers: {
    //         'Authorization': `Bearer ${token} `,
    //         'Content-Type': 'application/json'
          
    //       }
        
    // })
    console.log(response.data.value,"meetingssssssssssssssssssssssss" )
    res.status(200).json({
      success: true,
      response :response.data.value,
    //   response1:responseTop.data.value
  
  
   });
  
    }
    
  
  })

  export {
   getAllFoldersSharepointLibrary,
   getAllItemsInFolderSharepointLibrary
    

}