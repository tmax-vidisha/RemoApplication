import React from 'react'
import EditorPage from '../../Components/ContentEditor/EditorPage'
import useCustom from '../../hooks/useCustom'
import {useGetAllContentEditorQuery } from '../../services/APIs';
const ContentEditorDashBoardPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllContentEditorQuery(token)
  return (
    
    <div>
        <EditorPage
         data = {data}
         isLoading={isLoading}
         error={error}
        />
    </div>
  )
}

export default ContentEditorDashBoardPage