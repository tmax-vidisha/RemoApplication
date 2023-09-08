import { AuthenticatedTemplate } from "@azure/msal-react";
import React from "react";
import OrgChart from "../../Components/Quicklinks/OrgChart";
import useCustom from "../../hooks/useCustom";
import { useGetAllOrgChartQuery } from "../../services/APIs";

const OrgChartPage = () => {
  const { token } = useCustom();
  const { data, error, isLoading } = useGetAllOrgChartQuery(token);
  return (
    <AuthenticatedTemplate>
      <h3> org chart page</h3>
      {/* <OrgChart
           data = {data}
           isLoading={isLoading}
           error= {error}
        /> */}
    </AuthenticatedTemplate>
  );
};

export default OrgChartPage;
