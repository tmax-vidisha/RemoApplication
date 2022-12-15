import React from 'react'
import ViewAllEvents from '../../Components/ViewAllEvents'
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
    <div>
        <ViewAllEvents
             data = {data}
             isLoading={isLoading}
             error= {error}
           onClick={getEventData}        
        />
    </div>
  )
}

export default ViewAllEventPage