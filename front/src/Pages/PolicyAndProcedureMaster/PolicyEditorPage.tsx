import React from "react";
import PoliciesEditor from "../../Components/PoliciesEditor/PoliciesEditor";
import { useDeleteItemPolicyMutation, useGetAllPolicyItemsQuery } from "../../services/graph";
import useCustom from "../../hooks/useCustom";

const PolicyEditorPage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } =  useGetAllPolicyItemsQuery(token,{ refetchOnMountOrArgChange: true })
    const [sendDeleteItem, { data: deleteResponse,isSuccess:deleteSuccess,isLoading:deleteLoading }] = useDeleteItemPolicyMutation();
    const deleteDriveItem = async (id: string, name: string) => {
      console.log(id, name)
      const Data = {
        // name:id,
        ItemId: id,
        Name: name
      }
      await sendDeleteItem(Data)
    }
    if(deleteLoading){
      console.log('Loading')
   }else if(deleteSuccess){
     console.log(deleteResponse?.response,'deleted')
   }
  return (
    <div>
        <PoliciesEditor
            data={data}
            isLoading={isLoading}
            isSuccess={isSuccess}
        />
    </div>
  )
}

export default PolicyEditorPage;
