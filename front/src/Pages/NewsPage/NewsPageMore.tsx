import React from 'react'
import useCustom from '../../useCustom'
import {useGetAllNewsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import NewsReadMore from '../../Components/NewsReadMore';

const NewsPageMore = () => {
  const {token} = useCustom();
  const { data, error, isLoading } = useGetAllNewsQuery(token)
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