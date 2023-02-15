import React from 'react'
import NavigationEditor from '../../Components/NavigationEditor/NavigationEditor'
import { useUploadItemInRemoNavigationMutation } from '../../services/contentEditor'
import {useGetAllNavigationQuery} from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const NavigationContentEditorPage = () => {
    const [sendItem] = useUploadItemInRemoNavigationMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetAllNavigationQuery(token)
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
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        />
    </div>
  )
}

export default NavigationContentEditorPage