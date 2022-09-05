import axios from 'axios'
import express,{Request,Response} from "express";
// const qs = require('qs');
import fetch from'node-fetch'
// var multipart = require('connect-multiparty');  
import upload from 'express-fileupload';
// import {upload} from “express-fileupload”;
// import * as XLSX from 'xlsx';
import xlsx from 'node-xlsx';
import { Document, Packer, Paragraph, TextRun } from "docx";
import PptxGenJS from 'pptxgenjs';
import asyncHandler from '../../middleware/asyncHandler'
// import docx from 'docx';
const check ="https://graph.microsoft.com/v1.0/me/drive/root/children?$filter=startswith(name,'Agr.docx')"
// const { Document, Packer, Paragraph, TextRun } = docx;
const app = express();
// app.use(upload());
// app.use(express.urlencoded({ extended: true }));
// var multipartMiddleware = multipart({ maxFieldsSize: (20 * 1024 * 1024) });
// app.use(multipartMiddleware);

const uploadItemInOneDrive = asyncHandler(async(req:Request, res:Response) => {

    // console.log(req.body)
    // const {token} = req.params
    
    console.log(req.headers.authorization,'tssccccttddddttttvvvvvtttttttyy')
    const  token = req.headers.authorization
    const {  name } = req.body
  
   


    if(!token ){
   
    return res.status(404).json({
        success: false,
        error: "No Token found"
    });
  
    }else {
        console.log('ooo')
    //     const response = 
    //     // await axios.get('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location', {
    //       await axios.put(`https://graph.microsoft.com/v1.0/me/drive/root:/${name}:/content`, {
    //       headers: {
    //           'Authorization': `Bearer ${token} `,
    //           'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            
    //         },
    //         body:blobw
          
    //   })
    //  console.log(response,'ll')
    // const res = await fetch(
    
    //       //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,
  
    //       //https://graph.microsoft.com/v1.0/me/drive/root/children
  
    //      // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,
  
    //         `https://graph.microsoft.com/v1.0/me/drive/root:/${name}:/content`,
  
    //         {
  
    //           method: 'PUT',
  
    //           headers: {
  
    //             Authorization: `Bearer ${token}`,
  
    //            //'Content-Type': 'application/json'
  
    //             // 'Content-Type': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    //             'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    //           //  'Content-Type': 'application/vnd.ms-excel'
  
    //             //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'
  
    //           //   'Content-Type': 'text/plain'
  
    //       //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"
  
    //           },
    //          //@ts-ignore
    //           body:blobw
  
    //         })
    //         console.log(res,'kks')

    //xlsx file
    const data = [
      [" ", " "],
    ];
    //@ts-ignore
    var buffer = xlsx.build([{name: '', data: data}]);
    

    //docx file
    const doc = new Document({
      sections: [{
          properties: {},
          children: [
              new Paragraph({}),
          ],
      }],
  });

  const b64string = await Packer.toBase64String(doc);
  const rrrr = Buffer.from(b64string, 'base64')


  //pptx  file
  let pres = new PptxGenJS();
  //@ts-ignore
  // const pptData = await pres.write( 'base64')
  // Ex using: `const app = express();``
const eeee = await pres.stream()
//@ts-ignore
const www = Buffer.from(eeee, "binary")


     const result = await fetch(

        //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,

        //https://graph.microsoft.com/v1.0/me/drive/root/children

       // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,

          `https://graph.microsoft.com/v1.0/me/drive/root:/${name}:/content`,

          {

            method: 'PUT',

            headers: {

              Authorization: `Bearer ${token}`,

             //'Content-Type': 'application/json'

            //  'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

            'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            // 'Content-Type': "application/vnd.openxmlformats-officedocument.presentationml.presentation",

            //  'Content-Type': 'application/vnd.ms-excel'

              //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'

            //   'Content-Type': 'text/plain'

        //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"

            },
           //@ts-ignore
            body:rrrr

          })

        //   console.log(name,"upload excel file");

      console.log(result)










    res.status(200).json({
        success: true,
         response:result
  
     });
  
    
   }
  
})


export {
    uploadItemInOneDrive
}