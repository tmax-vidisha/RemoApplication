import React from 'react'
import BirthdayEditor from '../../Components/BirthdayEditor/BirthdayEditor'
import {useUploadItemInEmployeeMutation} from '../../services/contentEditor'
import { useGetAllEmpQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const BirthdayPage = () => {
    const [sendItem,{data:createdResponse,isLoading:createdLoading,isSuccess:createdSuccess}] = useUploadItemInEmployeeMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetAllEmpQuery(token)
    // console.log(data?.response ,'EmpBirth')

    // const EmpFilter = data?.response?.filter((items:any)=>{ return (
    //   items.fields
    // )})
    // console.log(EmpFilter,'grgtrteeeeeeeeeeeeeeeeee')

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
        <BirthdayEditor
          onClick={sendData}
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
    </div>
  )
}

export default BirthdayPage