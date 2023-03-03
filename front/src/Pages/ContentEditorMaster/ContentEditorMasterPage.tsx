import React from 'react'
import EditorContent from '../../Components/EditorContent/EditorContent'
import {useUploadItemInRemoContentEditorMasterMutation} from '../../services/contentEditor'
import {useGetAllContentEditorQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom'
const ContentEditorMasterPage = () => {
     const [sendItem,{data:createdResponse,isLoading:createdLoading,isSuccess:createdSuccess}] = useUploadItemInRemoContentEditorMasterMutation();
     const {token} = useCustom();
     const { data,isLoading,isSuccess } = useGetAllContentEditorQuery(token)
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
    console.log(createdResponse?.response,'created')
  return (
    <div>
        <EditorContent
         onClick={sendData}
         data={data}
         isLoading={isLoading}
         isSuccess={isSuccess}
        />
    </div>
  )
}

export default ContentEditorMasterPage