import { AuthenticatedTemplate } from "@azure/msal-react";
import React from "react";
import OrgChart from "../../Components/Quicklinks/OrgChart";
import useCustom from "../../hooks/useCustom";
import { useGetAllOrgChartQuery } from "../../services/APIs";
import NewOrgChart from "../../Components/Quicklinks/NewOrgChart";

const OrgChartPage = () => {
  const { token } = useCustom();
  const { data, error, isLoading } = useGetAllOrgChartQuery(token);
  console.log(token, "org chart page");
  console.log(data, "org chart page");
  return (
    <AuthenticatedTemplate>
      <OrgChart data={data} isLoading={isLoading} error={error} />
      {/* <NewOrgChart/> */}
    </AuthenticatedTemplate>
  );
};

export default OrgChartPage;
