import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllEventsQuery,useCreateTokenwithEventDataMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import EventsInput from '../../Components/EventsInput';

const EventsInputPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllEventsQuery(token)
    const [sendItem] = useCreateTokenwithEventDataMutation();
    //  console.log(data,'88888ttuytuytu888')
    const createEventHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <AuthenticatedTemplate>
        <EventsInput
          data = {data}
          isLoading={isLoading}
          error= {error}
          onSubmit={createEventHandler}
        
        />
    </AuthenticatedTemplate>
  )
}

export default EventsInputPage