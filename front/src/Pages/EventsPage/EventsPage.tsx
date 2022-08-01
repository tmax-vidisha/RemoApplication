import React from 'react'
import Events from '../../Components/Events'
import useCustom from '../../useCustom'
import { useGetAllEventsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';


const EventsPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllEventsQuery(token)
    //  console.log(data,'88888ttuytuytu888')
  return (
    
    <AuthenticatedTemplate>
        <Events  
        data = {data}
        isLoading={isLoading}
        error= {error}
        />
    </AuthenticatedTemplate>
  )
}

export default EventsPage