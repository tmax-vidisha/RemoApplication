/* eslint-disable */
import {ActionType} from '../Actions/actionTypes';

export {}
export const getRootSitesReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ActionType.GET_ROOT_SITES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionType.GET_ROOT_SITES_SUCCESS:
            return {
                ...state,
                loading: false,
                sites: action.payload,
            };
        case ActionType.GET_ROOT_SITES_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};