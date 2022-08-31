import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllCeoMsgQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import CeoMessageInformation from '../../Components/CeoMessageInformation';
const CeoPageMore = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllCeoMsgQuery(token)
  return (
    <AuthenticatedTemplate>
        <CeoMessageInformation
              data={data}
              error={error} 
              isLoading={isLoading}           
        />
    </AuthenticatedTemplate>
  )
}

export default CeoPageMore