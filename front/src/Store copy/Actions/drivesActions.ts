/* eslint-disable */
import {ActionType} from './actionTypes';

interface SET_DRIVE_ID {
    type: ActionType.SET_DRIVE_ID;
    payload: string;
}
interface UPDATE_DRIVE_ID {
    type: ActionType.UPDATE_DRIVE_ID;
    payload: string;
}

export type DriveIdAction = SET_DRIVE_ID | UPDATE_DRIVE_ID;