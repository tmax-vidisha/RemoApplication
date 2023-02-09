import React from 'react'
import NewsEditor from '../../Components/NewsEditor/NewsEditor'
import { useUploadItemInRemoNewsMutation } from '../../services/contentEditor'
import { useGetAllNewsQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const NewsContentEditorPage = () => {
    const [sendItem] = useUploadItemInRemoNewsMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetAllNewsQuery(token)
   
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
      <NewsEditor
        onClick={sendData}
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
       />
    </div>
  )
}

export default NewsContentEditorPage