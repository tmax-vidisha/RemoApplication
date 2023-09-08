import React from "react";
import useCustom from "../../hooks/useCustom";
import {  useGetAllDepartmentMasterQuery } from "../../services/APIs";
import { AuthenticatedTemplate } from "@azure/msal-react";
import ITDepartment from "../../Components/DepartmentMaster/ITDepartment";

const ItDepartmentPage = () => {
  const { token } = useCustom();
  const { data, error, isLoading } = useGetAllDepartmentMasterQuery(token);
  console.log(data, "department");
  return (
    <AuthenticatedTemplate>
      {/* <ITDepartment data={data} isLoading={isLoading} error={error} /> */}
    </AuthenticatedTemplate>
  );
};

export default ItDepartmentPage;
