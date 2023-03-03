import React from 'react'
import { useGetAllMeetingsQuery } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
import Mymeeting from '../../Components/Mymeeting';
const MeetingsPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllMeetingsQuery(token)
    
  console.log(data,"meetings ")
  return (
    <div>
        <Mymeeting
           data = {data}
           isLoading={isLoading}
           error= {error}
           
        />
    </div>
  )
}

export default MeetingsPage