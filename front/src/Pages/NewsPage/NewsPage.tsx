import React from 'react'
import useCustom from '../../hooks/useCustom'
import {useGetAllNewsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import News from '../../Components/News';

const NewsPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllNewsQuery(token)
  return (
    <AuthenticatedTemplate>
        <News
         data = {data}
         isLoading={isLoading}
         error= {error}
        />
    </AuthenticatedTemplate>
  )
}

export default NewsPage