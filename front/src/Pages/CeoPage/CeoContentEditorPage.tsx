import React from 'react'
import CeoEditor from '../../Components/CeoEditor/CeoEditor'
import {useUploadItemInCeoMutation} from '../../services/contentEditor'
const CeoContentEditorPage = () => {
    const [sendItem] = useUploadItemInCeoMutation();
   
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
        />
    </div>
  )
}

export default CeoContentEditorPage