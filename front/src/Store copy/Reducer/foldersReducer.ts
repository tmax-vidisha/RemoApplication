/* eslint-disable */
import {ActionType} from '../Actions/actionTypes';
import {BreadcrumbsAction, CreateFolderAction, GetFolderAction,} from '../Actions/foldersActions';

interface IGetFolderState {
    loading: boolean;
    error: string | null;
    folders: string[];
}

interface IBreadcrumbsState {
    folders: [{ folders: string; id: string }];
    breadcrumbs: [
        {
            id: string;
            folders: string;
        }
    ];
}

export const foldersReducer = (state: IGetFolderState, action: GetFolderAction): IGetFolderState => {
    switch (action.type) {
        case ActionType.GET_ROOT_FOLDER_REQUEST:
            console.log('GET_ROOT_FOLDER_REQUEST');
            return {
                ...state,
                loading: true,
            };
        case ActionType.GET_ROOT_FOLDER_SUCCESS:
            console.log('GET_ROOT_FOLDER_SUCCESS');
            return {
                ...state,
                loading: false,
                folders: action.payload,
            };
        case ActionType.GET_ROOT_FOLDER_FAILED:
            console.log('GET_ROOT_FOLDER_FAILED');
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ActionType.GET_FOLDER_CHILDREN_REQUEST:
            console.log('GET_FOLDER_CHILDREN_REQUEST');
            return {
                ...state,
                loading: true,
            };
        case ActionType.GET_FOLDER_CHILDREN_SUCCESS:
            console.log('GET_FOLDER_CHILDREN_SUCCESS');
            return {
                ...state,
                loading: false,
                folders: action.payload,
            };
        case ActionType.GET_FOLDER_CHILDREN_FAILED:
            console.log('GET_FOLDER_CHILDREN_FAILED');
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
    }
    return state;
};

export const createFolderReducer = (
    state: IGetFolderState,
    action: CreateFolderAction
) => {
    switch (action.type) {
        case ActionType.CREATE_FOLDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionType.CREATE_FOLDER_SUCCESS:
            return {
                ...state,
                loading: false,
                folder: action.payload,
            };
        case ActionType.CREATE_FOLDER_FAILED:
            return {
                ...state,
                loading: false,
            };
    }
    return state;
};

export const breadcrumbsReducer = (
    state: any,
    action: any
) => {
    switch (action.type) {
        case ActionType.SET_BREADCRUMBS:
            console.log('SET_BREADCRUMBSs', state);
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs, {...action.payload}],
            };
        case ActionType.UPDATE_BREADCRUMBS:
            const clickedFolderIndex = state.breadcrumbs.findIndex(
                (folder: any) => folder.id === action.payload.id
            );
            return {
                ...state,
                breadcrumbs: state.breadcrumbs.slice(0, clickedFolderIndex + 1),
            };
    }
    return state;
};
