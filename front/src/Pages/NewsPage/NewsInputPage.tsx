import React from 'react'
import useCustom from '../../hooks/useCustom'
import {useGetAllNewsQuery,useCreateTokenwithNewsDataMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import NewsInput from '../../Components/NewsInput';
const NewsInputPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllNewsQuery(token)
    const [sendItem] = useCreateTokenwithNewsDataMutation();
    const createNewsHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <AuthenticatedTemplate>
        <NewsInput
           data = {data}
           isLoading={isLoading}
           error= {error}
           onSubmit={createNewsHandler}
        />
    </AuthenticatedTemplate>
  )
}

export default NewsInputPage