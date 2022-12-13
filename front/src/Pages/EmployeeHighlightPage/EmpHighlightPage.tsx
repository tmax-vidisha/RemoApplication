import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllEmpQuery,useCreateTokenwithEmpDataItemIdMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import EmployeeHighlight from '../../Components/EmployeeHighlight';
const EmpHighlightPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllEmpQuery(token)
    const [sendItem,{data:ItemData}] = useCreateTokenwithEmpDataItemIdMutation();

     console.log(ItemData,'yuyuu7u7u7ua')

    const handle = (id:any)=>{
       console.log(id,'eaefsaaaa')

       const Data = {
        ItemId:id
       }
       sendItem(Data)
    }

  return (
    <AuthenticatedTemplate>
       <EmployeeHighlight 
       data={data}
       error= {error}
       isLoading= {isLoading}
       onGetItem = {handle}
       ItemData={ItemData}
       />
        </AuthenticatedTemplate>
  )
}

export default EmpHighlightPage