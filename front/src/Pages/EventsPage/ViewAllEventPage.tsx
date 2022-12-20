import React from 'react'
import ViewAllEvents from '../../Components/ViewAllEvents'
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useCreateTokenwithEventDataOneMutation } from '../../services/APIs'
const ViewAllEventPage = () => {
    const [sendItem,{data,error,isLoading}] = useCreateTokenwithEventDataOneMutation();

    console.log(data,'EventData')
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
        <ViewAllEvents
             data = {data}
             isLoading={isLoading}
             error= {error}
            onClick={getEventData}        
        />
    </AuthenticatedTemplate>
  )
}

export default ViewAllEventPage