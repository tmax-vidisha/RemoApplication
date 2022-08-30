import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllEmpQuery,useCreateTokenwithEmpDataMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import EmployeeHighlightInput from '../../Components/EmployeeHighlightInput';
const EmpHighlightInputPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllEmpQuery(token)
    const [sendItem] = useCreateTokenwithEmpDataMutation();
    const createEmpHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <div>
        <EmployeeHighlightInput
           data={data}
           error= {error}
           isLoading= {isLoading}
           onSubmit ={createEmpHandler}
        
        />
    </div>
  )
}

export default EmpHighlightInputPage