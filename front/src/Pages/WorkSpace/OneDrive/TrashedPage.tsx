import React from 'react'
import TrashFiles from '../../../Components/WorkSpaceOne/Trash/TrashFiles';
import useCustom from '../../../hooks/useCustom'
import { useGetAllTrashedItemsQuery} from '../../../services/graph'

const TrashedPage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } = useGetAllTrashedItemsQuery(token)
  return (
    <div>
        <TrashFiles
          data={data}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
    </div>
  )
}

export default TrashedPage