import React from 'react'
import NewsEditor from '../../Components/NewsEditor/NewsEditor'
import { useUploadItemInRemoNewsMutation,useGetGalleryRootQuery } from '../../services/contentEditor'
// import { useG } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
import GalleryEditor from '../../Components/GalleryEditor/GalleryEditor';
const GalleryContentEditorPage = () => {
    const [sendItem] = useUploadItemInRemoNewsMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetGalleryRootQuery(token)
    
    const  sendData= async(obj:any) =>{

      console.log(obj,'hgfhgfhfgjtjyj')
        // console.log(name,'uuuuu')
      //   const {name ,lastModified,lastModifiedDate,size,type,webkitRelativePath } = data

      //   const see ={
      //       name,
      //       lastModified,
      //       lastModifiedDate,
      //       size,
      //       type,
      //       webkitRelativePath
      //   }
      //   const Data = {
      //       names:name,
      //      fileSelected:data
      //  }
      await sendItem(obj)
    }
    
  return (
    <div>
    <GalleryEditor
       data={data}
       isLoading={isLoading}
       isSuccess={isSuccess}
    
    />
    </div>
  )
}

export default GalleryContentEditorPage