import React from 'react'
import Events from '../../Components/Events'
import useCustom from '../../hooks/useCustom'
import { useGetAllEventsQuery,useCreateTokenwithEventDataOneMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';


const EventsPage = () => {
    // const {token} = useCustom();
    // const { data, error, isLoading } = useGetAllEventsQuery(token)
    //  console.log(data,'events')
    const [sendItem,{data,error,isLoading}] = useCreateTokenwithEventDataOneMutation();
    const  getEventData = async(Date:any) =>{
      console.log(Date,'yyyyyyyy')
      const Data = {
         // name:id,
      //    ItemId: id,
         Date:Date
     }
    await sendItem(Data)
 }
  return (
    
    <AuthenticatedTemplate>
        <Events  
        data = {data}
        isLoading={isLoading}
        error= {error}
        onClick={getEventData}      
        />
    </AuthenticatedTemplate>
  )
}

export default EventsPage