import React from 'react'
import useCustom from "../../hooks/useCustom";
import {useGetAllCountryCodesQuery,useGetAllCountryCurrencyMutation} from '../../services/graph'
import  Weather from '../../Components/Weather'
const WeatherPage = () => {
  const {token} = useCustom();
  const {data,error ,isLoading }  = useGetAllCountryCodesQuery(token);
  const [sendItem,{data:AmountResponse,error: Error,isLoading: IsLoading}] = useGetAllCountryCurrencyMutation();
  const  getFolderItems = async(name:string) =>{
    console.log(name,"Currency")
    const Data = {
       // name:id,
      //  ItemId: id,
      //  Name:name
      Contrycode:name
   }
   await sendItem(Data)
}
  return (
    <div>
      <Weather
         data = {data}
         isLoading={isLoading}
         error= {error}
         onClick={getFolderItems}
           dataItem={AmountResponse}
           dataItemError={Error}
           dataItemIsLoading={IsLoading}
      />
    </div>
  )
}

export default WeatherPage