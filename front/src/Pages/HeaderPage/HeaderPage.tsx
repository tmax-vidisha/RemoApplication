import React from 'react'
import Header from '../../Components/Header'
import useCustom from '../../hooks/useCustom';
import { useGetAllEmpQuery } from '../../services/APIs';
import { useGetAllUnReadMeetingsQuery, useGetAllUserInfoQuery, useGetAllUnReadMailsQuery } from '../../services/graph';
const HeaderPage = () => {
    const {token} = useCustom();
    //@ts-ignore
  
    const { data, error, isLoading } = useGetAllUnReadMailsQuery(token)
    const { data:CountData, error:CountError, isLoading:CountLoading } = useGetAllUnReadMeetingsQuery(token)
    const { data:UserData, error:UserError, isLoading:UserLoading } = useGetAllUserInfoQuery(token)
    const { data:EmpData, isSuccess:EmpSuccess, isLoading:EmpLoading } = useGetAllEmpQuery(token)
  return (
    <div>
        <Header
          data={data}
          isLoading={isLoading}
          error={error}
          CountData={CountData}
          CountError={CountError}
          CountLoading={CountLoading}
          UserData={UserData}
          UserError={UserError}
          UserLoading={UserLoading}
           EmpData ={EmpData}
          EmpSuccess={EmpSuccess}
          EmpLoading={EmpLoading}

        
        />
    </div>
  )
}

export default HeaderPage