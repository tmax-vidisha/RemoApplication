/* eslint-disable */
import {ActionType} from '../Actions/actionTypes';
import {DriveIdAction} from '../Actions/drivesActions';
import {DeleteFileAction, RenameFileAction} from '../Actions/foldersActions';


export interface DrivesState {
    loading: boolean;
    error: string;
    drives: [];
}


interface IDeletedFileState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

interface IRenameFileState {
    loading: boolean;
    error: string | null;
    id: string;
    name: string;
}


export const getRootDriveReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ActionType.GET_ROOT_DRIVES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionType.GET_ROOT_DRIVES_SUCCESS:
            return {
                ...state,
                loading: false,
                drives: action.payload,
            };
        case ActionType.GET_ROOT_DRIVES_FAILED:
            console.log('GET_ROOT_LIB_FAILED');
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export const driveIdReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ActionType.SET_DRIVE_ID:
            console.log('SET_DRIVE_ID',action.payload)
            console.log('SET_DRIVE_ID' , state);
            return {
                ...state,
                id: action.payload,
            };
        case ActionType.UPDATE_DRIVE_ID:
            return {
                ...state,
                id: action.payload,
            };
        default:
            return state;
    }
};

export const deleteFileReducer = (state: IDeletedFileState, action: DeleteFileAction) => {
    switch (action.type) {
        case ActionType.DELETE_FILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ActionType.DELETE_FILE_SUCCESS:
            return {
                ...state,
                loading: false,

            }
        case ActionType.DELETE_FILE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const renameFileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionType.RENAME_FILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionType.RENAME_FILE_SUCCESS:
            return {
                ...state,
                loading: false,
                id: action.payload.id,
                name: action.payload.name
            }
        case ActionType.RENAME_FILE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
