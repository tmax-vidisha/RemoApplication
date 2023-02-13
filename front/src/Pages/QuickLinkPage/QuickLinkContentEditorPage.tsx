import React from 'react'
import {useUploadItemInRemoQuicklinkMutation } from '../../services/contentEditor'
import {useGetAllRemoQuickLinkDataQuery}from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
import QuickLinksEditor from '../../Components/QuickLinksEditor/QuickLinksEditor'
const QuickLinkContentEditorPage = () => {
    const [sendItem] = useUploadItemInRemoQuicklinkMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetAllRemoQuickLinkDataQuery(token)
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
        <QuickLinksEditor
          onClick={sendData}
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
    </div>
  )
}

export default QuickLinkContentEditorPage