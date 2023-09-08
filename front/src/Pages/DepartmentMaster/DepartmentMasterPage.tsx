import React from "react";
import { useGetAllDepartmentMasterQuery } from "../../services/APIs";
import useCustom from "../../hooks/useCustom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import DepartmentMaster from "../../Components/DepartmentMaster/DepartmentMaster";

const DepartmentMasterPage = () => {
  const { token } = useCustom();
  console.log(token, "department Token");
  const { data, error, isLoading } = useGetAllDepartmentMasterQuery(token);
  console.log(data, "department");
  return (
    <div>
      <AuthenticatedTemplate>
        <DepartmentMaster data={data} isLoading={isLoading} error={error} />
      </AuthenticatedTemplate>
    </div>
  );
};

export default DepartmentMasterPage;
