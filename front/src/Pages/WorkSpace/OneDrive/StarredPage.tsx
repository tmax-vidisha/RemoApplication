import React from 'react'
import useCustom from '../../../hooks/useCustom'
import { useGetAllStarredItemsQuery,useDeleteItemStarredMutation} from '../../../services/graph'
import StarredOne from '../../../Components/WorkSpaceOne/StarredFile/StarredOne'

const StarredPage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } = useGetAllStarredItemsQuery(token,{ refetchOnMountOrArgChange: true })
    const [sendDeleteItem, { data: deleteResponse,isSuccess:deleteSuccess,isLoading:deleteLoading }] = useDeleteItemStarredMutation();
    const deleteDriveItem = async (id: string, name: string) => {
      console.log(id, name)
      const Data = {
        // name:id,
        ItemId: id,
        Name: name
      }
      await sendDeleteItem(Data)
    }
    if(deleteLoading){
      console.log('Loading')
   }else if(deleteSuccess){
     console.log(deleteResponse?.response,'deleted')
   }
  return (
    <div>
        <StarredOne
            data={data}
            isSuccess={isSuccess}
            isLoading={isLoading}
            onDelete={deleteDriveItem}
          deleteResponse={deleteResponse}
          deleteLoading={deleteLoading}
          deleteSuccess={deleteSuccess}
        />
    </div>
  )
}

export default StarredPage