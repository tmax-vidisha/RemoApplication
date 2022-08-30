import React from 'react'
import useCustom from '../../hooks/useCustom'
import {useGetAllHeroQuery,useCreateTokenwithHeroDataMutation} from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import HeroInput from '../../Components/HeroInput';
const HeroInputPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllHeroQuery(token)
    const [sendItem] = useCreateTokenwithHeroDataMutation();
    const createHeroHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <div>
        <HeroInput
           data = {data}
           isLoading={isLoading}
           error= {error}
           onSubmit={createHeroHandler}
        />
    </div>
  )
}

export default HeroInputPage