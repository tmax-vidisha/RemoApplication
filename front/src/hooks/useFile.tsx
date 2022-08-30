import {useEffect, useState} from "react"
import * as XLSX from 'xlsx'
import { Document, Packer } from 'docx'
import PptxGenJS from 'pptxgenjs';
export default () => {
	const [excelblob ,setExcelBlob] = useState<any>();
    const [docxblob,setDocxBlob]  = useState<any>();
    const [pptxblob,setPptxBlob]  = useState<any>();
    useEffect(()=>{
    const toggleTheme = async() => {
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
          const xlsblob = new Blob([buffer], {type:"application/octet-stream"});
          setExcelBlob(xlsblob)
    };
   toggleTheme();

   const document = async () =>{
    const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let doc = new Document({ sections: [] })
    const blob = await Packer.toBlob(doc);
    // console.log(blob,'kkkk')
    setDocxBlob(blob)
  
   }
   document();

   const pptxdocument = async () =>{
    let pres = new PptxGenJS();
    let slide = pres.addSlide();
    //@ts-ignore
    const pptData = await pres.write("blob")
    setPptxBlob(pptData)

   }
   pptxdocument();
},[])
	// useEffect(() => {
	// 	const localTheme = localStorage.getItem("theme");
	// 	if (localTheme) {
	// 		setTheme(localTheme);
	// 	}
	// }, {});

	return {
		excelblob,
        docxblob,
        pptxblob
        // toggleTheme
	};
};
