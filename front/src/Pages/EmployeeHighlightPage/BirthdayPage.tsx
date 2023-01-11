import React from 'react'
import BirthdayEditor from '../../Components/BirthdayEditor/BirthdayEditor'
import {useUploadItemInEmployeeMutation} from '../../services/contentEditor'
const BirthdayPage = () => {
    const [sendItem] = useUploadItemInEmployeeMutation();
   
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
        <BirthdayEditor
          onClick={sendData}
        />
    </div>
  )
}

export default BirthdayPage