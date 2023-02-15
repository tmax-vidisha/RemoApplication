import React from 'react'

import HeroBannerEditor from '../../Components/HeroEditor/HeroBannerEditor'
import {useUploadItemInHeroBannerMutation} from '../../services/contentEditor'
import {useGetAllHeroQuery} from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
const HeroContentEditorPage = () => {
    const [sendItem] = useUploadItemInHeroBannerMutation();
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetAllHeroQuery(token)
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
        <HeroBannerEditor
         onClick={sendData}
         data = {data}
         isLoading={isLoading}
         isSuccess={isSuccess}
        />
    </div>
  )
}

export default HeroContentEditorPage