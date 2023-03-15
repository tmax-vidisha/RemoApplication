import React from 'react'
import QuicklinksPage from '../../Components/QuicklinksPage'
import {useGetAllRemoQuickLinkDataQuery,usePostRemoUserQuickLinkDataMutation,useGetAllUserSpecificQuiclinksQuery}from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const QuickLinkAddPage = () => {
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetAllRemoQuickLinkDataQuery(token)
    const { data:userData,isLoading:userLoading,isSuccess:userSuccess } = useGetAllUserSpecificQuiclinksQuery(token,{ refetchOnMountOrArgChange: true })
    const [sendItem] = usePostRemoUserQuickLinkDataMutation();
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

      console.log(userData?.response,'userData')
  return (
    <div>
        <QuicklinksPage
           data={data}
           isLoading={isLoading}
           isSuccess={isSuccess}
           onClick={sendData}
           userData={userData}
           userLoading={userLoading}
           userSuccess={userSuccess}
        />
    </div>
  )
}

export default QuickLinkAddPage