import { Button, Paper } from '@mui/material'
import React,{useState} from 'react'
// import fs from 'fs'
import useCustom from './hooks/useCustom';

import * as XLSX from 'xlsx';
import { Document, Packer } from 'docx'
import pptxgen from "pptxgenjs";
import useFile from './hooks/useFile';
import PptxGenJS from 'pptxgenjs';
import { useUploadFileOneDriveMutation } from './services/graph';

const UploadFile = () => {
    const {token}  = useCustom();
    const [sendItem] = useUploadFileOneDriveMutation();
    const {excelblob,docxblob,pptxblob}  = useFile();
    const [name,setName] = useState<string>('');
    const [fileSelected, setFileSelected] = useState<string>('');
    const onChange = (e: any) => {
//       var url:any = new URL("https://tmxin-my.sharepoint.com/:x:/g/personal/vidisha_a_tmax_in/EaR3FjDjby9Eu0D6yDhNGrAB6s_j5hN5AGca0YV-k5XWRw?e=uZy4IB");
//       var f:any = new File(url.getFile(),"dummyfile.xlsx");
// console.log(f);

        // const [file] = e.target.files;
        // console.log(file)
        // setName(file.name)
        // setFileSelected(file)
        // const reader = new FileReader();
        //@ts-ignore
    //      reader.readAsBinaryString(file);
        
    // reader.onload= (e) =>{
       
    //   setFileSelected(e.target?.result)
    //   console.log(e.target?.result)

    // }
        // reader.onload = (evt: any) => {
        //   const bstr = evt.target.result;
        //   const wb = XLSX.read(bstr, { type: "binary" });
        //   const wsname = wb.SheetNames[0];
        //   const ws = wb.Sheets[wsname];
        // //   console.log(ws)
        //   //@ts-ignore
        //   const data = (XLSX.utils.sheet_to_csv(ws, { header: 1 }));
        // setFileSelected(data);
        // reader.readAsBinaryString(file);
        // };
        
      };
      const createEmptyExcel = async (): Promise<string> => {

        // const file = await fetch('../../../Assets/Files/Excell.xlsx').then(res => res.blob())
        //   const file = 'qwer.xl'
        // const fileName = 'Exce.xlsx'
//         const stats = fs.statSync(`../../../Assets/Files/${fileName}`);
//      const totalsize = stats.size;
// const readStream = fs.createReadStream(`../../../Assets/Files/${fileName}`);
//@ts-ignore
//  const fileObject = new FileReader(readStream, fileName, totalsize);

        const res = await fetch(

        //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,

        //https://graph.microsoft.com/v1.0/me/drive/root/children

       // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,

          `https://graph.microsoft.com/v1.0/me/drive/root:/${name}:/content`,

          {

            method: 'PUT',

            headers: {

              Authorization: `Bearer ${token}`,

             //'Content-Type': 'application/json'

              'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

            //  'Content-Type': 'application/vnd.ms-excel'

              //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'

            //   'Content-Type': 'text/plain'

        //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"

            },
           //@ts-ignore
            body: fileSelected

          })

          console.log(name,"upload excel file");



         if(res.ok == false) throw new Error(res.statusText)            

        const json = await res.json()

     

        return json.id

       

      }

     //@ts-ignore
    const createAndUpload = async (e:any): Promise<string> => {
      var data = [
        [" ", " "],
        // ["Job Doe", "job@doe.com"],
        // ["Joe Doe", "joe@doe.com"],
        // ["Jon Doe", "jon@doe.com"],
        // ["Joy Doe", "joy@doe.com"]
      ];
      var workbook = XLSX.utils.book_new(),
      worksheet = XLSX.utils.aoa_to_sheet(data);
      workbook.SheetNames.push("First");
      workbook.Sheets["First"] = worksheet;

      var xlsbin = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "binary"
      });
       
      // (C4) TO BLOB OBJECT
      var buffer = new ArrayBuffer(xlsbin.length),
          array = new Uint8Array(buffer);
      for (var i=0; i<xlsbin.length; i++) {
        array[i] = xlsbin.charCodeAt(i) & 0XFF;
      }
      var xlsblob = new Blob([buffer], {type:"application/octet-stream"});
      // delete array; delete buffer; delete xlsbin;
      // console.log(excelblob)
      // setFileSelected(excelblob)
      // console.log(fileSelected)
      var reader = new FileReader();
reader.readAsDataURL(excelblob); 
reader.onloadend = async function() {
  var base64data = reader.result;                
  // console.log(base64data);
  // setFileSelected(base64data)
  // const Data = {
  //    name:'MyName353.xlsx',
  //   blobw:base64data
  // }
  // await sendItem(Data)
  // setFileSelected(base64data)
}
// console.log(fileSelected,'ii')
// const base64data =   Buffer.from(excelblob, 'blob').toString('base64');
// console.log(excelblob[0])
// setFileSelected(excelblob)
// // setFileSelected(excelblob)
// console.log(fileSelected,'hythytytjytj')
const fileName ='tttt.xlsx'
const formData = new FormData();
formData.append("fileName", excelblob);
// formData.append("fileName", fileName);
      const Data = {
       name:'faeer.xlsx',
      //  blobw:fileSelected
     }
    //  console.log(fd)
       await sendItem(Data)
       


      //   const res = await fetch(

      //   //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,

      //   //https://graph.microsoft.com/v1.0/me/drive/root/children

      //  // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,

      //     `https://graph.microsoft.com/v1.0/me/drive/root:/yaRrffa.xlsx:/content`,

      //     {

      //       method: 'PUT',

      //       headers: {

      //         Authorization: `Bearer ${token}`,

      //        //'Content-Type': 'application/json'

      //         'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

      //       //  'Content-Type': 'application/vnd.ms-excel'

      //         //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'

      //       //   'Content-Type': 'text/plain'

      //   //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"

      //       },
      //      //@ts-ignore
      //       body:excelblob

      //     })

      //     console.log(name,"upload excel file");



      //    if(res.ok == false) throw new Error(res.statusText)            

      //   const json = await res.json()

     

      //   return json.id

       

      }

   //@ts-ignore
      const createAndUploadDoc = async (): Promise<string> => {
       
        const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        let doc = new Document({ sections: [] })
        
      // Packer.toBlob(doc).then((blob) => {
      //     const  docblob = blob.slice(0, blob.size, mimeType)
           


      //   })
      const blob = await Packer.toBlob(doc);
     console.log(blob,'kkkk')
     setFileSelected(docxblob)
     const Data = {
      name:'zczxs.docx',
      // blobw:fileSelected
    }
    await sendItem(Data)
        //   const res = await fetch(
  
        //   //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,
  
        //   //https://graph.microsoft.com/v1.0/me/drive/root/children
  
        //  // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,
  
        //     `https://graph.microsoft.com/v1.0/me/drive/root:/Vidrr.docx:/content`,
  
        //     {
  
        //       method: 'PUT',
  
        //       headers: {
  
        //         Authorization: `Bearer ${token}`,
  
        //        //'Content-Type': 'application/json'
  
        //         'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  
        //       //  'Content-Type': 'application/vnd.ms-excel'
  
        //         //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'
  
        //       //   'Content-Type': 'text/plain'
  
        //   //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"
  
        //       },
        //      //@ts-ignore
        //       body:docxblob
  
        //     })
  
        //     console.log(name,"upload excel file");
  
  
  
        //    if(res.ok == false) throw new Error(res.statusText)            
  
        //   const json = await res.json()
  
       
  
        //   return json.id
  
         
  
        }
        //@ts-ignore
        const createAndUploadPPt = async (e:any): Promise<string> => {
       
          let pres = new PptxGenJS();

          // 2. Add a Slide
          let slide = pres.addSlide();
          // let debugSlide = pres.stream
          // 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
          // let textboxText = "Hello World from PptxGenJS!";
          // let textboxOpts = { x: 1, y: 1, color: "363636" };
          //  slide.addText(textboxText, textboxOpts);
          
          // 4. Save the Presentation
        //  let pptx = await  pres.writeFile();
          // console.log(pptx,'kkk')
          //@ts-ignore
          // let debugSlide = pres.stream(); 
          //   console.log(debugSlide)
          // console.log(pres.writeFile());
        //  pres.write('PptxGenJS-blob-test', function(blob){ console.log(blob) }, 'blob');

        // pres.write('blob')
        // .then((data) => {
        //     console.log("write as base64: Here are 0-100 chars of `data`:\n");
        //     //@ts-ignore
        //     console.log(data);
        // })
        // .catch((err) => {
        //     console.error(err);
        // });
        const pptData = await pres.write('blob')
        // console.log(pptData)
        // const [file] = e.target.files;
        // console.log(file,'ll')
        //  setName(file.name)
        console.log(pptxblob)
         setFileSelected(pptxblob)
       
        const Data = {
          name:'yuiop.pptx',
          // blobw:fileSelected
        }
        await sendItem(Data)
          //   const res = await fetch(
    
          //   //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,
    
          //   //https://graph.microsoft.com/v1.0/me/drive/root/children
    
          //  // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,
    
          //     `https://graph.microsoft.com/v1.0/me/drive/root:/VAnrtara.pptx:/content`,
    
          //     {
    
          //       method: 'PUT',
    
          //       headers: {
    
          //         Authorization: `Bearer ${token}`,
    
          //        //'Content-Type': 'application/json'
    
          //         'Content-Type': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    
          //       //  'Content-Type': 'application/vnd.ms-excel'
    
          //         //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'
    
          //       //   'Content-Type': 'text/plain'
    
          //   //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"
    
          //       },
          //      //@ts-ignore
          //       body:pptxblob
    
          //     })
    
          //     console.log(name,"upload excel file");
    
    
    
          //    if(res.ok == false) throw new Error(res.statusText)            
    
          //   const json = await res.json()
    
         
    
          //   return json.id
    
           
    
          }
  return (
    <div>
        <Paper style={{ maxWidth: "100%" }} elevation={0}>
          {/* <Button onClick={onChange}>vvv</Button> */}
{/*           
        <input type="file"
        onChange={onChange} 
        
        
        /> */}
        
        {/* <Button onClick={createEmptyExcel}>upload</Button> */}

        <Button 
          onClick={createAndUpload}
        //  onClick={createAndUploadDoc}
        //  onClick={createAndUploadPPt}
        >Create New</Button>
        </Paper>
    </div>
  )
}

export default UploadFile

// function useEffect(arg0: () => void) {
//     throw new Error('Function not implemented.');
// }
