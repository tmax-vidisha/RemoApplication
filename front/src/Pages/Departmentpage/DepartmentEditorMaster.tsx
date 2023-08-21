import React from "react";
import DepartmentEditor from "../../Components/DepartmentEditor/DepartmentEditor";
import useCustom from "../../hooks/useCustom";
import { useGetAllContentEditorQuery } from "../../services/APIs";
import { useUploadItemInRemoDepartmentMutation } from "../../services/contentEditor";

const DepartmentEditorMaster = () => {
  const [
    sendItem,
    {
      data: createdResponse,
      isLoading: createdLoading,
      isSuccess: createdSuccess,
    },
  ] = useUploadItemInRemoDepartmentMutation();
  const { token } = useCustom();
  const { data, isLoading, isSuccess } = useGetAllContentEditorQuery(token);
  const sendData = async (obj: any) => {
    console.log(obj, "hgfhgfhfgjtjyj");
    // console.log(name,'uuuuu')
    //   const {name ,lastModified,lastModifiedDate,size,type,webkitRelativePath } = data

    //   const see ={
    //       name,
    //       lastModified,
    //       lastModifiedDate,
    //       size,
    //       type,
    //       webkitRelativePath
    //   }
    //   const Data = {
    //       names:name,
    //      fileSelected:data
    //  }
    await sendItem(obj);
  };
  console.log(createdResponse?.response, "created");
  return (
    <div>
      <DepartmentEditor
        onClick={sendData}
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default DepartmentEditorMaster;
