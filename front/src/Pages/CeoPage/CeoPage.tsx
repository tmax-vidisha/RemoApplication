import React from 'react'
import useCustom from '../../useCustom'
import { useGetAllCeoMsgQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import CeoMessage from '../../Components/CeoMessage';
const CeoPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllCeoMsgQuery(token)
  return (
    <AuthenticatedTemplate>
        <CeoMessage
           data = {data}
           isLoading={isLoading}
           error={error}
        />
    </AuthenticatedTemplate>
  )
}

export default CeoPage