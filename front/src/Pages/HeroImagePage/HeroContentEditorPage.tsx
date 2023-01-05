import React from 'react'
import HeroBannerEditor from '../../Components/HeroEditor/HeroBannerEditor'
import {useUploadItemInHeroBannerMutation} from '../../services/contentEditor'
const HeroContentEditorPage = () => {
    const [sendItem] = useUploadItemInHeroBannerMutation();
   
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
        />
    </div>
  )
}

export default HeroContentEditorPage