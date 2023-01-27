import React from 'react'
import EventsEditor from '../../Components/EventsEditor/EventsEditor'
import { useUploadItemInRemoEventsMutation } from '../../services/contentEditor'

const EventsContentEditorPage = () => {
  const [sendItem] = useUploadItemInRemoEventsMutation();
   
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
        <EventsEditor
         onClick={sendData}
        />
    </div>
  )
}

export default EventsContentEditorPage