import React from 'react'
import useCustom from '../../../hooks/useCustom'
import { useGetAllStarredItemsQuery} from '../../../services/graph'
import StarredOne from '../../../Components/WorkSpaceOne/StarredFile/StarredOne'

const StarredPage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } = useGetAllStarredItemsQuery(token)
  return (
    <div>
        <StarredOne
            data={data}
            isSuccess={isSuccess}
            isLoading={isLoading}
        />
    </div>
  )
}

export default StarredPage