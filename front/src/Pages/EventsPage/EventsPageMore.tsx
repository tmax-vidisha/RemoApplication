import React from 'react'
import useCustom from '../../useCustom'
import { useGetAllEventsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import EventsReadMore from '../../Components/EventsReadMore';

const EventsPageMore = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllEventsQuery(token)
  return (
    <AuthenticatedTemplate>
        <EventsReadMore
          data ={data}
          isLoading={isLoading}
          error ={error}
        />
    </AuthenticatedTemplate>
  )
}

export default EventsPageMore