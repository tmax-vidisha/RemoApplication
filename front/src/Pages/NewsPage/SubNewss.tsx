import React from 'react'
import useCustom from '../../hooks/useCustom'
import {useGetAllNewsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import SubNews from '../../Components/NewsReadMore/SubNews';
const SubNewss = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllNewsQuery(token)
  return (
    <AuthenticatedTemplate>
       <SubNews
         data = {data}
         isLoading={isLoading}
         error= {error}
      
      />
    </AuthenticatedTemplate>
  )
}

export default SubNewss