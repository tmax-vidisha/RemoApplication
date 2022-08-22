import React from 'react';
import Files from './Files';

const Drive = () => {

    /*
    const authProvider={
        getAccessToken: async ()=>{
            return await getToken();
        }
    }
    const graphClient= MicrosoftGraph.Client.initwitMiddleware({authProvider});
    // upload files
async function getFiles(){
    ensureScope('files.readwrite');

    try {
        const response =await graphClient
        .api('/me/drive/root/children')
        .select('id,name, folder,package')
        .get();

        return response.value;
        
    } catch (error) {
        console.log(error);
    }
}

// download files 

async function downloadFiles(file:any ) {
    
    try {
        const res =await graphClient
        .api(`/me/drive/items/${file.id}`)
        .select('@microsoft.graph.downloadUrl')
        .get();
        const downloadUrl=res["@microsoft.graph.downloadUrl"];
        window.open(downloadUrl, "_self");
    } catch (error) {
        console.error(error);
    }
}

async function uploadFiles(file:any){
    try {
        ensureScope('files.readwrite');
        let options={
            path:"/",
            fileName:file.name,
            rangeSize:1024 *1024  // must be a multiple of 320 kb
        };

        const uploadTask= await MicrosoftGraph.OneDriveLargeFileUploadTask.create(graphClient, file, )
   
   const res =await uploadTask.upload();
   console.log(`File ${res.name}  of${res.size} bytes uploaded`);

   return res;
   
    } catch (error) {
        
    }
}
*/
    return (
        <div>
           <h3>Files</h3> 
        </div>
    );
};

export default Drive;