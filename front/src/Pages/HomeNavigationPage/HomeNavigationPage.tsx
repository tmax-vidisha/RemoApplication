import React from 'react'
import useCustom from '../../hooks/useCustom'
import { AuthenticatedTemplate } from '@azure/msal-react';
import {useGetAllNavigationQuery} from '../../services/APIs';
import HomeTopNav from '../../Containers/HomeTopNav';
const HomeNavigationPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllNavigationQuery(token)
  return (
    <AuthenticatedTemplate>
        <HomeTopNav
           data = {data}
           isLoading={isLoading}
           error= {error}
        />
    </AuthenticatedTemplate>
  )
}

export default HomeNavigationPage