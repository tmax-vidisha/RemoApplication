import React from 'react'
import useCustom from '../../hooks/useCustom'
import {useGetAllNewsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import NewsReadMore from '../../Components/NewsReadMore';

const NewsPageMore = () => {
  const {token} = useCustom();
  const { data, error, isLoading } = useGetAllNewsQuery(token)
  console.log(data,'gtththth')
  return (
    <AuthenticatedTemplate>
      <NewsReadMore
         data = {data}
         isLoading={isLoading}
         error= {error}
      
      />

    </AuthenticatedTemplate>
  )
}

export default NewsPageMore