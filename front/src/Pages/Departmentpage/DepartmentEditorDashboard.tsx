import React from 'react';
import EditorPage from '../../Components/ContentEditor/EditorPage';
import { useGetAllContentEditorQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';

const DepartmentEditorDashboard = () => {
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
    );
};

export default DepartmentEditorDashboard;