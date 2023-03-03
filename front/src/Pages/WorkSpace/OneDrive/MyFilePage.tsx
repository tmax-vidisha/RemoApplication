import React, { useReducer } from 'react'
import useCustom from '../../../hooks/useCustom'
import { breadcrumbsReducer, foldersReducer } from '../../../Store copy/Reducer/foldersReducer';
import { ActionType } from '../../../Store copy/Actions/actionTypes';
import { useGetAllRootItemsOneDriveQuery, useGetItemChildrenOneDriveMutation, useDeleteItemOneDriveMutation, useCopylinkOneDriveMutation } from '../../../services/graph'
import { MyFilesPage } from '../../../Components/WorkSpaceOne/MyFiles/MyFilesPage'
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
    const { data, isSuccess, isLoading } = useGetAllRootItemsOneDriveQuery(token)
    const [sendItem, { data: ItemChildren, isSuccess: itemChildrenSuccess, isLoading: itemChildrenIsLoading }] = useGetItemChildrenOneDriveMutation();
    const [sendDeleteItem, { data: deleteResponse ,isSuccess:deleteSuccess,isLoading:deleteLoading }] = useDeleteItemOneDriveMutation();
    const [sendCopyItem, { data: copyResponse,isSuccess:copySuccess,isLoading:copyLoading }] = useCopylinkOneDriveMutation();
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


    const deleteDriveItem = async (id: string, name: string) => {
        console.log(id, name)
        const Data = {
            // name:id,
            ItemId: id,
            Name: name
        }
        await sendDeleteItem(Data)
    }
    const copylinkDriveItem = async (id: string, name: string) => {
        console.log(id, name)
        const Data = {
            // name:id,
            ItemId: id,
            Name: name
        }
        await sendCopyItem(Data)
    }



    return (
        <AuthenticatedTemplate>
            <Grid style={{ marginRight: "10px" }}>
                <Grid className={classes.divFile}>
                    My Files
                </Grid>
                <Grid className={classes.bigPart} style={{paddingTop:"30px"}}>
                <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs} 
                    getChildHandler={breadcrumbClickHandler}  />
                <MyFilesPage
                    data={data}
                    isSuccess={isSuccess}
                    isLoading={isLoading}
                    ItemChildren={ItemChildren}
                    itemChildrenSuccess={itemChildrenSuccess}
                    itemChildrenIsLoading={itemChildrenIsLoading}
                    onClick={folderClickHandler}
                    onDelete={deleteDriveItem}
                    deleteLoading={deleteLoading}
                    deleteResponse={deleteResponse}
                    deleteSuccess={deleteSuccess}
                    onCopy={copylinkDriveItem}
                    copyLoading={copyLoading}
                    copySuccess={copySuccess}
                    copyResponse={copyResponse}
                />
                </Grid>
            </Grid>

        </AuthenticatedTemplate>
    )

}

export default MyFilePage;
