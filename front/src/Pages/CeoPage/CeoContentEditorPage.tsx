import React from 'react'
import CeoEditor from '../../Components/CeoEditor/CeoEditor'
import {useUploadItemInCeoMutation} from '../../services/contentEditor'
import { useGetAllCeoMsgQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const CeoContentEditorPage = () => {
    const [sendItem] = useUploadItemInCeoMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } =useGetAllCeoMsgQuery(token)
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
        <CeoEditor
          onClick={sendData}
          data = {data}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
    </div>
  )
}

export default CeoContentEditorPage