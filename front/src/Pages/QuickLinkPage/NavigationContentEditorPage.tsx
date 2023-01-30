import React from 'react'
import NavigationEditor from '../../Components/NavigationEditor/NavigationEditor'
import { useUploadItemInRemoNavigationMutation } from '../../services/contentEditor'
const NavigationContentEditorPage = () => {
    const [sendItem] = useUploadItemInRemoNavigationMutation();
   
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
        <NavigationEditor
        onClick={sendData}
        />
    </div>
  )
}

export default NavigationContentEditorPage
