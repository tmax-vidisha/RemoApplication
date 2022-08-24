/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import Spreadsheet from 'react-spreadsheet';
import useCustom from '../../../useCustom';
// import book from '../../../Assets/Files/Book.xlsx';
// import file from '../../../Assets/Files/Book.xlsx';

// let fileName = "Book.xlsx";
// let workbook = excel.readFile(fileName);
// console.log(workbook);

const AllFiles = () => {

const {token} =useCustom();

    const launchSaveToOneDrive = (OneDrive: any) => {
        var odOptions = {
            clientId: "[the application id]",
            action: "save",
            sourceInputElementId: "fileUploadControl",
            openInNewWindow: true,
            advanced: {},
            success: function (files: any) { console.log("Success!") },
            progress: function (percent: any) { console.log(percent) },
            cancel: function () { console.log("Canceled") },
            error: function (error: any) { console.log(error) }
        }
        OneDrive.save(odOptions);
    }

    const [postId, setPostId]=useState();

    useEffect(() => {
        // PUT request using fetch with async/await
        async function updatePost() {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
            };
            const response = await fetch('https://graph.microsoft.com/v1.0/me/drive/root/children', requestOptions);
            const data = await response.json();
            setPostId(data.id);
        }
    
        updatePost();
    }, []);
    
         fetch('https://graph.microsoft.com/sites/OpenSesameTest/Shared%20Documents/General/FileB.txt:/', {        
           method: 'PUT',
           body: "Hello World",
           headers: {'Access-Control-Allow-Origin': 'localhost', 'Access-Control-Allow-Methods': 'GET, POST, PUT', 'Authorization': 'Bearer'}
         })
         .then((response) => response.json())
         .then((result) => {
           console.log('Success:', result);
         })
         .catch((error) => {
           console.error('Error:', error);
         });
       

    const upload = (file: any) => {
        fetch('http://www.example.net', { // Your POST endpoint
            method: 'POST',
            headers: {
                // Content-Type may need to be completely **omitted**
                // or you may need something
                "Content-Type": "You will perhaps need to define a content-type here"
            },
            body: file // This is your file object
        }).then(
            response => response.json() // if the response is a JSON object
        ).then(
            success => console.log(success) // Handle the success response object
        ).catch(
            error => console.log(error) // Handle the error response object
        );
    };
    const onSelectFile = (input: any) => {
        upload(input.files[0])

    };
   
    const [state, setState] = useState();
/*
    // get file to OneDrive
    var fileName = "myNewSmallFile.txt";
    var currentFolder = System.ID.Directory.GetCurrentDirectory();
    var filePath = Path.Combine(currentFolder, fileName)

// get Local File
FileStream fileStream = newFileStream(filePath, FileMode.Open);

//Uplod file to one drive
       GraphServiceClient graphClient = GetAuthenticatedGraphClient(...);
    var uploadFile = graphClient.Me.Drive.Root
        .ItemWithPath(fileName)
        .Content.Request()
        .PutAsync<DriveItem>(fileStream).Result;

        */

        const createEmptyExcel = async (): Promise<string> => {
            const file = await fetch('../../../Assets/Files/Book.xlsx').then(res => res.blob())
          
            const res = await fetch(
            //   `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,
            //https://graph.microsoft.com/v1.0/me/drive/root/children
           // `https://graph.microsoft.com/v1.0/me/drive/items/{parent-id}:/${file}.xlsx:/content`,
              `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,
              {
                method: 'PUT',
                headers: {
                  Authorization: `Bearer ${token}`,
                 //'Content-Type': 'application/json'
                 // 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                 'Content-Type': 'application/vnd.ms-excel'
                  //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'
                //   'Content-Type': 'text/plain'
            //    ' Content-Type':"application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8"
              
        },
                body: file
              })
              console.log(file,"upload excel file");

             if(res.ok == false) throw new Error(res.statusText)            
            const json = await res.json()
          
            return json.id
            
          }
        
       /*   
        const uploadSheet = async (url: string) => {
            const data = {
                site: url
            }
        
            const d = await fetch(`https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        
            return await d.json();
        }


function test() {
    var Excel = new ActiveXObject("Excel.Application");
    Excel.Visible = true;
    Excel.Workbooks.Open("teste.xlsx");
  }
*/
 const ExportToExcel = ( apiData:any, fileName:any ) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
  
    const exportToCSV = (apiData:any, fileName:any, XLSX:any, FileSaver:any) => {
      const ws = XLSX.utils.json_to_sheet(apiData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    };
}

function created(args:any,spreadsheet:any ) {
    fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") // fetch the remote url
        .then((response) => {
        response.blob().then((fileBlob) => {
            var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
            spreadsheet.open({ file: file }); // open the file into Spreadsheet
        });
    });
}
/*
function Upload() {
    const fileUpload = (document.getElementById('fileUpload'));
    const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        let fileName = fileUpload.files[0].name;
        if (typeof (FileReader) !== 'undefined') {
            const reader = new FileReader();
            if (reader.readAsBinaryString) {
                reader.onload = (e) => {
                    processExcel(reader.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            }
        } else {
            console.log("This browser does not support HTML5.");
        }
    } else {
        console.log("Please upload a valid Excel file.");
    }
}

function processExcel(data:any) {
    const workbook = XLSX.read(data, {type: 'binary'});
    const firstSheet = workbook.SheetNames[0];
    const excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

    console.log(excelRows);
}
*/

// const [data, setData] = useState([
//     [{ value: "GfG1" }, { value: "GfG3" }],
//     [{ value: "GfG2" }, { value: "GfG4" }],
//   ]);
    return (
        <div>
            <input id="fileUploadControl" name="fileUploadControl" type="file" />
            <button onClick={createEmptyExcel}>Save to OneDrive</button>
            <button onClick={createEmptyExcel}>upload to OneDrive</button>
            {/* <button  type='submit' onClick={(e) => exportToCSV(apiData, fileName)}>Create Excell</button> */}
            <button  type='submit' onClick={ ()=>ExportToExcel}>Create Excel</button>
            {/* <input class="upload-excel" type="file" id="fileUpload" onchange="Upload()"/> */}
            <div>
                
                    {/* <SpreadsheetComponent 
                     openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open' 
                     created={created.bind(this)}>
                    </SpreadsheetComponent> */}
                       {/* <Spreadsheet data={data} onChange={() =>setData} /> */}
                       {/* <button><a href={file} download="your file name">Download</a></button> */}
            </div>
        </div>
    );
};

export default AllFiles;