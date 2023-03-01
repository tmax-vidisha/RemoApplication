import React from 'react'
import useCustom from '../../hooks/useCustom'
import { AuthenticatedTemplate } from '@azure/msal-react';
import {useGetAllNavigationQuery,useGetAllRemoQuickLinkDataQuery} from '../../services/APIs';
// import HomeTopNav from '../../Containers/HomeTopNav';
import TopNavLink from '../../Containers/HomeTopNav/TopNavLink';

const HomeNavigationPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllNavigationQuery(token)
    const { data:quicklinkdata, error:quicklinkerror, isLoading:quicklinkisloading } = useGetAllRemoQuickLinkDataQuery(token)
    console.log(data?.response ,'tththytqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
  return (
    <AuthenticatedTemplate>
        <TopNavLink
           data = {data}
           isLoading={isLoading}
           error= {error}
           quicklinkdata={quicklinkdata}
           quicklinkerror={quicklinkerror}
           quicklinkisloading={quicklinkisloading}
        />
    </AuthenticatedTemplate>
  )
}

export default HomeNavigationPage