import { AuthenticatedTemplate } from '@azure/msal-react';
import React, { useReducer } from 'react'
import RecentFile from '../../../Components/WorkSpaceOne/RecentFiles/RecentFile'
import useCustom from '../../../hooks/useCustom'
import { useGetAllRecentItemsQuery, useCopylinkOneDriveMutation, useDownloadUrlItemOneDriveMutation, useDeleteItemOneDriveMutation } from '../../../services/graph';
import { useStyles } from './Styles';
import { Grid } from '@mui/material';
import { breadcrumbsReducer, foldersReducer } from '../../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import Breadcrumb from '../../../hooks/Breadcrumb';

const MyRecent = () => {
  const classes = useStyles();
  const { token } = useCustom();
  const { data, error, isLoading } = useGetAllRecentItemsQuery(token);
  console.log(data, 'ttuuuyyyjsg')
  const [sendCopyItem, { data: copyResponse }] = useCopylinkOneDriveMutation();
  const [sendItem, { data: ItemDownloadUrl, error: itemChildrenError, isLoading: itemChildrenIsLoading }] = useDownloadUrlItemOneDriveMutation();
  console.log(ItemDownloadUrl, 'grdrhtrh')
  const [sendDeleteItem, { data: deleteResponse }] = useDeleteItemOneDriveMutation();
  const [breadcrumbsState, breadcrumbsDispatch] = useReducer(breadcrumbsReducer, {
    breadcrumbs: [{
        id: '',
        name: 'My Files'
    }]
});
console.log('breadcrumbsState', breadcrumbsState)
const setBreadCrumbAction = async (id: string, name: string) => {
    return breadcrumbsDispatch({ type: ActionType.SET_BREADCRUMBS, payload: { id, name } });
};

const updateBreadCrumbAction = async (id: string) => {
    return breadcrumbsDispatch({ type: ActionType.UPDATE_BREADCRUMBS, payload: { id } });
};
const folderClickHandler = async (
    // obj:any
    id: string,
    name: string,
    folder: any,
    // webUrl: any
): Promise<void> => {

    // await getFolderChildrenAction(id);
    // await setBreadCrumbAction(id, name);
    console.log(id)
    console.log(folder)
    // console.log(webUrl)
    if (folder === undefined) {
        // setUrl(webUrl)

        console.log('Not folder')
    } else {
        console.log('Its  folder')
        // setShow(!show)
        const Data = {
            // name:id,
            ItemId: id,
            Name: name
        }
        //  console.log(fd)
        await sendItem(Data)
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
    }
    //  console.log(fd)
    await sendItem(Data)
};

  const copylinkDriveItem = async (id: string, name: string) => {
    console.log(id, name)
    const Data = {
      // name:id,
      ItemId: id,
      Name: name
    }
    await sendCopyItem(Data)
  }

  const getDownloadDriveItem = async (id: string, name: string) => {
    console.log(id, name)
    const Data = {
      // name:id,
      ItemId: id,
      Name: name
    }
    await sendItem(Data)
  }
  const deleteDriveItem = async (id: string, name: string) => {
    console.log(id, name)
    const Data = {
      // name:id,
      ItemId: id,
      Name: name
    }
    await sendDeleteItem(Data)
  }


  return (
    <AuthenticatedTemplate>
      {/* <Grid className={classes.divFile}>
        Recent
      </Grid>
      <Grid className={classes.bigPart} style={{ paddingTop: "30px" }}>
        <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs}
          getChildHandler={breadcrumbClickHandler} /> */}
        <RecentFile
          data={data}
          isLoading={isLoading}
          error={error}
          onCopy={copylinkDriveItem}
          copyResponse={copyResponse}
          onClick={getDownloadDriveItem}
          downloadUrl={ItemDownloadUrl}
          onDelete={deleteDriveItem}
          deleteResponse={deleteResponse}
        />
      {/* </Grid> */}
    </AuthenticatedTemplate>
  )
}

export default MyRecent