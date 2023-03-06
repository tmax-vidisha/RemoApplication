import React from 'react'
import EventsEditor from '../../Components/EventsEditor/EventsEditor'
import { useUploadItemInRemoEventsMutation } from '../../services/contentEditor'
import {useGetAllRemoEventsQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const EventsContentEditorPage = () => {
  const [sendItem,{data:createdResponse,isLoading:createdLoading,isSuccess:createdSuccess}] = useUploadItemInRemoEventsMutation();
  const {token} = useCustom();
  const { data,isLoading,isSuccess } = useGetAllRemoEventsQuery(token)
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
  if(createdLoading){
    console.log('Loading')
 }else if(createdSuccess){
   console.log(createdResponse?.response,'created')
 }
  return (
    <div>
        <EventsEditor
         onClick={sendData}
         data = {data}
         isLoading={isLoading}
         isSuccess={isSuccess}
        />
    </div>
  )
}

export default EventsContentEditorPage