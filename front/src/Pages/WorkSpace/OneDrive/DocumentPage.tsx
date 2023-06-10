import React from "react";
import Documents from "../../../Components/WorkSpaceOne/DocumentLibrary/Documents";
import useCustom from "../../../hooks/useCustom";
import { useGetAllDocumentItemsQuery } from "../../../services/graph";

const DocumentPage = () => {
  const { token } = useCustom();
  const { data, isSuccess, isLoading } = useGetAllDocumentItemsQuery(token, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data, "documenttttttt library");
  //const [sendDeleteItem, { data: deleteResponse, isSuccess: deleteSuccess, isLoading: deleteLoading }] = useDeleteItemDocumentsMutation();
  // const deleteDriveItem = async (id: string, name: string) => {
  //   console.log(id, name)
  //   const Data = {
  //     // name:id,
  //     ItemId: id,
  //     Name: name
  //   }
  //   await sendDeleteItem(Data)
  // }
  // if (deleteLoading) {
  //   console.log('Loading')
  // } else if (deleteSuccess) {
  //   console.log(deleteResponse?.response, 'deleted')
  // }
  return (
    <div>
      <Documents
        data={data}
        isSuccess={isSuccess}
        isLoading={isLoading}
        // onDelete={deleteDriveItem}
        // deleteResponse={deleteResponse}
        // deleteLoading={deleteLoading}
        // deleteSuccess={deleteSuccess}
      />
    </div>
  );
};

export default DocumentPage;
