import React, { useReducer } from "react";
import PoliciesEditor from "../../Components/PoliciesEditor/PoliciesEditor";

import {
  useCopylinkOneDriveMutation,
  useDeleteItemPolicyMutation,
  useDownloadUrlItemOneDriveMutation,
  useGetAllPolicyItemsQuery,
} from "../../services/graph";
import useCustom from "../../hooks/useCustom";
import { breadcrumbsReducer } from "../../Store copy/Reducer/foldersReducer";
import { ActionType } from "../../Store copy/Actions/actionTypes";
import { Box, Grid } from "@mui/material";
import Breadcrumb from "../../hooks/Breadcrumb";
import { useStyles } from "./Styles";

const PolicyEditorPage = () => {
  const { token } = useCustom();
  const classes = useStyles();
  console.log(token, "policy token front");
  const { data, isSuccess, isLoading } = useGetAllPolicyItemsQuery(token, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data, "policy front page data");
  const [
    sendCopyItem,
    { data: copyResponse, isSuccess: copySuccess, isLoading: copyLoading },
  ] = useCopylinkOneDriveMutation();
  const [
    sendItem,
    {
      data: ItemDownloadUrl,
      error: itemChildrenError,
      isLoading: itemChildrenIsLoading,
    },
  ] = useDownloadUrlItemOneDriveMutation();
  console.log(ItemDownloadUrl, "grdrhtrh");

  const [
    sendDeleteItem,
    {
      data: deleteResponse,
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
    },
  ] = useDeleteItemPolicyMutation();

  const [breadcrumbsState, breadcrumbsDispatch] = useReducer(
    breadcrumbsReducer,
    {
      breadcrumbs: [
        {
          id: "",
          name: "Document",
        },
      ],
    }
  );
  console.log("breadcrumbsState", breadcrumbsState);
  const setBreadCrumbAction = async (id: string, name: string) => {
    return breadcrumbsDispatch({
      type: ActionType.SET_BREADCRUMBS,
      payload: { id, name },
    });
  };

  const updateBreadCrumbAction = async (id: string) => {
    return breadcrumbsDispatch({
      type: ActionType.UPDATE_BREADCRUMBS,
      payload: { id },
    });
  };
  const folderClickHandler = async (
    // obj:any
    id: string,
    name: string,
    folder: any
    // webUrl: any
  ): Promise<void> => {
    // await getFolderChildrenAction(id);
    // await setBreadCrumbAction(id, name);
    console.log(id);
    console.log(folder);
    // console.log(webUrl)
    if (folder === undefined) {
      // setUrl(webUrl)

      console.log("Not folder");
    } else {
      console.log("Its  folder");
      // setShow(!show)
      const Data = {
        // name:id,
        ItemId: id,
        Name: name,
      };
      //  console.log(fd)
      await sendItem(Data);
      await setBreadCrumbAction(id, name);
    }

    // setShow(!show)
  };
  const breadcrumbClickHandler = async (id: string) => {
    await updateBreadCrumbAction(id);
    // await getFolderChildrenAction(id);
    const Data = {
      // name:id,
      ItemId: id,
      //    Name:name
    };
    //  console.log(fd)
    await sendItem(Data);
  };
  const copylinkDriveItem = async (id: string, name: string) => {
    console.log(id, name);
    const Data = {
      // name:id,
      ItemId: id,
      Name: name,
    };
    await sendCopyItem(Data);
  };

  const getDownloadDriveItem = async (id: string, name: string) => {
    console.log(id, name);
    const Data = {
      // name:id,
      ItemId: id,
      Name: name,
    };
    await sendItem(Data);
  };
  const deleteDriveItem = async (id: string, name: string) => {
    console.log(id, name);
    const Data = {
      // name:id,
      ItemId: id,
      Name: name,
    };
    await sendDeleteItem(Data);
  };
  return (
    <div className={classes.Section}>
      <Box className={classes.MainPart}>
        {/* <Grid className={classes.divFile}>Policies & Procedure</Grid> */}
        <div style={{ paddingLeft: "30px", paddingTop: "30px" }}>
          <Breadcrumb
            breadcrumb={breadcrumbsState.breadcrumbs}
            getChildHandler={breadcrumbClickHandler}
          />
        </div>
        <PoliciesEditor
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
          onCopy={copylinkDriveItem}
          copyResponse={copyResponse}
          onClick={getDownloadDriveItem}
          downloadUrl={ItemDownloadUrl}
          onDelete={deleteDriveItem}
          deleteResponse={deleteResponse}
          deleteLoading={deleteLoading}
          deleteSuccess={deleteSuccess}
          copyLoading={copyLoading}
          copySuccess={copySuccess}
        />
      </Box>
    </div>
  );
};

export default PolicyEditorPage;
