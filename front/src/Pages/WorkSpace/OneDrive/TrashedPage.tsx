import React from 'react'
import TrashFiles from '../../../Components/WorkSpaceOne/Trash/TrashFiles';
import useCustom from '../../../hooks/useCustom'
import { useGetAllTrashedItemsQuery,useDeleteItemTrashedMutation} from '../../../services/graph'

const TrashedPage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } = useGetAllTrashedItemsQuery(token,{ refetchOnMountOrArgChange: true })
    const [sendDeleteItem, { data: deleteResponse,isSuccess:deleteSuccess,isLoading:deleteLoading }] = useDeleteItemTrashedMutation();
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
        <TrashFiles
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

export default TrashedPage