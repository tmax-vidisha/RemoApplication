import React from 'react'
// import Events from '../../Components/Events'
import useCustom from '../../useCustom'
import {useGetAllHeroQuery} from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import HeroImages from '../../Components/HeroImages';
const HeroImagePage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllHeroQuery(token)
  return (
    <AuthenticatedTemplate>
        <HeroImages
           data = {data}
           isLoading={isLoading}
           error= {error}
        />
    </AuthenticatedTemplate>
  )
}

export default HeroImagePage