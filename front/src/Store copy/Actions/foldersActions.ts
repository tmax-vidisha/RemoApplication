import {ActionType} from './actionTypes';

//Todo : Add types to payload

interface GET_ROOT_SITES_REQUEST {
    type: ActionType.GET_ROOT_SITES_REQUEST;
}

//Todo: Update payload Types
interface GET_ROOT_SITES_SUCCESS {
    type: ActionType.GET_ROOT_SITES_SUCCESS;
    payload: any;
}

interface GET_ROOT_SITES_FAILED {
    type: ActionType.GET_ROOT_SITES_FAILED;
    payload: any;
}

export type GetRootSitesAction = GET_ROOT_SITES_REQUEST | GET_ROOT_SITES_SUCCESS | GET_ROOT_SITES_FAILED;

interface GET_ROOT_LIB_REQUEST {
    type: ActionType.GET_ROOT_DRIVES_REQUEST;
}

interface GET_ROOT_LIB_SUCCESS {
    type: ActionType.GET_ROOT_DRIVES_SUCCESS;
    payload: any;
}

interface GET_ROOT_LIB_FAILED {
    type: ActionType.GET_ROOT_DRIVES_FAILED;
    payload: string;
}

export type GetRootLibAction = GET_ROOT_LIB_REQUEST | GET_ROOT_LIB_SUCCESS | GET_ROOT_LIB_FAILED;


interface GetRootFolderRequestAction {
    type: ActionType.GET_ROOT_FOLDER_REQUEST;

}

interface GetRootFolderSuccessAction {
    type: ActionType.GET_ROOT_FOLDER_SUCCESS;
    payload: string[];
}

interface GetRootFolderFailedAction {
    type: ActionType.GET_ROOT_FOLDER_FAILED;
    payload: any;
}

interface GetFolderChildrenRequestAction {
    type: ActionType.GET_FOLDER_CHILDREN_REQUEST;
}

interface GetFolderChildrenSuccessAction {
    type: ActionType.GET_FOLDER_CHILDREN_SUCCESS;
    payload: string[];
}

interface GetFolderChildrenFailedAction {
    type: ActionType.GET_FOLDER_CHILDREN_FAILED;
    payload: any;
}

export type GetFolderAction =
    GetRootFolderRequestAction
    | GetRootFolderSuccessAction
    | GetRootFolderFailedAction
    | GetFolderChildrenRequestAction
    | GetFolderChildrenSuccessAction
    | GetFolderChildrenFailedAction;


interface CREATE_FOLDER_REQUEST {
    type: ActionType.CREATE_FOLDER_REQUEST;
}

interface CREATE_FOLDER_SUCCESS {
    type: ActionType.CREATE_FOLDER_SUCCESS;
    payload: any;
}

interface CREATE_FOLDER_FAILED {
    type: ActionType.CREATE_FOLDER_FAILED;
}

export type CreateFolderAction = CREATE_FOLDER_REQUEST | CREATE_FOLDER_SUCCESS | CREATE_FOLDER_FAILED;


interface SET_BREADCRUMBS {
    type: ActionType.SET_BREADCRUMBS;
    payload: any;
}

interface UPDATE_BREADCRUMBS {
    type: ActionType.UPDATE_BREADCRUMBS;
    payload: any;
}

export type BreadcrumbsAction = SET_BREADCRUMBS | UPDATE_BREADCRUMBS;


interface DELETE_FILE_REQUEST {
    type: ActionType.DELETE_FILE_REQUEST;
}

interface DELETE_FILE_SUCCESS {
    type: ActionType.DELETE_FILE_SUCCESS;
    success: boolean;
}

interface DELETE_FILE_FAILED {
    type: ActionType.DELETE_FILE_FAILED;
    payload: string;
}

export type DeleteFileAction = DELETE_FILE_REQUEST | DELETE_FILE_SUCCESS | DELETE_FILE_FAILED;

interface RENAME_FILE_REQUEST {
    type: ActionType.RENAME_FILE_REQUEST;
}

interface RENAME_FILE_SUCCESS {
    type: ActionType.RENAME_FILE_SUCCESS;
    payload: any;
}
interface RENAME_FILE_FAILED {
    type: ActionType.RENAME_FILE_FAILED;
    payload: string;
}

export type RenameFileAction = RENAME_FILE_REQUEST | RENAME_FILE_SUCCESS | RENAME_FILE_FAILED;




