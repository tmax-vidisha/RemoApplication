import React from 'react'
import useCustom from '../../useCustom'
import { useGetAllEmpQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import EmployeeHighlight from '../../Components/EmployeeHighlight';
const EmpHighlightPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllEmpQuery(token)
  return (
    <AuthenticatedTemplate>
       <EmployeeHighlight 
       data={data}
       error= {error}
       isLoading= {isLoading}
       />
        </AuthenticatedTemplate>
  )
}

export default EmpHighlightPage