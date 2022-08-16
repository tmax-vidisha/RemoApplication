import React from 'react';
import { useState, useEffect } from 'react';
import useCustom from '../../../useCustom';

const AllFiles = () => {

const {token} =useCustom();
/*
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
    */
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
            const file = await fetch('../../front/src/Assets/Files/Book.xlsx').then(res => res.blob())
          
            const res = await fetch(
              `https://graph.microsoft.com/v1.0/me/drive/root:/${file}.xlsx:/content`,
              {
                method: 'PUT',
                headers: {
                  Authorization: `Bearer ${token}`,
                  //'Content-Type': 'application/json'
                  'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                  //'Content-Type': 'application/vnd.ms-excel'
                  //'Content-Type': 'application/vnd.ms-excel.sheet.macroEnabled.12'
                },
                body: file
              })
              console.log(file,"uploaddddddddddd");

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
*/
    return (
        <div>
            <input id="fileUploadControl" name="fileUploadControl" type="file" />
            <button onClick={createEmptyExcel}>Save to OneDrive</button>
            <button onClick={createEmptyExcel}>upload to OneDrive</button>
            <div>
                {/* <Uploader ref={uploader}
                    src={images}
                    theme="sky"
                    label="Upload max 5 photos"
                    buttonText={"Upload"}
                    action={"http://localhost/ok/upload.php"}
                    filetypes={["png", "jpg", "pdf"]}
                    image={false}
                    onResult={resultUpload.bind(this)}
                    onRemoved={onRemoved.bind(this)}
                    hideOnSuccess={true} /> */}
            </div>
        </div>
    );
};

export default AllFiles;