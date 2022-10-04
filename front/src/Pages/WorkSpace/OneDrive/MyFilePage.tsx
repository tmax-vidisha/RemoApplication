import React, { useReducer } from 'react'
import useCustom from '../../../hooks/useCustom'
import { breadcrumbsReducer, foldersReducer } from '../../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import { useGetAllRootItemsOneDriveQuery, useGetItemChildrenOneDriveMutation,useDeleteItemOneDriveMutation } from '../../../services/graph'
import {MyFilesPage} from '../../../Components/WorkSpaceOne/MyFilesPage'
import { AuthenticatedTemplate } from '@azure/msal-react';
import Breadcrumb from '../../../hooks/Breadcrumb';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import { styled } from '@mui/material/styles';


// interface types{
//     styled:any;
// }

const MyFilePage = () => {
    const { token } = useCustom();
    const classes = useStyles();
    const { data, error, isLoading } = useGetAllRootItemsOneDriveQuery(token)
    const [sendItem, { data: ItemChildren, error: itemChildrenError, isLoading: itemChildrenIsLoading }] = useGetItemChildrenOneDriveMutation();
    const [sendDeleteItem,{data:deleteResponse}] =  useDeleteItemOneDriveMutation();
    console.log(data?.response)
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


    const  deleteDriveItem = async(id:string,name:string) =>{
         console.log(id,name)
         const Data = {
            // name:id,
            ItemId: id,
            Name:name
        }
        await sendDeleteItem(Data)
    }
  return (
    <AuthenticatedTemplate>
        <Grid>
            <Grid className={classes.divFile}>
                My Files
            </Grid>
            <Grid className={classes.bigPart}>
         <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs}
                            getChildHandler={breadcrumbClickHandler} />
       <MyFilesPage
         data={data}
         error={error}
         isLoading={isLoading}
         ItemChildren={ItemChildren}
         itemChildrenError={itemChildrenError}
         itemChildrenIsLoading={itemChildrenIsLoading}
         onClick={folderClickHandler}
         onDelete={deleteDriveItem}
         deleteResponse={deleteResponse}
       />
       </Grid>
       </Grid>
    </AuthenticatedTemplate>
  )

}

export default MyFilePage