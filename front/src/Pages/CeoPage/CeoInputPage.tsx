import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllCeoMsgQuery,useCreateTokenwithCeoDataMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import CeoMessageInput from '../../Components/CeoMessageInput';
const CeoInputPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllCeoMsgQuery(token)
    const [sendItem] = useCreateTokenwithCeoDataMutation();
    const createCeoHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <AuthenticatedTemplate>
        <CeoMessageInput
           data = {data}
           isLoading={isLoading}
           error={error}
           onSubmit={createCeoHandler}
        />
    </AuthenticatedTemplate>
  )
}

export default CeoInputPage